import { Brain, MessageSquare } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      icon: Brain,
      title: 'Analytical & Structured Thinking',
      skills: [
        'Analytical problem solving',
        'Structured thinking',
        'Process awareness & documentation',
        'Data-driven reasoning',
        'Excel (analysis & reporting)',
        'SQL (foundational)',
        'Power BI',
        'Tableau',
        'R programming',
        'Lean Six Sigma (concepts, in progress)',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Communication & Delivery',
      skills: [
        'Clear written communication',
        'Stakeholder coordination',
        'Cross-team collaboration',
        'Content creation',
        'Storytelling',
        'Branding & visual coordination',
        'Digital campaigns',
        'Social media strategy',
        'Reliability & follow-through',
        'Initiative',
        'Bilingual (English/French)',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-white dark:bg-[#1A1F2E] transition-colors duration-300">
      <div className="reveal-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-4">
            Skills
          </h2>
          <p className="text-lg text-[#A8ADB7] dark:text-[#B0B3BA]">
            How I think, communicate, and execute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="reveal-item bg-[#F7F7F5] dark:bg-[#242936] rounded-xl shadow-lg p-8 lg:p-10 border-2 border-[#D3A96F]/20 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#D3A96F] rounded-lg">
                  <category.icon size={24} className="text-[#0E1A2B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED]">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#D3A96F] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F7F7F5] dark:bg-[#242936] rounded-xl p-8 border-2 border-[#D3A96F]/20 transition-colors duration-300">
          <h3 className="text-2xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-4 text-center">
            Certifications & Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-[#1A1F2E] rounded-lg p-4 border border-[#D3A96F]/20 transition-colors duration-300">
              <p className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Microsoft Certified: Azure AI Fundamentals (AI-900)</p>
            </div>
            <div className="bg-white dark:bg-[#1A1F2E] rounded-lg p-4 border border-[#D3A96F]/20 transition-colors duration-300">
              <p className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Microsoft Certified: Azure Fundamentals (AZ-900)</p>
            </div>
            <div className="bg-white dark:bg-[#1A1F2E] rounded-lg p-4 border border-[#D3A96F]/20 transition-colors duration-300">
              <p className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">University of Illinois: Marketing in a Digital World</p>
            </div>
            <div className="bg-white dark:bg-[#1A1F2E] rounded-lg p-4 border border-[#D3A96F]/20 transition-colors duration-300">
              <p className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Six Sigma Green Belt Specialization (Ongoing)</p>
              <p className="text-sm text-[#A8ADB7] dark:text-[#B0B3BA]">Kennesaw State University via Coursera</p>
            </div>
            <div className="bg-white dark:bg-[#1A1F2E] rounded-lg p-4 border border-[#D3A96F]/20 transition-colors duration-300">
              <p className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Amity University: Marketing & Sales Summer School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
