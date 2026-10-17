export interface Certification {
  title: string;
  credentialUrl: string;
}

// Paste verified shareable credential URLs into the empty credentialUrl fields below.
export const certificationData = {
  realEstate: {
    title: 'Real Estate & Financial Modeling',
    specialization: {
      title: 'Commercial Real Estate Modeling Specialization',
      credentialUrl: 'https://coursera.org/share/a99f22765e2510d79b7016dff3e0d9b7',
      courses: [
        { title: 'Real Estate Financial Modeling', credentialUrl: 'https://coursera.org/share/26d2b60bc0e3f288469419e456c35438' },
        { title: 'Environmental Due Diligence for Credit', credentialUrl: 'https://coursera.org/share/d24734db324b4e1bae6efdf05984321c' },
        { title: 'How to Read a Lease and Analyze a Rent Roll', credentialUrl: 'https://coursera.org/share/a6b14c37c8abf44ca85e25e45d0e9103' },
        { title: 'How to Read a Commercial Real Estate Appraisal', credentialUrl: 'https://coursera.org/share/eeb56fe7a34910528258e13a16919889' },
        { title: 'Real Estate Fundamentals', credentialUrl: 'https://coursera.org/share/34261fd60f181eda71a2b4804427d59d' },
      ] satisfies Certification[],
    },
  },
  categories: [
    {
      title: 'AI & Technology',
      certifications: [
        { title: 'Certificate of completion: Claude 101', credentialUrl: '' },
        { title: 'Certificate of completion: AI Fluency for students', credentialUrl: '' },
        { title: 'Microsoft Certified: Azure AI Fundamentals', credentialUrl: '' },
      ],
    },
    {
      title: 'Marketing',
      certifications: [
        { title: 'Marketing in a Digital World', credentialUrl: '' },
      ],
    },
    {
      title: 'Creative & Other',
      certifications: [
        { title: 'Cameras, Exposure, and Photography', credentialUrl: '' },
      ],
    },
  ] satisfies { title: string; certifications: Certification[] }[],
};
