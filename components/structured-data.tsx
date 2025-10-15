export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "@id": "https://hamalatulquran.com.au/#organization",
        "name": "Hamalatulquran Academy",
        "alternateName": "Hamalatulquran Institute",
        "url": "https://hamalatulquran.com.au",
        "logo": "https://hamalatulquran.com.au/logo.png",
        "description": "Dedicated to teaching the Quran with excellence in Tajweed, memorisation (Hifdh), and understanding.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1/72-74 Chifley Dr",
          "addressLocality": "Preston",
          "addressRegion": "VIC",
          "postalCode": "3072",
          "addressCountry": "AU"
        },
        "email": "hamalatulquraninstitute@gmail.com",
        "areaServed": {
          "@type": "City",
          "name": "Melbourne"
        },
        "knowsAbout": [
          "Quran Memorization",
          "Tajweed",
          "Islamic Education",
          "Hifdh"
        ],
        "teaches": [
          {
            "@type": "Course",
            "name": "Hifdh (Quran Memorization)",
            "description": "Comprehensive memorization program with structured curriculum and regular assessments"
          },
          {
            "@type": "Course",
            "name": "Tajweed Excellence",
            "description": "Master the art of proper Quranic recitation"
          },
          {
            "@type": "Course",
            "name": "Daily Revision",
            "description": "6 days of online revision with dedicated teachers"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://hamalatulquran.com.au/#website",
        "url": "https://hamalatulquran.com.au",
        "name": "Hamalatulquran Academy",
        "description": "Transform your relationship with the Quran through excellence in Tajweed, Hifdh, and understanding",
        "publisher": {
          "@id": "https://hamalatulquran.com.au/#organization"
        },
        "inLanguage": "en-AU"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://hamalatulquran.com.au/#localbusiness",
        "name": "Hamalatulquran Academy",
        "image": "https://hamalatulquran.com.au/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Darusalam Society, 1/72-74 Chifley Dr",
          "addressLocality": "Preston",
          "addressRegion": "VIC",
          "postalCode": "3072",
          "addressCountry": "AU"
        },
        "email": "hamalatulquraninstitute@gmail.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Wednesday", "Sunday"],
            "opens": "18:30",
            "closes": "20:30"
          }
        ],
        "priceRange": "$$",
        "areaServed": "Melbourne"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

