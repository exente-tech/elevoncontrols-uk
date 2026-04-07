export interface LinkItem {
  href: string;
  label: string;
}

export interface MetricItem {
  title: string;
  body: string;
}

export interface SectionBlock {
  eyebrow: string;
  title: string;
  body: string[];
  muted?: boolean;
}

export interface ServiceItem {
  slug: string;
  href: string;
  title: string;
  body: string;
  pageTitle: string;
  pageDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
  features: string[];
}

export interface IndustryItem {
  slug: string;
  href: string;
  title: string;
  body: string;
  pageTitle: string;
  pageDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
}

export interface AudienceItem {
  slug: string;
  href: string;
  title: string;
  body: string;
  pageTitle: string;
  pageDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  intro: string;
}

export interface CaseStudy {
  title: string;
  summary: string;
  result: string;
}

export interface MarketDefinition {
  locale: string;
  lang: string;
  site: {
    name: string;
    brandPrimary: string;
    brandSecondary: string;
    url: string;
    domain: string;
    email: string;
    phone: string;
    mobile: string;
    address: string;
    location: string;
    tenantName: string;
    formEndpoint: string;
  };
  navigation: LinkItem[];
  footer: {
    summary: string;
    companyHeading: string;
    servicesHeading: string;
    contactHeading: string;
    copyright: string;
    navCtaLabel: string;
    serviceLinks: LinkItem[];
  };
  home: {
    title: string;
    description: string;
    eyebrow: string;
    headline: string;
    heroCopy: string;
    primaryCta: string;
    secondaryCta: string;
    focusedExpertiseLabel: string;
    focusedExpertiseBody: string;
    metrics: MetricItem[];
    trustItems: string[];
    whoWeHelpEyebrow: string;
    whoWeHelpTitle: string;
    servicesEyebrow: string;
    servicesTitle: string;
    specialisationEyebrow: string;
    specialisationTitle: string;
    specialisationBody: string;
    specialisationItems: string[];
    whyEyebrow: string;
    whyTitle: string;
    whyItems: string[];
    caseStudiesEyebrow: string;
    caseStudiesTitle: string;
    caseStudiesLinkLabel: string;
    ctaEyebrow: string;
    ctaTitle: string;
    ctaBody: string;
  };
  about: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    intro: string;
    sections: SectionBlock[];
    closingEyebrow: string;
    closingTitle: string;
    closingBody: string;
  };
  contact: {
    title: string;
    description: string;
    eyebrow: string;
    heading: string;
    body: string;
    labels: {
      email: string;
      phone: string;
      address: string;
    };
  };
  contactForm: {
    labels: {
      fullName: string;
      company: string;
      email: string;
      phone: string;
      projectType: string;
      message: string;
      honeypot: string;
    };
    projectOptions: string[];
    submitLabel: string;
    submitPendingLabel: string;
    meta: string;
    honeypotName: string;
    source: string;
    defaultProjectType: string;
    statusSubmitting: string;
    statusSuccess: string;
    statusHoneypot: string;
    statusMissingEndpoint: string;
    statusRateLimited: string;
    statusFallback: string;
  };
  services: {
    overviewTitle: string;
    overviewDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    items: ServiceItem[];
  };
  industries: {
    overviewTitle: string;
    overviewDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    items: IndustryItem[];
  };
  audiences: {
    overviewTitle: string;
    overviewDescription: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
    intro: string;
    sections: SectionBlock[];
    closingEyebrow: string;
    closingTitle: string;
    closingBody: string;
    items: AudienceItem[];
  };
  caseStudiesPage: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroDescription: string;
  };
  caseStudies: CaseStudy[];
}
