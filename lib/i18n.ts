// Basic i18n utilities and dictionaries for en, fr, nl
// Extend as needed. Fallback to English when key or locale missing.

export type Locale = 'en' | 'fr' | 'nl';
export const locales: Locale[] = ['en', 'fr', 'nl'];
export const defaultLocale: Locale = 'en';

// Translation dictionaries. Keep keys stable.
// NOTE: Some long marketing copy translated approximately; adjust for nuance.

const en = {
  header: { cta: 'Start a project' },
  nav: {
    reality: 'Reality Check',
    services: 'Services',
    roi: 'ROI Calculator',
    contact: 'Contact'
  },
  hero: {
    eyebrow: "The AI divide isn't coming—it's here",
    headline: 'Your competitors are already automating. Are you?',
    subheadline: 'Every quarter without AI-driven workflows costs you market share, talent, and growth. Rightword.AI builds the intelligent systems that keep ambitious SMBs ahead—before it\'s too late.',
    primaryCta: 'Claim your strategy call',
    secondaryCta: 'See the cost of waiting',
    promises: [
      'Identify automation opportunities your competitors are already exploiting',
      'Ship AI workflows in weeks—not quarters—so you stop falling behind',
      'Measure ROI from day one, prove value to leadership immediately'
    ],
    focusAreas: [
      'Workflow automation that compounds',
      'AI copilots your team actually trusts',
      'Operational intelligence in real-time',
      'Change enablement that sticks'
    ],
    criticalEyebrow: 'Critical capabilities',
    criticalHeadline: 'What you need to compete',
    criticalSub: 'The automation capabilities your competitors are already leveraging. How many are you missing?'
  },
  competitive: {
    eyebrow: 'Wake-up call',
    title: 'The competitive gap is real—and widening',
    description: "While you're evaluating, your competitors are executing. Here's what the data shows."
  },
  value: {
    eyebrow: 'No more excuses',
    title: 'Speed, not perfection, wins the AI race',
    description: "Your competitors aren't smarter—they're faster. While you perfect your plan, they're shipping, learning, and compounding advantages.",
    quote: '“The best time to start was last quarter. The second best time is now.”',
    quoteSub: 'Every week of delay is another week your competitors pull ahead'
  },
  cost: {
    eyebrow: 'Calculate your blind spot',
    title: 'What is waiting really costing you?',
    description: "Manual processes aren't just slow—they're expensive. See your actual cost of delay."
  },
  services: {
    eyebrow: 'Get moving fast',
    title: 'From zero to AI advantage in weeks, not months',
    description: 'Choose your speed. Every engagement is designed to ship working AI systems that deliver measurable ROI—fast.',
    mostPopular: 'MOST POPULAR',
    startSprint: 'Start this sprint →',
    engagementLabel: 'Engagement'
  },
  process: {
    eyebrow: 'Battle-tested approach',
    title: 'From workshop to working system in record time',
    description: 'No endless discovery phases. No analysis paralysis. Just fast, focused execution that compounds value from day one.',
    whyDifferent: "Why we're different",
    blurb1: 'Most consultants talk. We ship. Production-ready AI systems with measurable KPIs in weeks, not quarters.',
    blurb2: 'Every phase keeps momentum tangible. Your team sees progress weekly. Your leadership sees ROI monthly.',
    speedTag: 'Speed compounds advantage'
  },
  gains: {
    eyebrow: 'Tangible outcomes',
    title: 'What AI advantage actually looks like',
    description: 'Not vague promises. Real, measurable improvements that compound quarter over quarter.'
  },
  urgency: {
    eyebrow: 'Limited availability',
    title: 'Every quarter you wait, the gap widens',
    slotsRemaining: 'Slots remaining',
    nextAvailability: 'Next availability',
    button: 'Claim your strategy call now',
    details: (duration: string) => `${duration} call · No obligations · See your AI roadmap`,
    status: (companies: number, slots: number) => `We have helped ${companies} companies this month gain AI advantage. Only ${slots} strategy slots remain this quarter.`
  },
  contact: {
    eyebrow: 'Stop waiting. Start winning.',
    orMessage: 'Or send us a message',
    respondTime: "We'll respond within 24 hours",
    strategySession: 'Strategy session',
    zeroCost: 'Zero obligations',
    getRoadmap: 'Get your roadmap',
    pitch: "In 45 minutes, we'll map your highest-leverage automation opportunities and show you exactly how fast you can move.",
    badges: { duration: '45 min', cost: 'No cost', timeline: 'This week' }
  },
  footer: {
    crafted: '© YEAR Rightword.AI. Crafted to help operators lead the AI era.',
    languageLabel: 'Language',
    siteName: 'Rightword.AI',
    links: { linkedin: 'LinkedIn', email: 'Email', privacy: 'Privacy' }
  },
  languageNames: { en: 'English', fr: 'Français', nl: 'Nederlands' }
};

