export const siteConfig = {
  company: {
    name: "Jard'in baie",
    tagline: "Votre paysagiste expert en Baie de Somme",
    description: "Spécialisé dans l'aménagement et l'entretien d'espaces verts depuis 20 ans, Jard'in baie transforme vos jardins avec passion et savoir-faire. De la création à l'entretien, nous sublisons vos extérieurs dans le respect de l'environnement de la Baie de Somme."
  },
  contact: {
    phoneDisplay: "06 26 27 07 98",
    phoneE164: "+33626270798",
    email: "Nous contacter via le formulaire"
  },
  location: {
    city: "Miannay",
    region: "Hauts-de-France",
    radiusKm: 30,
    coords: {
      lat: 50.1027858,
      lng: 1.7278575
    },
    villes: [
      "Miannay",
      "Abbeville",
      "Rue",
      "Saint-Riquier",
      "Crécy-en-Ponthieu",
      "Forest-Montiers",
      "Nouvion-en-Ponthieu",
      "Ponthoile",
      "Saint-Valery-sur-Somme",
      "Le Crotoy",
      "Noyelles-sur-Mer",
      "Cayeux-sur-Mer"
    ],
    realisationsVilles: [
      "Miannay",
      "Abbeville",
      "Rue",
      "Saint-Riquier",
      "Saint-Valery-sur-Somme",
      "Le Crotoy"
    ],
    temoignagesVilles: [
      "Miannay",
      "Abbeville",
      "Rue"
    ]
  },
  stats: {
    projectsCount: "250+",
    yearsExperience: "20 ans"
  },
  googleReviews: {
    rating: "5.0",
    count: 30,
    searchQuery: "Jard'in+baie+Miannay+avis"
  },
  seo: {
    titleTemplate: "%s - Jard'in baie | Paysagiste Miannay",
    defaultTitle: "Jard'in baie - Paysagiste à Miannay | Aménagement jardins Baie de Somme",
    metaDescription: "Paysagiste professionnel à Miannay depuis 20 ans. Création, aménagement et entretien d'espaces verts en Baie de Somme. Devis gratuit - Note 5/5 ⭐",
    url: "https://jardin-baie-paysagiste.fr"
  }
};

export const googleReviewsSearchUrl = () => `https://www.google.com/search?q=${siteConfig.googleReviews.searchQuery}`;

export type SiteConfig = typeof siteConfig;