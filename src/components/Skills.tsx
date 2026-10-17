import { BarChart3, Briefcase, Laptop, ListTodo, MessageSquare } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      icon: Briefcase,
      title: 'Business & Commercial Analysis',
      skills: [
        'Market & Competitor Research',
        'Financial & Commercial Analysis',
        'Demand Forecasting',
        'Performance Reporting',
      ],
    },
    {
      icon: ListTodo,
      title: 'Operations & Project Coordination',
      skills: [
        'Process Improvement',
        'Workflow Development',
        'Project Coordination',
        'Resource Planning',
        'Stakeholder Management',
        'Partnership Management',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Marketing & Communication',
      skills: [
        'Digital Marketing & Campaign Planning',
        'Social Media Marketing',
        'Content Creation & Brand Development',
        'B2B Outreach & Lead Generation',
        'Audience Research & Segmentation',
        'Campaign Performance Analysis',
      ],
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Reporting',
      skills: [
        'Microsoft Excel',
        'Power BI',
        'Tableau',
        'R Programming',
        'Google Colab',
        'Data Visualization',
      ],
    },
  ];

  const toolGroups = [
    {
      title: 'Design & Video Editing',
      tools: ['Canva', 'Adobe Photoshop', 'Adobe Premiere Pro', 'Adobe Express'],
    },
    {
      title: 'Website & Digital Marketing',
      tools: ['WordPress', 'LinkedIn Campaign Manager', 'Meta Business Suite', 'Google Analytics 4', 'Google Ads'],
    },
    {
      title: 'CRM & Business Platforms',
      tools: ['HubSpot CRM', 'Zendesk', 'Microsoft 365', 'Google Workspace'],
    },
    {
      title: 'Additional Creative Tools',
      tools: ['Adobe Illustrator'],
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
            How I analyze, organize, create, and deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
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
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-[#D3A96F] rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="reveal-item lg:col-span-2 bg-[#F7F7F5] dark:bg-[#242936] rounded-xl shadow-lg p-8 lg:p-10 border-2 border-[#D3A96F]/20 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-[#D3A96F] rounded-lg">
                <Laptop size={24} className="text-[#0E1A2B]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED]">
                Tools & Platforms
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {toolGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="font-semibold text-[#D3A96F] mb-4">{group.title}</h4>
                  <ul className="space-y-3">
                    {group.tools.map((tool) => (
                      <li key={tool} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-[#D3A96F] rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                          {tool}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
