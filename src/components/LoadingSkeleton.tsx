import { motion } from 'motion/react';

export function LoadingSkeleton() {
  return (
    <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden p-8">
      <div className="grid md:grid-cols-[350px,1fr] gap-8">
        {/* Poster skeleton */}
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="aspect-[2/3] rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-white/10"
        />

        {/* Content skeleton */}
        <div className="space-y-6">
          {/* Title */}
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            className="h-12 bg-white/10 rounded-lg w-3/4"
          />

          {/* Info bars */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className="h-4 bg-white/10 rounded w-full"
              />
            ))}
          </div>

          {/* Rating cards */}
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.15 }}
                className="h-24 bg-white/10 rounded-xl"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