const fr: typeof en = {
  header: { cta: 'Démarrer un projet' },
  nav: {
    reality: 'Analyse Réalité',
    services: 'Services',
    roi: 'Calculateur ROI',
    contact: 'Contact'
  },
  hero: {
    eyebrow: "La fracture IA n'arrive pas—elle est là",
    headline: 'Vos concurrents automatisent déjà. Et vous ?',
    subheadline: "Chaque trimestre sans workflows pilotés par l'IA vous coûte part de marché, talents et croissance. Rightword.AI construit les systèmes intelligents qui gardent les PME ambitieuses en tête—avant qu'il ne soit trop tard.",
    primaryCta: 'Réservez votre appel stratégique',
    secondaryCta: "Voir le coût d'attente",
    promises: [
      "Identifier les opportunités d'automatisation déjà exploitées par vos concurrents",
      "Déployer des workflows IA en semaines—pas en trimestres—pour cesser de prendre du retard",
      "Mesurer le ROI dès le premier jour, prouver la valeur à la direction immédiatement"
    ],
    focusAreas: [
      "Automatisation des workflows qui se cumule",
      "Copilotes IA que votre équipe peut réellement croire",
      "Intelligence opérationnelle en temps réel",
      "Conduite du changement qui perdure"
    ],
    criticalEyebrow: 'Capacités critiques',
    criticalHeadline: 'Ce dont vous avez besoin pour rivaliser',
    criticalSub: "Les capacités d'automatisation que vos concurrents exploitent déjà. Combien vous manquent ?"
  },
  competitive: {
    eyebrow: 'Signal d’alarme',
    title: 'Le fossé concurrentiel est réel—et se creuse',
    description: "Pendant que vous évaluez, vos concurrents exécutent. Voici ce que montrent les données."
  },
  value: {
    eyebrow: 'Plus d’excuses',
    title: "La vitesse, pas la perfection, gagne la course IA",
    description: "Vos concurrents ne sont pas plus intelligents—ils sont plus rapides. Tandis que vous peaufinez votre plan, ils livrent, apprennent et accumulent des avantages.",
    quote: '« Le meilleur moment pour commencer était le trimestre dernier. Le second meilleur est maintenant. »',
    quoteSub: 'Chaque semaine de retard est une semaine où vos concurrents prennent de l’avance'
  },
  cost: {
    eyebrow: 'Calculez votre angle mort',
    title: "Quel est le vrai coût d'attendre ?",
    description: "Les processus manuels ne sont pas seulement lents—ils sont chers. Découvrez votre coût réel de retard."
  },
  services: {
    eyebrow: 'Avancez vite',
    title: "De zéro à avantage IA en semaines, pas en mois",
    description: "Choisissez votre vitesse. Chaque mission est conçue pour livrer des systèmes IA fonctionnels générant un ROI mesurable—rapidement.",
    mostPopular: 'PLUS POPULAIRE',
    startSprint: 'Commencer ce sprint →',
    engagementLabel: 'Mission'
  },
  process: {
    eyebrow: 'Approche éprouvée',
    title: 'Du workshop au système opérationnel en un temps record',
    description: "Pas de phases de découverte interminables. Pas de paralysie analytique. Une exécution rapide et ciblée qui crée de la valeur dès le jour un.",
    whyDifferent: 'Pourquoi nous sommes différents',
    blurb1: 'La plupart des consultants parlent. Nous livrons. Des systèmes IA prêts pour la production avec KPI mesurables en semaines, pas en trimestres.',
    blurb2: 'Chaque phase rend l’avancement tangible. Votre équipe voit des progrès chaque semaine. Votre direction voit le ROI chaque mois.',
    speedTag: "La vitesse multiplie l'avantage"
  },
  gains: {
    eyebrow: 'Résultats tangibles',
    title: "À quoi ressemble réellement l'avantage IA",
    description: 'Pas de promesses vagues. Des améliorations réelles et mesurables qui se cumulent trimestre après trimestre.'
  },
  urgency: {
    eyebrow: 'Disponibilité limitée',
    title: 'Chaque trimestre que vous attendez, le fossé se creuse',
    slotsRemaining: 'Créneaux restants',
    nextAvailability: 'Prochaine disponibilité',
    button: 'Réservez votre appel stratégique maintenant',
    details: (duration: string) => `${duration} · Sans engagement · Découvrez votre feuille de route IA`,
    status: (companies: number, slots: number) => `Nous avons aidé ${companies} entreprises ce mois à obtenir un avantage IA. Il ne reste que ${slots} créneaux stratégiques ce trimestre.`
  },
  contact: {
    eyebrow: 'Arrêtez d’attendre. Commencez à gagner.',
    orMessage: 'Ou envoyez-nous un message',
    respondTime: 'Réponse sous 24h',
    strategySession: 'Session stratégique',
    zeroCost: 'Sans frais',
    getRoadmap: 'Obtenez votre feuille de route',
    pitch: "En 45 minutes, nous cartographions vos opportunités d'automatisation à fort levier et montrons votre vitesse potentielle.",
    badges: { duration: '45 min', cost: 'Gratuit', timeline: 'Cette semaine' }
  },
  footer: {
    crafted: '© YEAR Rightword.AI. Conçu pour aider les opérateurs à diriger l’ère de l’IA.',
    languageLabel: 'Langue',
    siteName: 'Rightword.AI',
    links: { linkedin: 'LinkedIn', email: 'Email', privacy: 'Confidentialité' }
  },
  languageNames: { en: 'English', fr: 'Français', nl: 'Nederlands' }
};

