import { SourceItem } from '../types';

export const SOURCES: SourceItem[] = [
  {
    id: 'chm-timeline',
    title: 'Timeline of Computer History',
    url: 'https://www.computerhistory.org/timeline/',
    institution: 'Computer History Museum (Mountain View, California)',
    supportedTopics: 'Chronology of mechanical calculators, ENIAC specifications, early mainframes, microprocessors, and personal computer revolution',
    type: 'Museum Archive',
    annotation: 'Comprehensive archival repository containing primary artifacts, technical documentation, and oral histories of computing pioneers.'
  },
  {
    id: 'turing-archive',
    title: 'The Turing Digital Archive & Collected Works',
    url: 'https://turingarchive.kings.cam.ac.uk/',
    institution: 'King’s College, Cambridge & The Turing Trust',
    supportedTopics: 'Alan Turing’s 1936 paper "On Computable Numbers", Universal Turing Machine theory, and Enigma cryptanalysis documentation',
    type: 'Primary Historical Document',
    annotation: 'Digitized facsimiles of Turing’s personal manuscripts, theoretical notes, and postwar computational proposals.'
  },
  {
    id: 'babbage-engine',
    title: 'The Babbage Engine Project & Analytical Engine Archives',
    url: 'https://www.computerhistory.org/babbage/',
    institution: 'Computer History Museum & Science Museum London',
    supportedTopics: 'Charles Babbage’s mechanical blueprints, Difference Engine operation, and Ada Lovelace’s 1843 Notes and Bernoulli number algorithm',
    type: 'Museum Archive',
    annotation: 'Authoritative analysis of Babbage’s mechanical calculating designs and the successful physical construction of Difference Engine No. 2.'
  },
  {
    id: 'bell-labs-archives',
    title: 'History of the Transistor and UNIX Operating System',
    url: 'https://www.bell-labs.com/about/history/',
    institution: 'Nokia Bell Labs & IEEE Global History Network',
    supportedTopics: '1947 point-contact transistor invention, Claude Shannon’s 1948 information theory paper, and Dennis Ritchie & Ken Thompson’s UNIX development',
    type: 'Professional Organization',
    annotation: 'Primary institutional documentation of semiconductor solid-state physics and the foundation of C and UNIX systems.'
  },
  {
    id: 'stanford-sep-computing',
    title: 'The Modern History of Computing & Computability',
    url: 'https://plato.stanford.edu/entries/computing-history/',
    institution: 'Stanford Encyclopedia of Philosophy (Stanford University)',
    supportedTopics: 'Philosophical and mathematical foundations: Church-Turing thesis, algorithmic computability, and the stored-program concept',
    type: 'University & Academic',
    annotation: 'Peer-reviewed academic analysis synthesizing the theoretical evolution from discrete mathematics to machine architectures.'
  },
  {
    id: 'w3c-history',
    title: 'A Little History of the World Wide Web',
    url: 'https://www.w3.org/History.html',
    institution: 'World Wide Web Consortium (W3C) / CERN',
    supportedTopics: 'Tim Berners-Lee’s original 1989 proposal, earliest NeXT browser client, and open specification of URI, HTTP, and HTML',
    type: 'Standards Body & Consortium',
    annotation: 'Official historical timeline maintained by the standards body governing open web specifications.'
  },
  {
    id: 'nasa-software-history',
    title: 'Computers in Spaceflight: The NASA Experience',
    url: 'https://history.nasa.gov/computers/contents.html',
    institution: 'NASA History Division',
    supportedTopics: 'Margaret Hamilton’s Apollo 11 guidance software architecture, real-time priority scheduling, and human computing at Langley',
    type: 'Primary Historical Document',
    annotation: 'Declassified technical histories detailing the emergence of software engineering as a rigorous life-critical discipline.'
  },
  {
    id: 'ieee-annals',
    title: 'IEEE Annals of the History of Computing',
    url: 'https://www.computer.org/csdl/magazine/an',
    institution: 'IEEE Computer Society',
    supportedTopics: 'Peer-reviewed historical scholarship on hardware transitions, microprocessors, network protocols, and computing pioneer biographies',
    type: 'Professional Organization',
    annotation: 'The premier scholarly journal dedicated to the history of computational hardware, software, and human systems.'
  },
  {
    id: 'mactutor-algorithms',
    title: 'MacTutor History of Mathematics Archive',
    url: 'https://mathshistory.st-andrews.ac.uk/',
    institution: 'University of St Andrews, Scotland',
    supportedTopics: 'Muhammad ibn Musa al-Khwarizmi’s algebraic texts, Euclid’s algorithm, and ancient Greek/Babylonian positional arithmetic systems',
    type: 'University & Academic',
    annotation: 'Global reference archive for mathematical biographies and historical procedural calculations.'
  },
  {
    id: 'smithsonian-eniac',
    title: 'ENIAC and Early Electronic Computing Artifacts',
    url: 'https://airandspace.si.edu/stories/editorial/eniac',
    institution: 'Smithsonian National Air and Space Museum',
    supportedTopics: 'ENIAC vacuum-tube design, ballistics calculation tables, and the technical contributions of the six women programmers',
    type: 'Museum Archive',
    annotation: 'National museum archive documenting early electronic computing hardware, operator manuals, and wartime computational needs.'
  },
  {
    id: 'ncsa-mosaic',
    title: 'NCSA and the Dawn of the Commercial Web',
    url: 'https://www.ncsa.illinois.edu/about/history/',
    institution: 'National Center for Supercomputing Applications (University of Illinois Urbana-Champaign)',
    supportedTopics: 'Development of the NCSA Mosaic browser, inline graphics rendering, and the popularization of consumer web access',
    type: 'University & Academic',
    annotation: 'Institutional history describing how university supercomputing research sparked the modern graphical web.'
  },
  {
    id: 'neurips-deep-learning',
    title: 'Neural Information Processing Systems & Deep Learning Proceedings',
    url: 'https://proceedings.neurips.cc/',
    institution: 'NeurIPS Foundation & Cornell University arXiv',
    supportedTopics: 'AlexNet ImageNet breakthrough (2012), Transformer attention architecture (2017), and modern deep neural network benchmarks',
    type: 'Peer-Reviewed Conference',
    annotation: 'Premier peer-reviewed international scientific proceedings governing advancements in machine learning and artificial neural networks.'
  },
  {
    id: 'nature-quantum',
    title: 'Quantum Computational Advantage and Emerging Architectures',
    url: 'https://www.nature.com/articles/s41586-019-1666-5',
    institution: 'Nature Publishing Group & Academic Physics Research Teams',
    supportedTopics: 'Superconducting transmon quantum processors, quantum computational advantage benchmarks, and cryogenic computing constraints',
    type: 'Peer-Reviewed Journal',
    annotation: 'Authoritative international scientific journal publishing verified physical experimental demonstrations in quantum physics.'
  }
];
