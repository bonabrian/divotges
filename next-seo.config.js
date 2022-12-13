/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: 'V for Vote',
  titleTemplate: '%s | divotges',
  defaultTitle: 'divoteges',
  description: 'Fun tool for project teams to estimate tasks',
  canonical: 'https://divotges.vercel.app/',
  openGraph: {
    url: 'https://divotges.vercel.app/',
    title: 'divotges',
    description: 'Fun tool for project teams to estimate tasks',
    images: [
      {
        // TODO: add og image
        url: '',
        alt: 'divotges og-image',
      },
    ],
    siteName: 'divotges',
  },
}

export default defaultSEOConfig