const nl: typeof en = {
  header: { cta: 'Start een project' },
  nav: {
    reality: 'Realiteitscheck',
    services: 'Diensten',
    roi: 'ROI Calculator',
    contact: 'Contact'
  },
  hero: {
    eyebrow: 'De AI-kloof komt niet—hij is er al',
    headline: 'Uw concurrenten automatiseren al. U ook?',
    subheadline: 'Elke kwartaal zonder AI-gedreven workflows kost u marktaandeel, talent en groei. Rightword.AI bouwt de slimme systemen die ambitieuze MKB\'s voorop houden—voor het te laat is.',
    primaryCta: 'Claim uw strategiegesprek',
    secondaryCta: 'Zie de kost van wachten',
    promises: [
      'Identificeer automatiseringskansen die uw concurrenten al benutten',
      'Lever AI-workflows in weken—niet kwartalen—zodat u niet achterop raakt',
      'Meet ROI vanaf dag één, bewijs waarde direct aan leiderschap'
    ],
    focusAreas: [
      'Workflow-automatisering die stapelt',
      'AI-copiloten die uw team vertrouwt',
      'Operationele intelligentie in realtime',
      'Veranderingsverankering die blijft'
    ],
    criticalEyebrow: 'Kritieke capaciteiten',
    criticalHeadline: 'Wat u nodig heeft om te concurreren',
    criticalSub: 'De automatiseringscapaciteiten die uw concurrenten al inzetten. Hoeveel mist u?'
  },
  competitive: {
    eyebrow: 'Wake-up call',
    title: 'De concurrentiekloof is echt—en wordt groter',
    description: 'Terwijl u evalueert, voeren uw concurrenten uit. Dit tonen de gegevens.'
  },
  value: {
    eyebrow: 'Geen excuses meer',
    title: 'Snelheid, niet perfectie, wint de AI-race',
    description: 'Uw concurrenten zijn niet slimmer—ze zijn sneller. Terwijl u uw plan perfectioneert, leveren zij, leren zij en bouwen zij voordeel op.',
    quote: '“Het beste moment om te starten was vorig kwartaal. Het op één na beste moment is nu.”',
    quoteSub: 'Elke week uitstel is een week dat concurrenten uitlopen'
  },
  cost: {
    eyebrow: 'Bereken uw blinde vlek',
    title: 'Wat kost wachten u echt?',
    description: 'Handmatige processen zijn niet alleen traag—ze zijn duur. Zie uw werkelijke vertragingkost.'
  },
  services: {
    eyebrow: 'Kom snel op gang',
    title: 'Van nul naar AI-voordeel in weken, niet maanden',
    description: 'Kies uw snelheid. Elke samenwerking levert werkende AI-systemen met meetbare ROI—snel.',
    mostPopular: 'MEEST POPULAIR',
    startSprint: 'Start deze sprint →',
    engagementLabel: 'Traject'
  },
  process: {
    eyebrow: 'Beproefde aanpak',
    title: 'Van workshop tot werkend systeem in recordtijd',
    description: 'Geen eindeloze discovery. Geen analyseverlamming. Gewoon snelle, gerichte uitvoering die vanaf dag één waarde stapelt.',
    whyDifferent: 'Waarom wij anders zijn',
    blurb1: 'De meeste consultants praten. Wij leveren. Productierijpe AI-systemen met meetbare KPI\'s in weken, niet kwartalen.',
    blurb2: 'Elke fase houdt momentum tastbaar. Uw team ziet elke week vooruitgang. Leiderschap ziet elke maand ROI.',
    speedTag: 'Snelheid stapelt voordeel'
  },
  gains: {
    eyebrow: 'Tastbare resultaten',
    title: 'Hoe AI-voordeel er echt uitziet',
    description: 'Geen vage beloften. Echte, meetbare verbeteringen die ieder kwartaal stapelen.'
  },
  urgency: {
    eyebrow: 'Beperkte beschikbaarheid',
    title: 'Elk kwartaal dat u wacht, wordt de kloof groter',
    slotsRemaining: 'Resterende plekken',
    nextAvailability: 'Volgende beschikbaarheid',
    button: 'Claim uw strategiegesprek nu',
    details: (duration: string) => `${duration} · Geen verplichtingen · Zie uw AI-roadmap`,
    status: (companies: number, slots: number) => `We hielpen ${companies} bedrijven deze maand aan AI-voordeel. Slechts ${slots} strategische plekken over dit kwartaal.`
  },
  contact: {
    eyebrow: 'Stop met wachten. Begin met winnen.',
    orMessage: 'Of stuur ons een bericht',
    respondTime: 'Reactie binnen 24 uur',
    strategySession: 'Strategie sessie',
    zeroCost: 'Geen kosten',
    getRoadmap: 'Ontvang uw roadmap',
    pitch: "In 45 minuten brengen we uw hoogste automatiseringskansen in kaart en tonen hoe snel u kunt bewegen.",
    badges: { duration: '45 min', cost: 'Geen kosten', timeline: 'Deze week' }
  },
  footer: {
    crafted: '© YEAR Rightword.AI. Ontworpen om operators te helpen het AI-tijdperk te leiden.',
    languageLabel: 'Taal',
    siteName: 'Rightword.AI',
    links: { linkedin: 'LinkedIn', email: 'E-mail', privacy: 'Privacy' }
  },
  languageNames: { en: 'English', fr: 'Français', nl: 'Nederlands' }
};

