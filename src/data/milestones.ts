import { Milestone } from '../types';

export const MILESTONES: Milestone[] = [
  {
    id: 'abacus-foundations',
    year: 'c. 2400 BCE',
    yearNumeric: -2400,
    title: 'The Counting Frame and Positional Calculation',
    era: 'foundations',
    category: 'Hardware',
    summary: 'The Sumerian and Babylonian abacus, followed by Roman and Chinese bead frames, transformed calculation from mental strain into physical bead manipulation on designated coordinate wires.',
    significance: 'Established the principle of using physical state to represent abstract numerical quantities and positional place-value arithmetic.',
    pioneer: 'Ancient Mesopotamian and Chinese Calculators',
    technicalDetail: 'Tokens or beads represented discrete digits (units, tens, hundreds). Moving a bead altered the stored state, performing addition, subtraction, and multi-digit operations through tactile mechanics.',
    source: {
      title: 'A History of Computing Technology',
      url: 'https://www.computerhistory.org/timeline/calculators/',
      publisher: 'Computer History Museum'
    },
    tags: ['Abacus', 'Arithmetic', 'Ancient Tools', 'Number Systems'],
    artifactType: 'mechanical'
  },
  {
    id: 'alkhwarizmi-algorithms',
    year: 'c. 825 CE',
    yearNumeric: 825,
    title: 'Al-Khwarizmi and Systematic Stepwise Procedures',
    era: 'foundations',
    category: 'Theory',
    summary: 'Persian polymath Muhammad ibn Musa al-Khwarizmi authored "The Compendious Book on Calculation by Completion and Balancing," establishing rule-based procedural calculation.',
    significance: 'The Latin translation of his name gave rise to the word "algorithm," formalizing the concept that complex problems can be solved through finite sequences of unambiguous steps.',
    pioneer: 'Muhammad ibn Musa al-Khwarizmi (House of Wisdom, Baghdad)',
    technicalDetail: 'Introduced Hindu-Arabic numerals, zero as a place-holder, and algebraic reduction (al-jabr) as deterministic procedures executable by any trained practitioner.',
    source: {
      title: 'Al-Khwarizmi: The Father of Algebra and Algorithms',
      url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Al-Khwarizmi/',
      publisher: 'MacTutor History of Mathematics, University of St Andrews'
    },
    tags: ['Algorithms', 'Algebra', 'Foundations', 'Mathematics'],
    artifactType: 'algorithm',
    quote: {
      text: 'When I consider what people generally want in calculating, I found that it always is a number.',
      author: 'Al-Khwarizmi'
    }
  },
  {
    id: 'pascaline-calculator',
    year: 'c. 1642–1645',
    yearNumeric: 1642,
    title: 'The Pascaline Mechanical Adding Machine',
    era: 'mechanical',
    category: 'Hardware',
    summary: 'French mathematician and philosopher Blaise Pascal designed and built a working mechanical calculator (the Pascaline) using interlocking toothed gears to assist his father, a regional tax administrator in Rouen.',
    significance: 'One of the earliest operational mechanical calculating devices, proving that arithmetic operations (addition and subtraction) could be performed reliably by mechanical physical parts rather than solely human mental labor.',
    pioneer: 'Blaise Pascal',
    technicalDetail: 'Operated by turning dial wheels. Pascal solved the difficult "carry" problem (turning from 9 to 10) with a clever gravity-assisted arm called the sautoir, which dropped down to nudge the adjacent higher-order wheel forward by one notch.',
    source: {
      title: 'Pascaline Mechanical Calculator Archive',
      url: 'https://www.computerhistory.org/collections/catalog/102660601',
      publisher: 'Computer History Museum'
    },
    tags: ['Mechanical', 'Gears', 'Pascal', 'Calculator'],
    artifactType: 'mechanical'
  },
  {
    id: 'jacquard-loom',
    year: 'c. 1804–1805',
    yearNumeric: 1804,
    title: 'The Jacquard Loom and Punched-Card Control',
    era: 'mechanical',
    category: 'Hardware',
    summary: 'French weaver Joseph Marie Jacquard automated the weaving of intricate textile patterns by reading binary patterns of holes punched into chains of stiff cardstock.',
    significance: 'Introduced the revolutionary concept of programmability: separating the machine’s physical hardware from the instructions that tell it what to create. Later computing pioneers adapted this exact punched-card method.',
    pioneer: 'Joseph Marie Jacquard',
    technicalDetail: 'Stiff paper cards moved past a set of spring-loaded sensing pins. If a hole was present, the pin passed through and raised a thread; where paper was solid, the pin was blocked. Swapping card decks changed the woven pattern without altering the loom itself.',
    source: {
      title: 'Jacquard Punched Card Automation',
      url: 'https://www.scienceandinformation.co.uk/jacquard-loom',
      publisher: 'Science Museum Group UK'
    },
    tags: ['Punched Cards', 'Binary Control', 'Automation', 'Textiles'],
    artifactType: 'mechanical'
  },
  {
    id: 'babbage-analytical-engine',
    year: '1834–1837 (Design)',
    yearNumeric: 1837,
    title: 'Charles Babbage Conceives the Analytical Engine',
    era: 'mechanical',
    category: 'Hardware',
    summary: 'British mathematician Charles Babbage designed a steam-powered, general-purpose mechanical calculating engine capable of executing any calculation directed by punched cards.',
    significance: 'Anticipated modern computer architecture over a century before electronic computers were built, separating memory storage from processing and supporting conditional decisions.',
    pioneer: 'Charles Babbage',
    technicalDetail: 'Babbage divided his engine into two main sections: the "Store" (which held numbers in memory like modern RAM) and the "Mill" (which performed arithmetic like a modern CPU). It could make conditional branches based on whether a calculated number was positive or negative.',
    source: {
      title: 'The Babbage Engine Project',
      url: 'https://www.computerhistory.org/babbage/',
      publisher: 'Computer History Museum'
    },
    tags: ['Babbage', 'Analytical Engine', 'Architecture', 'Mechanical'],
    artifactType: 'mechanical',
    quote: {
      text: 'The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.',
      author: 'Ada Lovelace'
    }
  },
  {
    id: 'lovelace-first-algorithm',
    year: '1843',
    yearNumeric: 1843,
    title: 'Ada Lovelace Publishes the First Computer Algorithm',
    era: 'mechanical',
    category: 'People',
    summary: 'Translating Luigi Menabrea’s lecture on Babbage’s engine, Augusta Ada King, Countess of Lovelace, added extensive "Notes" containing an explicit table for computing Bernoulli numbers.',
    significance: 'Recognized as the world’s first published computer program. Lovelace foresaw that computers could manipulate symbols beyond mere numbers, including music and language.',
    pioneer: 'Ada Lovelace',
    technicalDetail: 'Note G specified the sequence of operations, variables, intermediate results, and loop conditions required by the Analytical Engine to calculate the Bernoulli series recursively.',
    source: {
      title: 'Sketch of the Analytical Engine with Notes by the Translator',
      url: 'https://www.fourmilab.ch/babbage/sketch.html',
      publisher: 'Scientific Memoirs / Oxford University Archives'
    },
    tags: ['Ada Lovelace', 'First Programmer', 'Software', 'Theory'],
    artifactType: 'code',
    quote: {
      text: 'The engine might compose elaborate and scientific pieces of music of any degree of complexity or extent.',
      author: 'Ada Lovelace, Note A (1843)'
    }
  },
  {
    id: 'turing-universal-machine',
    year: '1936',
    yearNumeric: 1936,
    title: 'Alan Turing and the Universal Machine',
    era: 'theoretical',
    category: 'Theory',
    summary: 'In his landmark paper "On Computable Numbers," British mathematician Alan Turing introduced a theoretical model of an automatic machine that reads and writes symbols on infinite tape.',
    significance: 'Proved the limits of computation (the Halting Problem) and demonstrated that a single "Universal Machine" could simulate any algorithmic procedure given the proper coded description.',
    pioneer: 'Alan Turing',
    technicalDetail: 'A state machine moving a read/write head over a tape divided into discrete cells. It defined the Church-Turing thesis: any effectively calculable function can be evaluated by a Turing machine.',
    source: {
      title: 'The Turing Digital Archive',
      url: 'https://turingarchive.kings.cam.ac.uk/',
      publisher: 'King’s College, Cambridge'
    },
    tags: ['Turing Machine', 'Computability', 'Theory', 'Foundations'],
    artifactType: 'theory',
    quote: {
      text: 'We may compare a man in the process of computing a real number to a machine which is only capable of a finite number of conditions.',
      author: 'Alan Turing (1936)'
    }
  },
  {
    id: 'shannon-information-theory',
    year: '1948',
    yearNumeric: 1948,
    title: 'Claude Shannon Founds Information Theory & Digital Logic',
    era: 'theoretical',
    category: 'Theory',
    summary: 'Claude Shannon published "A Mathematical Theory of Communication," formalizing the concept of the "bit" and earlier proving that Boolean algebra could map to electrical relay circuits.',
    significance: 'Provided the mathematical foundation for digital circuitry, data compression, error-correcting codes, and the entire modern communications infrastructure.',
    pioneer: 'Claude Shannon (Bell Telephone Laboratories)',
    technicalDetail: 'Quantified information as entropy: H = -sum(p_i * log2(p_i)). Proved the noiseless coding theorem and channel capacity limit (Shannon limit) for transmitting data over noisy media.',
    source: {
      title: 'A Mathematical Theory of Communication',
      url: 'https://ieeexplore.ieee.org/document/6773024',
      publisher: 'Bell System Technical Journal / IEEE'
    },
    tags: ['Information Theory', 'Bits', 'Shannon', 'Boolean Logic'],
    artifactType: 'theory'
  },
  {
    id: 'von-neumann-architecture',
    year: '1945',
    yearNumeric: 1945,
    title: 'The Von Neumann Stored-Program Architecture',
    era: 'early-electronic',
    category: 'Theory',
    summary: 'Mathematician John von Neumann distributed the "First Draft of a Report on the EDVAC," synthesizing architectural discussions with ENIAC designers J. Presper Eckert and John Mauchly.',
    significance: 'Established the operational blueprint for nearly all modern computers: storing both program instructions and working numerical data in the same electronic addressable memory space.',
    pioneer: 'John von Neumann, J. Presper Eckert, John Mauchly',
    technicalDetail: 'Identified five core units: Central Arithmetical (ALU), Central Control (Control Unit), Memory, Input, and Output. Crucially ended the need for manual cable rewiring by treating software programs as stored data in memory.',
    source: {
      title: 'First Draft of a Report on the EDVAC',
      url: 'https://www.cs.unc.edu/~stotts/COMP145/firstDraft.pdf',
      publisher: 'University of Pennsylvania / Moore School Archive'
    },
    tags: ['Von Neumann', 'EDVAC', 'Architecture', 'Stored-Program'],
    artifactType: 'electronic'
  },
  {
    id: 'eniac-electronic-breakthrough',
    year: '1945–1946',
    yearNumeric: 1945,
    title: 'ENIAC: The First General-Purpose Electronic Computer',
    era: 'early-electronic',
    category: 'Hardware',
    summary: 'Constructed at the University of Pennsylvania’s Moore School of Electrical Engineering for the U.S. Army, ENIAC was the world’s first large-scale, general-purpose electronic digital computer.',
    significance: 'Calculated complex artillery trajectory tables in 30 seconds that previously required 20 hours of manual human calculation. A dedicated team of six women mathematicians programmed the machine by configuring cables and switches.',
    pioneer: 'J. Presper Eckert, John Mauchly, and the ENIAC Six Programmers (Kay McNulty, Betty Jennings, Betty Snyder, Marlyn Wescoff, Fran Bilas, Ruth Lichterman)',
    technicalDetail: 'Operated using 17,468 vacuum tubes, 70,000 resistors, and 10,000 capacitors. Vacuum tubes pulsed at 100 kHz without moving parts, completing 5,000 additions or 357 multiplications per second.',
    source: {
      title: 'ENIAC: The First Electronic Computer',
      url: 'https://airandspace.si.edu/stories/editorial/eniac',
      publisher: 'Smithsonian National Air and Space Museum'
    },
    tags: ['ENIAC', 'Vacuum Tubes', 'Early Electronic', 'Pioneering Women'],
    artifactType: 'electronic'
  },
  {
    id: 'bell-labs-transistor',
    year: '1947',
    yearNumeric: 1947,
    title: 'Invention of the Point-Contact Transistor',
    era: 'transistors-languages',
    category: 'Hardware',
    summary: 'Physicists John Bardeen, Walter Brattain, and William Shockley at Bell Telephone Laboratories created the first operational solid-state transistor using a germanium crystal and gold foil contacts.',
    significance: 'Revolutionized electronics by replacing fragile, hot, power-hungry vacuum tubes with durable semiconductor crystals. Transistors enabled compact, scalable digital electronics and earned the 1956 Nobel Prize in Physics.',
    pioneer: 'John Bardeen, Walter Brattain, William Shockley (Bell Labs)',
    technicalDetail: 'A transistor acts as a microscopic electronic switch or amplifier. By applying a tiny voltage to a control terminal, it controls current flow through the crystal without moving mechanical parts or heated filaments.',
    source: {
      title: 'The Transistor: 1947 Milestone in Electronics',
      url: 'https://www.bell-labs.com/about/history/transistor/',
      publisher: 'Nokia Bell Labs Archives / IEEE History Center'
    },
    tags: ['Transistor', 'Semiconductors', 'Hardware', 'Bell Labs'],
    artifactType: 'silicon'
  },
  {
    id: 'fortran-high-level-language',
    year: '1957',
    yearNumeric: 1957,
    title: 'John Backus & IBM Release FORTRAN',
    era: 'transistors-languages',
    category: 'Software',
    summary: 'An IBM team led by mathematician John Backus released FORTRAN (Formula Translating System) for the IBM 704, introducing the first widely adopted high-level programming language.',
    significance: 'Allowed scientists and engineers to write programs using familiar mathematical equations instead of machine-specific binary or assembly numbers. The compiler automatically translated their code into fast machine instructions.',
    pioneer: 'John Backus and the IBM FORTRAN Team',
    technicalDetail: 'A compiler reads the human-written source code, analyzes the mathematical statements, and translates them into optimized CPU machine instructions, proving high-level languages could be as efficient as hand-written code.',
    source: {
      title: 'FORTRAN: Early High-Level Programming',
      url: 'https://www.computerhistory.org/revolution/birth-of-software/10/328',
      publisher: 'Computer History Museum'
    },
    tags: ['FORTRAN', 'Compilers', 'Software', 'IBM'],
    artifactType: 'code'
  },
  {
    id: 'hopper-compiler-cobol',
    year: '1959–1960',
    yearNumeric: 1959,
    title: 'Grace Hopper and English-Like Business Languages (COBOL)',
    era: 'transistors-languages',
    category: 'People',
    summary: 'U.S. Navy officer and mathematician Dr. Grace Brewster Murray Hopper developed pioneering compiler tools (A-0, FLOW-MATIC) and helped inspire COBOL (Common Business-Oriented Language).',
    significance: 'Democratized computing by showing that programs could be written in plain English-style words (such as ADD, MOVE, MULTIPLY) rather than raw mathematical symbols, allowing businesses to computerize payroll, banking, and inventory.',
    pioneer: 'Dr. Grace Hopper & the CODASYL Committee',
    technicalDetail: 'Hopper created the earliest compiler concepts that translated reusable subroutine call libraries into linked binary routines, championing hardware-independent cross-platform standard languages.',
    source: {
      title: 'Grace Murray Hopper: Pioneer Computer Scientist',
      url: 'https://news.yale.edu/2017/02/10/grace-murray-hopper-1906-1992-pioneering-computer-scientist',
      publisher: 'Yale University Archives'
    },
    tags: ['Grace Hopper', 'COBOL', 'Compilers', 'Software'],
    artifactType: 'code',
    quote: {
      text: 'The most dangerous phrase in the language is, "We’ve always done it this way."',
      author: 'Grace Hopper'
    }
  },
  {
    id: 'integrated-circuit-kilby-noyce',
    year: '1958–1959',
    yearNumeric: 1958,
    title: 'Invention of the Monolithic Integrated Circuit',
    era: 'integrated-circuits-os',
    category: 'Hardware',
    summary: 'Jack Kilby at Texas Instruments and Robert Noyce at Fairchild Semiconductor independently invented the microchip, placing multiple electronic components onto a single piece of semiconductor material.',
    significance: 'Overcame the "tyranny of numbers"—the physical barrier of hand-soldering thousands of individual wires. Enabled exponential increases in computing power while shrinking physical size and cost (Moore’s Law).',
    pioneer: 'Jack Kilby (Texas Instruments) & Robert Noyce (Fairchild Semiconductor)',
    technicalDetail: 'Kilby proved the concept using germanium with hand-soldered flying wires; Noyce advanced the design using silicon planar photolithography, evaporating aluminum lines directly onto the chip to interconnect components.',
    source: {
      title: 'The Chip that Changed the World',
      url: 'https://www.ti.com/about-ti/company/history/integrated-circuit.html',
      publisher: 'Texas Instruments & IEEE Global History Network'
    },
    tags: ['Integrated Circuit', 'Microchip', 'Moore’s Law', 'Silicon'],
    artifactType: 'silicon'
  },
  {
    id: 'arpanet-first-packet',
    year: '1969',
    yearNumeric: 1969,
    title: 'ARPANET Transmits the First Packet-Switched Message',
    era: 'integrated-circuits-os',
    category: 'Networking',
    summary: 'Funded by the U.S. Defense Department’s Advanced Research Projects Agency (DARPA), researchers and student programmers sent the first packet-switched message between computers at UCLA and Stanford Research Institute.',
    significance: 'Demonstrated that computers could communicate over long distances using decentralized packet switching, laying the technical foundation for the global Internet.',
    pioneer: 'Leonard Kleinrock, Paul Baran, Donald Davies, and DARPA',
    technicalDetail: 'Traditional telephone calls required dedicated continuous circuits. Packet switching breaks messages into small digital packets, each stamped with source and destination addresses, that travel independently across available paths and reassemble at the receiving computer.',
    source: {
      title: 'Birth of the Internet: The ARPANET First Node',
      url: 'https://www.internethalloffame.org/brief-history-internet',
      publisher: 'Internet Society'
    },
    tags: ['ARPANET', 'Networking', 'Packet Switching', 'Internet'],
    artifactType: 'network'
  },
  {
    id: 'intel-4004-microprocessor',
    year: '1971',
    yearNumeric: 1971,
    title: 'The Intel 4004: The First Single-Chip Microprocessor',
    era: 'integrated-circuits-os',
    category: 'Hardware',
    summary: 'Engineers Federico Faggin, Ted Hoff, Stanley Mazor, and Masatoshi Shima condensed all the functions of a computer’s central processing unit (CPU) onto a single silicon microchip.',
    significance: 'Turned the computer’s central processor from a cabinet of circuit boards into a thumbnail-sized component that could be mass-produced and placed into appliances, traffic lights, and personal computers.',
    pioneer: 'Federico Faggin, Ted Hoff, Stanley Mazor, Masatoshi Shima (Intel)',
    technicalDetail: '4-bit architecture with 2,300 pMOS transistors on a 12 mm² silicon die. Clocked at 740 kHz, capable of executing approximately 92,600 instructions per second.',
    source: {
      title: 'The Story of the Intel 4004',
      url: 'https://www.intel.com/content/www/us/en/history/museum-story-of-intel-4004.html',
      publisher: 'Intel Museum'
    },
    tags: ['Microprocessor', 'Intel 4004', 'CPU', 'Silicon'],
    artifactType: 'silicon'
  },
  {
    id: 'unix-and-c-language',
    year: '1971–1973',
    yearNumeric: 1971,
    title: 'Development of UNIX and the C Programming Language',
    era: 'integrated-circuits-os',
    category: 'Software',
    summary: 'At Bell Labs, Ken Thompson and Dennis Ritchie developed the UNIX operating system and created the C programming language to make system software portable across different computer models.',
    significance: 'Established core computing principles still dominant today: hierarchical filesystems, small modular utilities connected by pipes, and portable operating system kernels (forming the foundation for Linux, macOS, iOS, and Android).',
    pioneer: 'Dennis Ritchie & Ken Thompson (Bell Labs)',
    technicalDetail: 'In 1973, Ritchie and Thompson rewrote the UNIX kernel in C. Because C was a portable language, the entire operating system could be moved to new computer hardware simply by creating a C compiler for that hardware.',
    source: {
      title: 'The Evolution of the Unix Time-sharing System',
      url: 'https://www.bell-labs.com/usr/dmr/www/hist.html',
      publisher: 'Dennis Ritchie Archive / Bell Labs'
    },
    tags: ['UNIX', 'C Language', 'Operating Systems', 'Dennis Ritchie'],
    artifactType: 'code'
  },
  {
    id: 'personal-computer-revolution',
    year: '1977',
    yearNumeric: 1977,
    title: 'The 1977 Trinity: Commercial Personal Computers',
    era: 'personal-computing',
    category: 'Society',
    summary: 'The simultaneous launch of the Apple II, Commodore PET, and Tandy TRS-80 brought packaged, fully assembled consumer computers into homes, classrooms, and small businesses.',
    significance: 'Shifted computing from corporate mainframes to personal ownership, kickstarting the consumer software industry, digital spreadsheets (VisiCalc), and educational gaming.',
    pioneer: 'Steve Wozniak, Steve Jobs, Chuck Peddle, Don French',
    technicalDetail: 'Built around low-cost 8-bit microprocessors (MOS 6502 and Zilog Z80), incorporating built-in keyboards, color graphics circuitry, and cassette/floppy disk controllers.',
    source: {
      title: 'The 1977 Trinity and the Rise of Personal Computing',
      url: 'https://www.computerhistory.org/revolution/personal-computers/10/301',
      publisher: 'Computer History Museum'
    },
    tags: ['Personal Computer', 'Apple II', 'Commodore', 'Consumer Tech'],
    artifactType: 'electronic'
  },
  {
    id: 'macintosh-gui',
    year: '1984',
    yearNumeric: 1984,
    title: 'The Graphical User Interface Enters the Mainstream',
    era: 'personal-computing',
    category: 'Software',
    summary: 'Commercializing pioneering research from Xerox PARC (Alto), Apple introduced the Macintosh featuring bitmapped graphics, windows, drop-down menus, and a computer mouse.',
    significance: 'Replaced intimidating command-line terminal syntax with direct desktop manipulation, defining visual computing for billions of users worldwide.',
    pioneer: 'Apple Computer & Xerox PARC Research Teams',
    technicalDetail: 'A 512x342 bitmapped monochrome screen managed by the QuickDraw graphics library in ROM. Events like mouse clicks and cursor position drove an asynchronous event-driven loop.',
    source: {
      title: 'The Xerox PARC to Macintosh Transition',
      url: 'https://www.folklore.org/ProjectView.py?project=Macintosh',
      publisher: 'Macintosh Folklore Archive / Computer History Museum'
    },
    tags: ['GUI', 'Macintosh', 'Xerox PARC', 'User Interface'],
    artifactType: 'software'
  },
  {
    id: 'world-wide-web-berners-lee',
    year: '1989–1991',
    yearNumeric: 1989,
    title: 'Tim Berners-Lee Conceives the World Wide Web',
    era: 'internet-web',
    category: 'Society',
    summary: 'At the CERN physics laboratory in Switzerland, British computer scientist Tim Berners-Lee designed the World Wide Web, creating an open system to link documents across the Internet using hypertext.',
    significance: 'Transformed the Internet from a specialized network for academics and the military into an interconnected global web of information accessible to the public, released under open, royalty-free standards.',
    pioneer: 'Sir Tim Berners-Lee & Robert Cailliau (CERN)',
    technicalDetail: 'Berners-Lee invented three foundational standards: URLs (web addresses), HTTP (the protocol for requesting and transferring pages), and HTML (the markup language for formatting linked documents), along with the first browser and web server.',
    source: {
      title: 'Information Management: A Proposal (March 1989)',
      url: 'https://www.w3.org/History/1989/proposal.html',
      publisher: 'World Wide Web Consortium (W3C) / CERN'
    },
    tags: ['World Wide Web', 'HTML', 'HTTP', 'Tim Berners-Lee'],
    artifactType: 'network',
    quote: {
      text: 'The web is more a social creation than a technical one. I designed it for a social effect—to help people work together.',
      author: 'Tim Berners-Lee'
    }
  },
  {
    id: 'mosaic-consumer-web',
    year: '1993',
    yearNumeric: 1993,
    title: 'NCSA Mosaic and the Commercial Browser Boom',
    era: 'internet-web',
    category: 'Software',
    summary: 'Marc Andreessen and Eric Bina at the University of Illinois National Center for Supercomputing Applications (NCSA) released NCSA Mosaic, an easy-to-install graphical web browser.',
    significance: 'Popularized the web by displaying color graphics and text together on the same screen page, catalyzing the 1990s commercial Internet boom and leading directly to modern consumer web browsers.',
    pioneer: 'Marc Andreessen and Eric Bina (NCSA / Netscape)',
    technicalDetail: 'Pioneered the `<img>` HTML tag and provided cross-platform installers for Windows, Macintosh, and Unix X11, transforming text-heavy academic documents into multimedia visual pages.',
    source: {
      title: 'NCSA Mosaic and the Dawn of the Commercial Web',
      url: 'https://www.ncsa.illinois.edu/about/history/',
      publisher: 'National Center for Supercomputing Applications (NCSA)'
    },
    tags: ['Mosaic', 'Browsers', 'Internet', 'NCSA'],
    artifactType: 'software'
  },
  {
    id: 'modern-smartphone-revolution',
    year: '2007–2008',
    yearNumeric: 2007,
    title: 'The Modern Smartphone and Ubiquitous Computing',
    era: 'mobile-cloud',
    category: 'Hardware',
    summary: 'The debut of capacitive multi-touch smartphones (the iPhone in 2007 and open-source Android in 2008), combined with mobile broadband and app ecosystems, placed networked computing into human pockets.',
    significance: 'Made computing continuous, geospatial, and ubiquitous. The majority of humanity now interacts with digital information through handheld, touch-sensitive glass screens.',
    pioneer: 'Apple, Google (Android Open Source Project), and ARM Holdings',
    technicalDetail: 'Integrated energy-efficient ARM RISC processors, multi-touch sensor digitizers, GPS receivers, inertial accelerometers, and solid-state flash memory running full Unix-derived kernels.',
    source: {
      title: 'Mobile Computing and the Smartphone Revolution',
      url: 'https://www.computerhistory.org/timeline/mobile-computing/',
      publisher: 'Computer History Museum'
    },
    tags: ['Smartphone', 'Mobile', 'ARM', 'Ubiquitous'],
    artifactType: 'electronic'
  },
  {
    id: 'cloud-hyperscale-computing',
    year: '2006',
    yearNumeric: 2006,
    title: 'Elastic Cloud Infrastructure and Distributed Hyperscale',
    era: 'mobile-cloud',
    category: 'Networking',
    summary: 'Amazon Web Services launched modern utility cloud computing (Amazon S3 and EC2), allowing developers and enterprises to rent virtual computer servers and storage over the Internet on demand.',
    significance: 'Replaced capital-intensive physical corporate server racks with programmable, elastic infrastructure, enabling startups and universities to scale global services instantly without purchasing hardware.',
    pioneer: 'Amazon Web Services, Google Cloud, and OpenStack Foundation',
    technicalDetail: 'Leveraged virtualization hypervisors and Linux kernel cgroups to carve physical multicore server blades into isolated virtual machines with software-defined networking and distributed block storage.',
    source: {
      title: 'Cloud Computing: Principles and Paradigms',
      url: 'https://ieeexplore.ieee.org/document/5445167',
      publisher: 'IEEE Computer Society'
    },
    tags: ['Cloud Computing', 'AWS', 'Virtualization', 'Distributed Systems'],
    artifactType: 'network'
  },
  {
    id: 'alexnet-deep-learning',
    year: '2012',
    yearNumeric: 2012,
    title: 'AlexNet and the Deep Learning Renaissance',
    era: 'ai-emerging',
    category: 'Software',
    summary: 'Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton entered AlexNet into the ImageNet visual recognition contest, crushing conventional computer vision algorithms by over 10 percentage points.',
    significance: 'Revitalized artificial intelligence. Proved that deep convolutional neural networks, when trained on massive datasets using parallel GPU hardware, achieve superhuman perceptual accuracy in visual pattern recognition.',
    pioneer: 'Alex Krizhevsky, Ilya Sutskever, Geoffrey Hinton (Univ. of Toronto)',
    technicalDetail: 'An 8-layer deep convolutional neural network trained on 1.2 million images using two Nvidia GeForce GTX 580 GPUs. Implemented ReLU activations, dropout regularization, and CUDA matrix kernels.',
    source: {
      title: 'ImageNet Classification with Deep Convolutional Neural Networks',
      url: 'https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf',
      publisher: 'NeurIPS Proceedings'
    },
    tags: ['Deep Learning', 'AlexNet', 'Neural Networks', 'GPUs'],
    artifactType: 'ai'
  },
  {
    id: 'transformer-attention-mechanism',
    year: '2017',
    yearNumeric: 2017,
    title: 'The Transformer Architecture: "Attention Is All You Need"',
    era: 'ai-emerging',
    category: 'Software',
    summary: 'Google Brain and Google Research researchers published the Transformer model, replacing slow step-by-step recurrence with parallel self-attention mechanisms for sequence modeling.',
    significance: 'Became the universal foundational architecture for modern generative AI, including large language models (LLMs like GPT, Gemini, Claude) and multimodal foundation systems capable of generating text, code, images, and audio.',
    pioneer: 'Ashish Vaswani, Noam Shazeer, Niki Parmar, et al. (Google Brain)',
    technicalDetail: 'Self-attention calculates pairwise relevance scores between all words or tokens simultaneously: Attention(Q, K, V) = softmax(Q * K^T / sqrt(d_k)) * V. Enabled massive parallel training across distributed GPU clusters.',
    source: {
      title: 'Attention Is All You Need',
      url: 'https://arxiv.org/abs/1706.03762',
      publisher: 'Cornell University arXiv / NeurIPS 2017'
    },
    tags: ['Transformer', 'LLMs', 'Generative AI', 'Attention'],
    artifactType: 'ai'
  },
  {
    id: 'quantum-computing-benchmarks',
    year: '2019',
    yearNumeric: 2019,
    title: 'Quantum Computational Advantage Milestones',
    era: 'ai-emerging',
    category: 'Hardware',
    summary: 'Physicists and engineers demonstrated programmable superconducting quantum processors (such as the 53-qubit Sycamore chip) performing specialized sampling tasks in seconds that would take classical supercomputers thousands of years.',
    significance: 'Provided experimental proof that quantum physical phenomena—superposition and entanglement—can be physically harnessed in synthetic microchips to surpass classical limits, while fault-tolerant general-purpose quantum computing remains an ongoing research frontier.',
    pioneer: 'Google Quantum AI, IBM Quantum, and Academic Physics Labs',
    technicalDetail: 'Superconducting transmon qubits chilled near absolute zero (15 mK). Manipulated microwave pulses apply quantum logic gates to create entangled quantum states, sampling output probability distributions.',
    source: {
      title: 'Quantum Supremacy Using a Programmable Superconducting Processor',
      url: 'https://www.nature.com/articles/s41586-019-1666-5',
      publisher: 'Nature (Vol 574, pp. 505–510)'
    },
    tags: ['Quantum Computing', 'Qubits', 'Superposition', 'Emerging Tech'],
    artifactType: 'electronic'
  }
];
