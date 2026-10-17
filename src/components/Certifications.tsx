import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { certificationData, type Certification } from '../data/certifications';

function CredentialIcon({ title, url, tabIndex }: { title: string; url: string; tabIndex?: number }) {
  const credentialUrl = url.trim();
  let isValid = false;

  try {
    isValid = ['https:', 'http:'].includes(new URL(credentialUrl).protocol);
  } catch {
    // Empty and incomplete URLs remain disabled until a verified link is added.
  }

  const icon = <ExternalLink size={18} aria-hidden="true" />;
  const className = 'flex-shrink-0 rounded-lg p-2 text-[#D3A96F]';

  return isValid ? (
    <a
      href={credentialUrl}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={tabIndex}
      aria-label={`View credential for ${title} (opens in a new tab)`}
      className={`${className} hover:bg-[#D3A96F]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D3A96F]`}
    >
      {icon}
    </a>
  ) : (
    <button
      type="button"
      disabled
      aria-label={`Credential link unavailable for ${title}`}
      className={`${className} cursor-not-allowed opacity-40`}
    >
      {icon}
    </button>
  );
}

function CertificationCard({ certification }: { certification: Certification }) {
  return (
    <div className="card-hover flex min-w-0 items-center justify-between gap-4 rounded-lg border border-[#D3A96F]/20 bg-[#242936] p-5 transition-colors duration-300">
      <span className="min-w-0 font-semibold text-[#E8E9ED]">{certification.title}</span>
      <CredentialIcon title={certification.title} url={certification.credentialUrl} />
    </div>
  );
}

function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);
  const specialization = certificationData.realEstate.specialization;

  return (
    <section id="certifications" className="scroll-mt-16 bg-[#0E1A2B] dark:bg-[#151923] py-20 lg:py-32 transition-colors duration-300">
      <div className="reveal-section mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold text-[#E8E9ED] sm:text-5xl">
          Certifications
        </h2>

        <div className="space-y-12">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#E8E9ED]">
              {certificationData.realEstate.title}
            </h3>
            <div className="reveal-item card-hover overflow-hidden rounded-xl border-2 border-[#D3A96F]/30 bg-[#1A1F2E] shadow-lg transition-colors duration-300">
              <div className="flex items-center gap-2 p-5 sm:p-6">
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls="specialization-courses"
                  onClick={() => setIsExpanded((expanded) => !expanded)}
                  className="flex min-w-0 flex-1 items-center justify-between gap-4 rounded-lg text-left font-semibold text-[#E8E9ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#D3A96F]"
                >
                  <span>{specialization.title}</span>
                  <ChevronDown size={20} aria-hidden="true" className={`flex-shrink-0 text-[#D3A96F] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                </button>
                <CredentialIcon title={specialization.title} url={specialization.credentialUrl} />
              </div>
              <div
                id="specialization-courses"
                aria-hidden={!isExpanded}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-2 border-t border-[#D3A96F]/20 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                    {specialization.courses.map((course) => (
                      <div key={course.title} className="flex min-w-0 items-center justify-between gap-4 rounded-lg bg-[#242936] px-4 py-2">
                        <span className="min-w-0 text-[#E8E9ED]">{course.title}</span>
                        <CredentialIcon title={course.title} url={course.credentialUrl} tabIndex={isExpanded ? 0 : -1} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {certificationData.categories.map((category) => (
            <div key={category.title}>
              <h3 className="mb-6 text-2xl font-bold text-[#E8E9ED]">{category.title}</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.certifications.map((certification) => (
                  <CertificationCard key={certification.title} certification={certification} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
