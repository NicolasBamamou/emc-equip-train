export const electricalMechatronicsSpecialization = {
  id: 'electrical-mechatronics',
  title: "Formation en Électricité et Mécatronique",
  image: "/sip-equip-train/images/crane.webp",
  introduction: "Préparez-vous aux métiers techniques de l'automatisation, de l'électrification et de la maintenance avancée dans les mines modernes.",
  description: "Cette spécialisation est essentielle pour les opérations minières modernes, de plus en plus automatisées et électrifiées. Elle forme des techniciens capables de maintenir, diagnostiquer et optimiser les systèmes électriques, électroniques et mécatroniques des équipements miniers.",
  coreCourses: [
    "Sécurité électrique et pratiques en milieu de travail",
    "Circuits DC/AC et mesures de base",
    "Automatisation et systèmes à capteurs"
  ],
  certifications: [
    "Certificat de Technicien Électricien Minier",
    "Certification Automatisation & PLC Industriel"
  ],
  rating: 4.8,
  courses: [
    {
      id: "securite-electrique-base",
      title: "Sécurité électrique et pratiques en milieu de travail",
      duration: "2 Semaines",
      level: "Débutant",
      price: "1.200.000FG",
      image: "./images/expert.jpg",
      description: "Apprenez les fondamentaux de la sécurité électrique et les bonnes pratiques pour travailler en toute sécurité avec l'électricité en milieu minier.",
      topics: [
        "Principes de base de la sécurité électrique",
        "Équipements de protection individuelle électriques",
        "Procédures de coupure et de consignation",
        "Premiers secours en cas d'accident électrique"
      ],
      certification: "Certificat de Sécurité Électrique"
    },
    {
      id: "circuits-dc-ac",
      title: "Circuits DC/AC et mesures de base",
      duration: "3 Semaines",
      level: "Débutant",
      price: "1.800.000FG",
      image: "./images/working.jpg",
      description: "Maîtrisez les bases des circuits électriques DC/AC et apprenez à effectuer des mesures fondamentales avec les instruments appropriés.",
      topics: [
        "Loi d'Ohm et calculs électriques de base",
        "Utilisation du multimètre et autres instruments",
        "Analyse de circuits simples DC et AC",
        "Mesures de tension, courant et résistance"
      ],
      certification: "Attestation Circuits DC/AC"
    },
    {
      id: "techniques-cablage",
      title: "Techniques de câblage et normes de câblage",
      duration: "2 Semaines",
      level: "Débutant",
      price: "1.500.000FG",
      image: "./images/Loader.png",
      description: "Apprenez les techniques professionnelles de câblage et les normes à respecter pour des installations électriques sûres et conformes.",
      topics: [
        "Types de câbles et leurs applications",
        "Normes de couleur et codes électriques",
        "Techniques de raccordement et sertissage",
        "Sécurité et bonnes pratiques de câblage"
      ],
      certification: "Certificat de Câblage Électrique"
    },
    {
      id: "lecture-schemas",
      title: "Lecture de schémas électriques et symboles",
      duration: "2 Semaines",
      level: "Débutant",
      price: "1.400.000FG",
      image: "./images/teaminfo.jpg",
      description: "Développez vos compétences en lecture et interprétation des schémas électriques et maîtrisez la symbolisation normalisée.",
      topics: [
        "Symboles électriques normalisés",
        "Lecture de plans électriques industriels",
        "Schémas de puissance et de commande",
        "Exercices pratiques d'interprétation"
      ],
      certification: "Attestation Lecture de Schémas"
    },
    {
      id: "moteurs-generateurs",
      title: "Principes de base des moteurs et générateurs",
      duration: "3 Semaines",
      level: "Débutant",
      price: "2.000.000FG",
      image: "./images/crane.webp",
      description: "Découvrez les principes fondamentaux de fonctionnement des moteurs électriques et générateurs utilisés dans l'industrie minière.",
      topics: [
        "Principes de fonctionnement des moteurs électriques",
        "Types de générateurs et leurs applications",
        "Maintenance de base des machines électriques",
        "Applications spécifiques en milieu minier"
      ],
      certification: "Certificat Moteurs & Générateurs"
    },
    {
      id: "moteurs-vfd",
      title: "Moteurs électriques et variateurs de fréquence (VFD)",
      duration: "4 Semaines",
      level: "Intermédiaire",
      price: "2.800.000FG",
      image: "./images/Excavator.png",
      description: "Approfondissez vos connaissances sur les moteurs électriques et maîtrisez l'utilisation des variateurs de fréquence pour l'optimisation énergétique.",
      topics: [
        "Types de moteurs électriques industriels",
        "Principe de fonctionnement des VFD",
        "Programmation et paramétrage des variateurs",
        "Applications et avantages économiques"
      ],
      certification: "Certificat VFD et Moteurs Électriques"
    },
    {
      id: "capteurs-actionneurs",
      title: "Capteurs industriels et actionneurs",
      duration: "3 Semaines",
      level: "Intermédiaire",
      price: "2.200.000FG",
      image: "./images/Dozer.png",
      description: "Explorez le monde des capteurs industriels et actionneurs, éléments essentiels des systèmes automatisés modernes.",
      topics: [
        "Types de capteurs : température, pression, position",
        "Actionneurs pneumatiques, hydrauliques et électriques",
        "Intégration capteurs-actionneurs en automatisme",
        "Diagnostic et maintenance préventive"
      ],
      certification: "Certificat Capteurs & Actionneurs"
    },
    {
      id: "programmation-plc",
      title: "Programmation PLC et systèmes de contrôle (Siemens, Allen-Bradley)",
      duration: "6 Semaines",
      level: "Intermédiaire",
      price: "4.200.000FG",
      image: "./images/teaminfo.jpg",
      description: "Maîtrisez la programmation des automates programmables (PLC) avec les plateformes Siemens et Allen-Bradley, piliers de l'automatisation industrielle.",
      topics: [
        "Introduction aux PLC et leur architecture",
        "Langages de programmation (Ladder, FBD, ST)",
        "Programmation Siemens TIA Portal",
        "Programmation Allen-Bradley Studio 5000",
        "Développement d'applications industrielles"
      ],
      certification: "Certification PLC Siemens/Allen-Bradley"
    },
    {
      id: "systemes-electriques-mines",
      title: "Systèmes électriques dans les mines (transformateurs, TGBT, appareillage)",
      duration: "4 Semaines",
      level: "Intermédiaire",
      price: "3.000.000FG",
      image: "./images/minig.jpg",
      description: "Spécialisez-vous dans les systèmes électriques spécifiques aux environnements miniers : transformateurs, tableaux électriques et appareillage de puissance.",
      topics: [
        "Transformateurs de puissance en mines",
        "Tableaux généraux basse tension (TGBT)",
        "Appareillage de protection et de commande",
        "Distribution électrique en site minier"
      ],
      certification: "Certificat Systèmes Électriques Miniers"
    },
    {
      id: "batteries-electronique-puissance",
      title: "Systèmes de batteries et électronique de puissance pour engins électriques",
      duration: "3 Semaines",
      level: "Intermédiaire",
      price: "2.600.000FG",
      image: "./images/Loader.png",
      description: "Explorez les technologies de batteries et d'électronique de puissance pour les engins miniers électriques et hybrides.",
      topics: [
        "Technologies de batteries : Li-ion, LiFePO4",
        "Systèmes de gestion de batterie (BMS)",
        "Électronique de puissance et onduleurs",
        "Sécurité et maintenance des systèmes batteries"
      ],
      certification: "Certificat Batteries & Électronique de Puissance"
    },
    {
      id: "systemes-mechatroniques",
      title: "Systèmes mécatroniques sur équipements miniers mobiles et fixes",
      duration: "5 Semaines",
      level: "Avancé",
      price: "3.800.000FG",
      image: "./images/Rock-Truck.png",
      description: "Maîtrisez l'intégration des systèmes mécatroniques dans les équipements miniers pour une automatisation avancée et une maintenance prédictive.",
      topics: [
        "Intégration mécanique-électronique-informatique",
        "Systèmes automatisés sur engins mobiles",
        "Capteurs avancés et IoT industriel",
        "Maintenance prédictive et diagnostic automatique"
      ],
      certification: "Certificat Mécatronique Minière"
    },
    {
      id: "automatisation-scada",
      title: "Automatisation et systèmes SCADA pour applications minières",
      duration: "5 Semaines",
      level: "Avancé",
      price: "4.000.000FG",
      image: "./images/team.jpg",
      description: "Développez vos compétences en automatisation industrielle et maîtrisez les systèmes SCADA pour la supervision des opérations minières.",
      topics: [
        "Architecture des systèmes SCADA",
        "Développement d'interfaces homme-machine (IHM)",
        "Contrôle à distance et télésurveillance",
        "Applications SCADA spécifiques aux mines"
      ],
      certification: "Certificat SCADA et Automatisation Minière"
    },
    {
      id: "diagnostic-electrique",
      title: "Diagnostic électrique et recherche de pannes",
      duration: "4 Semaines",
      level: "Avancé",
      price: "3.200.000FG",
      image: "./images/working.jpg",
      description: "Développez une expertise en diagnostic électrique et apprenez les méthodes systématiques de recherche et résolution de pannes.",
      topics: [
        "Méthodologie de diagnostic électrique",
        "Outils de diagnostic avancés",
        "Analyse des défaillances électriques",
        "Études de cas pratiques en environnement minier"
      ],
      certification: "Certificat Diagnostic Électrique Avancé"
    },
    {
      id: "protocoles-communication",
      title: "Protocoles de communication industrielle (Modbus, CANbus, Profibus)",
      duration: "4 Semaines",
      level: "Avancé",
      price: "3.400.000FG",
      image: "./images/Secretary.jpg",
      description: "Maîtrisez les protocoles de communication industrielle essentiels pour l'interconnexion des systèmes automatisés en environnement minier.",
      topics: [
        "Protocole Modbus RTU et TCP/IP",
        "CANbus pour équipements mobiles",
        "Profibus pour automatisation industrielle",
        "Configuration et dépannage des réseaux"
      ],
      certification: "Certificat Protocoles Communication Industrielle"
    },
    {
      id: "equipements-haute-tension",
      title: "Exploitation et maintenance des équipements haute tension",
      duration: "4 Semaines",
      level: "Avancé",
      price: "3.600.000FG",
      image: "./images/expert.jpg",
      description: "Spécialisez-vous dans l'exploitation et la maintenance sécurisée des équipements haute tension utilisés dans l'industrie minière.",
      topics: [
        "Sécurité haute tension et habilitations",
        "Maintenance préventive des équipements HT",
        "Procédures d'intervention en toute sécurité",
        "Diagnostic et dépannage haute tension"
      ],
      certification: "Certificat Haute Tension Minier"
    }
  ],
  subcategories: [
    {
      id: 'foundational',
      title: 'Cours Fondamentaux',
      courses: [
        { title: 'Sécurité électrique et pratiques en milieu de travail', id: 'securite-electrique-base' },
        { title: 'Circuits DC/AC et mesures de base', id: 'circuits-dc-ac' },
        { title: 'Techniques de câblage et normes de câblage', id: 'techniques-cablage' },
        { title: 'Lecture de schémas électriques et symboles', id: 'lecture-schemas' },
        { title: 'Principes de base des moteurs et générateurs', id: 'moteurs-generateurs' },
      ]
    },
    {
      id: 'intermediate',
      title: 'Cours Intermédiaires',
      courses: [
        { title: 'Moteurs électriques et variateurs de fréquence (VFD)', id: 'moteurs-vfd' },
        { title: 'Capteurs industriels et actionneurs', id: 'capteurs-actionneurs' },
        { title: 'Programmation PLC et systèmes de contrôle (Siemens, Allen-Bradley)', id: 'programmation-plc' },
        { title: 'Systèmes électriques dans les mines (transformateurs, TGBT, appareillage)', id: 'systemes-electriques-mines' },
        { title: 'Systèmes de batteries et électronique de puissance pour engins électriques', id: 'batteries-electronique-puissance' },
      ]
    },
    {
      id: 'advanced',
      title: 'Cours Avancés / Spécialisation',
      courses: [
        { title: 'Systèmes mécatroniques sur équipements miniers mobiles et fixes', id: 'systemes-mechatroniques' },
        { title: 'Automatisation et systèmes SCADA pour applications minières', id: 'automatisation-scada' },
        { title: 'Diagnostic électrique et recherche de pannes', id: 'diagnostic-electrique' },
        { title: 'Protocoles de communication industrielle (Modbus, CANbus, Profibus)', id: 'protocoles-communication' },
        { title: 'Exploitation et maintenance des équipements haute tension', id: 'equipements-haute-tension' },
      ]
    },
  ]
}; 