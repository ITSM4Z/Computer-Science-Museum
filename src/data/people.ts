import { Person } from '../types';

export const PIONEERS: Person[] = [
  {
    id: 'ada-lovelace',
    name: 'Ada Lovelace',
    field: 'Mathematical Analysis & Computing Theory',
    contribution: 'Authored the first published computer algorithm (Note G for Charles Babbage’s proposed Analytical Engine) and recognized that computers could manipulate symbols beyond numbers, including music and text.',
    period: '1815 – 1852 (Victorian Era)',
    whyMatters: 'Made the foundational conceptual leap from pure arithmetic calculation to general-purpose computing. She recognized that any information governed by rules—such as musical harmony, language, or logic—could be processed by a machine.',
    keyWork: 'Note G: Algorithm for Computing Bernoulli Numbers (1843)',
    domain: 'Theory & Math',
    quote: 'The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.'
  },
  {
    id: 'charles-babbage',
    name: 'Charles Babbage',
    field: 'Mechanical Engineering & Mathematics',
    contribution: 'Conceived and drafted detailed mechanical blueprints for the Difference Engine and the Analytical Engine, the first general-purpose calculating machines.',
    period: '1791 – 1871',
    whyMatters: 'Originator of modern computer architecture. He designed the first machine with a separate processor ("the Mill") and memory ("the Store"). While Victorian engineering limitations prevented its completion in his lifetime, London’s Science Museum successfully built a functioning Difference Engine from his original plans in 1991, proving his designs were sound.',
    keyWork: 'Blueprints for the Analytical Engine (1837)',
    domain: 'Hardware & Architecture'
  },
  {
    id: 'al-khwarizmi',
    name: 'Muhammad ibn Musa al-Khwarizmi',
    field: 'Mathematics & Astronomy',
    contribution: 'Developed systematic stepwise procedures for solving algebraic equations and popularized the Hindu-Arabic positional number system with zero across the Mediterranean.',
    period: 'c. 780 – c. 850 CE (Abbasid Era)',
    whyMatters: 'His Latinized name gave rise to the word "algorithm." He formalized the essential mathematical principle that complex problems can be resolved through finite, unambiguous sequences of steps.',
    keyWork: 'The Compendious Book on Calculation by Completion and Balancing (c. 820 CE)',
    domain: 'Theory & Math'
  },
  {
    id: 'alan-turing',
    name: 'Alan Turing',
    field: 'Theoretical Computer Science & Cryptanalysis',
    contribution: 'Formulated the Universal Turing Machine mathematical model, broke Enigma ciphers at Bletchley Park, and authored foundational papers on artificial intelligence.',
    period: '1912 – 1954',
    whyMatters: 'Proved the mathematical limits of computation (the Halting Problem) and demonstrated that a single machine—a "Universal Turing Machine"—could perform any algorithmic task simply by reading different stored instructions, establishing the theoretical foundation of software.',
    keyWork: 'On Computable Numbers, with an Application to the Entscheidungsproblem (1936)',
    domain: 'Theory & Math',
    quote: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.'
  },
  {
    id: 'grace-hopper',
    name: 'Dr. Grace Brewster Murray Hopper',
    field: 'Software Engineering & Programming Languages',
    contribution: 'Pioneered early programming language compilers (A-0, FLOW-MATIC) and championed English-syntax coding, directly inspiring the creation of COBOL.',
    period: '1906 – 1992',
    whyMatters: 'Overcame the assumption that computers could only understand mathematical numbers. By showing that computers could be programmed using English words like ADD or MOVE, she enabled business, administrative, and scientific computing worldwide.',
    keyWork: 'FLOW-MATIC compiler and COBOL language specification (1950s)',
    domain: 'Software & Systems',
    quote: 'The most dangerous phrase in the language is, "We’ve always done it this way."'
  },
  {
    id: 'john-von-neumann',
    name: 'John von Neumann',
    field: 'Applied Mathematics & Computer Architecture',
    contribution: 'Synthesized and documented the stored-program computer architecture (developed in collaboration with J. Presper Eckert and John Mauchly) in his famous 1945 EDVAC report.',
    period: '1903 – 1957',
    whyMatters: 'Standardized the concept of storing both instructions and numerical data together in high-speed electronic memory, ending the need to physically rewire machine cables every time a computer ran a new program.',
    keyWork: 'First Draft of a Report on the EDVAC (1945)',
    domain: 'Hardware & Architecture'
  },
  {
    id: 'claude-shannon',
    name: 'Claude Shannon',
    field: 'Information Theory & Electrical Engineering',
    contribution: 'Proved that electrical relay switches could implement Boolean logic, and founded mathematical Information Theory, formalizing entropy and the "bit."',
    period: '1916 – 2001',
    whyMatters: 'Unified electronic engineering with mathematical logic. Proved that on/off electrical switches can execute Boolean logic, and established that all communications—voice, images, text—can be measured, compressed, and transmitted as binary digits ("bits").',
    keyWork: 'A Mathematical Theory of Communication (1948)',
    domain: 'Theory & Math'
  },
  {
    id: 'margaret-hamilton',
    name: 'Margaret Hamilton',
    field: 'Systems Architecture & Software Engineering',
    contribution: 'Director of the Software Engineering Division at the MIT Instrumentation Laboratory, leading the team that developed the onboard flight software for NASA’s Apollo missions.',
    period: '1936 – Present (Apollo Era)',
    whyMatters: 'Coined the term "Software Engineering" to establish software as a rigorous engineering discipline. Her architecture included asynchronous priority scheduling, which allowed the Apollo 11 lunar module computer to ignore low-priority radar overload during descent, enabling Neil Armstrong and Buzz Aldrin to land safely.',
    keyWork: 'Apollo 11 Onboard Guidance Software Architecture (1969)',
    domain: 'Software & Systems',
    quote: 'There was no second chance. We had to find a way, and we did.'
  },
  {
    id: 'dennis-ritchie',
    name: 'Dennis Ritchie',
    field: 'Systems Programming & Operating Systems',
    contribution: 'Created the C programming language and co-developed the UNIX operating system at Bell Labs with Ken Thompson.',
    period: '1941 – 2011',
    whyMatters: 'C and UNIX form the bedrock of modern computing infrastructure. Linux, macOS, iOS, Android, and web servers are direct descendants of Ritchie’s elegant systems design and the C programming language.',
    keyWork: 'The C Programming Language & The UNIX Operating System (1970s)',
    domain: 'Software & Systems'
  },
  {
    id: 'tim-berners-lee',
    name: 'Sir Tim Berners-Lee',
    field: 'Computer Networks & Hypertext',
    contribution: 'Invented the World Wide Web, including the HTTP protocol, HTML markup language, URI address system, and the first web browser/server at CERN.',
    period: '1955 – Present (Breakthrough 1989–1991)',
    whyMatters: 'Insisted that web protocols (HTML, HTTP, URLs) remain open, decentralized, and royalty-free, transforming internet connectivity into a shared, universally accessible library of human knowledge.',
    keyWork: 'WorldWideWeb Browser & W3C Open Standards (1989–1994)',
    domain: 'Networking & Web',
    quote: 'This is for everyone.'
  },
  {
    id: 'katherine-johnson',
    name: 'Katherine Johnson',
    field: 'Orbital Mechanics & Computational Mathematics',
    contribution: 'Calculated flight trajectories, launch windows, and emergency backup return paths for Project Mercury (including John Glenn’s orbital flight) and Apollo 11 at NASA Langley.',
    period: '1918 – 2020',
    whyMatters: 'Pioneered the transition from human calculation to electronic mainframe computers at NASA. Astronaut John Glenn famously refused to launch until Johnson personally hand-checked the trajectory numbers calculated by NASA’s new IBM computers.',
    keyWork: 'Determination of Azimuth Angle at Burnout for Placing a Satellite over a Selected Earth Position (1960)',
    domain: 'Theory & Math'
  },
  {
    id: 'lynn-conway',
    name: 'Lynn Conway',
    field: 'VLSI Silicon Engineering & Computer Architecture',
    contribution: 'Pioneered superscalar out-of-order dynamic instruction execution and co-authored the landmark textbook "Introduction to VLSI Systems" with Carver Mead.',
    period: '1938 – 2024',
    whyMatters: 'Decoupled microchip design from semiconductor manufacturing. The Mead-Conway design revolution allowed universities and small design teams to create custom microchips, launching modern Silicon Valley fabless chip development.',
    keyWork: 'Introduction to VLSI Systems (1980)',
    domain: 'Hardware & Architecture'
  },
  {
    id: 'radia-perlman',
    name: 'Radia Perlman',
    field: 'Network Architecture & Algorithmic Routing',
    contribution: 'Invented the Spanning Tree Protocol (STP), an algorithmic routing mechanism that prevents data packets from looping endlessly in interconnected Ethernet local area networks.',
    period: '1951 – Present (Breakthrough 1985)',
    whyMatters: 'Solved the fundamental loop problem in network bridges, allowing local networks to have redundant backup cables without data packet storms crashing the network. Her work made modern local and campus network switching reliable and self-configuring.',
    keyWork: 'An Algorithm for Distributed Computation of a Spanning Tree in an Extended LAN (1985)',
    domain: 'Networking & Web'
  }
];