const dictionaries: Record<Locale, typeof en> = { en, fr, nl };

export function getDictionary(locale: string) {
  if (locale in dictionaries) return dictionaries[locale as Locale];
  return dictionaries[defaultLocale];
}

export function formatFooterCrafted(dict: typeof en) {
  return dict.footer.crafted.replace('YEAR', new Date().getFullYear().toString());
}

// Adding extended translated content arrays for services, process steps, gains, and contact content.

export interface ServicePackageT {
  name: string;
  duration: string;
  description: string;
  outcomes: string[];
}
export interface ProcessStepT { title: string; description: string; }

// Extend dictionaries with packages, steps, gains, contact headlines.
(en as any).servicesPackages = [
  { name: 'AI Opportunity Sprint', duration: '2 weeks', description: 'Rapid audit of your workflows, data, and tooling to surface high-leverage automation pilots.', outcomes: ['Prioritized automation backlog', 'Architecture recommendations', 'Executive-ready roadmap'] },
  { name: 'Pilot to Production', duration: '6-10 weeks', description: 'Design, build, and deploy a production-ready AI workflow with measurable KPIs and adoption support.', outcomes: ['Human-in-the-loop workflow', 'Integrated analytics dashboard', 'Enablement toolkit for teams'] },
  { name: 'Co-managed AI Platform', duration: 'Retainer', description: 'Ongoing enhancements, monitoring, and strategic advisory to scale AI capability across the business.', outcomes: ['Continuous model & workflow tuning', 'Quarterly automation roadmap', 'On-call reliability support'] }
] as ServicePackageT[];
(fr as any).servicesPackages = [
  { name: 'Sprint Opportunités IA', duration: '2 semaines', description: 'Audit rapide de vos workflows, données et outils pour révéler des pilotes d’automatisation à fort levier.', outcomes: ['Backlog d’automatisation priorisé', 'Recommandations d’architecture', 'Feuille de route prête pour direction'] },
  { name: 'Pilote à Production', duration: '6-10 semaines', description: 'Concevoir, construire et déployer un workflow IA prêt pour la production avec KPI mesurables et adoption.', outcomes: ['Workflow humain-dans-la-boucle', 'Tableau de bord analytique intégré', 'Kit d’appropriation pour équipes'] },
  { name: 'Plateforme IA co-gérée', duration: 'Récurrent', description: 'Améliorations continues, monitoring et conseil stratégique pour étendre la capacité IA.', outcomes: ['Optimisation continue modèles & workflows', 'Feuille de route trimestrielle', 'Support fiabilité à la demande'] }
] as ServicePackageT[];
(nl as any).servicesPackages = [
  { name: 'AI Kansen Sprint', duration: '2 weken', description: 'Snelle audit van workflows, data en tooling om high‑leverage automatiseringspilots te vinden.', outcomes: ['Geprioriteerde automatiseringsbacklog', 'Architectuuraanbevelingen', 'Roadmap voor leiderschap'] },
  { name: 'Pilot naar Productie', duration: '6-10 weken', description: 'Ontwerp, bouw en implementeer een productierijpe AI-workflow met meetbare KPI’s en adoptie support.', outcomes: ['Mens-in-de-lus workflow', 'Geïntegreerd analytics dashboard', 'Enablement toolkit voor teams'] },
  { name: 'Co-beheerd AI Platform', duration: 'Contract', description: 'Doorlopende verbeteringen, monitoring en strategisch advies om AI-capaciteit te schalen.', outcomes: ['Continue model & workflow tuning', 'Kwartaal automatiseringsroadmap', 'On-call betrouwbaarheid support'] }
] as ServicePackageT[];

