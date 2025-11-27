import { Dictionary } from "@/i18n/getDictionary";
import { Locale } from "@/i18n/config";

interface JsonLdProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function JsonLd({ dictionary, locale }: JsonLdProps) {
  const baseUrl = "https://infotech.osut.org";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "InfoTech - OSUT Cluj",
    alternateName: "InfoTech",
    url: baseUrl,
    logo: `${baseUrl}/images/logo/infotech.png`,
    description:
      locale === "ro"
        ? "Proiect studențesc dedicat educației în tehnologie, workshop-uri de programare și dezvoltare profesională la UTCN Cluj-Napoca"
        : "Student project dedicated to technology education, programming workshops, and career development at UTCN Cluj-Napoca",
    foundingDate: "2020",
    foundingLocation: {
      "@type": "Place",
      name: "Cluj-Napoca, Romania",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "OSUT Cluj",
      alternateName: "Organizația Studenților din Universitatea Tehnică",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cluj-Napoca",
      addressCountry: "RO",
    },
    sameAs: [
      "https://www.instagram.com/infotech.osut/",
      "https://www.facebook.com/infotech.osut",
      "https://www.linkedin.com/company/infotech-osut/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "General Inquiries",
      availableLanguage: ["Romanian", "English"],
    },
  };

  const educationalOrgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "InfoTech Training Programs",
    url: baseUrl,
    description:
      locale === "ro"
        ? "Programe de training în tehnologie și dezvoltare de carieră pentru studenți"
        : "Technology training and career development programs for students",
    educationalCredentialAwarded: "Certificate of Completion",
    teaches: [
      "Programming",
      "Career Development",
      "CV Writing",
      "Interview Skills",
      "Entrepreneurship",
      "Financial Education",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "InfoTech",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: [
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
      {
        "@type": "Language",
        name: "Romanian",
        alternateName: "ro",
      },
    ],
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    name:
      locale === "ro"
        ? dictionary.hero.cards.nextEvent.eventName
        : dictionary.hero.cards.nextEvent.eventName,
    startDate: "2025-11-27",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "UTCN Cluj-Napoca",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cluj-Napoca",
        addressCountry: "RO",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "InfoTech - OSUT Cluj",
      url: baseUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "RON",
      availability: "https://schema.org/InStock",
      url: dictionary.hero.cards.nextEvent.url,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "ro" ? "Acasă" : "Home",
        item: `${baseUrl}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: locale === "ro" ? "Despre Noi" : "About Us",
        item: `${baseUrl}/${locale}#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: locale === "ro" ? "Evenimente" : "Events",
        item: `${baseUrl}/${locale}#events`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: locale === "ro" ? "Echipa" : "Team",
        item: `${baseUrl}/${locale}#team`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: locale === "ro" ? "Sponsori" : "Sponsors",
        item: `${baseUrl}/${locale}#sponsors`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(educationalOrgSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
