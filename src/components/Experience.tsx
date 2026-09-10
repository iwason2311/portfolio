import { Building2, GraduationCap, Users, Cpu, Globe, FileText, Image, ExternalLink } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      icon: GraduationCap,
      title: 'University of Waterloo Economics Society (UWES)',
      role: 'President',
      period: '04/2026 – Present',
      location: 'Waterloo, ON',
      highlights: [
        'Lead a 20-member cross-functional team across marketing, communications, events, and research, overseeing organizational priorities and execution.',
        'Drive organizational strategy, event planning, team structure, and cross-functional initiatives, translating goals into clear responsibilities, timelines, and deliverables.',
        'Manage recruitment, onboarding, task allocation, and team coordination, strengthening accountability and consistency across functions.',
        'Launched and supported new initiatives including student research and economics-focused programming, expanding the society’s academic and professional engagement.',
      ],
      attachments: [],
    },
    {
      icon: Building2,
      title: 'Habitat for Humanity Windsor-Essex',
      role: 'Marketing, Social Media, and Salvage Partnerships Assistant',
      period: '01/2025 – 04/2025',
      location: 'Windsor, ON',
      highlights: [
        'Executed digital and community marketing initiatives supporting sustainability programs, ReStore operations, business partnerships, and live salvage projects, strengthening program visibility and community engagement.',
        'Managed partnership outreach and coordination with 40+ local businesses, supporting donor relationships, inventory flow, community awareness, and ReStore revenue-generating operations.',
        'Designed and supported a CRM-enabled partnership workflow for donor intake, scheduling, volunteer coordination, and relationship tracking, improving process visibility across teams.',
        'Created social media, promotional, and storytelling content aligned with campaign objectives, sustainability messaging, and audience needs.',
        'Analyzed program activity and engagement trends to inform outreach prioritization, scheduling, campaign decisions, and resource allocation.',
      ],
      hasShowcase: true,
      attachments: [],
    },
    {
      icon: GraduationCap,
      title: 'University of Waterloo Economics Society (UWES)',
      role: 'Vice President of Marketing',
      period: '09/2025 – 04/2026',
      location: 'Waterloo, ON',
      highlights: [
        'Led marketing and branding strategy across event promotions, digital campaigns, organizational initiatives, and student engagement efforts.',
        'Managed marketing and web coordinators across recruitment, onboarding, task allocation, campaign planning, and execution.',
        'Developed campaign strategies and cross-club partnerships, coordinating messaging, creative output, timelines, and promotional activities.',
        'Standardized campaign workflows and design processes, improving communication, execution consistency, and brand alignment across the marketing function.',
      ],
      note: 'Promoted to President in April 2026.',
      attachments: [],
    },
    {
      icon: Users,
      title: 'University of Waterloo Indian Cultural Association (UWICA)',
      role: 'Content Creator',
      period: '05/2025 – 12/2025',
      location: 'Waterloo, ON',
      highlights: [
        'Produced graphics, reels, social media posts, and promotional assets for cultural events and student engagement campaigns.',
        'Supported visual identity, creative direction, and content strategy, maintaining consistent brand messaging across digital channels.',
        'Collaborated with event and marketing teams to align content calendars, campaign messaging, and promotional execution with event objectives.',
      ],
      attachments: [],
    },
    {
      icon: Cpu,
      title: 'SmartServe / University of Waterloo',
      role: 'AI/ML Analyst',
      period: '05/2024 – 08/2024',
      location: 'Waterloo, ON',
      highlights: [
        'Analyzed customer interaction and response-time data within Zendesk to identify opportunities for improving digital service performance.',
        'Evaluated AI-enabled customer-service solutions including generative responses, conditional logic, multilingual support, and chatbot personas.',
        'Compared Zendesk, Freshdesk, and Google Dialogflow across cost, scalability, integration, and implementation considerations.',
        'Translated technical research and system testing into operational recommendations, supporting improvements in customer experience, service efficiency, and data-informed decision-making.',
        'Contributed to improvements that reduced average customer response time by approximately 30%, based on internal reporting.',
      ],
      attachments: [],
    },
    {
      icon: Globe,
      title: 'Yeh Mera India',
      role: 'Marketing Intern',
      period: '05/2021 – 08/2021',
      location: 'Remote, India',
      highlights: [
        'Supported digital marketing and outreach campaigns for a social-impact nonprofit during the COVID-19 period.',
        'Assisted with content creation, social media execution, and campaign planning to strengthen awareness and online engagement.',
        'Collaborated with the founding team on brand communication, campaign messaging, and engagement initiatives.',
        'Managed assigned responsibilities independently in a remote environment, supporting reliable campaign execution and team coordination.',
      ],
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-hover bg-[#F7F7F5] dark:bg-[#242936] rounded-xl shadow-lg overflow-hidden border-2 border-[#D3A96F]/20 transition-colors duration-300"
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
                    {exp.note && (
                      <p className="mt-4 text-sm text-[#D3A96F] font-medium">
                        {exp.note}
                      </p>
                    )}
                  </div>
                </div>

                {exp.hasShowcase && exp.title === 'Habitat for Humanity Windsor-Essex' && (
                  <div className="mt-8 pt-8 border-t-2 border-[#D3A96F]/20">
                    <div className="flex items-center gap-2 mb-4">
                      <Image size={20} className="text-[#D3A96F]" />
                      <h4 className="text-lg font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">
                        Work Showcase
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
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
                          Met with former Maple Leafs CEO Mr Richard Peddie during a donor visit supporting the organization.
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://drive.google.com/drive/folders/1K4VneYIwK_e_aouzIO0BkAQAeFIDzxWu?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-white dark:bg-[#1A1F2E] rounded-lg border-2 border-[#D3A96F]/30 hover:border-[#D3A96F] transition-colors group"
                    >
                      <div className="p-2 bg-[#D3A96F]/10 rounded-lg group-hover:bg-[#D3A96F]/20 transition-colors">
                        <ExternalLink size={20} className="text-[#D3A96F]" />
                      </div>
                      <div className="flex-1">
                        <span className="text-[#0E1A2B] dark:text-[#E8E9ED] font-medium group-hover:text-[#D3A96F] transition-colors block">
                          Project Deliverables & Media Archive
                        </span>
                        <span className="text-sm text-[#A8ADB7] dark:text-[#B0B3BA]">
                          View content posted on their channel
                        </span>
                      </div>
                      <ExternalLink size={18} className="text-[#A8ADB7] group-hover:text-[#D3A96F] transition-colors" />
                    </a>
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
