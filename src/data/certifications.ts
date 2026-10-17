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
      credentialUrl: '',
      courses: [
        { title: 'Real Estate Financial Modeling', credentialUrl: '' },
        { title: 'Environmental Due Diligence for Credit', credentialUrl: '' },
        { title: 'How to Read a Lease and Analyze a Rent Roll', credentialUrl: '' },
        { title: 'How to Read a Commercial Real Estate Appraisal', credentialUrl: '' },
        { title: 'Real Estate Fundamentals', credentialUrl: '' },
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
