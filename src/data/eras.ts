import { EraInfo } from '../types';

export const ERAS: EraInfo[] = [
  {
    id: 'foundations',
    name: 'Foundations of Calculation',
    span: 'c. 2400 BCE – 1600 CE',
    summary: 'From ancient counting frames and place-value arithmetic to foundational algorithmic procedures.',
    color: '#f59e0b' // Amber
  },
  {
    id: 'mechanical',
    name: 'Mechanical Computing',
    span: '1623 – 1900',
    summary: 'Precision gears, clockwork calculating engines, punched card automation, and early programmable concepts.',
    color: '#eab308' // Warm Gold
  },
  {
    id: 'theoretical',
    name: 'Theoretical Computer Science',
    span: '1930s – 1940s',
    summary: 'Mathematical models of computation, decidability, information theory, and the Universal Turing Machine.',
    color: '#818cf8' // Violet
  },
  {
    id: 'early-electronic',
    name: 'Early Electronic Computers',
    span: '1940 – 1950',
    summary: 'The shift from mechanical relays to vacuum tubes, stored-program architecture, and giant room-scale engines.',
    color: '#38bdf8' // Electric Blue
  },
  {
    id: 'transistors-languages',
    name: 'Transistors & Programming Languages',
    span: '1947 – 1965',
    summary: 'Solid-state silicon transistors, core memory, compilers, and the birth of human-readable programming languages.',
    color: '#06b6d4' // Cyan
  },
  {
    id: 'integrated-circuits-os',
    name: 'Integrated Circuits & Operating Systems',
    span: '1958 – 1975',
    summary: 'Microchips, time-sharing systems, UNIX, the C language, and the precursor to the internet (ARPANET).',
    color: '#2dd4bf' // Teal
  },
  {
    id: 'personal-computing',
    name: 'Personal Computing',
    span: '1975 – 1990',
    summary: 'Microprocessors brought computation out of institutional basements to desks, introducing graphical user interfaces and mice.',
    color: '#a78bfa' // Purple
  },
  {
    id: 'internet-web',
    name: 'The Internet & World Wide Web',
    span: '1989 – 2005',
    summary: 'Hypertext protocols, consumer browsers, global packet networking, search engines, and the digital information economy.',
    color: '#60a5fa' // Blue
  },
  {
    id: 'mobile-cloud',
    name: 'Mobile & Cloud Computing',
    span: '2006 – 2015',
    summary: 'Smartphones, capacitive multi-touch, centralized hyperscale data centers, ubiquitous distributed systems, and app stores.',
    color: '#34d399' // Emerald
  },
  {
    id: 'ai-emerging',
    name: 'AI & Emerging Computing',
    span: '2012 – Present',
    summary: 'Deep neural networks, transformer architectures, foundation models, quantum processors, and neuromorphic chips.',
    color: '#f43f5e' // Rose / Coral
  }
];
