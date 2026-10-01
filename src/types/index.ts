export type EraId =
  | 'foundations'
  | 'mechanical'
  | 'theoretical'
  | 'early-electronic'
  | 'transistors-languages'
  | 'integrated-circuits-os'
  | 'personal-computing'
  | 'internet-web'
  | 'mobile-cloud'
  | 'ai-emerging';

export interface EraInfo {
  id: EraId;
  name: string;
  span: string;
  summary: string;
  color: string;
}

export type Category = 'Hardware' | 'Software' | 'Theory' | 'Networking' | 'People' | 'Society';

export interface SourceReference {
  title: string;
  url: string;
  publisher: string;
  accessDate?: string;
}

export interface Milestone {
  id: string;
  year: string;
  yearNumeric: number;
  title: string;
  era: EraId;
  category: Category;
  summary: string;
  significance: string;
  pioneer: string;
  technicalDetail: string;
  source: SourceReference;
  tags: string[];
  artifactType: 'algorithm' | 'mechanical' | 'electronic' | 'code' | 'network' | 'silicon' | 'ai' | 'theory' | 'software';
  quote?: {
    text: string;
    author: string;
  };
}

export interface Person {
  id: string;
  name: string;
  field: string;
  contribution: string;
  period: string;
  whyMatters: string;
  keyWork: string;
  quote?: string;
  domain: 'Theory & Math' | 'Hardware & Architecture' | 'Software & Systems' | 'Networking & Web';
}

export interface HardwareEpoch {
  id: string;
  name: string;
  period: string;
  physicalScale: string;
  mainTechnology: string;
  typicalUse: string;
  majorLimitation: string;
  keyExamples: string[];
  clockSpeedOrRate: string;
  storageMedium: string;
}

export interface SoftwareLayer {
  id: string;
  layerNumber: number;
  title: string;
  period: string;
  problemSolved: string;
  coreConcept: string;
  codeSnippet: {
    language: string;
    label: string;
    code: string;
    explanation: string;
  };
  evolutionaryImpact: string;
}

export interface ModernTopic {
  id: string;
  title: string;
  tagline: string;
  currentReality: string;
  historicalRoots: string;
  speculativeFuture: string;
  ethicalConsiderations: string;
  keyMilestonesTied: string[];
  icon: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedMilestone: string;
}

export interface SourceItem {
  id: string;
  title: string;
  url: string;
  institution: string;
  supportedTopics: string;
  type: 'Museum Archive' | 'University & Academic' | 'Professional Organization' | 'Primary Historical Document' | 'Standards Body & Consortium' | 'Peer-Reviewed Journal' | 'Peer-Reviewed Conference';
  annotation: string;
}
