import { Award, TrendingUp, Users, FileText } from 'lucide-react';

function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#F7F7F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] mb-4">
            Projects
          </h2>
          <p className="text-xl text-[#A8ADB7]">
            Creative and Marketing Projects
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#D3A96F]/20">
          <div className="p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-[#D3A96F] rounded-lg">
                <Award size={28} className="text-[#0E1A2B]" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#0E1A2B] mb-2">
                  F1 in Schools — Sponsorship and Strategy Project
                </h3>
                <p className="text-[#D3A96F] font-medium">2017 - 2020</p>
              </div>
            </div>

            <p className="text-lg text-[#0E1A2B] leading-relaxed mb-8">
              A three year commitment where I worked on sponsorships, team branding, competition preparation, and verbal presentation strategy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3 bg-[#F7F7F5] p-5 rounded-lg border border-[#D3A96F]/20">
                <Users size={24} className="text-[#D3A96F] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#0E1A2B] mb-1">Sponsorship Success</h4>
                  <p className="text-[#D3A96F]">
                    Secured sponsorship from brands like Nutriadvise, VITRAN, A B E C 157 and JKM Motors
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F7F7F5] p-5 rounded-lg border border-[#D3A96F]/20">
                <FileText size={24} className="text-[#D3A96F] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#0E1A2B] mb-1">Strategic Management</h4>
                  <p className="text-[#D3A96F]">
                    Managed presentations and competition documentation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F7F7F5] p-5 rounded-lg border border-[#D3A96F]/20">
                <Award size={24} className="text-[#D3A96F] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#0E1A2B] mb-1">National Recognition</h4>
                  <p className="text-[#D3A96F]">
                    Won national runner up position in season one and verbal presentation award in season two
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-[#F7F7F5] p-5 rounded-lg border border-[#D3A96F]/20">
                <TrendingUp size={24} className="text-[#D3A96F] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#0E1A2B] mb-1">Skills Developed</h4>
                  <p className="text-[#D3A96F]">
                    Learned marketing, pitching, research, coordination, and long horizon execution
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#D3A96F]/10 border border-[#D3A96F]/30 rounded-lg p-6">
              <p className="text-[#0E1A2B] leading-relaxed">
                This project taught me the fundamentals of business strategy, stakeholder management, and long-term execution. It laid the groundwork for my interest in operations and strategic problem solving.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
