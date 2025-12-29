import { ChevronDown, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

function Hero({ scrollToSection }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const title = titleRef.current;
      title.innerHTML = title.textContent!.replace(/\S/g, "<span class='letter inline-block'>$&</span>");

      animate({
        targets: '.hero-title .letter',
        translateY: [40, 0],
        opacity: [0, 1],
        easing: 'out(3)',
        duration: 1200,
        delay: (el: any, i: number) => 500 + 30 * i
      });
    }

    if (subtitleRef.current) {
      const subtitle = subtitleRef.current;
      subtitle.innerHTML = subtitle.textContent!.replace(/\S/g, "<span class='letter inline-block'>$&</span>");

      animate({
        targets: '.hero-subtitle .letter',
        translateY: [40, 0],
        opacity: [0, 1],
        easing: 'out(3)',
        duration: 1200,
        delay: (el: any, i: number) => 900 + 25 * i
      });
    }
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-[#0E1A2B] dark:bg-[#151923] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-2">
              <h1 ref={titleRef} className="hero-title text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white dark:text-[#E8E9ED] leading-tight">
                Ishaan Wason
              </h1>
              <p ref={subtitleRef} className="hero-subtitle text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#D3A96F]">
                "Defined by Results"
              </p>
            </div>
            <div className="hero-cta">
              <p className="text-lg sm:text-xl text-[#A8ADB7] dark:text-[#B0B3BA] leading-relaxed max-w-2xl">
                Focused on how businesses actually work — the economics behind decisions, the operations behind execution.
              </p>
            </div>

            <div className="hero-cta flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-[#D3A96F] text-[#0E1A2B] dark:text-[#1A1F2E] rounded-lg font-medium hover:bg-[#C09960] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                See My Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('story')}
                className="px-8 py-4 bg-transparent text-[#F7F7F5] dark:text-[#E8E9ED] rounded-lg font-medium hover:bg-[#F7F7F5]/10 dark:hover:bg-[#E8E9ED]/10 transition-all duration-300 border-2 border-[#D3A96F] hover:border-[#C09960] shadow-md"
              >
                Read My Story
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D3A96F] to-[#C09960] rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[#D3A96F]/30">
                <img
                  src="/img_2319_2_optimized_5000.jpg"
                  alt="Ishaan Wason - Professional Portrait"
                  className="w-full h-full object-cover rotate-90"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 lg:mt-24">
          <button
            onClick={() => scrollToSection('story')}
            className="text-[#D3A96F] hover:text-[#C09960] transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
