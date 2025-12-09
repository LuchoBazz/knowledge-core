import React, { useState, useEffect } from 'react';
import {
  Copy,
  Plus,
  Trash2,
  Search,
  Code,
  PenTool,
  Image as ImageIcon,
  Briefcase,
  Zap,
  LayoutGrid,
  Menu,
  X,
  Terminal,
  MessageSquare,
  Sun,
  Moon
} from 'lucide-react';

// --- Initial Data ---
const INITIAL_PROMPTS = [
  {
    id: 1,
    title: "Python Expert",
    content: "Act as a senior Python developer. Review the following code for efficiency, security, and style errors (PEP 8). Provide the refactored code and a detailed explanation of the changes.",
    category: "Coding",
    tags: ["Python", "Debug", "Refactor"]
  },
  {
    id: 2,
    title: "Blog Post Generator",
    content: "Write an SEO-optimized blog post about [TOPIC]. Use a professional yet accessible tone. Include H2 and H3 headers, and an engaging meta description at the end.",
    category: "Writing",
    tags: ["SEO", "Marketing", "Blog"]
  },
  {
    id: 3,
    title: "Midjourney Prompt",
    content: "/imagine prompt: A futuristic cyberpunk city street at night, neon lights reflecting on wet pavement, cinematic lighting, photorealistic, 8k, unreal engine 5 render --ar 16:9 --v 5.2",
    category: "Art",
    tags: ["Midjourney", "Cyberpunk", "Realistic"]
  },
  {
    id: 4,
    title: "Excel Data Analyst",
    content: "I have a dataset with the following columns: [COLUMNS]. I need you to act as an expert data analyst and suggest 3 advanced Excel formulas to extract valuable insights from this information.",
    category: "Productivity",
    tags: ["Excel", "Data", "Analysis"]
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All', icon: LayoutGrid },
  { id: 'Coding', name: 'Development', icon: Code },
  { id: 'Writing', name: 'Writing', icon: PenTool },
  { id: 'Art', name: 'Art & Image', icon: ImageIcon },
  { id: 'Business', name: 'Business', icon: Briefcase },
  { id: 'Productivity1', name: 'Productivity1', icon: Zap },
  { id: 'Productivity2', name: 'Productivity2', icon: Zap },
  { id: 'Productivity3', name: 'Productivity3', icon: Zap },
  { id: 'Productivity4', name: 'Productivity4', icon: Zap },
  { id: 'Productivity5', name: 'Productivity5', icon: Zap },
  { id: 'Productivity6', name: 'Productivity6', icon: Zap },
  { id: 'Productivity7', name: 'Productivity7', icon: Zap },
  { id: 'Productivity8', name: 'Productivity8', icon: Zap },
  { id: 'Productivity9', name: 'Productivity9', icon: Zap },
  { id: 'Productivity10', name: 'Productivity10', icon: Zap },
  { id: 'Productivity11', name: 'Productivity11', icon: Zap },
  { id: 'Productivity12', name: 'Productivity12', icon: Zap },
  { id: 'Productivity13', name: 'Productivity13', icon: Zap },
];

export default function PromptVerse() {
  // --- State Management ---
  const [prompts, setPrompts] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('myPrompts');
      return saved ? JSON.parse(saved) : INITIAL_PROMPTS;
    }
    return INITIAL_PROMPTS;
  });

  // Theme state: checks localStorage or defaults to dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' : true;
    }
    return true;
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Mobile toggle
  const [toast, setToast] = useState(null);

  // New Prompt Form State
  const [newPrompt, setNewPrompt] = useState({
    title: '',
    content: '',
    category: 'Coding',
    tags: ''
  });

  // --- Effects ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('myPrompts', JSON.stringify(prompts));
    }
  }, [prompts]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // --- Helper Functions ---
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setToast('Prompt copied to clipboard!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this prompt?')) {
      setPrompts(prompts.filter(p => p.id !== id));
      setToast('Prompt deleted.');
    }
  };

  const handleAddPrompt = (e) => {
    e.preventDefault();
    if (!newPrompt.title || !newPrompt.content) return;

    const tagsArray = newPrompt.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '');

    const newItem = {
      id: Date.now(),
      title: newPrompt.title,
      content: newPrompt.content,
      category: newPrompt.category,
      tags: tagsArray
    };

    setPrompts([newItem, ...prompts]);
    setIsModalOpen(false);
    setNewPrompt({ title: '', content: '', category: 'Coding', tags: '' });
    setToast('New prompt created successfully!');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Filter Logic
  const filteredPrompts = prompts.filter(prompt => {
    const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
    const matchesSearch = prompt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // --- UI Components ---

  return (
    // We wrap everything in a div that applies the 'dark' class conditionally
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="flex h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500 selection:text-white overflow-hidden transition-colors duration-300">

        {/* Toast Notification */}
        {toast && (
          <div className="fixed bottom-6 right-6 z-50 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg shadow-indigo-500/30 animate-fade-in-up flex items-center gap-2 font-medium">
            <Terminal size={18} />
            {toast}
          </div>
        )}

        {/* Sidebar - Desktop & Mobile Drawer */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-white/95 dark:bg-slate-900/95 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:translate-x-0 backdrop-blur-xl flex flex-col
          `}
        >
          <div className="flex flex-col h-full p-4">
            {/* Logo */}
            <div className="flex items-center gap-3 px-2 mb-8 mt-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <MessageSquare size={18} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 dark:from-white dark:to-slate-400">
                My Prompts
              </h1>
            </div>

            {/* Navigation */}
            <nav className="space-y-1 flex-1 overflow-y-auto custom-scrollbar">
              <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Collections</p>
              {CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                    ${selectedCategory === cat.id
                      ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-600/10 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'}
                  `}
                >
                  <cat.icon size={18} />
                  {cat.name}
                </button>
              ))}
            </nav>

            {/* Bottom Actions: Theme Toggle & Stats */}
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2 text-sm font-medium">
                  {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                  <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                </div>
              </button>

              <div className="px-3 py-3 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">Total Prompts</p>
                <p className="text-2xl font-bold text-slate-800 dark:text-white">{prompts.length}</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 bg-slate-50 dark:bg-slate-950 relative">
          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-transparent to-transparent dark:from-indigo-900/20 dark:via-slate-950 dark:to-slate-950 pointer-events-none" />

          {/* Header */}
          <header className="h-16 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 md:px-8 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm sticky top-0 z-30 transition-colors duration-300">
            <div className="flex items-center gap-4 flex-1">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white"
              >
                <Menu size={20} />
              </button>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-1">
                <a
                  href="https://luchobazz.github.io/about-me/"
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  Home
                </a>
                <a
                  href="/knowledge-core/docs/intro"
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all"
                >
                  Docs
                </a>
              </div>

              <div className="relative w-full max-w-md group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 dark:group-focus-within:text-indigo-400 transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="Search prompts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500"
                />
              </div>
            </div>
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-indigo-600/20 hover:scale-105 active:scale-95"
            >
              <Plus size={18} />
              New Prompt
            </button> */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="md:hidden flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full"
            >
              <Plus size={18} />
            </button>
          </header>

          {/* Content Grid */}
          <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar relative z-10">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                {CATEGORIES.find(c => c.id === selectedCategory)?.name || 'Results'}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Manage and organize your AI instructions effectively.
              </p>
            </div>

            {filteredPrompts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-slate-400 border-2 border-dashed border-slate-300 dark:border-slate-800 rounded-2xl">
                <Search size={48} className="mb-4 opacity-50" />
                <p>No prompts found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPrompts.map(prompt => (
                  <div
                    key={prompt.id}
                    className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <span className={`
                        text-xs font-semibold px-2 py-1 rounded-md border
                        ${prompt.category === 'Coding'
                          ? 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20'
                          : prompt.category === 'Art'
                            ? 'bg-pink-50 text-pink-600 border-pink-200 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/20'
                            : prompt.category === 'Writing'
                              ? 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20'
                              : 'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-700/30 dark:text-slate-400 dark:border-slate-600'}
                      `}>
                        {prompt.category}
                      </span>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => handleDelete(prompt.id)}
                          className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-md transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg text-slate-800 dark:text-slate-100 mb-2 truncate pr-2">
                      {prompt.title}
                    </h3>

                    <div className="flex-1 bg-slate-50 dark:bg-slate-950/50 rounded-lg p-3 mb-4 border border-slate-100 dark:border-slate-800/50 group-hover:border-slate-200 dark:group-hover:border-slate-700 transition-colors">
                      <p className="text-sm text-slate-600 dark:text-slate-400 font-mono line-clamp-3 leading-relaxed">
                        {prompt.content}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {prompt.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] text-slate-600 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full border border-slate-200 dark:border-slate-700">
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => copyToClipboard(prompt.content)}
                        className="w-full flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-slate-600 dark:text-slate-300 hover:text-white dark:hover:text-white py-2 rounded-lg text-sm font-medium transition-all group-hover:border-indigo-500/30 border border-slate-200 dark:border-slate-700"
                      >
                        <Copy size={16} />
                        Copy Prompt
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>

        {/* Modal - Create New */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 w-full max-w-lg rounded-2xl shadow-2xl p-6 relative animate-in zoom-in-95 duration-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                <Plus className="text-indigo-500" /> Create New Prompt
              </h2>

              <form onSubmit={handleAddPrompt} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Title</label>
                  <input
                    required
                    type="text"
                    value={newPrompt.title}
                    onChange={e => setNewPrompt({ ...newPrompt, title: e.target.value })}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="Ex: YT Idea Generator"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Category</label>
                    <select
                      value={newPrompt.category}
                      onChange={e => setNewPrompt({ ...newPrompt, category: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    >
                      {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={newPrompt.tags}
                      onChange={e => setNewPrompt({ ...newPrompt, tags: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                      placeholder="youtube, ideas, viral"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">Prompt</label>
                  <textarea
                    required
                    value={newPrompt.content}
                    onChange={e => setNewPrompt({ ...newPrompt, content: e.target.value })}
                    rows={5}
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-3 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-sm resize-none"
                    placeholder="Write your detailed prompt here..."
                  ></textarea>
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium shadow-lg shadow-indigo-500/20 transition-all transform active:scale-95"
                  >
                    Save Prompt
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <style>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.05);
          }
          .dark .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(15, 23, 42, 0.5);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(71, 85, 105, 0.2);
            border-radius: 10px;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(71, 85, 105, 0.5);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(99, 102, 241, 0.5);
          }
        `}</style>
      </div>
    </div>
  );
}