(en as any).processSteps = [
  { title: '01 — Discover', description: 'We partner with your operators to map pain points, data availability, and hidden constraints.' },
  { title: '02 — Design', description: 'Co-create the ideal-state journey, align on success metrics, and prototype key interactions.' },
  { title: '03 — Build', description: 'Ship in iterations with real-time feedback loops, automated testing, and transparent status updates.' },
  { title: '04 — Launch', description: 'Deploy with training, documentation, and monitoring so teams adopt quickly and confidently.' },
  { title: '05 — Amplify', description: 'Measure outcomes, capture next opportunities, and expand wins across your organization.' }
] as ProcessStepT[];
(fr as any).processSteps = [
  { title: '01 — Découvrir', description: 'Cartographie des points de douleur, disponibilité des données et contraintes cachées avec vos opérateurs.' },
  { title: '02 — Concevoir', description: 'Co-créer le parcours cible, aligner sur les métriques et prototyper les interactions clés.' },
  { title: '03 — Construire', description: 'Livrer par itérations avec boucles de feedback, tests automatisés et statut transparent.' },
  { title: '04 — Lancer', description: 'Déployer avec formation, documentation et monitoring pour adoption rapide et confiante.' },
  { title: '05 — Amplifier', description: 'Mesurer les résultats, saisir les prochaines opportunités et étendre les gains.' }
] as ProcessStepT[];
(nl as any).processSteps = [
  { title: '01 — Ontdekken', description: 'Samen met operators pijnpunten, datatoegang en verborgen beperkingen in kaart brengen.' },
  { title: '02 — Ontwerpen', description: 'Ideale journey co-creëren, succesmetrics afstemmen en key interacties prototypen.' },
  { title: '03 — Bouwen', description: 'Iteratief leveren met realtime feedback, geautomatiseerd testen en transparante status.' },
  { title: '04 — Lanceren', description: 'Uitrollen met training, documentatie en monitoring voor snelle, zekere adoptie.' },
  { title: '05 — Versterken', description: 'Resultaten meten, volgende kansen vastleggen en successen uitbreiden.' }
] as ProcessStepT[];

