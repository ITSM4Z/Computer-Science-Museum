import { SoftwareLayer } from '../types';

export const SOFTWARE_LAYERS: SoftwareLayer[] = [
  {
    id: 'layer-algorithms',
    layerNumber: 1,
    title: 'Mathematical Algorithms',
    period: 'Ancient Antiquity – Early 20th Century',
    problemSolved: 'How to describe unambiguous, finite solution procedures before physical computers existed.',
    coreConcept: 'An algorithm is an abstract recipe: a well-defined sequence of computational steps that transforms an input into a deterministic output.',
    codeSnippet: {
      language: 'pseudocode',
      label: 'Euclid’s GCD Algorithm (c. 300 BCE)',
      code: `function gcd(a, b):
  while b ≠ 0:
    remainder = a mod b
    a = b
    b = remainder
  return a`,
      explanation: 'Computes the greatest common divisor through repeated remainder operations without needing multiplication tables.'
    },
    evolutionaryImpact: 'Proved that problem-solving could be formalized mathematically, independent of any physical computing substrate.'
  },
  {
    id: 'layer-machine-code',
    layerNumber: 2,
    title: 'Raw Machine Code & Rewiring',
    period: '1940s',
    problemSolved: 'Directly directing the electronic circuitry of the earliest vacuum-tube machines.',
    coreConcept: 'Computation expressed strictly as binary 1s and 0s (or raw plugboard jumper cable routing) mapped directly to CPU registers and instruction decoders.',
    codeSnippet: {
      language: 'binary',
      label: 'Hypothetical 8-Bit Machine Instruction',
      code: `00010010  ; Opcode 0001: LOAD value at address 0010 into ACC
00100011  ; Opcode 0010: ADD value at address 0011 to ACC
00110100  ; Opcode 0011: STORE ACC to address 0100
11110000  ; Opcode 1111: HALT execution`,
      explanation: 'Every operation and memory location had to be manually encoded in binary or octal bits by the programmer.'
    },
    evolutionaryImpact: 'Extremely tedious and error-prone; a single misplaced wire or inverted bit could stall an entire building-sized computer.'
  },
  {
    id: 'layer-assembly',
    layerNumber: 3,
    title: 'Assembly Language & Assemblers',
    period: 'Early 1950s',
    problemSolved: 'Human programmers needed human-readable mnemonic abbreviations instead of raw binary bit patterns.',
    coreConcept: 'One-to-one mapping between alphanumeric mnemonics (like `MOV`, `ADD`, `JMP`) and hardware machine instructions, resolved by an assembler program.',
    codeSnippet: {
      language: 'assembly',
      label: 'Assembly Language Routine',
      code: `section .text
  mov eax, [num1]   ; Load value into register EAX
  add eax, [num2]   ; Add second number to EAX
  mov [result], eax ; Save EAX back to memory
  cmp eax, 100      ; Compare result with 100
  jle done          ; Jump if less or equal`,
      explanation: 'Names and symbols replace raw hexadecimal addresses, making programs readable and editable by humans.'
    },
    evolutionaryImpact: 'Dramatically accelerated programming speed, though code remained tightly locked to specific processor architectures.'
  },
  {
    id: 'layer-high-level',
    layerNumber: 4,
    title: 'High-Level Programming Languages',
    period: 'Late 1950s – 1970s',
    problemSolved: 'Programs needed to be portable across different machine types and express complex logic in mathematical or English syntax.',
    coreConcept: 'Compilers and interpreters translate high-level constructs (variables, loops, arithmetic expressions) into target machine code.',
    codeSnippet: {
      language: 'c',
      label: 'Structured C / FORTRAN Paradigm',
      code: `/* Portable C: Runs on any computer with a C compiler */
int calculate_sum(int array[], int size) {
  int total = 0;
  for (int i = 0; i < size; i++) {
    total += array[i];
  }
  return total;
}`,
      explanation: 'The programmer writes structured algebraic logic once; the compiler optimizes it for any specific hardware target.'
    },
    evolutionaryImpact: 'Decoupled software development from hardware engineering, spawning the modern software industry.'
  },
  {
    id: 'layer-operating-systems',
    layerNumber: 5,
    title: 'Operating Systems & System Calls',
    period: '1960s – 1980s',
    problemSolved: 'Sharing expensive hardware among multiple users and programs without manual rebooting.',
    coreConcept: 'The operating system kernel mediates access to CPU, memory, and devices through standardized abstractions (processes, files, virtual memory).',
    codeSnippet: {
      language: 'bash',
      label: 'UNIX Philosophy: Pipes & Filters',
      code: `# Composing small, focused tools through text streams
cat server_logs.txt | grep "ERROR 500" | sort | uniq -c`,
      explanation: 'Everything is a file or a stream; programs communicate through universal text interfaces without custom drivers.'
    },
    evolutionaryImpact: 'Transformed computers from single-job batch engines into concurrent, multi-user, interactive platforms.'
  },
  {
    id: 'layer-databases',
    layerNumber: 6,
    title: 'Relational Databases & Declarative Querying',
    period: '1970s – 1990s',
    problemSolved: 'Storing, indexing, and reliably retrieving vast interconnected data without writing bespoke disk-traversal algorithms.',
    coreConcept: 'Edgar F. Codd’s relational model organized data into tables with primary/foreign keys, queried declaratively using SQL with ACID guarantees.',
    codeSnippet: {
      language: 'sql',
      label: 'Declarative SQL Query',
      code: `SELECT students.name, courses.title, enrollments.grade
FROM enrollments
JOIN students ON enrollments.student_id = students.id
JOIN courses ON enrollments.course_id = courses.id
WHERE enrollments.grade >= 'B';`,
      explanation: 'The user declares *what* data they want; the database query optimizer decides *how* to retrieve it from disk efficiently.'
    },
    evolutionaryImpact: 'Provided the robust transactional infrastructure for modern banking, e-commerce, enterprise software, and cloud backends.'
  },
  {
    id: 'layer-web',
    layerNumber: 7,
    title: 'The Web & Hypertext Protocols',
    period: '1990s – 2000s',
    problemSolved: 'Linking multimedia documents across heterogeneous operating systems globally over the Internet.',
    coreConcept: 'Open, stateless protocols (HTTP), resource locators (URLs), and semantic markup (HTML/CSS/JS) interpreted by client-side web browsers.',
    codeSnippet: {
      language: 'html',
      label: 'Semantic Hypertext & Asynchronous Fetch',
      code: `<article class="milestone-card">
  <h2>The World Wide Web</h2>
  <a href="https://w3.org" target="_blank">W3C Archive</a>
</article>
<script>
  fetch('/api/milestones').then(res => res.json());
</script>`,
      explanation: 'Universal open standards enable any operating system or browser to render networked information seamlessly.'
    },
    evolutionaryImpact: 'Turned the computer into a window to global human collective knowledge, commerce, and communication.'
  },
  {
    id: 'layer-mobile',
    layerNumber: 8,
    title: 'Mobile Applications & Sensor Ecosystems',
    period: '2007 – 2010s',
    problemSolved: 'Software needed to handle touch gestures, variable connectivity, battery power budgets, and real-time physical sensors.',
    coreConcept: 'Sandboxed native runtimes (iOS Swift/Android Kotlin) responding to asynchronous touch, accelerometer, camera, and geolocation events.',
    codeSnippet: {
      language: 'typescript',
      label: 'Reactive Touch & Sensor Event',
      code: `// Modern Reactive Event Handling
window.addEventListener('devicemotion', (event) => {
  const accel = event.accelerationIncludingGravity;
  updateInterfaceTilt(accel.x, accel.y);
});`,
      explanation: 'Software directly fuses hardware sensors with fluid visual animations running at 60 to 120 frames per second.'
    },
    evolutionaryImpact: 'Democratized digital capability to over 6 billion people, redefining human socialization, commerce, and navigation.'
  },
  {
    id: 'layer-machine-learning',
    layerNumber: 9,
    title: 'Machine Learning & Learned Neural Weights',
    period: '2012 – Present',
    problemSolved: 'Writing explicit rules for tasks like vision, natural language understanding, and speech was impossibly complex for human programmers.',
    coreConcept: 'Software 2.0: Instead of writing code step-by-step, engineers write neural network architectures and loss functions. The computer learns millions or billions of parameters via gradient descent.',
    codeSnippet: {
      language: 'python',
      label: 'Machine Learning Paradigm (PyTorch)',
      code: `# The computer learns the algorithm through data optimization
for epoch in range(training_steps):
    predictions = model(input_data)
    loss = loss_function(predictions, ground_truth)
    loss.backward()      # Calculate gradient with respect to weights
    optimizer.step()     # Adjust parameters to minimize error`,
      explanation: 'Behavior is defined not by rigid conditional statements, but by statistical patterns learned from vast datasets.'
    },
    evolutionaryImpact: 'Enables computers to perceive, synthesize natural language, generate imagery, and reason across multimodal domains.'
  }
];
