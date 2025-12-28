function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 bg-[#F7F7F5]">
      <div className="reveal-section max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#0E1A2B] mb-16 text-center">
          Education
        </h2>

        <div className="space-y-12">
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0E1A2B]">
              University of Waterloo
            </h3>
            <p className="text-lg text-[#0E1A2B]/80 font-medium">
              Honours Arts and Business
            </p>
            <p className="text-base text-[#0E1A2B]/70">
              Liberal Studies, Minor: International Trade & Economics
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2">
              <p className="text-base text-[#0E1A2B]/60">
                Waterloo, Ontario, Canada
              </p>
              <p className="text-base text-[#0E1A2B]/60">
                Expected Graduation: December 2026
              </p>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-[#D3A96F]/10">
            <h4 className="text-lg font-medium text-[#0E1A2B]/70">
              Amity International School, Pushp Vihar
            </h4>
            <p className="text-base text-[#0E1A2B]/60">
              High School
            </p>
            <p className="text-base text-[#0E1A2B]/50">
              New Delhi, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