(en as any).gainsItems = [
  'Reduce repetitive work and unlock team capacity',
  'Introduce guardrails that improve accuracy and compliance',
  'Increase visibility with analytics tailored to operators',
  'Create scalable foundations for future AI initiatives'
];
(fr as any).gainsItems = [
  'Réduire le travail répétitif et libérer de la capacité',
  'Introduire des garde-fous améliorant précision et conformité',
  'Augmenter la visibilité avec analytics adaptés aux opérateurs',
  'Créer des bases scalables pour les initiatives IA futures'
];
(nl as any).gainsItems = [
  'Verminder repetitief werk en ontgrendel teamcapaciteit',
  'Introduceer vangrails die nauwkeurigheid en compliance verbeteren',
  'Vergroot zichtbaarheid met analytics op maat voor operators',
  'Creëer schaalbare fundamenten voor toekomstige AI-initiatieven'
];

(en as any).contact.headline = 'Stop letting competitors eat your market share';
(en as any).contact.subheadline = "The gap widens every quarter. Book your strategy call now—only 3 slots left this quarter. If not now, when? If not you, who?";
(fr as any).contact.headline = 'Arrêtez de laisser les concurrents prendre votre part de marché';
(fr as any).contact.subheadline = 'Le fossé se creuse chaque trimestre. Réservez votre appel stratégique maintenant—seulement 3 créneaux restants. Si pas maintenant, quand ?';
(nl as any).contact.headline = 'Laat concurrenten uw marktaandeel niet opeten';
(nl as any).contact.subheadline = 'De kloof groeit elk kwartaal. Boek uw strategiegesprek—slechts 3 plekken over. Zo niet nu, wanneer?';

(en as any).contact.methods = [
  { label: 'info@rightword.ai', href: 'mailto:info@rightword.ai' },
  { label: 'Claim your slot now', href: 'https://cal.com/rightword-ai/roadmap' }
];
(fr as any).contact.methods = [
  { label: 'info@rightword.ai', href: 'mailto:info@rightword.ai' },
  { label: 'Réservez votre créneau', href: 'https://cal.com/rightword-ai/roadmap' }
];
(nl as any).contact.methods = [
  { label: 'info@rightword.ai', href: 'mailto:info@rightword.ai' },
  { label: 'Claim uw plek nu', href: 'https://cal.com/rightword-ai/roadmap' }
];

