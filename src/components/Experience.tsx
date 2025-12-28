import { Building2, GraduationCap, Users, Cpu, Globe, Image, FileText } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      icon: GraduationCap,
      title: 'University of Waterloo Economics Society (UWES)',
      role: 'Vice President of Marketing',
      period: '09/2025 – Present',
      location: 'Waterloo, ON',
      highlights: [
        'Lead marketing and branding strategy for UWES, overseeing event promotions, digital campaigns, and strategic collaborations.',
        'Manage a marketing team of three coordinators and one web content coordinator, conducting interviews, onboarding, and performance reviews.',
        'Develop new marketing strategies and cross-club partnerships, increasing event engagement and student participation.',
        'Streamline campaign workflows and design processes, improving content turnaround and branding consistency by 40%.',
      ],
      hasShowcase: true,
      attachments: [],
    },
    {
      icon: Building2,
      title: 'Habitat for Humanity Windsor-Essex',
      role: 'Marketing, Social Media, and Salvage Partnerships Assistant',
      period: '01/2025 – 04/2025',
      location: 'Windsor, ON',
      highlights: [
        'Managed outreach and logistics for the Kitchen Salvage Program; created content showcasing live removals to promote sustainability and community impact.',
        'Secured donations and partnerships with 40+ local businesses, boosting ReStore inventory and revenue.',
        'Proposed and designed a HubSpot CRM and mobile app integration to streamline bookings, donor tracking, and volunteer engagement.',
        'Led a social media strategy that doubled engagement within one month and enhanced program visibility.',
      ],
      hasShowcase: true,
      attachments: [],
    },
    {
      icon: Users,
      title: 'University of Waterloo Indian Cultural Association (UWICA)',
      role: 'Content Creator',
      period: '05/2025 – 12/2025',
      location: 'University of Waterloo, Canada',
      highlights: [
        'Created digital content for cultural events, student engagement campaigns, and social media outreach.',
        'Supported branding and visibility for UWICA initiatives through visual content.',
        'Collaborated with the core team to align content with event themes and community messaging.',
      ],
      hasShowcase: false,
      attachments: [],
    },
    {
      icon: Cpu,
      title: 'Smart serve / University of Waterloo',
      role: 'AI/ ML Analyst',
      period: '05/2024 – 08/2024',
      location: 'Waterloo, ON',
      highlights: [
        'Achieved certifications in Azure AI Fundamentals (AI-900) and Azure Fundamentals (AZ-900).',
        'Collaborated with Smart Serve Ontario to enhance online course integrity using AI technologies like voice recognition and eye tracking.',
        'Improved customer service by optimizing chatbot performance, reducing response time by 30%.',
        'Conducted data analysis to enhance course effectiveness, contributing to a 20% increase in cheating detection accuracy and a 25% boost in customer satisfaction.',
        'Delivered a strategic plan that improved cheating detection accuracy by 20% and enhanced customer satisfaction by 25% through AI-driven automation.',
      ],
      hasShowcase: false,
      attachments: [],
    },
    {
      icon: Globe,
      title: 'Yeh Mera India',
      role: 'Marketing Intern',
      period: '05/2021 – 08/2021',
      location: 'Remote (India)',
      highlights: [
        'Assisted in marketing and outreach initiatives for a non-profit organization focused on social impact in India.',
        'Supported campaign planning, content creation, and digital promotion initiatives.',
        'Worked closely with the founding team on awareness and engagement strategies.',
      ],
      hasShowcase: false,
      attachments: [
        {
          name: 'Letter of Recommendation – Founder, Yeh Mera India',
          url: '/document_from_ishaan_wason_compressed.pdf',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-white dark:bg-[#1A1F2E] transition-colors duration-300">
      <div className="reveal-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="reveal-item card-hover bg-[#F7F7F5] dark:bg-[#242936] rounded-xl shadow-lg overflow-hidden border-2 border-[#D3A96F]/20 transition-colors duration-300"
            >
              <div className="p-8 lg:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-[#D3A96F] rounded-lg flex-shrink-0">
                    <exp.icon size={24} className="text-[#0E1A2B]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-2xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-[#D3A96F] font-medium">
                          {exp.role}
                        </p>
                      </div>
                      <div className="text-sm text-[#A8ADB7] dark:text-[#B0B3BA] font-medium lg:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[#D3A96F] rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {exp.hasShowcase && (
                  <div className="mt-8 pt-8 border-t-2 border-[#D3A96F]/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Image size={20} className="text-[#D3A96F]" />
                      <h4 className="text-lg font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">
                        Work Showcase
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {exp.title === 'Habitat for Humanity Windsor-Essex' ? (
                        <>
                          <div className="aspect-video bg-white dark:bg-[#1A1F2E] rounded-lg overflow-hidden border-2 border-[#D3A96F]/30 hover:border-[#D3A96F] transition-colors">
                            <img
                              src="/screenshot_2025-12-26_at_7.43.57_am.png"
                              alt="Habitat for Humanity ReStore"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white dark:bg-[#1A1F2E] rounded-lg overflow-hidden border-2 border-[#D3A96F]/30 hover:border-[#D3A96F] transition-colors">
                              <img
                                src="/screenshot_2025-12-26_at_8.39.09_am.png"
                                alt="Meeting with Richard Peddie"
                                className="w-full h-auto object-contain"
                              />
                            </div>
                            <p className="text-xs text-[#D3A96F] font-medium leading-relaxed">
                              Got to meet former CEO of Maple Leafs Richard Peddie and secured a donation from him
                            </p>
                          </div>
                          <div
                            className="aspect-video bg-white dark:bg-[#1A1F2E] rounded-lg overflow-hidden border-2 border-[#D3A96F]/30 hover:border-[#D3A96F] transition-colors"
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="text-center space-y-2">
                                <Image size={32} className="mx-auto text-[#A8ADB7] dark:text-[#B0B3BA]" />
                                <p className="text-xs font-medium text-[#A8ADB7] dark:text-[#B0B3BA]">
                                  Showcase Item 3
                                </p>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        [1, 2, 3].map((item) => (
                          <div
                            key={item}
                            className="aspect-video bg-white dark:bg-[#1A1F2E] rounded-lg overflow-hidden border-2 border-[#D3A96F]/30 hover:border-[#D3A96F] transition-colors"
                          >
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="text-center space-y-2">
                                <Image size={32} className="mx-auto text-[#A8ADB7] dark:text-[#B0B3BA]" />
                                <p className="text-xs font-medium text-[#A8ADB7] dark:text-[#B0B3BA]">
                                  Showcase Item {item}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}

                {exp.attachments && exp.attachments.length > 0 && (
                  <div className={`${exp.hasShowcase ? 'mt-8' : 'mt-8 pt-8 border-t-2 border-[#D3A96F]/20'}`}>
                    <div className="flex items-center gap-2 mb-4">
                      <FileText size={20} className="text-[#D3A96F]" />
                      <h4 className="text-lg font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">
                        Attachments
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {exp.attachments.map((attachment, idx) => (
                        <a
                          key={idx}
                          href={attachment.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-4 bg-white dark:bg-[#1A1F2E] rounded-lg border-2 border-[#D3A96F]/30 hover:border-[#D3A96F] transition-colors group"
                        >
                          <div className="p-2 bg-[#D3A96F]/10 rounded-lg group-hover:bg-[#D3A96F]/20 transition-colors">
                            <FileText size={20} className="text-[#D3A96F]" />
                          </div>
                          <span className="text-[#0E1A2B] dark:text-[#E8E9ED] font-medium group-hover:text-[#D3A96F] transition-colors">
                            {attachment.name}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
