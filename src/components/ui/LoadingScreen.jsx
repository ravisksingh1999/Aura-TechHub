import React from 'react';
import { Zap, Sparkles, Cpu, Code2 } from 'lucide-react';

const LoadingScreen = () => {
  // ===== ANIMATION SPEED CONTROLS =====
  // Adjust these values to make animations faster or slower
  // Base unit is seconds - smaller values = faster animations
  const BASE_SPEED = 0.8; // Global speed multiplier (0.5 = 2x faster, 2 = 2x slower)
  
  // Individual animation durations (will be multiplied by BASE_SPEED)
  const SPEEDS = {
    GRID: 8,        // Background grid movement
    FLOAT: 7,       // Floating particles
    PULSE: 1.5,     // Logo pulse effect
    SPIN: 2,        // Rotation effects
    TEXT_GLOW: 1.5, // Text glow animation
    PROGRESS: 1.2,  // Progress bar animation
    BOUNCE: 0.6,    // Letter bounce
    DOTS: 0.8,      // Loading dots
  };

  // Apply base speed to all animations
  Object.keys(SPEEDS).forEach(key => {
    SPEEDS[key] *= BASE_SPEED;
  });

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated grid background - speed controlled by SPEEDS.GRID */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: `moveGrid ${SPEEDS.GRID}s linear infinite`,
              animationDelay: `${i * 0.2 * BASE_SPEED}s`
            }}
          />
        ))}
      </div>

      {/* Floating tech particles - speed controlled by SPEEDS.FLOAT */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * SPEEDS.FLOAT + SPEEDS.FLOAT}s linear infinite`,
              animationDelay: `${Math.random() * 3 * BASE_SPEED}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-md px-4">
        {/* Animated logo - speed controlled by SPEEDS.PULSE and SPEEDS.SPIN */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 rounded-xl bg-white/5 backdrop-blur-md border border-white/10" 
               style={{ animation: `pulse ${SPEEDS.PULSE * 2}s ease-in-out infinite` }} />
          <div className="absolute inset-3 flex items-center justify-center">
            <div className="relative">
              <Zap className="h-10 w-10 text-white" 
                   style={{ animation: `pulse ${SPEEDS.PULSE}s ease-in-out infinite` }} />
              <Sparkles className="absolute -top-1 -right-1 h-4 w-4 text-yellow-300" 
                        style={{ animation: `spin ${SPEEDS.SPIN}s linear infinite` }} />
            </div>
          </div>
          <div className="absolute -inset-3 rounded-xl border-2 border-blue-400/30" 
               style={{ animation: `spin ${SPEEDS.SPIN * 4}s linear infinite` }} />
        </div>

        {/* Animated text - speed controlled by SPEEDS.BOUNCE and SPEEDS.TEXT_GLOW */}
        <div className="relative overflow-hidden mb-4">
          <h1 className="text-3xl font-bold text-white mb-2" 
              style={{ animation: `textGlow ${SPEEDS.TEXT_GLOW}s ease-in-out infinite` }}>
            {'Aura TechHub'.split('').map((char, i) => (
              <span 
                key={i} 
                className="inline-block"
                style={{ 
                  animation: `bounce ${SPEEDS.BOUNCE}s ease-in-out infinite`,
                  animationDelay: `${i * 0.05 * BASE_SPEED}s`
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          
          <p className="text-blue-300 flex items-center justify-center gap-2 text-sm">
            <span style={{ animation: `pulse ${SPEEDS.PULSE * 2}s ease-in-out infinite` }}>
              Preparing your dashboard
            </span>
            <Cpu className="h-3 w-3" style={{ animation: `spin ${SPEEDS.SPIN}s linear infinite` }} />
            <Code2 className="h-3 w-3" style={{ animation: `spin ${SPEEDS.SPIN}s linear infinite reverse` }} />
          </p>
        </div>

        {/* Progress bar - speed controlled by SPEEDS.PROGRESS */}
        <div className="relative h-1.5 bg-white/10 rounded-full overflow-hidden mt-6 mx-auto max-w-xs">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            style={{
              width: '100%',
              animation: `progressBar ${SPEEDS.PROGRESS}s ease-in-out infinite alternate`,
              boxShadow: '0 0 8px rgba(59, 130, 246, 0.7)'
            }}
          />
          <div 
            className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" 
            style={{ animation: `shimmer ${SPEEDS.PROGRESS * 2}s linear infinite` }} 
          />
        </div>

        {/* Status text - speed controlled by SPEEDS.DOTS */}
        <p className="text-blue-300/80 text-xs mt-3 flex items-center justify-center">
          Loading components
          <span className="inline-block ml-1">
            {[...Array(3)].map((_, i) => (
              <span 
                key={i}
                className="inline-block"
                style={{ 
                  animation: `bounce ${SPEEDS.DOTS}s infinite`,
                  animationDelay: `${i * 0.2 * BASE_SPEED}s`
                }}
              >
                .
              </span>
            ))}
          </span>
        </p>
      </div>

      {/* Bottom indicators - speed controlled by SPEEDS.PULSE */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-white/30 backdrop-blur-sm"
            style={{
              animation: `pulseScale ${SPEEDS.PULSE * 1.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2 * BASE_SPEED}s`
            }}
          />
        ))}
      </div>

      {/* Animation keyframes - speeds are controlled by the constants above */}
      <style jsx global>{`
        @keyframes moveGrid {
          from { transform: translateY(0) translateX(0); }
          to { transform: translateY(-40px) translateX(-40px); }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 8px rgba(34, 211, 238, 0.5), 0 0 16px rgba(34, 211, 238, 0.3); }
          50% { text-shadow: 0 0 16px rgba(34, 211, 238, 0.8), 0 0 24px rgba(34, 211, 238, 0.5); }
        }
        @keyframes progressBar {
          0% { width: 10%; left: 0; }
          100% { width: 90%; left: 10%; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulseScale {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;