(en as any).valuePropositions = [
  { title: 'Speed wins markets', description: 'While others plan and debate, we ship production AI in 6-10 weeks. Every month of delay is market share lost to faster competitors.' },
  { title: 'Built to compound', description: 'Your competitors\' AI investments are compounding monthly. Our systems create the same multiplier effect—starting now, not someday.' },
  { title: 'No excuses, just results', description: "Legacy processes, manual workflows, and 'we'll do it later' attitudes are how companies fall behind. We eliminate all three." },
  { title: 'ROI you can prove', description: "Leaders don't get left behind by accident—they hesitate while others act. We measure impact from day one so you never hesitate again." }
];
(fr as any).valuePropositions = [
  { title: 'La vitesse gagne les marchés', description: 'Pendant que d\'autres planifient et débattent, nous livrons de l\'IA en production en 6-10 semaines. Chaque mois de retard est une part de marché perdue.' },
  { title: 'Construit pour se composer', description: 'Les investissements IA de vos concurrents se composent chaque mois. Nos systèmes créent le même effet multiplicateur—dès maintenant, pas un jour.' },
  { title: 'Pas d’excuses, des résultats', description: "Processus hérités, workflows manuels et attitude 'plus tard' font perdre du terrain. Nous éliminons les trois." },
  { title: 'Un ROI prouvable', description: "Les leaders ne sont pas dépassés par accident—ils hésitent tandis que d\'autres agissent. Nous mesurons l’impact dès le premier jour." }
];
(nl as any).valuePropositions = [
  { title: 'Snelheid wint markten', description: 'Terwijl anderen plannen en discussiëren leveren wij productie‑AI in 6-10 weken. Elke maand vertraging kost marktaandeel.' },
  { title: 'Gebouwd om te stapelen', description: 'De AI-investeringen van uw concurrenten stapelen maand na maand. Onze systemen creëren hetzelfde multipliereffect—nu, niet ooit.' },
  { title: 'Geen excuses, alleen resultaat', description: "Legacy processen, handmatige workflows en \"later\" houding zorgen dat bedrijven achterop raken. Wij elimineren alle drie." },
  { title: 'Bewijsbare ROI', description: 'Leiders blijven niet achter per ongeluk—ze aarzelen terwijl anderen handelen. Wij meten impact vanaf dag één.' }
];

(en as any).competitiveStats = [
  { value: 73, suffix: '%', label: 'of SMBs plan AI adoption in 2025', emphasis: 'urgency', context: 'Are you in the 27% falling behind?' },
  { value: 40, suffix: '%', label: 'productivity gains with AI', emphasis: 'success', context: 'What could your team do with 40% more capacity?' },
  { value: 3, suffix: 'x', label: 'more likely for industry leaders', emphasis: 'urgency', context: 'Leaders are already moving. Where do you stand?' },
  { value: 6, suffix: ' months', label: 'average AI implementation delay', emphasis: 'warning', context: 'Every quarter of delay widens the competitive gap' }
];
(fr as any).competitiveStats = [
  { value: 73, suffix: '%', label: "des PME prévoient l'adoption IA en 2025", emphasis: 'urgency', context: 'Êtes-vous dans les 27% en retard ?' },
  { value: 40, suffix: '%', label: 'de gains de productivité avec IA', emphasis: 'success', context: 'Que ferait votre équipe avec 40% de capacité en plus ?' },
  { value: 3, suffix: 'x', label: "plus probable pour les leaders", emphasis: 'urgency', context: 'Les leaders avancent déjà. Et vous ?' },
  { value: 6, suffix: ' mois', label: "retard moyen de mise en œuvre IA", emphasis: 'warning', context: 'Chaque trimestre de retard élargit le fossé' }
];
(nl as any).competitiveStats = [
  { value: 73, suffix: '%', label: 'van MKB\'s plannen AI-adoptie in 2025', emphasis: 'urgency', context: 'Bent u in de 27% die achterblijft?' },
  { value: 40, suffix: '%', label: 'productiviteitswinst met AI', emphasis: 'success', context: 'Wat kan uw team met 40% meer capaciteit?' },
  { value: 3, suffix: 'x', label: 'meer kans voor industrie leiders', emphasis: 'urgency', context: 'Leiders bewegen al. Waar staat u?' },
  { value: 6, suffix: ' maanden', label: 'gemiddelde AI implementatievertraging', emphasis: 'warning', context: 'Elk kwartaal vertraging vergroot de kloof' }
];

