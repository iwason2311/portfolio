import { Target, Repeat, Lightbulb } from 'lucide-react';

function Values() {
  const values = [
    {
      icon: Target,
      title: 'Clarity',
      description: 'Clear structure creates better decisions.',
    },
    {
      icon: Repeat,
      title: 'Consistency',
      description: 'Execution builds trust.',
    },
    {
      icon: Lightbulb,
      title: 'Curiosity',
      description: 'Understanding systems and people drives my growth.',
    },
  ];

  return (
    <section id="values" className="py-20 lg:py-32 bg-[#F7F7F5] dark:bg-[#242936] transition-colors duration-300">
      <div className="reveal-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-16 text-center">
          What I Believe In
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="reveal-item card-hover group bg-white dark:bg-[#1A1F2E] rounded-2xl p-8 border-2 border-[#D3A96F]/20 transition-colors duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-[#D3A96F] rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={32} className="text-[#0E1A2B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED]">
                  {value.title}
                </h3>
                <p className="text-lg text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Values;
