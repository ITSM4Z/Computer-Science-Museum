import { ModernTopic } from '../types';

export const MODERN_TOPICS: ModernTopic[] = [
  {
    id: 'topic-ai',
    title: 'Artificial Intelligence & Foundation Models',
    tagline: 'From symbolic heuristics to massive statistical parameter spaces',
    currentReality: 'Large language models, multimodal transformers, and computer vision systems assist in software engineering, medical diagnosis, language translation, and media generation.',
    historicalRoots: 'Direct descendant of Alan Turing’s 1950 imitation game, Rosenblatt’s 1958 perceptron, and Backus’s belief in automated compilation—now extended to statistical code generation.',
    speculativeFuture: 'Active research explores autonomous agent swarms, neuro-symbolic reasoning to reduce hallucinations, and artificial general intelligence (AGI), though physical grounding and reliable factual validation remain unsolved problems.',
    ethicalConsiderations: 'Data provenance, copyright infringement, algorithmic bias, energy consumption of massive training runs, and labor displacement.',
    keyMilestonesTied: ['Turing Machine (1936)', 'AlexNet (2012)', 'Transformer Architecture (2017)'],
    icon: 'brain'
  },
  {
    id: 'topic-cybersecurity',
    title: 'Cybersecurity & Cryptography',
    tagline: 'Securing global distributed infrastructure against asymmetric threats',
    currentReality: 'Public-key cryptography (RSA, Elliptic Curves), zero-trust architecture, multi-factor authentication, end-to-end encrypted messaging, and automated vulnerability scanning.',
    historicalRoots: 'Traces back to Bletchley Park’s cryptanalysis of the Enigma machine, Shannon’s mathematical secrecy theories, and the emergence of early computer viruses on ARPANET.',
    speculativeFuture: 'Migration to post-quantum cryptography (lattice-based algorithms resistant to Shor’s algorithm on quantum machines) and automated AI-driven offensive/defensive cyber agents.',
    ethicalConsiderations: 'The balance between individual privacy (unbreakable encryption) and state surveillance, weaponized zero-day exploits, and ransomware on critical hospital/utility grids.',
    keyMilestonesTied: ['Alan Turing (1936)', 'Shannon Information Theory (1948)', 'ARPANET (1969)'],
    icon: 'shield'
  },
  {
    id: 'topic-datascience',
    title: 'Data Science & Big Data Analytics',
    tagline: 'Extracting empirical knowledge from petabytes of sensor and behavioral data',
    currentReality: 'Distributed computing frameworks (Apache Spark, Snowflake, BigQuery) processing billions of events daily for epidemiology, finance, genomics, and logistics.',
    historicalRoots: 'Rooted in 19th-century Hollerith punch-card census tabulations, 1970s relational database theory (Edgar F. Codd), and 20th-century statistical inference.',
    speculativeFuture: 'Real-time digital twins of entire biosphere and metropolitan systems, personalized precision medicine models continuously updated by wearable telemetry.',
    ethicalConsiderations: 'Surveillance capitalism, loss of personal data ownership, and automated algorithmic redlining or credit denial without transparent human recourse.',
    keyMilestonesTied: ['Counting Frame & Positional Arithmetic', 'Relational Databases (1970s)', 'Cloud Hyperscale (2006)'],
    icon: 'chart'
  },
  {
    id: 'topic-cloud',
    title: 'Cloud Infrastructure & Distributed Systems',
    tagline: 'The planetary computer: elastic, virtualized, and globally synchronized',
    currentReality: 'Hyperscale multi-region data centers providing on-demand compute, managed container orchestration (Kubernetes), serverless functions, and global content delivery networks.',
    historicalRoots: 'Evolved directly from 1960s mainframe time-sharing, ARPANET packet networking, and virtual memory systems developed for UNIX and CTSS.',
    speculativeFuture: 'Edge-cloud fusion where low-latency inference happens on localized micro-datacenters attached to 5G/6G cell towers, creating seamless ambient computation.',
    ethicalConsiderations: 'Extreme centralization of infrastructure in a handful of multinational corporate providers, creating single points of geopolitical and systemic failure.',
    keyMilestonesTied: ['ARPANET First Packet (1969)', 'UNIX Operating System (1971)', 'AWS & Hyperscale Cloud (2006)'],
    icon: 'server'
  },
  {
    id: 'topic-robotics',
    title: 'Robotics & Autonomous Systems',
    tagline: 'Bridging abstract digital computation with dynamic physical environments',
    currentReality: 'Warehouse autonomous mobile robots (AMRs), industrial automotive assembly arms, robotic surgical assistants, and commercial autonomous driving pilots in geofenced cities.',
    historicalRoots: 'Traces to 18th-century clockwork automata, the Jacquard loom’s mechanical feedback, and Norbert Wiener’s 1948 cybernetics (feedback loops and control theory).',
    speculativeFuture: 'General-purpose humanoid robots with foundation vision-language-action (VLA) models capable of navigating unstructured domestic and disaster-relief environments.',
    ethicalConsiderations: 'Safety liability in accidents, autonomous lethal weapons systems, and workforce obsolescence in physical trades.',
    keyMilestonesTied: ['The Jacquard Loom (1804)', 'Early Electronic Computers (1945)', 'Modern Smartphone & Sensors (2007)'],
    icon: 'cpu'
  },
  {
    id: 'topic-hci',
    title: 'Human-Computer Interaction (HCI)',
    tagline: 'Reimagining the interface between biological minds and digital silicon',
    currentReality: 'Spatial computing headsets, fluid capacitive multi-touch, voice assistants, haptic feedback actuators, and accessible assistive screen readers.',
    historicalRoots: 'Descends directly from Douglas Engelbart’s 1968 "Mother of All Demos" (introducing mouse, hypertext, and video conferencing) and the Xerox PARC/Macintosh GUI revolution.',
    speculativeFuture: 'Non-invasive neural interfaces (BCIs), real-time contextual augmented reality lenses, and predictive zero-click computing interfaces.',
    ethicalConsiderations: 'Digital addiction, immersive sensory capture, loss of tactile real-world engagement, and neuro-privacy regarding biometric/brainwave telemetry.',
    keyMilestonesTied: ['Ada Lovelace (1843)', 'Macintosh GUI (1984)', 'Smartphone Multi-Touch (2007)'],
    icon: 'layout'
  },
  {
    id: 'topic-quantum',
    title: 'Quantum Information Science',
    tagline: 'Harnessing quantum superposition and entanglement to solve intractable problems',
    currentReality: 'Noisy Intermediate-Scale Quantum (NISQ) devices with 50 to 1,000+ physical qubits exploring quantum chemistry simulations and specialized sampling benchmarks.',
    historicalRoots: 'Pioneered by Richard Feynman and David Deutsch in the 1980s, who recognized that classical computers cannot efficiently simulate quantum mechanical nature.',
    speculativeFuture: 'Fault-tolerant quantum computers with logical error-corrected qubits capable of breaking RSA cryptography, accelerating room-temperature superconductor discovery, and revolutionizing materials science.',
    ethicalConsiderations: 'Potential sudden disruption of global financial and national security encryption before post-quantum standards are universally deployed.',
    keyMilestonesTied: ['Theoretical Computing & Turing (1936)', 'Transistors (1947)', 'Quantum Supremacy Benchmarks (2019)'],
    icon: 'zap'
  },
  {
    id: 'topic-sustainable',
    title: 'Sustainable & Green Computing',
    tagline: 'Engineering low-carbon, energy-efficient silicon and thermodynamic data centers',
    currentReality: 'Custom energy-efficient ARM/RISC-V chips, liquid-cooled data centers co-located with renewable hydro/geothermal energy, and algorithmic optimizations reducing training FLOPs.',
    historicalRoots: 'Echoes the historical struggle with ENIAC’s 150-kilowatt power draw and the "Power Wall" that forced personal computers from single-core GHz races to multicore designs.',
    speculativeFuture: 'Photonic (optical) computing operating at the speed of light with minimal thermal dissipation, and bio-degradable semiconductor substrates to eliminate electronic waste.',
    ethicalConsiderations: 'The skyrocketing energy and freshwater cooling demands of generative AI training centers conflicting with municipal climate goals and water security.',
    keyMilestonesTied: ['ENIAC (1945)', 'Bell Labs Transistor (1947)', 'Microprocessor Scaling (1971)'],
    icon: 'leaf'
  }
];