(en as any).fomo = { messages: [
  "The AI divide isn't coming—it's here",
  "Your competitors aren't waiting. Are you?",
  "Every quarter of delay compounds the gap",
  "The cost of 'later' is market share today",
  "AI adoption isn't a tech decision—it's survival",
  "While you're planning, they're executing",
  "The gap widens every quarter you wait"
] };
(fr as any).fomo = { messages: [
  "La fracture IA n'arrive pas—elle est là",
  "Vos concurrents n'attendent pas. Et vous ?",
  "Chaque trimestre de retard élargit le fossé",
  "Le coût de 'plus tard' est de la part de marché aujourd'hui",
  "L'adoption IA n'est pas une décision tech—c'est la survie",
  "Pendant que vous planifiez, ils exécutent",
  "Le fossé se creuse chaque trimestre d'attente"
] };
(nl as any).fomo = { messages: [
  'De AI-kloof komt niet—hij is er',
  'Uw concurrenten wachten niet. U wel?',
  'Elk kwartaal vertraging vergroot de kloof',
  "De kost van 'later' is marktaandeel vandaag",
  'AI-adoptie is geen tech beslissing—het is overleven',
  'Terwijl u plant, voeren zij uit',
  'De kloof wordt groter ieder kwartaal dat u wacht'
] };

(en as any).urgencyBanner = { only: 'Only', consultationSlots: 'consultation slots available this quarter', nextOpening: '· Next opening:' };
(fr as any).urgencyBanner = { only: 'Seulement', consultationSlots: 'créneaux de consultation disponibles ce trimestre', nextOpening: '· Prochaine ouverture :' };
(nl as any).urgencyBanner = { only: 'Slechts', consultationSlots: 'consultatie plekken beschikbaar dit kwartaal', nextOpening: '· Volgende opening:' };

(en as any).form = {
  name: 'Name', email: 'Email', company: 'Company', message: 'Message',
  required: '*', namePlaceholder: 'Your name', emailPlaceholder: 'your@email.com', companyPlaceholder: 'Your company name', messagePlaceholder: 'Tell us about your automation challenges...',
  sending: 'Sending...', send: 'Send Message', success: "Thank you! We'll get back to you within 24 hours.", errorGeneric: 'Something went wrong'
};
(fr as any).form = {
  name: 'Nom', email: 'Email', company: 'Société', message: 'Message',
  required: '*', namePlaceholder: 'Votre nom', emailPlaceholder: 'votre@email.com', companyPlaceholder: "Nom de votre société", messagePlaceholder: "Parlez-nous de vos défis d'automatisation...",
  sending: 'Envoi...', send: 'Envoyer', success: "Merci ! Nous reviendrons vers vous sous 24h.", errorGeneric: 'Une erreur est survenue'
};
(nl as any).form = {
  name: 'Naam', email: 'E-mail', company: 'Bedrijf', message: 'Bericht',
  required: '*', namePlaceholder: 'Uw naam', emailPlaceholder: 'uw@email.com', companyPlaceholder: 'Naam van uw bedrijf', messagePlaceholder: 'Vertel ons over uw automatiseringsuitdagingen...',
  sending: 'Versturen...', send: 'Verstuur', success: 'Bedankt! We reageren binnen 24 uur.', errorGeneric: 'Er ging iets mis'
};

export type ExtendedDict = ReturnType<typeof getDictionary> & {
  servicesPackages?: ServicePackageT[];
  processSteps?: ProcessStepT[];
  gainsItems?: string[];
};
