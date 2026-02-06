import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Smile, Frown, Minus, AlertCircle } from 'lucide-react';

type Sentiment = 'positive' | 'negative' | 'neutral';

interface AnalysisResult {
  sentiment: Sentiment;
  confidence: number;
  explanation: string;
  hasNegation: boolean;
}

export function TextSentimentAnalysis() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSentiment = (input: string): AnalysisResult => {
    const lowerText = input.toLowerCase();
    
    // Negation words
    const negationWords = [
      'not', 'never', 'no', 'hardly', 'rarely', 'seldom', 'barely',
      "isn't", "wasn't", "aren't", "weren't", "don't", "doesn't", "didn't",
      "won't", "wouldn't", "can't", "cannot", "couldn't", "shouldn't",
      'neither', 'nor', 'nobody', 'nothing', 'nowhere'
    ];

    // Positive words with intensity
    const positiveWords = [
      { word: 'excellent', weight: 3 },
      { word: 'amazing', weight: 3 },
      { word: 'wonderful', weight: 3 },
      { word: 'fantastic', weight: 3 },
      { word: 'outstanding', weight: 3 },
      { word: 'brilliant', weight: 3 },
      { word: 'superb', weight: 3 },
      { word: 'love', weight: 2.5 },
      { word: 'loved', weight: 2.5 },
      { word: 'great', weight: 2 },
      { word: 'good', weight: 2 },
      { word: 'happy', weight: 2 },
      { word: 'joy', weight: 2 },
      { word: 'enjoy', weight: 2 },
      { word: 'pleased', weight: 2 },
      { word: 'delighted', weight: 2.5 },
      { word: 'perfect', weight: 3 },
      { word: 'beautiful', weight: 2 },
      { word: 'nice', weight: 1.5 },
      { word: 'awesome', weight: 2.5 },
      { word: 'impressive', weight: 2 },
      { word: 'satisfied', weight: 2 },
      { word: 'best', weight: 2.5 }
    ];

    // Negative words with intensity
    const negativeWords = [
      { word: 'terrible', weight: 3 },
      { word: 'awful', weight: 3 },
      { word: 'horrible', weight: 3 },
      { word: 'disgusting', weight: 3 },
      { word: 'worst', weight: 3 },
      { word: 'hate', weight: 2.5 },
      { word: 'hated', weight: 2.5 },
      { word: 'bad', weight: 2 },
      { word: 'poor', weight: 2 },
      { word: 'sad', weight: 2 },
      { word: 'disappointed', weight: 2 },
      { word: 'disappointing', weight: 2 },
      { word: 'unhappy', weight: 2 },
      { word: 'angry', weight: 2.5 },
      { word: 'annoyed', weight: 2 },
      { word: 'frustrated', weight: 2 },
      { word: 'useless', weight: 2.5 },
      { word: 'pathetic', weight: 2.5 },
      { word: 'boring', weight: 2 },
      { word: 'dull', weight: 1.5 },
      { word: 'mediocre', weight: 1.5 }
    ];

    // Check for negation
    const hasNegation = negationWords.some(neg => {
      const regex = new RegExp(`\\b${neg}\\b`, 'i');
      return regex.test(input);
    });

    // Calculate sentiment score
    let score = 0;
    let foundWords: string[] = [];

    // Count positive words
    positiveWords.forEach(({ word, weight }) => {
      const regex = new RegExp(`\\b${word}\\w*\\b`, 'i');
      const matches = lowerText.match(regex);
      if (matches) {
        score += weight;
        foundWords.push(word);
      }
    });

    // Count negative words
    negativeWords.forEach(({ word, weight }) => {
      const regex = new RegExp(`\\b${word}\\w*\\b`, 'i');
      const matches = lowerText.match(regex);
      if (matches) {
        score -= weight;
        foundWords.push(word);
      }
    });

    // Apply negation logic
    if (hasNegation) {
      // Reverse the polarity
      score = -score * 0.8; // 0.8 factor for softening
    }

    // Special cases
    if (lowerText.includes('not bad') || lowerText.includes('not terrible')) {
      score = Math.abs(score) * 0.6; // Mildly positive
    }

    // Determine sentiment
    let sentiment: Sentiment;
    let confidence: number;
    let explanation: string;

    if (score > 1) {
      sentiment = 'positive';
      confidence = Math.min(95, 70 + Math.abs(score) * 5);
      explanation = hasNegation 
        ? 'Negation detected → sentiment reversed to positive'
        : `Strong positive indicators detected (${foundWords.slice(0, 3).join(', ')})`;
    } else if (score < -1) {
      sentiment = 'negative';
      confidence = Math.min(95, 70 + Math.abs(score) * 5);
      explanation = hasNegation 
        ? 'Negation detected → sentiment reversed to negative'
        : `Strong negative indicators detected (${foundWords.slice(0, 3).join(', ')})`;
    } else {
      sentiment = 'neutral';
      confidence = Math.min(85, 60 + Math.abs(score) * 10);
      explanation = hasNegation && foundWords.length > 0
        ? 'Negation with weak sentiment → results in neutral tone'
        : 'Balanced or minimal sentiment indicators detected';
    }

    return {
      sentiment,
      confidence: Math.round(confidence),
      explanation,
      hasNegation
    };
  };

  const handleAnalyze = () => {
    if (!text.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      const analysisResult = analyzeSentiment(text);
      setResult(analysisResult);
      setIsAnalyzing(false);
    }, 800);
  };

  const getSentimentIcon = (sentiment: Sentiment) => {
    switch (sentiment) {
      case 'positive':
        return <Smile className="w-8 h-8 text-green-400" />;
      case 'negative':
        return <Frown className="w-8 h-8 text-red-400" />;
      case 'neutral':
        return <Minus className="w-8 h-8 text-yellow-400" />;
    }
  };

  const getSentimentColor = (sentiment: Sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'from-green-500 to-emerald-500';
      case 'negative':
        return 'from-red-500 to-rose-500';
      case 'neutral':
        return 'from-yellow-500 to-amber-500';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold mb-2">Text Sentiment Analysis</h2>
        <p className="text-gray-400">
          Enter any text to analyze its sentiment with context-aware negation detection
        </p>
      </motion.div>

      {/* Input area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="relative">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.ctrlKey) {
                handleAnalyze();
              }
            }}
            placeholder="Enter your text here... (e.g., 'I am not happy', 'Not bad at all', 'Hardly impressed')"
            className="w-full h-40 px-6 py-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 resize-none transition-all"
          />
          <button
            onClick={handleAnalyze}
            disabled={!text.trim() || isAnalyzing}
            className="absolute bottom-4 right-4 flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Analyze
              </>
            )}
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Press Ctrl+Enter to analyze quickly
        </p>
      </motion.div>

      {/* Results */}
      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                {getSentimentIcon(result.sentiment)}
                <div className={`absolute inset-0 blur-lg bg-gradient-to-r ${getSentimentColor(result.sentiment)} opacity-50`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold capitalize">{result.sentiment}</h3>
                <p className="text-sm text-gray-400">Sentiment Classification</p>
              </div>
            </div>
            <div className="text-right">
              <div className={`text-3xl font-bold bg-gradient-to-r ${getSentimentColor(result.sentiment)} bg-clip-text text-transparent`}>
                {result.confidence}%
              </div>
              <p className="text-sm text-gray-400">Confidence</p>
            </div>
          </div>

          {/* Confidence bar */}
          <div className="mb-6">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${result.confidence}%` }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`h-full bg-gradient-to-r ${getSentimentColor(result.sentiment)} shadow-lg`}
              />
            </div>
          </div>

          {/* Explanation */}
          <div className="bg-white/5 rounded-xl p-4 border border-white/5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-blue-400 mb-1">Analysis Explanation</p>
                <p className="text-gray-300">{result.explanation}</p>
                {result.hasNegation && (
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-orange-300 text-sm">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                    Negation context applied
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Examples */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-3">Try these examples:</p>
            <div className="flex flex-wrap gap-2">
              {[
                "I am happy",
                "I am not happy",
                "Not bad at all",
                "Hardly impressed",
                "This is terrible",
                "This is not terrible"
              ].map((example) => (
                <button
                  key={example}
                  onClick={() => setText(example)}
                  className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                >
                  "{example}"
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
