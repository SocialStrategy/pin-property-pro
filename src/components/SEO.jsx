import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "Pin Hemmawan - Trusted Bangkok Real Estate Agent | Premium Relocation Services",
  description = "Pin Hemmawan is a trusted Bangkok real estate agent offering premium relocation services. Find your perfect Bangkok condo with deep local insight and Western service standards.",
  keywords = "Bangkok real estate, Bangkok condo, expat relocation, Bangkok rental, property agent Bangkok, Pin Hemmawan, Bangkok apartments",
  canonicalUrl = "https://pinpropertypro.com",
  ogImage = "/og-image.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default SEO

