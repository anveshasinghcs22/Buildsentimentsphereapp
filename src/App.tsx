import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Film, Sparkles } from 'lucide-react';
import { TextSentimentAnalysis } from './components/TextSentimentAnalysis';
import { MovieInsights } from './components/MovieInsights';

type Mode = 'text' | 'movie';

export default function App() {
  const [mode, setMode] = useState<Mode>('text');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-white/10 backdrop-blur-xl bg-black/20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                  <div className="absolute inset-0 blur-lg bg-purple-400/50" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    SentimentSphere
                  </h1>
                  <p className="text-xs text-gray-400">
                    Real-time sentiment intelligence for movies and opinions
                  </p>
                </div>
              </div>

              {/* Mode toggle */}
              <div className="flex gap-2 p-1 bg-black/40 backdrop-blur-xl rounded-lg border border-white/10">
                <button
                  onClick={() => setMode('text')}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-md transition-all duration-300 ${
                    mode === 'text'
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Brain className="w-4 h-4" />
                  <span className="font-medium hidden sm:inline">Text Sentiment</span>
                  <span className="font-medium sm:hidden">Text</span>
                </button>
                <button
                  onClick={() => setMode('movie')}
                  className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-md transition-all duration-300 ${
                    mode === 'movie'
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Film className="w-4 h-4" />
                  <span className="font-medium hidden sm:inline">Movie Insights</span>
                  <span className="font-medium sm:hidden">Movies</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            {mode === 'text' ? (
              <motion.div
                key="text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TextSentimentAnalysis />
              </motion.div>
            ) : (
              <motion.div
                key="movie"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <MovieInsights />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 backdrop-blur-xl bg-black/20 mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-gray-400 text-sm">
                  SentimentSphere © 2024 • AI-Powered Sentiment Intelligence
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <span>100+ Movies</span>
                <span className="hidden md:inline">•</span>
                <span>Real-time Analysis</span>
                <span className="hidden md:inline">•</span>
                <span>Production Ready</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}