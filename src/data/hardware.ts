import { HardwareEpoch } from '../types';

export const HARDWARE_EPOCHS: HardwareEpoch[] = [
  {
    id: 'mechanical-era',
    name: 'Mechanical Calculation',
    period: '17th – Early 20th Century',
    physicalScale: 'Desk-sized brass machines to 15-ton cast-iron engines',
    mainTechnology: 'Interlocking toothed brass gears, escapements, stepped drums, and spring-driven levers',
    typicalUse: 'Tax tabulation, navigational logarithmic tables, census counting, astronomical tables',
    majorLimitation: 'Mechanical friction, gear inertia, metal fatigue, and manufacturing precision limits prevented speeds beyond a few operations per second',
    keyExamples: ['Pascaline (1642)', 'Babbage Difference Engine No. 2 (1849)', 'Hollerith Tabulating Machine (1890)'],
    clockSpeedOrRate: '~1 to 5 operations per second (hand-cranked or steam-driven)',
    storageMedium: 'Physical gear tooth positions, stepped drums, and paper punch cards'
  },
  {
    id: 'vacuum-tube-era',
    name: 'Vacuum-Tube Computers',
    period: 'Late 1930s – Mid 1950s',
    physicalScale: 'Entire air-conditioned rooms (30 to 50 tons, 1,800 sq ft)',
    mainTechnology: 'Thermionic vacuum tubes (triodes/pentodes) controlling electric current in glass bulbs under vacuum',
    typicalUse: 'Artillery firing tables, atomic weapons simulations, wartime cryptography, early scientific research',
    majorLimitation: 'Massive electricity consumption (~150 kW), extreme heat generation, and frequent tube blowouts requiring daily maintenance',
    keyExamples: ['Colossus Mark 1 (1944)', 'ENIAC (1945)', 'UNIVAC I (1951)', 'Manchester Baby (1948)'],
    clockSpeedOrRate: '100 kHz to 1 MHz (~5,000 additions/second)',
    storageMedium: 'Mercury acoustic delay lines, Williams-Kilburn cathode-ray tubes, magnetic drums'
  },
  {
    id: 'transistor-era',
    name: 'Transistorized Computers',
    period: 'Mid 1950s – Mid 1960s',
    physicalScale: 'Multi-cabinet industrial suites (several thousand pounds)',
    mainTechnology: 'Discrete solid-state germanium and silicon transistors soldered onto circuit boards',
    typicalUse: 'Aerospace flight simulations, corporate payroll, government census, high-energy physics',
    majorLimitation: 'Wiring bottleneck ("Tyranny of Numbers"): interconnecting tens of thousands of individual transistors with hand-soldered wires created reliability caps',
    keyExamples: ['TX-0 (MIT Lincoln Lab, 1956)', 'IBM 7090 (1959)', 'CDC 6600 (Seymour Cray, 1964)'],
    clockSpeedOrRate: '1 MHz to 10 MHz (~1 million instructions per second on CDC 6600)',
    storageMedium: 'Ferrite magnetic core memory planes, magnetic tapes, early hard disks (IBM RAMAC)'
  },
  {
    id: 'mainframe-era',
    name: 'Mainframes & Minicomputers',
    period: '1964 – 1980s',
    physicalScale: 'Wardrobe-sized metal cabinets in raised-floor corporate data centers',
    mainTechnology: 'Small-to-medium scale integrated circuits (SSI/MSI), multi-layer backplanes, time-sharing operating systems',
    typicalUse: 'Centralized airline reservations (SABRE), university computer centers, banking transactions, corporate accounting',
    majorLimitation: 'Extremely expensive ($100k to millions of dollars), requiring dedicated operational staff, punch card operators, and climate-controlled rooms',
    keyExamples: ['IBM System/360 family (1964)', 'DEC PDP-8 (1965)', 'DEC PDP-11 (1970)', 'Cray-1 Supercomputer (1976)'],
    clockSpeedOrRate: '5 MHz to 80 MHz',
    storageMedium: 'High-density magnetic tape reels, multi-platter removable disk packs, semiconductor DRAM'
  },
  {
    id: 'personal-computer-era',
    name: 'Personal Computers (PCs)',
    period: '1975 – 2000s',
    physicalScale: 'Compact tabletop chassis fitting comfortably on a home or office desk (15 to 30 lbs)',
    mainTechnology: 'Very Large Scale Integration (VLSI) single-chip microprocessors, dynamic RAM, printed motherboards',
    typicalUse: 'Word processing, spreadsheets, desktop publishing, computer graphics, personal gaming, dial-up web access',
    majorLimitation: 'Thermal design ceilings (the "Power Wall" around 3-4 GHz), single-core speed limits, and vulnerability to standalone physical drive failures',
    keyExamples: ['Apple II (1977)', 'IBM Personal Computer 5150 (1981)', 'Macintosh 128K (1984)', 'Intel Pentium Systems (1990s)'],
    clockSpeedOrRate: '1 MHz (1977) to 3.0+ GHz (2000s)',
    storageMedium: '5.25" and 3.5" floppy disks, mechanical IDE/SCSI hard drives, CD-ROMs, DVDs'
  },
  {
    id: 'mobile-embedded-era',
    name: 'Smartphones & Modern Embedded Devices',
    period: '2007 – Present',
    physicalScale: 'Pocket-sized glass slabs (150-200g), wristwear, smart sensors, and millimeter-scale IoT modules',
    mainTechnology: 'System-on-Chip (SoC) combining multi-core ARM/RISC CPUs, GPUs, Neural Processing Units (NPUs), modem, and unified memory on sub-3nm silicon nodes',
    typicalUse: 'Continuous communication, high-resolution photography, AI computational photography, GPS turn-by-turn navigation, mobile payments, health telemetry',
    majorLimitation: 'Battery chemical energy density constraints, thermal dissipation in fanless enclosures, and increasing geopolitical silicon manufacturing complexity',
    keyExamples: ['Apple iPhone / A-Series & M-Series chips', 'Qualcomm Snapdragon SoCs', 'Raspberry Pi', 'Apple Watch / Wearables'],
    clockSpeedOrRate: '2.0 GHz to 4.0 GHz multicore heterogeneous architectures (billions to trillions of operations/sec with NPUs)',
    storageMedium: 'Ultra-fast NVMe/UFS 3D NAND flash memory (128 GB to 2 TB in millimeters)'
  }
];
