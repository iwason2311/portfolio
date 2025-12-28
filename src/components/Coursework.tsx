import { BookOpen, TrendingUp, Briefcase, DollarSign, MessageSquare } from 'lucide-react';

function Coursework() {
  const areas = [
    {
      icon: TrendingUp,
      title: 'Economics & Analytical Thinking',
      courses: [
        {
          name: 'Econometric Analysis',
          description: 'regression analysis, data interpretation, and statistical reasoning for real-world economic data',
        },
        {
          name: 'Statistics for Economists',
          description: 'probability, inference, and quantitative decision support',
        },
        {
          name: 'Microeconomic & Macroeconomic Analysis',
          description: 'incentives, market structures, policy impacts, and system-level thinking',
        },
        {
          name: 'Money and Banking',
          description: 'financial systems, interest rates, and monetary policy dynamics',
        },
        {
          name: 'Labour Economics',
          description: 'employment markets, wage dynamics, and workforce structures',
        },
        {
          name: 'International Economics & Trade',
          description: 'global markets, trade policy, and economic interdependence',
        },
      ],
    },
    {
      icon: Briefcase,
      title: 'Business, Strategy & Management',
      courses: [
        {
          name: 'Strategy and Program Integration',
          description: 'aligning strategy with execution across organizations',
        },
        {
          name: 'International Business',
          description: 'cross-border operations, globalization, and organizational complexity',
        },
        {
          name: 'Entrepreneurship Principles',
          description: 'opportunity evaluation, risk, and business fundamentals',
        },
        {
          name: 'Principles of Marketing',
          description: 'segmentation, positioning, and campaign planning',
        },
        {
          name: 'Human Resources Management',
          description: 'workforce planning, organizational behavior, and people operations',
        },
        {
          name: 'Professional & Business Ethics',
          description: 'ethical decision-making in organizational contexts',
        },
      ],
    },
    {
      icon: DollarSign,
      title: 'Finance & Decision Models',
      courses: [
        {
          name: 'Business Finance I & II',
          description: 'capital structure, financial decision-making, and valuation fundamentals',
        },
        {
          name: 'Models of Choice in Competitive Markets',
          description: 'decision models, optimization, and strategic trade-offs',
        },
      ],
    },
    {
      icon: MessageSquare,
      title: 'Communication, Policy & Systems Thinking',
      courses: [
        {
          name: 'Business Communication',
          description: 'professional writing, stakeholder communication, and clarity',
        },
        {
          name: 'Government & Business',
          description: 'regulation, public policy, and corporate interaction',
        },
        {
          name: 'Political Economy & Global Politics',
          description: 'institutions, governance, and economic power',
        },
        {
          name: 'Information & Analysis',
          description: 'research, synthesis, and analytical writing',
        },
      ],
    },
  ];

  return (
    <section id="coursework" className="py-20 lg:py-32 bg-[#F7F7F5] dark:bg-[#242936] transition-colors duration-300">
      <div className="reveal-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-8 text-center">
          Applied Coursework & Academic Foundations
        </h2>

        <p className="text-lg text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed text-center max-w-4xl mx-auto mb-16">
          My academic training combines economics, business, finance, and policy with an applied focus on how organizations, markets, and systems actually function.
        </p>

        <div className="space-y-12">
          {areas.map((area, index) => (
            <div key={index} className="reveal-item card-hover bg-white dark:bg-[#1A1F2E] rounded-xl shadow-lg p-8 lg:p-10 border-2 border-[#D3A96F]/20 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#D3A96F] rounded-lg flex-shrink-0">
                  <area.icon size={24} className="text-[#0E1A2B]" />
                </div>
                <h3 className="text-2xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED]">
                  {area.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {area.courses.map((course, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-[#0E1A2B] dark:text-[#E8E9ED] font-semibold">
                      {course.name}
                    </h4>
                    <p className="text-[#D3A96F] leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coursework;
