function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 bg-[#F7F7F5] dark:bg-[#242936] transition-colors duration-300">
      <div className="reveal-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED] mb-16 text-center">
          Education
        </h2>

        <div className="space-y-12">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED]">
              University of Waterloo
            </h3>
            <p className="text-lg text-[#D3A96F] font-medium">
              Bachelor of Arts - Honours Arts & Business Majoring in Liberal studies
            </p>
            <p className="text-base text-[#D3A96F]">
              Liberal Studies, Minor: International Trade & Economics
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2">
              <p className="text-base text-[#D3A96F]">
                Waterloo, Ontario, Canada
              </p>
              <p className="text-base text-[#D3A96F]">
                Expected Graduation: December 2026
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-[#D3A96F]/10 dark:border-[#D3A96F]/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0E1A2B] dark:text-[#E8E9ED]">
              Amity International School, Pushp Vihar
            </h3>
            <p className="text-base text-[#D3A96F]">
              High School
            </p>
            <p className="text-base text-[#D3A96F]">
              New Delhi, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
