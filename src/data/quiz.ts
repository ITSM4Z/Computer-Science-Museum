import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'What was Ada Lovelace’s pivotal conceptual insight in 1843 when analyzing Charles Babbage’s Analytical Engine?',
    options: [
      'That computers could only ever perform tax arithmetic for governments',
      'That computational machinery could manipulate abstract symbols beyond numbers, including music and language',
      'That vacuum tubes would replace metal gears within five years',
      'That electronic relays were inherently faster than steam power'
    ],
    correctIndex: 1,
    explanation: 'In Note A (1843), Lovelace realized that if an engine could manipulate symbols governed by rules, it could compose music and process language—not merely do arithmetic.',
    relatedMilestone: 'Ada Lovelace Publishes the First Computer Algorithm (1843)'
  },
  {
    id: 2,
    question: 'Why is the 9th-century Persian polymath Muhammad ibn Musa al-Khwarizmi foundational to computer science?',
    options: [
      'He constructed the first working vacuum-tube calculating machine',
      'His Latinized name gave rise to the term "algorithm" and he formalized stepwise algebraic procedures',
      'He wrote the earliest compiler for commercial banking mainframes',
      'He designed the first packet-switching telephone network'
    ],
    correctIndex: 1,
    explanation: 'Al-Khwarizmi’s treatises on systematic step-by-step arithmetic and balancing were translated into Latin as "Algoritmi de numero Indorum," giving birth to the word "algorithm."',
    relatedMilestone: 'Al-Khwarizmi and Systematic Stepwise Procedures (c. 825 CE)'
  },
  {
    id: 3,
    question: 'What architectural principle, synthesized by John von Neumann in 1945, remains the blueprint for almost all modern computers?',
    options: [
      'Storing both program instructions and working data in the same unified addressable memory',
      'Requiring physical manual rewiring with patch cables for every different program run',
      'Using mechanical brass gears driven by steam rather than electrical currents',
      'Restricting calculations strictly to decimal ring counters without binary logic'
    ],
    correctIndex: 0,
    explanation: 'The Von Neumann architecture unified instructions and data in addressable electronic memory, eliminating the need to physically rewire cables to change software programs.',
    relatedMilestone: 'The Von Neumann Stored-Program Architecture (1945)'
  },
  {
    id: 4,
    question: 'What semiconductor breakthrough at Bell Labs in 1947 initiated the transition away from hot, fragile vacuum tubes?',
    options: [
      'The magnetic ferrite core plane',
      'The point-contact transistor',
      'The liquid crystal display (LCD)',
      'The multi-mode optical fiber'
    ],
    correctIndex: 1,
    explanation: 'Invented by John Bardeen, Walter Brattain, and William Shockley, the solid-state transistor replaced hot, short-lived glass vacuum tubes with durable, low-power semiconductors.',
    relatedMilestone: 'Invention of the Point-Contact Transistor (1947)'
  },
  {
    id: 5,
    question: 'What revolutionary shift in software did Rear Admiral Grace Hopper champion through FLOW-MATIC and COBOL?',
    options: [
      'Restricting all program development strictly to binary punched tape',
      'Allowing programmers to write instructions using English keywords (e.g., ADD, MOVE, MULTIPLY) translated by compilers',
      'Eliminating the need for operating system kernels and filesystems',
      'Mandating that all software be hand-assembled in octal notation'
    ],
    correctIndex: 1,
    explanation: 'Grace Hopper proved that computers could parse human words rather than just mathematical formulas, opening programming to administrative and commercial sectors worldwide.',
    relatedMilestone: 'Grace Hopper and English-Like Business Languages (COBOL) (1959)'
  },
  {
    id: 6,
    question: 'What major bottleneck did the 1958 invention of the monolithic integrated circuit (Kilby & Noyce) overcome?',
    options: [
      'The "Tyranny of Numbers"—the failure rate of hand-soldering thousands of discrete component wires',
      'The inability of computers to display graphical monochrome pixels',
      'The lack of an international ASCII text encoding standard',
      'The physical limitation of paper punch-card storage capacity'
    ],
    correctIndex: 0,
    explanation: 'By etching transistors, resistors, and interconnects onto a single monolithic slice of silicon, the microchip ended the need to hand-solder individual component wires.',
    relatedMilestone: 'Invention of the Monolithic Integrated Circuit (1958)'
  },
  {
    id: 7,
    question: 'In October 1969, what was the first message transmitted between UCLA and Stanford over ARPANET before a buffer crashed the system?',
    options: [
      '"HELLO"',
      '"LO"',
      '"START"',
      '"NET_OK"'
    ],
    correctIndex: 1,
    explanation: 'Programmer Charley Kline typed "L" and "O" from UCLA; the system crashed before he could finish typing "LOGIN", marking the very first packet-switched transmission.',
    relatedMilestone: 'ARPANET Transmits the First Packet-Switched Message (1969)'
  },
  {
    id: 8,
    question: 'What three foundational technologies did Sir Tim Berners-Lee invent at CERN to create the World Wide Web?',
    options: [
      'Microprocessors, Dynamic RAM, and Floppy Diskettes',
      'URIs (URLs), HTTP protocol, and HTML markup language',
      'Vacuum Tubes, Relay Switches, and Binary Paper Tape',
      'Assembly Language, Relational Databases, and SQL'
    ],
    correctIndex: 1,
    explanation: 'Tim Berners-Lee created Universal Resource Identifiers (URIs/URLs), the HyperText Transfer Protocol (HTTP), and HyperText Markup Language (HTML) along with the first browser.',
    relatedMilestone: 'Tim Berners-Lee Conceives the World Wide Web (1989)'
  },
  {
    id: 9,
    question: 'Why was the 2012 AlexNet achievement in the ImageNet challenge a watershed moment for computing?',
    options: [
      'It demonstrated that deep convolutional neural networks trained on parallel GPUs vastly outperformed traditional algorithmic vision',
      'It demonstrated that a computer could run the UNIX operating system without memory',
      'It was the first computer simulation to predict quantum superposition',
      'It established the 8-bit ASCII character encoding standard'
    ],
    correctIndex: 0,
    explanation: 'AlexNet crushed traditional hand-engineered computer vision benchmarks by over 10 percentage points, igniting the modern deep learning boom across artificial intelligence.',
    relatedMilestone: 'AlexNet and the Deep Learning Renaissance (2012)'
  },
  {
    id: 10,
    question: 'What physical limitation historically forced CPU designers around 2004–2005 to shift from pushing single-core gigahertz clock speeds to multi-core architectures?',
    options: [
      'The global exhaustion of chemical germanium supplies',
      'The "Power Wall"—extreme thermal heat dissipation and exponential power consumption at high clock frequencies',
      'A hardware decree by the World Wide Web Consortium',
      'The mathematical impossibility of running operating systems above 1 GHz'
    ],
    correctIndex: 1,
    explanation: 'As clock speeds approached 3–4 GHz, chips generated unsustainable heat and consumed exponential power (the "Power Wall"), necessitating parallel multi-core architectures.',
    relatedMilestone: 'Personal Computers & Modern Embedded Devices Hardware Evolution'
  }
];
