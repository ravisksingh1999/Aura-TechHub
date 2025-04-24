import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Users } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FloatingTechElement = ({ icon, initialX, initialY, duration, delay, size = 24 }) => {
  return (
    <motion.div
      className="absolute text-blue-300/60"
      initial={{ x: initialX, y: initialY }}
      animate={{
        y: [initialY, initialY + 20, initialY],
        x: [initialX, initialX + 10, initialX],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay
      }}
    >
      {icon}
    </motion.div>
  );
};

const Particle = ({ size, color, left, top, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: left,
        top: top,
        opacity: 0.6
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: [0, -100],
        opacity: [0, 0.6, 0],
        scale: [1, 1.5]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        repeatDelay: 2,
        delay: delay,
        ease: 'linear'
      }}
    />
  );
};

const GlowingOrb = ({ size, color, left, top, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full filter blur-xl"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: left,
        top: top,
        opacity: 0.3
      }}
      initial={{ scale: 0.8 }}
      animate={{
        scale: [0.8, 1.2, 0.8],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay
      }}
    />
  );
};

const AnimatedCardContent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-6 relative z-10" ref={ref}>
      <motion.div className="space-y-3" variants={variants} initial="hidden" animate={controls}>
        <motion.div variants={itemVariants} className="h-3 bg-white/30 rounded-full w-3/4 animate-pulse"></motion.div>
        <motion.div variants={itemVariants} className="h-3 bg-white/20 rounded-full animate-pulse"></motion.div>
        <motion.div variants={itemVariants} className="h-3 bg-white/20 rounded-full w-5/6 animate-pulse"></motion.div>
      </motion.div>
      
      <motion.div 
        className="flex items-center space-x-4"
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={itemVariants} className="w-12 h-12 rounded-full bg-blue-400/30 flex-shrink-0 animate-pulse"></motion.div>
        <motion.div className="space-y-2 flex-1" variants={variants}>
          <motion.div variants={itemVariants} className="h-3 bg-white/20 rounded-full w-1/2 animate-pulse"></motion.div>
          <motion.div variants={itemVariants} className="h-3 bg-white/20 rounded-full w-3/4 animate-pulse"></motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div className="space-y-3" variants={variants} initial="hidden" animate={controls}>
        <motion.div variants={itemVariants} className="h-3 bg-white/20 rounded-full animate-pulse"></motion.div>
        <motion.div variants={itemVariants} className="h-3 bg-white/20 rounded-full w-5/6 animate-pulse"></motion.div>
        <motion.div variants={itemVariants} className="h-3 bg-white/20 rounded-full w-3/4 animate-pulse"></motion.div>
      </motion.div>
      
      <motion.div 
        className="flex space-x-3"
        variants={variants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={itemVariants} className="h-10 bg-blue-400/30 rounded-lg w-1/3 flex items-center justify-center animate-pulse">
          <div className="h-2.5 bg-white/40 rounded-full w-2/3"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="h-10 bg-green-400/30 rounded-lg w-1/3 flex items-center justify-center animate-pulse">
          <div className="h-2.5 bg-white/40 rounded-full w-2/3"></div>
        </motion.div>
        <motion.div variants={itemVariants} className="h-10 bg-purple-400/30 rounded-lg w-1/3 flex items-center justify-center animate-pulse">
          <div className="h-2.5 bg-white/40 rounded-full w-2/3"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const HeroSection = () => {
  // Tech icons to float around
  const techIcons = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>, x: '10%', y: '20%' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, x: '80%', y: '30%' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, x: '25%', y: '60%' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>, x: '65%', y: '15%' },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, x: '40%', y: '80%' },
  ];

  // Generate particles
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.3})`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 5
  }));

  // Generate glowing orbs
  const orbs = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    color: i % 2 === 0 ? '#60a5fa' : '#93c5fd',
    left: `${Math.random() * 80 + 10}%`,
    top: `${Math.random() * 80 + 10}%`,
    delay: Math.random() * 3
  }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 pb-32">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              animation: `moveGrid 15s linear infinite`,
              animationDelay: `${i * 1}s`
            }}
          />
        ))}
      </div>

      {/* Floating tech elements */}
      {techIcons.map((tech, index) => (
        <FloatingTechElement
          key={index}
          icon={tech.icon}
          initialX={tech.x}
          initialY={tech.y}
          duration={8 + Math.random() * 4}
          delay={index * 0.5}
        />
      ))}

      {/* Particle animation */}
      {particles.map(particle => (
        <Particle key={particle.id} {...particle} />
      ))}

      {/* Glowing orbs */}
      {orbs.map(orb => (
        <GlowingOrb key={orb.id} {...orb} />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Master Tech Skills with <motion.span 
                className="text-blue-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >Curated Resources</motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover, share, and rate the best learning materials for developers. Our community-voted resources help you learn faster and smarter.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/browse'}
              >
                <BookOpen className="h-5 w-5 mr-3" />
                Browse Resources
                <ArrowRight className="ml-3 h-5 w-5" />
              </motion.button>
              <motion.button 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-300 flex items-center shadow-lg hover:shadow-xl hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/browse'}
              >
                <Users className="h-5 w-5 mr-3" />
                Join Community
              </motion.button>
            </motion.div>

            {/* Stats section */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-white mr-3">25+</div>
                <div className="text-blue-100">Resources</div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-white mr-3">50+</div>
                <div className="text-blue-100">Developers</div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl font-bold text-white mr-3">4.8</div>
                <div className="text-blue-100">Avg. Rating</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content card */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              className="relative w-full max-w-md"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-300 opacity-30 blur-xl rounded-3xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              ></motion.div>
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <motion.div 
                  className="absolute -right-10 -top-10 w-32 h-32 bg-blue-400/20 rounded-full filter blur-xl"
                  animate={{
                    x: [0, 10, 0],
                    y: [0, 10, 0]
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                ></motion.div>
                <motion.div 
                  className="absolute -left-10 -bottom-10 w-32 h-32 bg-blue-300/20 rounded-full filter blur-xl"
                  animate={{
                    x: [0, -10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                  }}
                ></motion.div>
                
                <AnimatedCardContent />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced wave pattern bottom */}
      <div className="absolute bottom-0 left-0 right-0 transform translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180" className="w-full h-auto">
          <path
            fill="#F8FAFC"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,117.3C384,117,480,107,576,112C672,117,768,139,864,138.7C960,139,1056,117,1152,117.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;