import { cubicBezier, motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { AtSign, Link, Send } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: cubicBezier(0.16, 1, 0.3, 1) },
});

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-10 lg:px-28 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 rounded-full border-2 border-foreground/60 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border border-foreground/60" />
          </div>
          <span className="font-bold text-base sm:text-lg">abhsihek</span>
        </div>
        
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          {['Home', 'How It Works', 'Philosophy', 'Use Cases'].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              <a href="#" className="hover:text-foreground transition-colors">{item}</a>
              {i < 3 && <span>•</span>}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {[AtSign, Link, Send].map((Icon, i) => (
            <button key={i} className="liquid-glass w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center hover:bg-white/5 transition-colors">
              <Icon className="w-4 h-4" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-background to-transparent" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 lg:px-28 pt-24 sm:pt-28 md:pt-32">
        <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 mb-6">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">Welcome to my Portfolio</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] mb-6">
          I,m <span className="font-serif italic font-normal">Abhishek</span> wali
        </motion.h1>

        <motion.p {...fadeUp(0.2)} className="text-base sm:text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'hsl(var(--hero-subtitle))' }}>
          Join our feed for meaningful updates, news around technology and a shared journey toward depth and direction.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="liquid-glass rounded-full p-2 max-w-lg mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full flex-1 bg-transparent px-6 py-2 outline-none text-sm"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-full px-8 py-3 font-semibold text-sm w-full sm:w-auto"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function SearchSection() {
  const platforms = [
    { name: 'ChatGPT', icon: '/icon-chatgpt.png', desc: 'AI-powered conversations that understand context and nuance' },
    { name: 'Perplexity', icon: '/icon-perplexity.png', desc: 'Research-grade answers with cited sources' },
    { name: 'Google AI', icon: '/icon-google.png', desc: 'Next-generation search with AI integration' },
  ];

  return (
    <section className="pt-28 sm:pt-36 md:pt-64 pb-8 md:pb-10 px-4 sm:px-6 md:px-10 lg:px-28">
      <motion.h2 {...fadeUp(0)} className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-center mb-6">
        Search has <span className="font-serif italic font-normal">changed.</span> Have you?
      </motion.h2>
      
      <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-center mb-16 sm:mb-24">
        The way people discover content has fundamentally shifted. Are you ready?
      </motion.p>

      <div className="grid md:grid-cols-3 gap-8 sm:gap-12 md:gap-8 mb-16 sm:mb-20">
        {platforms.map((platform, i) => (
          <motion.div key={platform.name} {...fadeUp(0.1 + i * 0.1)} className="flex flex-col items-center text-center">
            <div className="w-36 h-36 sm:w-50 sm:h-50 mb-6 rounded-2xl bg-muted/30 flex items-center justify-center">
              <div className="w-32 h-32 bg-foreground/5 rounded-full" />
            </div>
            <h3 className="font-semibold text-base mb-2">{platform.name}</h3>
            <p className="text-muted-foreground text-sm">{platform.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p {...fadeUp(0.4)} className="text-muted-foreground text-sm text-center">
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  );
}

type WordSpanProps = {
  word: string;
  start: number;
  end: number;
  scrollYProgress: MotionValue<number>;
  color: string;
};

function WordSpan({ word, start, end, scrollYProgress, color }: WordSpanProps) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block mr-[0.3em]"
    >
      {word}
    </motion.span>
  );
}

function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const paragraph1 = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
  const paragraph2 = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";
  
  const words1 = paragraph1.split(' ');
  const words2 = paragraph2.split(' ');
  const highlightWords = ['curiosity', 'meets', 'clarity'];

  return (
    <section ref={ref} className="pt-0 pb-24 sm:pb-32 md:pb-44 px-4 sm:px-6 md:px-10 lg:px-28">
      <motion.div {...fadeUp(0)} className="flex justify-center mb-10 sm:mb-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full max-w-full sm:max-w-200 aspect-square object-cover rounded-2xl"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="max-w-5xl mx-auto space-y-10">
        <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight">
          {words1.map((word, i) => {
            const isHighlight = highlightWords.includes(word.replace(/[.,]/g, ''));

            return (
              <WordSpan
                key={i}
                word={word}
                start={i / words1.length}
                end={(i + 1) / words1.length}
                scrollYProgress={scrollYProgress}
                color={isHighlight ? 'hsl(var(--foreground))' : 'hsl(var(--hero-subtitle))'}
              />
            );
          })}
        </p>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight">
          {words2.map((word, i) => {
            const totalWords = words1.length + words2.length;

            return (
              <WordSpan
                key={i}
                word={word}
                start={(i + words1.length) / totalWords}
                end={(i + 1 + words1.length) / totalWords}
                scrollYProgress={scrollYProgress}
                color="hsl(var(--hero-subtitle))"
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}

function SolutionSection() {
  const features = [
    { title: 'Curated Feed', desc: 'Discover content tailored to your interests' },
    { title: 'Writer Tools', desc: 'Everything you need to create and publish' },
    { title: 'Community', desc: 'Connect with readers and fellow writers' },
    { title: 'Distribution', desc: 'Reach the right audience at the right time' },
  ];

  return (
    <section className="py-20 sm:py-28 md:py-44 px-4 sm:px-6 md:px-10 lg:px-28 border-t border-border/30">
      <motion.div {...fadeUp(0)} className="text-center mb-10 sm:mb-16">
        <p className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">SOLUTION</p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-[-1px]">
          The platform for <span className="font-serif italic font-normal">meaningful</span> content
        </h2>
      </motion.div>

      <motion.div {...fadeUp(0.1)} className="mb-12 sm:mb-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-2xl aspect-4/3 sm:aspect-3/1 object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div key={feature.title} {...fadeUp(0.1 + i * 0.1)}>
            <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = 'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8';

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, []);

  return (
    <section className="relative py-20 sm:py-28 md:py-44 px-4 sm:px-6 md:px-10 lg:px-28 border-t border-border/30 overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="absolute inset-0 bg-background/45 z-1" />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6">
          <div className="relative w-10 h-10 rounded-full border-2 border-foreground/60 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full border border-foreground/60" />
          </div>
        </motion.div>

        <motion.h2 {...fadeUp(0.1)} className="text-3xl sm:text-5xl md:text-7xl font-medium tracking-[-2px] mb-6">
          Start Your <span className="font-serif italic font-normal">Journey</span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-muted-foreground text-base sm:text-lg mb-10">
          Join thousands of readers and writers building something meaningful together.
        </motion.p>

        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-lg px-8 py-3.5 font-semibold w-full sm:w-auto"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 font-semibold w-full sm:w-auto"
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 md:px-10 lg:px-28">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-muted-foreground text-sm">© 2026 abhsihek. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {['Privacy', 'Terms', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SearchSection />
      <MissionSection />
      <SolutionSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
