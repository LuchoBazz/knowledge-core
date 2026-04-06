import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { marked } from 'marked';

interface ProtectedContentProps {
  ciphertext: string;
}

export default function ProtectedContent({ ciphertext }: ProtectedContentProps): JSX.Element {
  const [password, setPassword] = useState('');
  const [decryptedHtml, setDecryptedHtml] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

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
    } catch (err) {
      console.error(err);
      setError('Incorrect password. Please try again.');
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
    <div className="protected-content-locked" style={{ padding: '20px', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '8px', marginBottom: '20px' }}>
      <h3>🔒 Protected Content</h3>
      <p>This section is password protected.</p>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          style={{ 
            padding: '8px', 
            borderRadius: '4px', 
            border: '1px solid var(--ifm-color-emphasis-300)',
            backgroundColor: 'var(--ifm-background-surface-color)',
            color: 'var(--ifm-font-color-base)'
          }}
        />
        <button 
          type="submit" 
          style={{ 
            padding: '8px', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            backgroundColor: 'var(--ifm-color-primary)', 
            color: '#fff', 
            border: 'none',
            fontWeight: 'bold'
          }}
        >
          Unlock
        </button>
      </form>
      {error && <p style={{ color: 'var(--ifm-color-danger)', marginTop: '10px' }}>{error}</p>}
    </div>
  );
}
