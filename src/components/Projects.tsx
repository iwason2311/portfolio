import {
  ArrowRight,
  Award,
  BarChart3,
  Factory,
  FileText,
  Globe2,
  Handshake,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

function Projects() {
  const strategicDecisions = [
    'Demand Forecasting',
    'Capacity Planning',
    'Pricing Strategy',
    'Market Expansion',
    'R&D Investment',
    'Resource Allocation',
    'Performance Analysis',
    'Cross-Functional Decision-Making',
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#F7F7F5] dark:bg-[#242936] transition-colors duration-300">
      <div className="reveal-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-4">
            Projects
          </h2>
          <p className="text-xl text-[#A8ADB7] dark:text-[#B0B3BA]">
            Business, Strategy &amp; Analytics Projects
          </p>
        </div>

        <article className="reveal-item card-hover bg-white dark:bg-[#1A1F2E] rounded-2xl shadow-xl overflow-hidden border-2 border-[#D3A96F]/40 transition-colors duration-300">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D3A96F] rounded-lg flex-shrink-0">
                  <BarChart3 size={28} className="text-[#0E1A2B]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">
                    LeoTrax – Global Business Strategy Simulation
                  </h3>
                  <p className="text-[#D3A96F] font-medium">
                    President &amp; VP Analytics | University of Waterloo Academic Project | 2026
                  </p>
                </div>
              </div>
              <span className="self-start whitespace-nowrap rounded-lg border border-[#D3A96F]/40 bg-[#D3A96F]/10 px-3 py-1.5 text-sm font-medium text-[#D3A96F]">
                Flagship Project
              </span>
            </div>

            <p className="text-sm text-[#A8ADB7] dark:text-[#B0B3BA] italic mb-6">
              Academic simulation — all financial, demand, sales, and operating figures shown are simulated.
            </p>

            <p className="text-lg text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed mb-8">
              Led strategy and analytics within a five-person executive team managing a simulated global bicycle company across pricing, demand forecasting, production, marketing, R&amp;D, financial decisions, and international expansion.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#F7F7F5] dark:bg-[#242936] p-6 rounded-lg border border-[#D3A96F]/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Globe2 size={24} className="text-[#D3A96F] flex-shrink-0" />
                  <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Global Expansion</h4>
                </div>
                <p className="text-2xl font-bold text-[#D3A96F] mb-3">1 → 4 Markets</p>
                <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  Expanded operations from a single Amsterdam market into Amsterdam, Bangalore, New York, and Rio de Janeiro, while scaling the sales force from 5 to 33 representatives.
                </p>
              </div>

              <div className="bg-[#F7F7F5] dark:bg-[#242936] p-6 rounded-lg border border-[#D3A96F]/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Factory size={24} className="text-[#D3A96F] flex-shrink-0" />
                  <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Operations &amp; Capacity</h4>
                </div>
                <p className="text-2xl font-bold text-[#D3A96F] mb-3">~1,000 → 3,600+ Units</p>
                <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  Analyzed demand and production constraints while operating capacity scaled from approximately 1,000 to 3,600+ units, helping identify stock-outs and operational bottlenecks.
                </p>
              </div>

              <div className="bg-[#F7F7F5] dark:bg-[#242936] p-6 rounded-lg border border-[#D3A96F]/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <Target size={24} className="text-[#D3A96F] flex-shrink-0" />
                  <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Analytics &amp; Decision-Making</h4>
                </div>
                <p className="text-2xl font-bold text-[#D3A96F] mb-3">6,072 Demand vs. 3,686 Capacity</p>
                <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  Identified a major demand-supply gap, helping shift strategy from aggressive demand generation toward better capacity alignment and operational scalability.
                </p>
              </div>

              <div className="bg-[#F7F7F5] dark:bg-[#242936] p-6 rounded-lg border border-[#D3A96F]/20 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp size={24} className="text-[#D3A96F] flex-shrink-0" />
                  <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED]">Business Performance</h4>
                </div>
                <p className="text-2xl font-bold text-[#D3A96F] mb-3">8.732 Top Cumulative Scorecard</p>
                <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  Supported $2.2M+ in simulated R&amp;D investment and cross-functional decision-making, contributing to the simulation&apos;s highest cumulative Balanced Scorecard and $1M+ in simulated profit.
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] mb-4">Strategic Decisions</h4>
              <div className="flex flex-wrap gap-3">
                {strategicDecisions.map((decision) => (
                  <span
                    key={decision}
                    className="rounded-lg border border-[#D3A96F]/30 bg-[#D3A96F]/10 px-3 py-2 text-sm font-medium text-[#0E1A2B] dark:text-[#E8E9ED]"
                  >
                    {decision}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#0E1A2B] rounded-lg border border-[#D3A96F]/40 p-6 mb-6">
              <h4 className="text-xl font-semibold text-[#D3A96F] mb-2">The Challenge</h4>
              <p className="text-[#E8E9ED] leading-relaxed">
                Rapid demand growth began to outpace operating capacity. By Q6, projected demand reached 6,072 units against only 3,686 units of effective capacity, creating stock-outs and showing the cost of growing demand without matching production capability.
              </p>
            </div>

            <div className="bg-[#D3A96F]/10 border border-[#D3A96F]/30 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">Key Takeaway</h4>
              <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                The simulation showed that growth alone does not create strong business performance. Marketing, forecasting, operations, finance, and capacity planning have to work together. Optimizing one function without considering the rest of the business can reduce overall performance.
              </p>
            </div>

            <a
              href="/leotrax-final-presentation.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#D3A96F] px-6 py-3 font-semibold text-[#0E1A2B] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              View Final Presentation
              <ArrowRight size={20} />
            </a>
          </div>
        </article>

        <article className="reveal-item card-hover mt-10 bg-white dark:bg-[#1A1F2E] rounded-2xl shadow-lg overflow-hidden border-2 border-[#D3A96F]/20 transition-colors duration-300">
          <div className="p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#D3A96F] rounded-lg flex-shrink-0">
                <Award size={28} className="text-[#0E1A2B]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">
                  F1 in Schools — Sponsorship &amp; Business Strategy
                </h3>
                <p className="text-[#D3A96F] font-medium">2017–2020</p>
              </div>
            </div>

            <p className="text-lg text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed mb-8">
              A three-year competitive business project focused on sponsorship acquisition, brand positioning, financial planning, stakeholder communication, and competition strategy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#F7F7F5] dark:bg-[#242936] p-5 rounded-lg border border-[#D3A96F]/20 transition-colors duration-300">
                <Handshake size={24} className="text-[#D3A96F] mb-3" />
                <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">Partnership Development</h4>
                <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  Secured sponsorship support from organizations including NutriAdvise, VITRAN, A B E C 157, and JKM Motors, developing proposals and communicating partner value propositions.
                </p>
              </div>

              <div className="bg-[#F7F7F5] dark:bg-[#242936] p-5 rounded-lg border border-[#D3A96F]/20 transition-colors duration-300">
                <FileText size={24} className="text-[#D3A96F] mb-3" />
                <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">Strategy &amp; Execution</h4>
                <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  Supported budget planning, sponsorship strategy, competition preparation, presentations, and resource-allocation decisions across multiple competition seasons.
                </p>
              </div>

              <div className="bg-[#F7F7F5] dark:bg-[#242936] p-5 rounded-lg border border-[#D3A96F]/20 transition-colors duration-300">
                <Users size={24} className="text-[#D3A96F] mb-3" />
                <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">Competitive Recognition</h4>
                <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                  Achieved National Runner-Up recognition during the first season and received a Verbal Presentation Award during the second season.
                </p>
              </div>
            </div>

            <div className="bg-[#F7F7F5] dark:bg-[#242936] rounded-lg border border-[#D3A96F]/20 p-6 mb-6 transition-colors duration-300">
              <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">Skills Applied</h4>
              <p className="text-[#D3A96F] leading-relaxed">
                Business Development · Sponsorship Strategy · Stakeholder Management · Pitching · Market Research · Budgeting · Presentation · Project Coordination
              </p>
            </div>

            <div className="bg-[#D3A96F]/10 border border-[#D3A96F]/30 rounded-lg p-6">
              <h4 className="font-semibold text-[#0E1A2B] dark:text-[#E8E9ED] mb-2">Key Takeaway</h4>
              <p className="text-[#0E1A2B] dark:text-[#B0B3BA] leading-relaxed">
                This multi-year project introduced me to commercial decision-making at an early stage — balancing funding constraints, stakeholder expectations, competitive strategy, and team execution across multiple competition cycles.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
