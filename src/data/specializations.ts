// Data for all specializations, modules, and courses

const specializations = [
    {
      id: 'heavy-equipment',
      title: "Formation Opérateur d’Équipements Lourds",
      image: "/emc-equip-train/images/Loader operating.jpg",
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
      duration: "12 Semaines",
      level: "Débutant à Avancé",
      price: "6.500.000FG",
      image: "./images/Excavator.png",
      description: "Maîtrisez l'opération d'excavateurs hydrauliques dans divers contextes de construction et de terrassement.",
      topics: [
        "Types et composants d'excavateurs",
        "Inspection pré-opération et protocoles de sécurité",
        "Techniques d'opération de base et contrôles",
        "Opérations de creusement de tranchées et de nivellement",
        "Techniques de chargement et manutention de matériaux",
        "Manœuvres avancées et excavation de précision",
        "Bases de maintenance et dépannage"
      ],
      certification: "NCCER Opérations d'Équipement Lourd - Excavateur"
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
    },
    {
      id: 'mining-safety',
      title: "Sécurité et Réglementation Minière",
      image: "/emc-equip-train/images/minig.jpg",
      introduction: "Maîtrisez la sécurité minière et la conformité réglementaire pour un environnement de travail sûr et conforme aux normes internationales.",
      description: "Dans le secteur minier, la sécurité est une culture vitale. Cette spécialisation couvre les protocoles de sécurité sur site, la gestion des risques, la formation aux situations d'urgence et la conformité réglementaire.",
      coreCourses: [
        "Introduction à la Sécurité Minière",
        "Évaluation des Risques et Mesures de Contrôle",
        "ISO 45001 Systèmes de Gestion Santé & Sécurité"
      ],
      certifications: [
        "ISO 45001 Santé & Sécurité",
        "Certificat de Sécurité Minière Professionnelle"
      ],
      rating: 4.7,
      courses: [
        {
          id: "intro-securite",
          title: "Introduction à la Sécurité Minière",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.000.000FG",
          image: "./images/smiling.jpg",
          description: "Découvrez les bases de la sécurité dans l'industrie minière, les risques majeurs et la culture de prévention.",
          topics: [
            "Principes fondamentaux de la sécurité minière",
            "Types de risques et dangers courants",
            "Rôle de la prévention et de la culture sécurité"
          ],
          certification: "Attestation de Sécurité Minière - Niveau 1"
        },
        {
          id: "epi",
          title: "Formation sur les Équipements de Protection Individuelle (EPI)",
          duration: "1 Semaine",
          level: "Débutant",
          price: "500.000FG",
          image: "./images/working.jpg",
          description: "Maîtrisez l'utilisation correcte des EPI pour réduire les risques d'accident sur site.",
          topics: [
            "Types d'EPI et leur usage",
            "Procédures de vérification et d'entretien",
            "Obligations légales et bonnes pratiques"
          ],
          certification: "Certificat d'Utilisation des EPI"
        },
        {
          id: "hazard-id",
          title: "Identification des Dangers sur le Lieu de Travail",
          duration: "1 Semaine",
          level: "Débutant",
          price: "700.000FG",
          image: "./images/durabity.jpg",
          description: "Apprenez à repérer, signaler et prévenir les dangers dans l'environnement minier.",
          topics: [
            "Méthodes d'identification des dangers",
            "Signalement et gestion des risques",
            "Études de cas pratiques"
          ],
          certification: "Attestation d'Identification des Dangers"
        },
        {
          id: "emergency",
          title: "Procédures d’Urgence et Premiers Secours",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.200.000FG",
          image: "./images/expert.jpg",
          description: "Formez-vous aux gestes qui sauvent et aux protocoles d'urgence en site minier.",
          topics: [
            "Premiers secours de base",
            "Procédures d'évacuation et d'alerte",
            "Gestion des situations d'urgence"
          ],
          certification: "Certificat de Premiers Secours Minier"
        },
        {
          id: "ergonomie",
          title: "Manutention Manuelle et Ergonomie",
          duration: "1 Semaine",
          level: "Débutant",
          price: "600.000FG",
          image: "./images/working.jpg",
          description: "Réduisez les risques de blessures grâce à de bonnes pratiques de manutention et d'ergonomie.",
          topics: [
            "Principes d'ergonomie au travail",
            "Techniques de levage et de port de charges",
            "Prévention des TMS (troubles musculo-squelettiques)"
          ],
          certification: "Attestation Ergonomie et Manutention"
        },
        {
          id: "incendie",
          title: "Sécurité Incendie de Base et Plans d’Évacuation",
          duration: "1 Semaine",
          level: "Débutant",
          price: "800.000FG",
          image: "./images/work.jpg",
          description: "Maîtrisez les bases de la prévention incendie et les procédures d'évacuation.",
          topics: [
            "Risques d'incendie en milieu minier",
            "Utilisation des extincteurs",
            "Élaboration et application des plans d'évacuation"
          ],
          certification: "Certificat de Sécurité Incendie"
        },
        // Intermediate and advanced courses (add more as needed, using similar structure)
      ],
      subcategories: [
        {
          id: 'foundational',
          title: 'Cours Fondamentaux',
          courses: [
            { title: 'Introduction à la Sécurité Minière' },
            { title: 'Formation sur les Équipements de Protection Individuelle (EPI)' },
            { title: 'Identification des Dangers sur le Lieu de Travail' },
            { title: 'Procédures d’Urgence et Premiers Secours' },
            { title: 'Manutention Manuelle et Ergonomie' },
            { title: 'Sécurité Incendie de Base et Plans d’Évacuation' },
          ]
        },
        {
          id: 'intermediate',
          title: 'Cours Intermédiaires',
          courses: [
            { title: 'Évaluation des Risques et Mesures de Contrôle' },
            { title: 'Utilisation Sécurisée des Engins Lourds' },
            { title: 'Sécurité Environnementale et Gestion des Déchets' },
            { title: 'Formation d’Induction sur Site Minier' },
            { title: 'Rapport d’Incident et Analyse des Causes' },
            { title: 'Protocoles de Sécurité Électrique et Mécanique' },
          ]
        },
        {
          id: 'advanced',
          title: 'Cours Avancés',
          courses: [
            { title: 'ISO 45001 Systèmes de Gestion Santé & Sécurité' },
            { title: 'Réglementation Minière et Conformité (locale + internationale)' },
            { title: 'Gestion Santé & Sécurité pour les Superviseurs' },
            { title: 'Gestion des Matières Dangereuses (HAZMAT)' },
            { title: 'Réponse d’Urgence Avancée & Gestion de Crise' },
            { title: 'Hygiène Industrielle et Santé au Travail' },
          ]
        },
      ]
    },
    {
      id: 'diesel-mechanics',
      title: "Diesel et Mécanique des Véhicules Lourds",
      image: "/emc-equip-train/images/Loader.png",
      introduction: "Maîtrisez le diagnostic, la maintenance et la réparation des camions miniers et engins lourds.",
      description: "Cette spécialisation couvre le dépannage, la maintenance et la réparation des camions et machines minières : moteurs, hydraulique, transmissions, outils de diagnostic (CAT SIS, Cummins INSITE, etc.).",
      coreCourses: [
        "Introduction aux moteurs diesel",
        "Systèmes hydrauliques et transmissions",
        "Diagnostic électronique et outils spécialisés"
      ],
      certifications: [
        "Certificat de Mécanicien Diesel Minier",
        "Certification CAT SIS / Cummins INSITE"
      ],
      rating: 4.6,
      subcategories: [
        {
          id: 'foundational',
          title: 'Cours Fondamentaux',
          courses: [
            { title: 'Introduction aux moteurs diesel', id: 'intro-diesel' },
            { title: 'Outils de base, fixations et sécurité en atelier', id: 'outils-base' },
            { title: 'Vue d’ensemble des systèmes moteurs', id: 'systemes-moteur' },
            { title: 'Lecture de manuels techniques et catalogues de pièces', id: 'lecture-manuels' },
            { title: 'Sécurité en atelier mécanique', id: 'securite-atelier' },
          ]
        },
        {
          id: 'intermediate',
          title: 'Cours Intermédiaires',
          courses: [
            { title: 'Composants moteurs et révision (culasses, pistons, soupapes, etc.)', id: 'composants-moteur' },
            { title: 'Systèmes d’alimentation (Common Rail, Turbos, Injecteurs)', id: 'systemes-alim' },
            { title: 'Systèmes de lubrification et de refroidissement', id: 'lubrification' },
            { title: 'Systèmes de transmission (manuelle, automatique, convertisseurs de couple)', id: 'transmission' },
            { title: 'Systèmes hydrauliques pour engins lourds', id: 'hydraulique' },
            { title: 'Systèmes de freinage, suspension et direction', id: 'freinage' },
          ]
        },
        {
          id: 'advanced',
          title: 'Cours Avancés et Diagnostic',
          courses: [
            { title: 'Systèmes CAN Bus et diagnostics ECU', id: 'canbus' },
            { title: 'Utilisation d’outils de diagnostic (CAT ET, Cummins INSITE, Bosch KTS)', id: 'diagnostic-tools' },
            { title: 'Systèmes électriques des engins lourds (alternateurs, démarreurs, capteurs)', id: 'electrique' },
            { title: 'Maintenance préventive et routines d’inspection', id: 'maintenance-prev' },
            { title: 'Émissions moteurs et conformité environnementale', id: 'emissions' },
            { title: 'Techniques de dépannage et recherche de pannes', id: 'depannage' },
          ]
        },
        {
          id: 'tracks',
          title: 'Parcours de Spécialisation (Optionnels)',
          courses: [
            { title: 'Maintenance CAT, Komatsu ou Volvo', id: 'cat-komatsu' },
            { title: 'Maintenance de camions miniers (Belaz, Howo, Shacman)', id: 'camions-miniers' },
            { title: 'Gestion de flotte et maintenance', id: 'gestion-flotte' },
            { title: 'Systèmes de traction électrique sur engins modernes', id: 'traction-electrique' },
          ]
        },
      ],
      courses: [
        {
          id: "intro-diesel",
          title: "Introduction aux moteurs diesel",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.000.000FG",
          image: "./images/working.jpg",
          description: "Découvrez les bases de la maintenance et de la réparation des moteurs diesel, leurs composants et leurs fonctions.",
          topics: [
            "Types de moteurs diesel et leur fonctionnement",
            "Composants essentiels d'un moteur diesel",
            "Systèmes de lubrification et d'alimentation"
          ],
          certification: "Attestation de Maintenance Diesel"
        },
        {
          id: "outils-base",
          title: "Outils de base, fixations et sécurité en atelier",
          duration: "1 Semaine",
          level: "Débutant",
          price: "500.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à utiliser les outils de base et les équipements de sécurité pour le travail en atelier.",
          topics: [
            "Types d'outils de bricolage et de travail",
            "Utilisation de la clé dynamométrique et de la balance",
            "Équipements de protection individuelle (EPI)"
          ],
          certification: "Attestation de Sécurité en Atelier"
        },
        {
          id: "systemes-moteur",
          title: "Vue d’ensemble des systèmes moteurs",
          duration: "1 Semaine",
          level: "Débutant",
          price: "700.000FG",
          image: "./images/working.jpg",
          description: "Comprenez la structure et le fonctionnement des systèmes moteurs, y compris les systèmes d'alimentation, de lubrification et de refroidissement.",
          topics: [
            "Systèmes d'alimentation (Common Rail, Turbo, Injecteurs)",
            "Systèmes de lubrification et de refroidissement",
            "Systèmes de transmission (manuelle, automatique, convertisseurs de couple)"
          ],
          certification: "Attestation de Systèmes Moteurs"
        },
        {
          id: "lecture-manuels",
          title: "Lecture de manuels techniques et catalogues de pièces",
          duration: "1 Semaine",
          level: "Débutant",
          price: "600.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à lire et à comprendre les manuels d'utilisation et les catalogues de pièces pour la maintenance et la réparation.",
          topics: [
            "Lecture des manuels d'utilisation et de maintenance",
            "Interprétation des codes de dépannage",
            "Utilisation des catalogues de pièces"
          ],
          certification: "Attestation de Lecture de Manuels"
        },
        {
          id: "composants-moteur",
          title: "Composants moteurs et révision (culasses, pistons, soupapes, etc.)",
          duration: "2 Semaines",
          level: "Intermédiaire",
          price: "1.500.000FG",
          image: "./images/working.jpg",
          description: "Découvrez les composants détaillés des moteurs diesel, y compris les culasses, les pistons, les soupapes et les systèmes d'injection.",
          topics: [
            "Culasses et systèmes de refroidissement",
            "Pistons et systèmes d'alimentation",
            "Soupapes et systèmes d'injection"
          ],
          certification: "Attestation de Composants Moteurs"
        },
        {
          id: "systemes-alim",
          title: "Systèmes d’alimentation (Common Rail, Turbos, Injecteurs)",
          duration: "2 Semaines",
          level: "Intermédiaire",
          price: "1.200.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à comprendre et à réparer les systèmes d'alimentation des moteurs diesel, y compris les injecteurs, les turbos et le système Common Rail.",
          topics: [
            "Système Common Rail et injecteurs",
            "Systèmes de turbos et de refroidissement",
            "Réparation des injecteurs et des pompes"
          ],
          certification: "Attestation de Systèmes d'Alimentation"
        },
        {
          id: "lubrification",
          title: "Systèmes de lubrification et de refroidissement",
          duration: "1 Semaine",
          level: "Débutant",
          price: "500.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à comprendre et à réparer les systèmes de lubrification et de refroidissement des moteurs diesel.",
          topics: [
            "Systèmes de lubrification (pompes, filtres, réservoirs)",
            "Systèmes de refroidissement (radiateurs, ventilateurs, circuits)",
            "Réparation des circuits de lubrification"
          ],
          certification: "Attestation de Lubrification"
        },
        {
          id: "transmission",
          title: "Systèmes de transmission (manuelle, automatique, convertisseurs de couple)",
          duration: "1 Semaine",
          level: "Débutant",
          price: "800.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à comprendre et à réparer les systèmes de transmission des moteurs diesel, y compris les boîtes de vitesses, les convertisseurs de couple et les embrayages.",
          topics: [
            "Boîtes de vitesses manuelles et automatiques",
            "Convertisseurs de couple et embrayages",
            "Réparation des systèmes de transmission"
          ],
          certification: "Attestation de Transmission"
        },
        {
          id: "hydraulique",
          title: "Systèmes hydrauliques pour engins lourds",
          duration: "1 Semaine",
          level: "Débutant",
          price: "600.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à comprendre et à réparer les systèmes hydrauliques des engins lourds, y compris les vérins, les pompes, les distributeurs et les circuits.",
          topics: [
            "Vérins et systèmes de levage",
            "Pompes et systèmes de lubrification",
            "Distributeurs et circuits de commande"
          ],
          certification: "Attestation de Systèmes Hydrauliques"
        },
        {
          id: "freinage",
          title: "Systèmes de freinage, suspension et direction",
          duration: "1 Semaine",
          level: "Débutant",
          price: "700.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à comprendre et à réparer les systèmes de freinage, de suspension et de direction des engins lourds.",
          topics: [
            "Systèmes de freinage (freins hydrauliques, pneumatiques)",
            "Systèmes de suspension (ressorts, amortisseurs)",
            "Systèmes de direction (volant, direction assistée)"
          ],
          certification: "Attestation de Freinage et Suspension"
        },
        {
          id: 'securite-electrique',
          title: 'Sécurité électrique et pratiques en milieu de travail',
          duration: '1 Semaine',
          level: 'Débutant',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Introduction à la sécurité électrique et aux bonnes pratiques en atelier.',
          topics: ['Sécurité de base', 'EPI électriques', 'Procédures de coupure'],
          certification: 'Attestation de Sécurité Électrique'
        },
        {
          id: 'dc-ac-circuits',
          title: 'Circuits DC/AC et mesures de base',
          duration: '1 Semaine',
          level: 'Débutant',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Bases des circuits électriques DC/AC et des mesures fondamentales.',
          topics: ['Loi d’Ohm', 'Utilisation du multimètre', 'Schémas de circuits'],
          certification: 'Attestation Circuits DC/AC'
        },
        {
          id: 'cablage',
          title: 'Techniques de câblage et normes de câblage',
          duration: '1 Semaine',
          level: 'Débutant',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Apprenez les techniques de câblage et les normes associées.',
          topics: ['Types de câbles', 'Normes de couleur', 'Sécurité de câblage'],
          certification: 'Attestation de Câblage'
        },
        {
          id: 'lecture-schema',
          title: 'Lecture de schémas électriques et symboles',
          duration: '1 Semaine',
          level: 'Débutant',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Savoir lire et interpréter les schémas électriques et les symboles.',
          topics: ['Symboles normalisés', 'Lecture de plans', 'Exercices pratiques'],
          certification: 'Attestation Lecture de Schémas'
        },
        {
          id: 'moteur-generateur',
          title: 'Principes de base des moteurs et générateurs',
          duration: '1 Semaine',
          level: 'Débutant',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Découverte des principes fondamentaux des moteurs et générateurs.',
          topics: ['Fonctionnement moteur', 'Générateurs', 'Applications minières'],
          certification: 'Attestation Moteurs & Générateurs'
        },
        {
          id: 'vfd',
          title: 'Moteurs électriques et variateurs de fréquence (VFD)',
          duration: '1 Semaine',
          level: 'Intermédiaire',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Étude des moteurs électriques et des variateurs de fréquence.',
          topics: ['Types de moteurs', 'Principe VFD', 'Applications'],
          certification: 'Attestation VFD'
        },
        {
          id: 'capteurs-actionneurs',
          title: 'Capteurs industriels et actionneurs',
          duration: '1 Semaine',
          level: 'Intermédiaire',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Découverte des capteurs et actionneurs industriels.',
          topics: ['Types de capteurs', 'Actionneurs', 'Intégration en automatisme'],
          certification: 'Attestation Capteurs & Actionneurs'
        },
        {
          id: 'plc',
          title: 'Programmation PLC et systèmes de contrôle (Siemens, Allen-Bradley)',
          duration: '2 Semaines',
          level: 'Intermédiaire',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Programmation de PLC et introduction aux systèmes de contrôle.',
          topics: ['Bases PLC', 'Langages de programmation', 'Exemples industriels'],
          certification: 'Attestation PLC'
        },
        {
          id: 'power-systems',
          title: 'Systèmes électriques dans les mines (transformateurs, TGBT, appareillage)',
          duration: '1 Semaine',
          level: 'Intermédiaire',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Étude des systèmes électriques spécifiques aux mines.',
          topics: ['Transformateurs', 'TGBT', 'Appareillage de puissance'],
          certification: 'Attestation Systèmes Électriques'
        },
        {
          id: 'batteries',
          title: 'Systèmes de batteries et électronique de puissance pour engins électriques',
          duration: '1 Semaine',
          level: 'Intermédiaire',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Découverte des batteries et de l’électronique de puissance.',
          topics: ['Types de batteries', 'Gestion de l’énergie', 'Sécurité batteries'],
          certification: 'Attestation Batteries & Électronique'
        },
        {
          id: 'mechatronique',
          title: 'Systèmes mécatroniques sur équipements miniers mobiles et fixes',
          duration: '2 Semaines',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Intégration de la mécatronique dans les équipements miniers.',
          topics: ['Automatisation', 'Capteurs avancés', 'Maintenance prédictive'],
          certification: 'Attestation Mécatronique'
        },
        {
          id: 'scada',
          title: 'Automatisation et systèmes SCADA pour applications minières',
          duration: '2 Semaines',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Automatisation et supervision industrielle avec SCADA.',
          topics: ['SCADA', 'Contrôle à distance', 'Applications minières'],
          certification: 'Attestation SCADA'
        },
        {
          id: 'diagnostic-elec',
          title: 'Diagnostic électrique et recherche de pannes',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Méthodes de diagnostic et de dépannage électrique.',
          topics: ['Outils de diagnostic', 'Méthodes de recherche de pannes', 'Études de cas'],
          certification: 'Attestation Diagnostic Électrique'
        },
        {
          id: 'protocoles-com',
          title: 'Protocoles de communication industrielle (Modbus, CANbus, Profibus)',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Étude des protocoles de communication industrielle.',
          topics: ['Modbus', 'CANbus', 'Profibus'],
          certification: 'Attestation Protocoles Industriels'
        },
        {
          id: 'haute-tension',
          title: 'Exploitation et maintenance des équipements haute tension',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Sécurité et maintenance des équipements haute tension.',
          topics: ['Sécurité HT', 'Maintenance préventive', 'Procédures d’intervention'],
          certification: 'Attestation Haute Tension'
        },
        {
          id: 'securite-atelier',
          title: 'Sécurité en atelier mécanique',
          duration: '1 Semaine',
          level: 'Débutant',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Sécurité et bonnes pratiques en atelier mécanique.',
          topics: ['EPI', 'Procédures de sécurité', 'Prévention des accidents'],
          certification: 'Attestation Sécurité Atelier'
        },
        {
          id: 'canbus',
          title: 'Systèmes CAN Bus et diagnostics ECU',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Diagnostic des systèmes CAN Bus et ECU.',
          topics: ['CAN Bus', 'ECU', 'Diagnostic électronique'],
          certification: 'Attestation CAN Bus'
        },
        {
          id: 'diagnostic-tools',
          title: 'Utilisation d’outils de diagnostic (CAT ET, Cummins INSITE, Bosch KTS)',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Utilisation des outils de diagnostic modernes.',
          topics: ['CAT ET', 'Cummins INSITE', 'Bosch KTS'],
          certification: 'Attestation Diagnostic Outils'
        },
        {
          id: 'electrique',
          title: 'Systèmes électriques des engins lourds (alternateurs, démarreurs, capteurs)',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Étude des systèmes électriques des engins lourds.',
          topics: ['Alternateurs', 'Démarreurs', 'Capteurs'],
          certification: 'Attestation Systèmes Électriques'
        },
        {
          id: 'maintenance-prev',
          title: 'Maintenance préventive et routines d’inspection',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Maintenance préventive et inspection régulière.',
          topics: ['Routines d’inspection', 'Prévention des pannes', 'Check-lists'],
          certification: 'Attestation Maintenance Préventive'
        },
        {
          id: 'emissions',
          title: 'Émissions moteurs et conformité environnementale',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Gestion des émissions et conformité environnementale.',
          topics: ['Normes environnementales', 'Réduction des émissions', 'Contrôle pollution'],
          certification: 'Attestation Conformité Environnementale'
        },
        {
          id: 'depannage',
          title: 'Techniques de dépannage et recherche de pannes',
          duration: '1 Semaine',
          level: 'Avancé',
          price: 'À définir',
          image: '/emc-equip-train/images/Loader.png',
          description: 'Techniques avancées de dépannage.',
          topics: ['Méthodes de recherche de pannes', 'Outils de diagnostic', 'Études de cas'],
          certification: 'Attestation Dépannage'
        },
      ]
    },
    {
      id: 'mining-engineering',
      title: "Génie Minier et Planification des Mines",
      image: "/emc-equip-train/images/Grader.png", // Placeholder, change if you have a better image
      introduction: "De l’exploration à la réhabilitation, devenez l’expert stratégique du secteur minier guinéen.",
      description: "Le génie minier et la planification des mines constituent le cerveau et la stratégie de l’industrie minière. Cette spécialisation couvre l’interprétation des données géologiques, la conception de mines sûres et rentables, la planification de l’extraction, et l’application des cadres environnementaux et réglementaires.",
      coreCourses: [
        "Introduction au génie minier",
        "Méthodes d’exploitation (surface & souterraine)",
        "Planification et conception de mines"
      ],
      certifications: [
        "Certificat de Génie Minier Professionnel",
        "Certification Logiciels de Planification Minière (Surpac, Datamine, etc.)"
      ],
      rating: 4.9,
      courses: [
        {
          id: "intro-genie-minier",
          title: "Introduction au génie minier",
          duration: "3 Semaines",
          level: "Débutant",
          price: "2.000.000FG",
          image: "./images/minig.jpg",
          description: "Découvrez les fondements du génie minier, les principes de base et les applications dans l'industrie extractive.",
          topics: [
            "Histoire et évolution de l'industrie minière",
            "Rôle du génie minier dans l'économie",
            "Cycle de vie d'une mine",
            "Principes de développement durable en mines"
          ],
          certification: "Attestation d'Introduction au Génie Minier"
        },
        {
          id: "methodes-exploitation",
          title: "Méthodes d'exploitation minière (surface & souterraine)",
          duration: "4 Semaines",
          level: "Débutant à Intermédiaire",
          price: "2.500.000FG",
          image: "./images/Excavator.png",
          description: "Apprenez les différentes méthodes d'extraction à ciel ouvert et souterraine, leurs applications et critères de sélection.",
          topics: [
            "Exploitation à ciel ouvert : fosse, carrière, découverture",
            "Méthodes souterraines : chambres et piliers, longue taille",
            "Critères de choix des méthodes d'exploitation",
            "Avantages et inconvénients de chaque méthode"
          ],
          certification: "Certificat de Méthodes d'Exploitation Minière"
        },
        {
          id: "geologie-mecanique",
          title: "Bases de géologie et mécanique des roches",
          duration: "3 Semaines",
          level: "Débutant",
          price: "2.200.000FG",
          image: "./images/working.jpg",
          description: "Comprenez les propriétés géologiques et mécaniques des roches essentielles pour la planification minière.",
          topics: [
            "Classification des roches et minéraux",
            "Propriétés mécaniques des roches",
            "Stabilité des massifs rocheux",
            "Essais géotechniques de base"
          ],
          certification: "Attestation de Géologie et Mécanique des Roches"
        },
        {
          id: "terminologie-operations",
          title: "Terminologie et opérations minières",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.500.000FG",
          image: "./images/team.jpg",
          description: "Maîtrisez le vocabulaire technique et les opérations de base du secteur minier.",
          topics: [
            "Terminologie technique minière",
            "Opérations unitaires : forage, minage, chargement, transport",
            "Organisation d'un site minier",
            "Flux de matières et processus"
          ],
          certification: "Certificat de Terminologie Minière"
        },
        {
          id: "securite-environnement",
          title: "Sécurité minière et considérations environnementales",
          duration: "3 Semaines",
          level: "Débutant",
          price: "2.000.000FG",
          image: "./images/expert.jpg",
          description: "Intégrez les aspects sécuritaires et environnementaux dans la planification et les opérations minières.",
          topics: [
            "Réglementation minière et sécurité",
            "Impact environnemental des mines",
            "Gestion des résidus miniers",
            "Plans de fermeture et réhabilitation"
          ],
          certification: "Certificat de Sécurité et Environnement Minier"
        },
        {
          id: "topographie-cartographie",
          title: "Topographie et cartographie minière",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "2.300.000FG",
          image: "./images/Grader.png",
          description: "Apprenez les techniques de levé topographique et de cartographie spécifiques aux mines.",
          topics: [
            "Instruments de mesure topographique",
            "Levés topographiques en mine",
            "Cartographie numérique et SIG",
            "Calculs de volumes et cubatures"
          ],
          certification: "Certificat de Topographie Minière"
        },
        {
          id: "conception-planification",
          title: "Conception de mines et planification de l'aménagement",
          duration: "4 Semaines",
          level: "Intermédiaire",
          price: "3.000.000FG",
          image: "./images/Dozer.png",
          description: "Maîtrisez les principes de conception et de planification des mines pour optimiser l'extraction.",
          topics: [
            "Principes de conception de fosses",
            "Optimisation des pentes et gradins",
            "Planification des accès et infrastructures",
            "Séquençage d'exploitation"
          ],
          certification: "Certificat de Conception de Mines"
        },
        {
          id: "forage-minage",
          title: "Techniques de forage et de minage",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "2.500.000FG",
          image: "./images/Rock-Truck.png",
          description: "Apprenez les techniques de forage et de minage pour l'abattage efficace des roches.",
          topics: [
            "Types de forages et équipements",
            "Explosifs et techniques de minage",
            "Calculs de charge et plans de tir",
            "Sécurité dans les opérations de minage"
          ],
          certification: "Certificat de Forage et Minage"
        },
        {
          id: "manutention-transport",
          title: "Systèmes de manutention et de transport des matériaux",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "2.400.000FG",
          image: "./images/Loader.png",
          description: "Optimisez les systèmes de transport et de manutention des matériaux extraits.",
          topics: [
            "Systèmes de transport : camions, convoyeurs",
            "Optimisation des cycles de transport",
            "Gestion des stocks et stockage",
            "Maintenance des équipements de transport"
          ],
          certification: "Certificat de Manutention et Transport"
        },
        {
          id: "economie-faisabilite",
          title: "Économie minière et études de faisabilité",
          duration: "4 Semaines",
          level: "Intermédiaire",
          price: "3.200.000FG",
          image: "./images/CEO.jpg",
          description: "Analysez la viabilité économique des projets miniers et réalisez des études de faisabilité.",
          topics: [
            "Évaluation des réserves et ressources",
            "Calculs de coûts d'exploitation",
            "Analyse de rentabilité (VAN, TRI)",
            "Études de faisabilité technico-économiques"
          ],
          certification: "Certificat d'Économie Minière"
        },
        {
          id: "selection-equipements",
          title: "Sélection et optimisation des équipements miniers",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "2.800.000FG",
          image: "./images/crane.webp",
          description: "Choisissez et optimisez les équipements adaptés aux opérations minières spécifiques.",
          topics: [
            "Critères de sélection des équipements",
            "Dimensionnement de la flotte",
            "Optimisation des performances",
            "Coûts d'exploitation et maintenance"
          ],
          certification: "Certificat de Sélection d'Équipements"
        },
        {
          id: "logiciels-planification",
          title: "Formation aux logiciels de planification minière (Surpac, Datamine, Micromine, MineSched)",
          duration: "6 Semaines",
          level: "Avancé",
          price: "4.500.000FG",
          image: "./images/teaminfo.jpg",
          description: "Maîtrisez les logiciels professionnels de planification et de modélisation minière.",
          topics: [
            "Introduction aux logiciels miniers",
            "Modélisation 3D avec Surpac/Datamine",
            "Planification avec MineSched",
            "Optimisation et simulation"
          ],
          certification: "Certification Logiciels de Planification Minière"
        },
        {
          id: "mines-ciel-ouvert",
          title: "Conception et optimisation de mines à ciel ouvert",
          duration: "5 Semaines",
          level: "Avancé",
          price: "3.800.000FG",
          image: "./images/Excavator.png",
          description: "Spécialisez-vous dans la conception avancée et l'optimisation des mines à ciel ouvert.",
          topics: [
            "Optimisation des contours de fosse",
            "Planification de production avancée",
            "Gestion des pentes et stabilité",
            "Planification long terme"
          ],
          certification: "Certificat de Conception de Mines à Ciel Ouvert"
        },
        {
          id: "mines-souterraines",
          title: "Conception de mines souterraines et planification de la ventilation",
          duration: "5 Semaines",
          level: "Avancé",
          price: "4.000.000FG",
          image: "./images/working.jpg",
          description: "Apprenez la conception des mines souterraines et les systèmes de ventilation associés.",
          topics: [
            "Méthodes d'exploitation souterraine",
            "Conception des galeries et puits",
            "Systèmes de ventilation",
            "Sécurité en mines souterraines"
          ],
          certification: "Certificat de Mines Souterraines"
        },
        {
          id: "stabilite-pentes",
          title: "Stabilité des pentes et systèmes de soutènement",
          duration: "4 Semaines",
          level: "Avancé",
          price: "3.500.000FG",
          image: "./images/durabity.jpg",
          description: "Maîtrisez l'analyse de stabilité des pentes et les techniques de soutènement en mines.",
          topics: [
            "Analyse de stabilité des pentes",
            "Techniques de soutènement",
            "Surveillance géotechnique",
            "Gestion des risques géotechniques"
          ],
          certification: "Certificat de Stabilité des Pentes"
        },
        {
          id: "gestion-operations",
          title: "Gestion des opérations minières",
          duration: "4 Semaines",
          level: "Avancé",
          price: "3.600.000FG",
          image: "./images/Secretary.jpg",
          description: "Développez vos compétences en gestion et supervision des opérations minières quotidiennes.",
          topics: [
            "Organisation des opérations",
            "Gestion des équipes et planning",
            "Contrôle qualité et production",
            "Indicateurs de performance (KPI)"
          ],
          certification: "Certificat de Gestion d'Opérations Minières"
        },
        {
          id: "fermeture-rehabilitation",
          title: "Planification de la fermeture et de la réhabilitation des mines",
          duration: "3 Semaines",
          level: "Avancé",
          price: "3.000.000FG",
          image: "./images/work.jpg",
          description: "Apprenez à planifier la fermeture responsable et la réhabilitation des sites miniers.",
          topics: [
            "Réglementation de fermeture de mines",
            "Techniques de réhabilitation",
            "Gestion des eaux et des résidus",
            "Suivi post-fermeture"
          ],
          certification: "Certificat de Fermeture et Réhabilitation"
        }
      ],
      subcategories: [
        {
          id: 'foundational',
          title: 'Cours Fondamentaux',
          courses: [
            { title: 'Introduction au génie minier' },
            { title: 'Méthodes d’exploitation minière (surface & souterraine)' },
            { title: 'Bases de géologie et mécanique des roches' },
            { title: 'Terminologie et opérations minières' },
            { title: 'Sécurité minière et considérations environnementales' },
          ]
        },
        {
          id: 'intermediate',
          title: 'Cours Intermédiaires',
          courses: [
            { title: 'Topographie et cartographie minière' },
            { title: 'Conception de mines et planification de l’aménagement' },
            { title: 'Techniques de forage et de minage' },
            { title: 'Systèmes de manutention et de transport des matériaux' },
            { title: 'Économie minière et études de faisabilité' },
            { title: 'Sélection et optimisation des équipements miniers' },
          ]
        },
        {
          id: 'advanced',
          title: 'Cours Avancés / Spécialisation',
          courses: [
            { title: 'Formation aux logiciels de planification minière (Surpac, Datamine, Micromine, MineSched)' },
            { title: 'Conception et optimisation de mines à ciel ouvert' },
            { title: 'Conception de mines souterraines et planification de la ventilation' },
            { title: 'Stabilité des pentes et systèmes de soutènement' },
            { title: 'Gestion des opérations minières' },
            { title: 'Planification de la fermeture et de la réhabilitation des mines' },
          ]
        },
      ]
    },
    {
      id: 'electrical-mechatronics',
      title: "Formation en Électricité et Mécatronique",
      image: "/emc-equip-train/images/crane.webp", // Placeholder, change if you have a better image
      introduction: "Préparez-vous aux métiers techniques de l’automatisation, de l’électrification et de la maintenance avancée dans les mines modernes.",
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
            { title: 'Sécurité électrique et pratiques en milieu de travail' },
            { title: 'Circuits DC/AC et mesures de base' },
            { title: 'Techniques de câblage et normes de câblage' },
            { title: 'Lecture de schémas électriques et symboles' },
            { title: 'Principes de base des moteurs et générateurs' },
          ]
        },
        {
          id: 'intermediate',
          title: 'Cours Intermédiaires',
          courses: [
            { title: 'Moteurs électriques et variateurs de fréquence (VFD)' },
            { title: 'Capteurs industriels et actionneurs' },
            { title: 'Programmation PLC et systèmes de contrôle (Siemens, Allen-Bradley)' },
            { title: 'Systèmes électriques dans les mines (transformateurs, TGBT, appareillage)' },
            { title: 'Systèmes de batteries et électronique de puissance pour engins électriques' },
          ]
        },
        {
          id: 'advanced',
          title: 'Cours Avancés / Spécialisation',
          courses: [
            { title: 'Systèmes mécatroniques sur équipements miniers mobiles et fixes' },
            { title: 'Automatisation et systèmes SCADA pour applications minières' },
            { title: 'Diagnostic électrique et recherche de pannes' },
            { title: 'Protocoles de communication industrielle (Modbus, CANbus, Profibus)' },
            { title: 'Exploitation et maintenance des équipements haute tension' },
          ]
        },
      ]
    },
    {
      id: 'mining-operations-management',
      title: "Gestion des Opérations Minières & Systèmes",
      image: "/emc-equip-train/images/team.jpg", // Placeholder, change if you have a better image
      introduction: "Le pilier opérationnel et l’intégration numérique qui assurent l’efficacité et la performance de l’ensemble du site minier.",
      description: "Cette spécialisation couvre la gestion de flotte, de carburant, de pneus, d’actifs, ainsi que l’intégration digitale (FMS, CMMS, ERP, planification minière) et le développement du leadership. Elle est structurée autour de trois axes : logistique, intégration des systèmes, et compétences humaines/leadership.",
      coreCourses: [
        "Gestion de flotte et logistique minière",
        "Intégration FMS, CMMS, ERP",
        "Leadership et excellence opérationnelle"
      ],
      certifications: [
        "Certificat de Gestionnaire d’Opérations Minières",
        "Certification FMS/CMMS/ERP Industriel"
      ],
      rating: 4.7,
      courses: [
        {
          id: "gestion-flotte-operations",
          title: "Gestion de flotte dans les opérations minières",
          duration: "4 Semaines",
          level: "Intermédiaire",
          price: "2.800.000FG",
          image: "./images/Rock-Truck.png",
          description: "Maîtrisez la gestion optimale des flottes d'équipements miniers pour maximiser la productivité et minimiser les coûts opérationnels.",
          topics: [
            "Principes de gestion de flotte minière",
            "Planification et allocation des équipements",
            "Optimisation des cycles opérationnels",
            "Gestion des ressources et planning opérationnel"
          ],
          certification: "Certificat de Gestion de Flotte Minière"
        },
        {
          id: "optimisation-carburant",
          title: "Suivi et optimisation de la consommation de carburant",
          duration: "2 Semaines",
          level: "Intermédiaire",
          price: "1.800.000FG",
          image: "./images/Loader.png",
          description: "Apprenez à surveiller, analyser et optimiser la consommation de carburant des équipements miniers pour réduire les coûts énergétiques.",
          topics: [
            "Méthodes de suivi de consommation",
            "Analyse des données de carburant",
            "Techniques d'optimisation énergétique",
            "Indicateurs de performance énergétique"
          ],
          certification: "Attestation Optimisation Énergétique"
        },
        {
          id: "gestion-pneus",
          title: "Gestion du cycle de vie des pneus pour engins lourds",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "2.200.000FG",
          image: "./images/Excavator.png",
          description: "Optimisez la gestion des pneus d'engins lourds, de l'achat à la mise au rebut, pour maximiser leur durée de vie et réduire les coûts.",
          topics: [
            "Sélection et spécifications des pneus",
            "Suivi de l'usure et maintenance préventive",
            "Rotation et gestion des stocks",
            "Analyse des coûts et optimisation"
          ],
          certification: "Certificat de Gestion des Pneus"
        },
        {
          id: "planification-itineraires",
          title: "Planification des itinéraires et horaires en mines à ciel ouvert",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "2.400.000FG",
          image: "./images/Grader.png",
          description: "Maîtrisez la planification stratégique des itinéraires et la gestion des horaires pour optimiser les flux de production en mine à ciel ouvert.",
          topics: [
            "Conception d'itinéraires optimaux",
            "Planification des horaires de production",
            "Gestion du trafic minier",
            "Optimisation des temps de cycle"
          ],
          certification: "Certificat de Planification Opérationnelle"
        },
        {
          id: "planification-maintenance",
          title: "Planification de la maintenance et réduction des arrêts",
          duration: "4 Semaines",
          level: "Intermédiaire",
          price: "3.000.000FG",
          image: "./images/working.jpg",
          description: "Développez des stratégies de maintenance préventive et prédictive pour minimiser les arrêts non planifiés et maximiser la disponibilité des équipements.",
          topics: [
            "Stratégies de maintenance préventive",
            "Maintenance prédictive et conditionnelle",
            "Planification des arrêts programmés",
            "Optimisation de la disponibilité"
          ],
          certification: "Certificat de Planification Maintenance"
        },
        {
          id: "fondamentaux-fms",
          title: "Fondamentaux des systèmes de gestion de flotte (FMS)",
          duration: "4 Semaines",
          level: "Intermédiaire",
          price: "3.200.000FG",
          image: "./images/teaminfo.jpg",
          description: "Découvrez les systèmes FMS et leur rôle central dans la gestion moderne des opérations minières automatisées.",
          topics: [
            "Architecture des systèmes FMS",
            "Configuration et paramétrage",
            "Surveillance en temps réel",
            "Génération de rapports et analytics"
          ],
          certification: "Certificat FMS Opérateur"
        },
        {
          id: "cmms-mines",
          title: "CMMS (GMAO) pour les mines",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "2.600.000FG",
          image: "./images/Secretary.jpg",
          description: "Maîtrisez l'utilisation des systèmes CMMS/GMAO spécifiquement adaptés aux besoins de maintenance dans l'industrie minière.",
          topics: [
            "Principes des systèmes CMMS",
            "Gestion des ordres de travail",
            "Planification de la maintenance",
            "Gestion des stocks et pièces détachées"
          ],
          certification: "Certificat CMMS Minier"
        },
        {
          id: "erp-minier",
          title: "Introduction à l'ERP minier (SAP, Oracle, etc.)",
          duration: "5 Semaines",
          level: "Avancé",
          price: "4.000.000FG",
          image: "./images/CEO.jpg",
          description: "Explorez les systèmes ERP adaptés à l'industrie minière et leur intégration dans la gestion globale des opérations.",
          topics: [
            "Modules ERP spécifiques aux mines",
            "Intégration des processus métier",
            "Gestion financière et comptabilité minière",
            "Reporting et business intelligence"
          ],
          certification: "Certificat ERP Minier"
        },
        {
          id: "integration-systemes",
          title: "Intégration FMS, CMMS, ERP & outils de planification minière",
          duration: "5 Semaines",
          level: "Avancé",
          price: "4.200.000FG",
          image: "./images/team.jpg",
          description: "Apprenez à intégrer les différents systèmes informatiques miniers pour créer un écosystème numérique cohérent et performant.",
          topics: [
            "Architecture d'intégration des systèmes",
            "Flux de données inter-systèmes",
            "APIs et interfaces de communication",
            "Gestion de la cohérence des données"
          ],
          certification: "Certificat d'Intégration Systèmes Miniers"
        },
        {
          id: "telematique-iot",
          title: "Télématique, IoT et données temps réel en logistique minière",
          duration: "4 Semaines",
          level: "Avancé",
          price: "3.500.000FG",
          image: "./images/Loader operating.jpg",
          description: "Explorez les technologies IoT et de télématique pour le suivi en temps réel des opérations et l'optimisation logistique.",
          topics: [
            "Technologies IoT en environnement minier",
            "Capteurs et transmission de données",
            "Analyse de données en temps réel",
            "Applications en logistique minière"
          ],
          certification: "Certificat IoT et Télématique Minière"
        },
        {
          id: "analytique-miniere",
          title: "Analytique minière et systèmes d'aide à la décision",
          duration: "4 Semaines",
          level: "Avancé",
          price: "3.600.000FG",
          image: "./images/teaminfo.jpg",
          description: "Maîtrisez les outils d'analyse de données et les systèmes d'aide à la décision pour optimiser les performances minières.",
          topics: [
            "Business Intelligence pour les mines",
            "Tableaux de bord et visualisation",
            "Analyse prédictive et machine learning",
            "Systèmes d'aide à la décision opérationnelle"
          ],
          certification: "Certificat Analytique Minière"
        },
        {
          id: "leadership-operations",
          title: "Leadership et supervision des opérations minières",
          duration: "3 Semaines",
          level: "Avancé",
          price: "2.800.000FG",
          image: "./images/trainer.jpg",
          description: "Développez vos compétences de leadership pour superviser efficacement les équipes et les opérations minières complexes.",
          topics: [
            "Styles de leadership en environnement minier",
            "Gestion d'équipes multiculturelles",
            "Communication et motivation",
            "Résolution de conflits et prise de décision"
          ],
          certification: "Certificat de Leadership Minier"
        },
        {
          id: "lean-mining",
          title: "Lean Mining et amélioration continue",
          duration: "4 Semaines",
          level: "Avancé",
          price: "3.200.000FG",
          image: "./images/good operator.jpg",
          description: "Appliquez les principes du Lean Management aux opérations minières pour éliminer les gaspillages et améliorer l'efficacité.",
          topics: [
            "Principes du Lean appliqués aux mines",
            "Identification et élimination des gaspillages",
            "Amélioration continue (Kaizen)",
            "Outils Lean : 5S, VSM, SMED"
          ],
          certification: "Certificat Lean Mining"
        },
        {
          id: "kpis-tableaux-bord",
          title: "KPIs miniers et tableaux de bord opérationnels",
          duration: "3 Semaines",
          level: "Avancé",
          price: "2.600.000FG",
          image: "./images/Secretary.jpg",
          description: "Maîtrisez la définition, le suivi et l'analyse des indicateurs de performance clés pour le pilotage des opérations minières.",
          topics: [
            "Définition des KPIs pertinents",
            "Conception de tableaux de bord",
            "Analyse de performance et benchmarking",
            "Communication des résultats"
          ],
          certification: "Certificat KPIs et Tableaux de Bord"
        },
        {
          id: "gestion-changement",
          title: "Gestion du changement dans les organisations minières",
          duration: "3 Semaines",
          level: "Avancé",
          price: "2.700.000FG",
          image: "./images/smiling.jpg",
          description: "Apprenez à accompagner et gérer les transformations organisationnelles dans l'industrie minière en constante évolution.",
          topics: [
            "Théories du changement organisationnel",
            "Résistance au changement et solutions",
            "Communication du changement",
            "Accompagnement des équipes"
          ],
          certification: "Certificat de Gestion du Changement"
        },
        {
          id: "formation-personnel",
          title: "Formation du personnel et développement des talents",
          duration: "4 Semaines",
          level: "Avancé",
          price: "3.000.000FG",
          image: "./images/Team and loader.jpg",
          description: "Développez vos compétences en formation et en développement des talents pour créer des équipes performantes et évolutives.",
          topics: [
            "Conception de programmes de formation",
            "Évaluation des compétences",
            "Plans de développement individuels",
            "Gestion des talents et succession"
          ],
          certification: "Certificat de Développement des Talents"
        }
      ],
      subcategories: [
        {
          id: 'logistics',
          title: 'Gestion de Flotte & Logistique',
          courses: [
            { title: 'Gestion de flotte dans les opérations minières' },
            { title: 'Suivi et optimisation de la consommation de carburant' },
            { title: 'Gestion du cycle de vie des pneus pour engins lourds' },
            { title: 'Planification des itinéraires et horaires en mines à ciel ouvert' },
            { title: 'Planification de la maintenance et réduction des arrêts' },
          ]
        },
        {
          id: 'systems',
          title: 'Systèmes & Intégration',
          courses: [
            { title: 'Fondamentaux des systèmes de gestion de flotte (FMS)' },
            { title: 'CMMS (GMAO) pour les mines' },
            { title: 'Introduction à l’ERP minier (SAP, Oracle, etc.)' },
            { title: 'Intégration FMS, CMMS, ERP & outils de planification minière' },
            { title: 'Télématique, IoT et données temps réel en logistique minière' },
            { title: 'Analytique minière et systèmes d’aide à la décision' },
          ]
        },
        {
          id: 'leadership',
          title: 'Leadership & Excellence Opérationnelle',
          courses: [
            { title: 'Leadership et supervision des opérations minières' },
            { title: 'Lean Mining et amélioration continue' },
            { title: 'KPIs miniers et tableaux de bord opérationnels' },
            { title: 'Gestion du changement dans les organisations minières' },
            { title: 'Formation du personnel et développement des talents' },
          ]
        },
      ]
    },
    {
      id: 'soft-skills-digital',
      title: "Compétences Transversales et Culture Digitale",
      image: "/emc-equip-train/images/smiling.jpg", // Placeholder, change if you have a better image
      introduction: "Les compétences humaines et la culture digitale sont essentielles pour réussir et évoluer dans le secteur minier moderne.",
      description: "Cette spécialisation développe la communication, le travail d’équipe, l’adaptabilité et la maîtrise des outils numériques, indispensables pour l’excellence professionnelle et l’intégration dans des équipes multiculturelles.",
      coreCourses: [
        "Communication et collaboration en milieu professionnel",
        "Culture digitale et outils informatiques",
        "Développement personnel et leadership"
      ],
      certifications: [
        "Certificat de Compétences Transversales Minières",
        "Certification Culture Digitale Professionnelle"
      ],
      rating: 4.9,
      courses: [
        {
          id: "communication-professionnelle",
          title: "Communication professionnelle (orale & écrite)",
          duration: "3 Semaines",
          level: "Débutant",
          price: "1.500.000FG",
          image: "./images/smiling.jpg",
          description: "Développez vos compétences en communication professionnelle pour exceller dans vos interactions quotidiennes en environnement minier.",
          topics: [
            "Techniques de communication orale efficace",
            "Rédaction professionnelle et correspondance",
            "Présentation en public et réunions",
            "Communication interculturelle en milieu minier"
          ],
          certification: "Certificat de Communication Professionnelle"
        },
        {
          id: "anglais-technique-mine",
          title: "Anglais technique pour la mine",
          duration: "6 Semaines",
          level: "Débutant à Intermédiaire",
          price: "2.400.000FG",
          image: "./images/teaminfo.jpg",
          description: "Maîtrisez le vocabulaire technique anglais spécifique à l'industrie minière pour communiquer efficacement dans un contexte international.",
          topics: [
            "Vocabulaire technique minier en anglais",
            "Communication opérationnelle sur site",
            "Lecture de documents techniques en anglais",
            "Interaction avec les équipes internationales"
          ],
          certification: "Certificat d'Anglais Technique Minier"
        },
        {
          id: "redaction-rapports",
          title: "Rédaction de rapports et documentation",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.200.000FG",
          image: "./images/Secretary.jpg",
          description: "Apprenez à rédiger des rapports professionnels clairs et structurés, essentiels pour la documentation des opérations minières.",
          topics: [
            "Structure et méthodologie de rapport",
            "Rédaction d'incidents et d'observations",
            "Documentation technique et procédures",
            "Synthèse et présentation de données"
          ],
          certification: "Attestation de Rédaction Professionnelle"
        },
        {
          id: "communication-interpersonnelle",
          title: "Communication interpersonnelle au travail",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.300.000FG",
          image: "./images/team.jpg",
          description: "Renforcez vos compétences relationnelles pour créer un environnement de travail harmonieux et productif.",
          topics: [
            "Écoute active et empathie",
            "Communication assertive et bienveillante",
            "Gestion des émotions en situation professionnelle",
            "Construction de relations de travail positives"
          ],
          certification: "Certificat de Communication Interpersonnelle"
        },
        {
          id: "resolution-conflits",
          title: "Résolution de conflits et culture du feedback",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "1.800.000FG",
          image: "./images/trainer.jpg",
          description: "Développez vos compétences en résolution de conflits et apprenez à donner et recevoir des feedbacks constructifs.",
          topics: [
            "Identification et analyse des conflits",
            "Techniques de médiation et négociation",
            "Feedback constructif et bienveillant",
            "Prévention des conflits en équipe"
          ],
          certification: "Certificat de Résolution de Conflits"
        },
        {
          id: "culture-informatique-base",
          title: "Culture informatique de base (email, fichiers, Excel, PDF)",
          duration: "4 Semaines",
          level: "Débutant",
          price: "2.000.000FG",
          image: "./images/teaminfo.jpg",
          description: "Acquérez les compétences informatiques essentielles pour évoluer dans l'environnement numérique moderne du secteur minier.",
          topics: [
            "Gestion des emails et communication numérique",
            "Organisation et gestion de fichiers",
            "Bases d'Excel pour la saisie de données",
            "Création et manipulation de documents PDF"
          ],
          certification: "Certificat de Culture Informatique"
        },
        {
          id: "outils-digitaux-mine",
          title: "Outils digitaux pour la mine (tablettes FMS, ERP, applis sécurité)",
          duration: "4 Semaines",
          level: "Intermédiaire",
          price: "2.500.000FG",
          image: "./images/Loader operating.jpg",
          description: "Maîtrisez les outils numériques spécifiques utilisés dans les opérations minières modernes pour améliorer l'efficacité opérationnelle.",
          topics: [
            "Utilisation des tablettes FMS sur le terrain",
            "Navigation dans les systèmes ERP miniers",
            "Applications de sécurité et reporting",
            "Maintenance numérique et check-lists digitales"
          ],
          certification: "Certificat d'Outils Digitaux Miniers"
        },
        {
          id: "saisie-donnees-rapports",
          title: "Saisie de données, formulaires numériques et rapports miniers",
          duration: "3 Semaines",
          level: "Débutant",
          price: "1.600.000FG",
          image: "./images/working.jpg",
          description: "Apprenez à saisir efficacement les données opérationnelles et à générer des rapports numériques précis et exploitables.",
          topics: [
            "Saisie de données précise et efficace",
            "Utilisation de formulaires numériques",
            "Génération de rapports automatisés",
            "Contrôle qualité des données saisies"
          ],
          certification: "Attestation de Saisie de Données"
        },
        {
          id: "microsoft-office",
          title: "Introduction à Microsoft Office / Google Workspace",
          duration: "4 Semaines",
          level: "Débutant",
          price: "2.200.000FG",
          image: "./images/CEO.jpg",
          description: "Maîtrisez les suites bureautiques essentielles pour la productivité professionnelle dans le secteur minier.",
          topics: [
            "Word : documents et rapports professionnels",
            "Excel : tableaux et calculs de base",
            "PowerPoint : présentations efficaces",
            "Collaboration et partage de documents"
          ],
          certification: "Certificat Suites Bureautiques"
        },
        {
          id: "cybersecurite-etiquette",
          title: "Bases de cybersécurité & étiquette digitale",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.400.000FG",
          image: "./images/expert.jpg",
          description: "Développez une culture de cybersécurité et apprenez les bonnes pratiques digitales pour protéger les données sensibles de l'entreprise.",
          topics: [
            "Principes de base de la cybersécurité",
            "Protection des mots de passe et données",
            "Étiquette professionnelle numérique",
            "Prévention des risques cyber en entreprise"
          ],
          certification: "Attestation de Cybersécurité"
        },
        {
          id: "ethique-responsabilite",
          title: "Éthique et responsabilité au travail",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.300.000FG",
          image: "./images/smiling.jpg",
          description: "Développez une conscience professionnelle forte et intégrez les valeurs éthiques essentielles pour une carrière réussie dans le secteur minier.",
          topics: [
            "Valeurs et éthique professionnelle",
            "Responsabilité individuelle et collective",
            "Intégrité et honnêteté au travail",
            "Respect de l'environnement et des communautés"
          ],
          certification: "Certificat d'Éthique Professionnelle"
        },
        {
          id: "travail-equipe-terrain",
          title: "Travail d'équipe et collaboration sur le terrain",
          duration: "3 Semaines",
          level: "Débutant",
          price: "1.700.000FG",
          image: "./images/Team and loader.jpg",
          description: "Renforcez vos compétences de travail en équipe pour une collaboration efficace dans l'environnement exigeant des opérations minières.",
          topics: [
            "Dynamiques d'équipe en milieu minier",
            "Collaboration efficace sur le terrain",
            "Soutien mutuel et entraide",
            "Gestion de la diversité culturelle"
          ],
          certification: "Certificat de Travail d'Équipe"
        },
        {
          id: "gestion-temps-shifts",
          title: "Gestion du temps et planification des shifts",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.200.000FG",
          image: "./images/good operator.jpg",
          description: "Optimisez votre gestion du temps et adaptez-vous efficacement aux contraintes horaires spécifiques du travail minier.",
          topics: [
            "Techniques de gestion du temps",
            "Adaptation aux horaires de shifts",
            "Priorisation des tâches",
            "Équilibre vie professionnelle/personnelle"
          ],
          certification: "Attestation de Gestion du Temps"
        },
        {
          id: "comportement-intelligence-emotionnelle",
          title: "Comportement professionnel et intelligence émotionnelle",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "1.800.000FG",
          image: "./images/women.jpg",
          description: "Développez votre intelligence émotionnelle et adoptez des comportements professionnels adaptés aux défis du secteur minier.",
          topics: [
            "Conscience de soi et autorégulation",
            "Empathie et compétences sociales",
            "Gestion du stress et des émotions",
            "Comportement professionnel exemplaire"
          ],
          certification: "Certificat d'Intelligence Émotionnelle"
        },
        {
          id: "adaptabilite-apprentissage",
          title: "Adaptabilité et apprentissage en situation de travail",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.400.000FG",
          image: "./images/durabity.jpg",
          description: "Développez votre capacité d'adaptation et d'apprentissage continu pour évoluer dans un secteur en constante transformation.",
          topics: [
            "Développement de la flexibilité mentale",
            "Apprentissage continu et curiosité",
            "Adaptation aux changements technologiques",
            "Résilience et gestion du changement"
          ],
          certification: "Attestation d'Adaptabilité"
        },
        {
          id: "bases-leadership-superviseurs",
          title: "Bases du leadership pour superviseurs",
          duration: "4 Semaines",
          level: "Intermédiaire",
          price: "2.600.000FG",
          image: "./images/trainer.jpg",
          description: "Développez vos compétences de leadership pour accéder à des postes de supervision et encadrer efficacement vos équipes.",
          topics: [
            "Styles de leadership et adaptation",
            "Motivation et engagement des équipes",
            "Délégation et responsabilisation",
            "Communication de leader"
          ],
          certification: "Certificat de Leadership de Base"
        },
        {
          id: "initiative-resolution-problemes",
          title: "Prise d'initiative et résolution de problèmes",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "1.900.000FG",
          image: "./images/truck operatoo.jpg",
          description: "Développez votre capacité à prendre des initiatives et à résoudre efficacement les problèmes rencontrés en situation professionnelle.",
          topics: [
            "Développement de l'esprit d'initiative",
            "Méthodologie de résolution de problèmes",
            "Créativité et innovation",
            "Prise de décision autonome"
          ],
          certification: "Certificat de Résolution de Problèmes"
        },
        {
          id: "orientation-client",
          title: "Orientation client (pour fournisseurs/logistique)",
          duration: "2 Semaines",
          level: "Intermédiaire",
          price: "1.500.000FG",
          image: "./images/Secretary.jpg",
          description: "Développez une approche orientée client pour exceller dans les services de support, logistique et relations fournisseurs.",
          topics: [
            "Compréhension des besoins clients",
            "Service client de qualité",
            "Gestion des réclamations",
            "Amélioration continue du service"
          ],
          certification: "Certificat d'Orientation Client"
        },
        {
          id: "evolution-carriere",
          title: "Évolution de carrière et auto-motivation",
          duration: "3 Semaines",
          level: "Intermédiaire",
          price: "1.800.000FG",
          image: "./images/CEO.jpg",
          description: "Planifiez votre évolution professionnelle et développez les compétences d'auto-motivation nécessaires pour atteindre vos objectifs de carrière.",
          topics: [
            "Planification de carrière stratégique",
            "Auto-évaluation et développement personnel",
            "Réseautage professionnel",
            "Motivation intrinsèque et persévérance"
          ],
          certification: "Certificat de Développement de Carrière"
        },
        {
          id: "sante-mentale-travail-isole",
          title: "Sensibilisation à la santé mentale en travail isolé",
          duration: "2 Semaines",
          level: "Débutant",
          price: "1.300.000FG",
          image: "./images/work.jpg",
          description: "Développez une conscience de la santé mentale et apprenez à gérer les défis psychologiques du travail en environnement minier isolé.",
          topics: [
            "Reconnaissance des signes de détresse",
            "Stratégies de gestion du stress",
            "Maintien du bien-être mental",
            "Ressources d'aide et de soutien"
          ],
          certification: "Attestation de Santé Mentale au Travail"
        }
      ],
      subcategories: [
        {
          id: 'communication',
          title: 'Communication & Collaboration',
          courses: [
            { title: 'Communication professionnelle (orale & écrite)' },
            { title: 'Anglais technique pour la mine' },
            { title: 'Rédaction de rapports et documentation' },
            { title: 'Communication interpersonnelle au travail' },
            { title: 'Résolution de conflits et culture du feedback' },
          ]
        },
        {
          id: 'digital',
          title: 'Culture Digitale & Utilisation des Technologies',
          courses: [
            { title: 'Culture informatique de base (email, fichiers, Excel, PDF)' },
            { title: 'Outils digitaux pour la mine (tablettes FMS, ERP, applis sécurité)' },
            { title: 'Saisie de données, formulaires numériques et rapports miniers' },
            { title: 'Introduction à Microsoft Office / Google Workspace' },
            { title: 'Bases de cybersécurité & étiquette digitale' },
          ]
        },
        {
          id: 'professional',
          title: 'Compétences Professionnelles & Travail en Équipe',
          courses: [
            { title: 'Éthique et responsabilité au travail' },
            { title: 'Travail d’équipe et collaboration sur le terrain' },
            { title: 'Gestion du temps et planification des shifts' },
            { title: 'Comportement professionnel et intelligence émotionnelle' },
            { title: 'Adaptabilité et apprentissage en situation de travail' },
          ]
        },
        {
          id: 'leadership',
          title: 'Leadership & Développement de Carrière',
          courses: [
            { title: 'Bases du leadership pour superviseurs' },
            { title: 'Prise d’initiative et résolution de problèmes' },
            { title: 'Orientation client (pour fournisseurs/logistique)' },
            { title: 'Évolution de carrière et auto-motivation' },
            { title: 'Sensibilisation à la santé mentale en travail isolé' },
          ]
        },
      ]
    },
  ];

export default specializations;