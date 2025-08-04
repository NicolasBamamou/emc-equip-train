export const heavyEquipmentSpecialization = {
  id: 'heavy-equipment',
  title: "Formation Opérateur d'Équipements Lourds",
  image: "/sip-equip-train/images/Loader operating.jpg",
  introduction: "Devenez un opérateur qualifié d'engins lourds grâce à une formation pratique sur excavatrices, bulldozers, camions-bennes, chargeuses et niveleuses.",
  description: "Cette spécialisation met l'accent sur la formation pratique à l'utilisation d'équipements tels que : Excavatrices, Bulldozers, Camions-bennes, Chargeuses sur pneus, Niveleuses. Toutes nos formations actuelles sont regroupées ici.",
  coreCourses: [
    "Certification d'Opérateur d'Excavatrice",
    "Programme de Formation Bulldozer",
    "Certification Opérateurs de Chargeuses"
  ],
  certifications: [
    "NCCER Opérations d'Équipement Lourd",
    "Certificat d'opérateur de pelle et chargeur hydraulique",
    "Certification NCCCO d'Opérateur de Grue Mobile"
  ],
  rating: 4.8,
  courses: [
    {
      id: "excavator",
      title: "Certification d'Opérateur d'Excavatrice",
      duration: "4 Semaines Intensives",
      level: "Débutant à Avancé",
      price: "6.500.000FG",
      image: "/sip-equip-train/images/Excavator.png",
      description: "Formation pratique complète alignée sur les normes minières et BTP pour devenir opérateur d'excavatrice certifié.",
      detailedDescription: "Ce cours intensif de 4 semaines (160 heures) combine 70% de pratique et 30% de théorie pour former des opérateurs d'excavatrice compétents et sûrs. La formation couvre les fondamentaux de sécurité, les techniques opérationnelles avancées, la maintenance préventive et les scénarios réels d'optimisation.",
      link: "/courses/excavator-certification",
      topics: [
        "Règles de chantier et lecture de plans",
        "Équipements de protection et lois locales",
        "Contrôles de base et creusement précis",
        "Chargement camion et travail en pente",
        "Vérifications quotidiennes et lubrification",
        "Diagnostic de pannes simples",
        "Chantiers simulés miniers et BTP",
        "Gestion des obstacles et efficacité énergétique"
      ],
      certification: "Certificat d'Opérateur d'Excavatrice Niveau 1 (valide 5 ans, conforme CQP TPE)"
    },
    {
      id: "bulldozer",
      title: "Programme de Formation Bulldozer",
      duration: "3 Semaines",
      level: "Débutant à Intermédiaire",
      price: "5.500.000FG",
      image: "./images/Dozer.png",
      description: "Apprenez à utiliser les bulldozers de manière sûre et efficace pour le défrichage, le nivellement et les opérations de manutention de matériaux.",
      topics: [
        "Types et applications de bulldozers",
        "Procédures de sécurité et gestion des risques",
        "Techniques d'opération de base",
        "Refend et chargement par poussée",
        "Travail en pente et techniques de finition",
        "Vérification et interprétation de niveau",
        "Procédures de maintenance de base"
      ],
      certification: "NCCER Opérations d'Équipement Lourd - Bulldozer"
    },
    {
      id: "Chargeuses",
      title: "Certification Opérateurs de Chargeuses",
      duration: "5 Semaines",
      level: "Débutant",
      price: "5.500.000FG",
      image: "./images/Loader.png",
      description: "Seulement 12 semaines pour doter nos stagiaires des compétences essentielles nécessaires à l'exploitation efficace et sécurisée des chargeuses dans l'industrie minière.",
      topics: [
        "Maîtrise de la chargeuse : Conduite, manœuvres et productivité",
        "Sécurité en milieu minier : Protocoles, prévention des risques et EPI",
        "Entretien de base : Inspection, maintenance et détection des pannes",
        "Efficacité opérationnelle : Chargement, transport et déchargement optimisés",
        "Lecture de plans et signalisation : Communication et respect des consignes",
        "Gestion des terrains difficiles : Adaptation aux conditions minières extrêmes",
        "Réglementation minière : Normes, législation et bonnes pratiques",
      ],
      certification: "Certificat d'opérateur de pelle et chargeur hydraulique"
    },
    {
      id: "backhoe",
      title: "Formation d'Opérateur de Pelle Rétrocaveuse",
      duration: "3 Semaines",
      level: "Débutant à Intermédiaire",
      price: "6.500.000FG",
      image: "./images/Backhoe-2.png",
      description: "Maîtrisez l'opération de chargeuses-pelleteuses pour l'excavation, le creusement de tranchées et la manutention de matériaux.",
      topics: [
        "Composants et commandes de la pelle rétrocaveuse",
        "Procédures de sécurité et sensibilisation aux dangers",
        "Techniques d'opération de chargeur",
        "Techniques d'opération d'excavateur",
        "Procédures de tranchée et de remblayage",
        "Manutention des matériaux et chargement de camions",
        "Maintenance de base et dépannage"
      ],
      certification: "NCCER Opérations d'Équipement Lourd - Pelle Rétrocaveuse"
    },
    {
      id: "camion",
      title: "Certification d'Opérateur de camion minier",
      duration: "4 Semaines",
      level: "Débutant à Avancé",
      price: "2.500.000FG",
      image: "./images/Rock-Truck.png",
      description: "Notre formation spécialisée en camion minier vous prépare à conduire et opérer ces véhicules puissants dans les environnements les plus exigeants.",
      topics: [
        "Conduite et manœuvres : Maîtrise du camion articulé en terrain difficile",
        "Sécurité et prévention : Respect des protocoles et gestion des risques",
        "Chargement et déchargement : Optimisation des cycles de travail",
        "Entretien et diagnostic : Inspection quotidienne et détection des pannes",
        "Navigation et communication : Lecture des plans et signalisation en site minier",
        "Gestion du carburant et productivité : Techniques pour une utilisation efficace de l'engin",
        "Réglementation minière : Conformité aux normes de sécurité et d'exploitation",
      ],
      certification: "Certificat d'opérateur de camion minier"
    },
    {
      id: "crane",
      title: "Certification d'Opérateur de Grue",
      duration: "6 Semaines",
      level: "Intermédiaire à Avancé",
      price: "5.500.000FG",
      image: "./images/crane.webp",
      description: "Formation complète sur l'opération de grues mobiles, les protocoles de sécurité et la gestion des charges.",
      topics: [
        "Types et composants de grues",
        "Tableaux de charge et calculs de capacité",
        "Évaluation et procédures d'installation du site",
        "Techniques de gréage et sécurisation des charges",
        "Signalisation et communication",
        "Planification de levage critique",
        "Procédures d'urgence et dépannage"
      ],
      certification: "Certification NCCCO d'Opérateur de Grue Mobile"
    },
  ]
}; 