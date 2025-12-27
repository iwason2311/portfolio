import { BarChart3, Palette, Briefcase } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      icon: BarChart3,
      title: 'Operations and Analytics',
      color: 'blue',
      skills: [
        'Business operations',
        'Process mapping',
        'Workflow improvement',
        'Excel',
        'SQL beginner',
        'Power BI beginner',
        'Tableau',
        'R programming',
        'Analytical problem solving',
        'Structured execution',
        'Process Optimization (Lean Six Sigma)',
        'HubSpot CRM',
      ],
    },
    {
      icon: Palette,
      title: 'Marketing and Creative',
      color: 'blue',
      skills: [
        'Content creation',
        'Social media strategy',
        'Photography',
        'Event marketing',
        'Branding',
        'Visual coordination',
        'Digital campaigns',
        'Storytelling',
      ],
    },
    {
      icon: Briefcase,
      title: 'Professional',
      color: 'blue',
      skills: [
        'Leadership',
        'Communication',
        'Cross team coordination',
        'Reliability',
        'Initiative',
        'Strategic thinking',
        'Stakeholder management',
        'Bilingual (English/French)',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-white">
      <div className="reveal-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] mb-16 text-center">
          Skills I'm Building
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="reveal-item card-hover bg-[#F7F7F5] rounded-xl shadow-lg p-8 border-2 border-[#D3A96F]/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#D3A96F] rounded-lg">
                  <category.icon size={24} className="text-[#0E1A2B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E1A2B]">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#D3A96F]/10 text-[#0E1A2B] rounded-lg text-sm font-medium hover:bg-[#D3A96F]/20 transition-colors border border-[#D3A96F]/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F7F7F5] rounded-xl p-8 border-2 border-[#D3A96F]/20">
          <h3 className="text-2xl font-bold text-[#0E1A2B] mb-4 text-center">
            Certifications & Learning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-[#D3A96F]/20">
              <p className="font-semibold text-[#0E1A2B]">Microsoft Certified: Azure AI Fundamentals (AI-900)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#D3A96F]/20">
              <p className="font-semibold text-[#0E1A2B]">Microsoft Certified: Azure Fundamentals (AZ-900)</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#D3A96F]/20">
              <p className="font-semibold text-[#0E1A2B]">University of Illinois: Marketing in a Digital World</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#D3A96F]/20">
              <p className="font-semibold text-[#0E1A2B]">Six Sigma Green Belt Specialization (Ongoing)</p>
              <p className="text-sm text-[#A8ADB7]">Kennesaw State University via Coursera</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-[#D3A96F]/20">
              <p className="font-semibold text-[#0E1A2B]">Amity University: Marketing & Sales Summer School</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
