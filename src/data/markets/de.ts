import { ukMarket } from "./uk";
import type { MarketDefinition } from "./types";

export const deMarket = {
  ...ukMarket,
  locale: "de",
  lang: "de-DE",
  site: {
    ...ukMarket.site,
    name: "Elevon Automation Deutschland",
    brandSecondary: "Deutschland",
    url: "https://www.elevoncontrols.de",
    domain: "elevoncontrols.de",
    email: "info@elevoncontrols.de",
    phone: "+49 30 0000 0000",
    mobile: "+49 170 0000000",
    address: "Deutschland",
    location: "Deutschland",
    tenantName: "elevon-de"
  },
  navigation: [
    { href: "/", label: "Start" },
    { href: "/services", label: "Leistungen" },
    { href: "/industries", label: "Branchen" },
    { href: "/who-we-help", label: "Zielgruppen" },
    { href: "/case-studies", label: "Projekte" },
    { href: "/about", label: "Unternehmen" },
    { href: "/contact", label: "Kontakt" }
  ],
  footer: {
    ...ukMarket.footer,
    summary: "SPS-Programmierung, Schaltschrankplanung und Inbetriebnahmeunterstutzung fur industrielle Automatisierungsprojekte in Deutschland.",
    companyHeading: "Unternehmen",
    servicesHeading: "Leistungen",
    contactHeading: "Kontakt",
    copyright: "Engineering fur industrielle Automatisierung.",
    navCtaLabel: "Anfrage senden",
    serviceLinks: [
      { href: "/services/plc-programming", label: "SPS-Programmierung" },
      { href: "/services/control-panel-design", label: "Schaltschrankplanung" },
      { href: "/services/hmi-scada", label: "HMI und SCADA" },
      { href: "/services/commissioning-support", label: "Inbetriebnahme" }
    ]
  },
  home: {
    ...ukMarket.home,
    title: "SPS-Programmierung und Automatisierungstechnik fur Pumpensysteme",
    description: "Technische Unterstutzung fur Schaltschrankbauer, Systemintegratoren und Auftragnehmer in Deutschland mit Fokus auf SPS-Programmierung, Steuerungsplanung und Inbetriebnahme.",
    eyebrow: "Industrielle Automatisierung und SPS-Engineering",
    headline: "SPS-Programmierung und strukturierte Automatisierungsunterstutzung fur Pumpensysteme und Industrieanlagen",
    heroCopy: "Wir unterstutzen Schaltschrankbauer, Systemintegratoren und technische Auftragnehmer in Deutschland mit strukturierter SPS-Programmierung, Schaltschrankplanung sowie Inbetriebnahmeunterstutzung.",
    primaryCta: "Projekt anfragen",
    secondaryCta: "Gesprach planen",
    focusedExpertiseLabel: "Schwerpunkt",
    focusedExpertiseBody: "Pumpstationen, Wasserinfrastruktur, SCADA und technische Unterstutzung wahrend der Umsetzung.",
    whoWeHelpEyebrow: "Zielgruppen",
    whoWeHelpTitle: "Unterstutzung fur technische Teams mit Bedarf an zusatzlicher Automatisierungskapazitat",
    servicesEyebrow: "Leistungen",
    servicesTitle: "Engineering-Leistungen fur Automatisierungsprojekte",
    specialisationEyebrow: "Spezialisierung",
    specialisationTitle: "Fokus auf Pumpen-, Wasser- und Infrastrukturprojekte",
    specialisationBody: "Wir bringen praktische Erfahrung aus Pumpensystemen und wasserbezogenen Anwendungen ein und unterstutzen bei der Entwicklung robuster, wartbarer Steuerungslosungen.",
    whyEyebrow: "Warum Elevon",
    whyTitle: "Warum deutsche Projektteams mit uns arbeiten",
    whyItems: ["Strukturierte technische Umsetzung", "Klare Kommunikation und Dokumentation", "Zuverlassige Unterstutzung in kritischen Projektphasen", "Erfahrung mit Wasser- und Pumpensystemen", "Rollenklarheit als externer Engineering-Partner"],
    caseStudiesEyebrow: "Referenzprojekte",
    caseStudiesTitle: "Praxisnahe Projektbeispiele",
    caseStudiesLinkLabel: "Alle Projekte ansehen",
    ctaEyebrow: "Nachstes Projekt",
    ctaTitle: "Benotigen Sie Unterstutzung fur Ihr nachstes Automatisierungsprojekt?",
    ctaBody: "Ob SPS-Programmierung, Schaltschrankplanung oder Inbetriebnahmeunterstutzung: Wir bringen uns strukturiert in bestehende Projektteams ein."
  },
  about: {
    ...ukMarket.about,
    title: "Unternehmen",
    description: "Uber Elevon Deutschland und unseren Fokus auf industrielle Automatisierung.",
    heroEyebrow: "Unternehmen",
    heroTitle: "Automatisierungsengineering mit Struktur, Klarheit und technischem Fokus",
    heroDescription: "Elevon Deutschland unterstutzt industrielle Projekte mit SPS-Programmierung, Schaltschrankplanung, HMI/SCADA-Entwicklung und Inbetriebnahmeunterstutzung.",
    intro: "Wir arbeiten vor allem mit Schaltschrankbauern, Systemintegratoren und technischen Auftragnehmern zusammen und erganzen bestehende Projektteams mit belastbarer Automatisierungsexpertise.",
    closingEyebrow: "Partnerschaft",
    closingTitle: "Technische Zuverlassigkeit fur anspruchsvolle Automatisierungsprojekte",
    closingBody: "Wir verstehen uns als strukturierter Engineering-Partner fur Unternehmen in Deutschland, die zusatzliche Automatisierungskapazitat mit klaren Verantwortlichkeiten benotigen."
  },
  contact: {
    ...ukMarket.contact,
    title: "Kontakt",
    description: "Kontaktieren Sie Elevon Deutschland fur SPS-Programmierung, Schaltschrankplanung oder Inbetriebnahmeunterstutzung.",
    eyebrow: "Kontakt",
    heading: "Sprechen wir uber Ihr nachstes Automatisierungsprojekt",
    body: "Wenn Sie strukturierte Unterstutzung in SPS-Programmierung, Schaltschrankplanung oder Inbetriebnahme benotigen, freuen wir uns auf Ihre Anfrage.",
    labels: { email: "E-Mail", phone: "Telefon", address: "Adresse" }
  },
  contactForm: {
    ...ukMarket.contactForm,
    labels: {
      fullName: "Name",
      company: "Unternehmen",
      email: "E-Mail",
      phone: "Telefon",
      projectType: "Projekttyp",
      message: "Projektbeschreibung",
      honeypot: "Dieses Feld bitte leer lassen"
    },
    projectOptions: ["SPS-Programmierung", "Schaltschrankplanung", "Inbetriebnahme", "Allgemeine Anfrage"],
    submitLabel: "Anfrage senden",
    submitPendingLabel: "Wird gesendet...",
    meta: "In der Regel antworten wir innerhalb von 24 Stunden.",
    source: "website-contact-form-de",
    defaultProjectType: "Allgemeine Anfrage",
    statusSubmitting: "Anfrage wird gesendet...",
    statusSuccess: "Anfrage erfolgreich gesendet. Wir melden uns zeitnah.",
    statusHoneypot: "Vielen Dank. Ihre Anfrage wurde empfangen.",
    statusMissingEndpoint: "Der Endpunkt fur das Kontaktformular ist nicht konfiguriert.",
    statusRateLimited: "Es wurden zuletzt zu viele Anfragen gesendet. Bitte versuchen Sie es in einer Minute erneut.",
    statusFallback: "Ihre Anfrage konnte aktuell nicht gesendet werden. Bitte schreiben Sie an info@elevoncontrols.de oder versuchen Sie es spater erneut."
  },
  services: {
    ...ukMarket.services,
    overviewTitle: "Engineering-Leistungen fur industrielle Automatisierung",
    overviewDescription: "SPS-Programmierung, Schaltschrankplanung, HMI- und SCADA-Entwicklung sowie Inbetriebnahmeunterstutzung.",
    heroEyebrow: "Leistungen",
    heroTitle: "Automatisierungsleistungen mit technischem Fokus",
    heroDescription: "Strukturierte Unterstutzung fur Projekte in Deutschland, von der Steuerungsplanung bis zur Inbetriebnahme.",
    items: ukMarket.services.items.map((service) => ({
      ...service,
      title: service.slug === "plc-programming" ? "SPS-Programmierung" : service.slug === "control-panel-design" ? "Schaltschrankplanung" : service.slug === "hmi-scada" ? "HMI und SCADA" : "Inbetriebnahme und Support"
    }))
  },
  industries: {
    ...ukMarket.industries,
    overviewTitle: "Branchen",
    overviewDescription: "Automatisierungsunterstutzung fur Pumpensysteme, Wasserinfrastruktur und ausgewahlte Industrieprozesse.",
    heroEyebrow: "Branchen",
    heroTitle: "Fokus auf technisch passende Anwendungsbereiche",
    heroDescription: "Unsere Positionierung bleibt klar: Pumpensysteme, Wasser- und Abwasseranwendungen sowie ausgewahlte Industrieprozesse.",
    items: ukMarket.industries.items.map((industry) => ({
      ...industry,
      title: industry.slug === "pump-systems" ? "Pumpensysteme" : industry.slug === "water-wastewater" ? "Wasser und Abwasser" : "Industrieprozesse"
    }))
  },
  audiences: {
    ...ukMarket.audiences,
    overviewTitle: "Zielgruppen",
    overviewDescription: "Unterstutzung fur technische Teams mit Bedarf an zusatzlicher SPS- und Automatisierungskapazitat.",
    heroEyebrow: "Zielgruppen",
    heroTitle: "Wir unterstutzen technische Teams mit zusatzlicher Automatisierungskapazitat",
    heroDescription: "Wir arbeiten mit Unternehmen, die fur ihre Projekte zusatzliche Engineering-Kapazitat in SPS und Automatisierung benotigen, ohne interne Strukturen umzubauen.",
    intro: "Unsere Rolle ist die eines technischen Partners, der bestehende Teams erganzt und Projektverantwortung klar respektiert.",
    closingEyebrow: "Kapazitat",
    closingTitle: "Zusatzliche Automatisierungsunterstutzung genau dann, wenn Projekte es verlangen",
    closingBody: "Wenn Ihr Team zusatzliche SPS- oder Automatisierungskapazitat benotigt, konnen wir uns strukturiert in Ihr Projekt einfugen und definierte Aufgaben ubernehmen.",
    items: ukMarket.audiences.items.map((audience) => ({
      ...audience,
      title: audience.slug === "panel-builders" ? "Schaltschrankbauer" : audience.slug === "system-integrators" ? "Systemintegratoren" : "Technische Auftragnehmer"
    }))
  },
  caseStudiesPage: {
    ...ukMarket.caseStudiesPage,
    title: "Projekte",
    description: "Ausgewahlte Projekte mit Fokus auf SPS-Programmierung, Schaltschrankplanung und Inbetriebnahmeunterstutzung.",
    heroEyebrow: "Projekte",
    heroTitle: "Ausgewahlte Projektbeispiele",
    heroDescription: "Kurze Einblicke in typische Aufgabenstellungen und praktische Ergebnisse."
  },
  caseStudies: [
    {
      title: "SPS-Modernisierung fur eine Pumpstation",
      summary: "Neustrukturierung der SPS-Software und Uberarbeitung des HMI fur eine Pumpstation mit Fokus auf Betriebssicherheit und Transparenz.",
      result: "Verbesserte Steuerungslogik, klarere Alarmierung und bessere Sichtbarkeit im laufenden Betrieb."
    },
    {
      title: "Schaltschrankplanung fur ein Druckerhohungssystem",
      summary: "Elektroplanung und SPS-Umsetzung fur ein industrielles Druckerhohungssystem in enger Abstimmung mit der Ausfuhrung.",
      result: "Saubere Dokumentation, bessere Projektkoordination und effizientere Inbetriebnahme."
    },
    {
      title: "Remote-Unterstutzung in der Inbetriebnahme",
      summary: "Technische Diagnose und finale Anpassungen fur ein Projektteam mit engem Zeitfenster in der Schlussphase.",
      result: "Weniger Verzogerung und ein strukturierterer Projektabschluss."
    }
  ]
} satisfies MarketDefinition;
