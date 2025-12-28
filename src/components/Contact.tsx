import { Mail, Linkedin, Instagram, MapPin, Download } from 'lucide-react';

function Contact() {
  const resumes = [
    {
      label: 'Download Resume (PDF)',
      file: '/iwason-new.pdf',
      filename: 'Ishaan_Wason_Resume.pdf',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@iwason.com',
      link: 'mailto:contact@iwason.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Waterloo, ON',
      link: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/iwason',
      link: 'https://linkedin.com/in/iwason',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'Creative Work',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="reveal-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-[#A8ADB7]">
            I'm always open to discussing operations, strategy, or creative projects.
          </p>
        </div>

        <div className="mb-8 flex justify-center">
          {resumes.map((resume, index) => (
            <a
              key={index}
              href={resume.file}
              download={resume.filename}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-lg border-2 border-[#D3A96F] text-[#0E1A2B] font-medium hover:bg-[#D3A96F] hover:shadow-lg transition-all duration-200"
            >
              <Download size={20} />
              <span>{resume.label}</span>
            </a>
          ))}
        </div>

        <div className="bg-[#F7F7F5] rounded-2xl shadow-xl p-8 lg:p-12 border-2 border-[#D3A96F]/20">
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
              >
                <div className="p-3 bg-[#D3A96F] rounded-lg flex-shrink-0">
                  <item.icon size={24} className="text-[#0E1A2B]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[#A8ADB7] font-medium">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-[#0E1A2B] hover:text-[#D3A96F] transition-colors font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg text-[#0E1A2B] font-medium">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t-2 border-[#D3A96F]/20">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@iwason.com"
                className="px-8 py-4 bg-[#D3A96F] text-[#0E1A2B] rounded-lg font-medium hover:bg-[#C09960] transition-colors text-center shadow-lg hover:shadow-xl"
              >
                Send an Email
              </a>
              <a
                href="https://linkedin.com/in/iwason"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#0E1A2B] rounded-lg font-medium hover:bg-[#F7F7F5] transition-colors border-2 border-[#D3A96F]/30 hover:border-[#D3A96F] text-center shadow-md"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
