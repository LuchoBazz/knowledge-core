import React, { useState, useRef, useEffect } from 'react';
import CryptoJS from 'crypto-js';
import { marked } from 'marked';
import { Lock, KeyRound, AlertCircle } from 'lucide-react';

interface ProtectedContentProps {
  ciphertext: string;
  hint?: string;
}

export default function ProtectedContent({ ciphertext, hint }: ProtectedContentProps): JSX.Element {
  const [password, setPassword] = useState('');
  const [decryptedHtml, setDecryptedHtml] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isShaking, setIsShaking] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [cooldownLeft, setCooldownLeft] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldownLeft > 0) {
      timer = setInterval(() => {
        setCooldownLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldownLeft]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldownLeft > 0 || !password.trim()) return;

    setErrorMsg(null);

    try {
      // Attempt to decrypt
      const bytes = CryptoJS.AES.decrypt(ciphertext, password);
      const plaintext = bytes.toString(CryptoJS.enc.Utf8);

      if (!plaintext) {
        throw new Error('Incorrect password or malformed ciphertext');
      }

      // Convert Markdown to HTML
      const html = await marked.parse(plaintext);
      setDecryptedHtml(html);
      setFailedAttempts(0);
    } catch (err) {
      console.error(err);
      
      const newFailedAttempts = failedAttempts + 1;
      setFailedAttempts(newFailedAttempts);
      
      if (newFailedAttempts >= 5) {
        setCooldownLeft(30);
        setErrorMsg('Too many failed attempts. Please wait.');
      } else {
        setErrorMsg('Incorrect password. Please try again.');
      }
      
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 400);
    }
  };

  if (decryptedHtml) {
    return (
      <div 
        className="protected-content-unlocked" 
        dangerouslySetInnerHTML={{ __html: decryptedHtml }} 
      />
    );
  }

  return (
    <>
      {/* Inline styles for the shake animation to ensure it works without custom Tailwind config */}
      <style>{`
        @keyframes custom-shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-custom-shake {
          animation: custom-shake 0.4s cubic-bezier(.36,.07,.19,.97) both;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center my-10">
        <div 
          className={`w-full max-w-md p-8 bg-white dark:bg-gray-800/80 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 backdrop-blur-sm
            ${isShaking ? 'animate-custom-shake border-red-500 dark:border-red-500 shadow-red-500/20' : ''}
          `}
        >
          <div className="flex justify-center mb-5">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full text-blue-600 dark:text-blue-400">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
            Protected Content
          </h3>
          
          <p className="text-center text-gray-600 dark:text-gray-400 mb-6 text-sm">
            {hint ? (
              <span className="flex items-center justify-center gap-1.5">
                <KeyRound size={14} className="opacity-70" />
                {hint}
              </span>
            ) : (
              'Enter the password to view this content.'
            )}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={cooldownLeft > 0}
                placeholder="Enter password..."
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-white disabled:opacity-50 transition-all"
              />
              
              {/* Error & Cooldown messaging */}
              {errorMsg && (
                <div className="flex items-center gap-2 text-red-500 text-sm mt-2 font-medium">
                  <AlertCircle size={14} />
                  <span>{errorMsg}</span>
                  {cooldownLeft > 0 && (
                    <span className="ml-auto font-mono bg-red-100 dark:bg-red-900/50 px-2 py-0.5 rounded text-red-700 dark:text-red-300">
                      {cooldownLeft}s
                    </span>
                  )}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={cooldownLeft > 0 || !password.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 px-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-blue-500/20"
            >
              Unlock Content
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
