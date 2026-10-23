import { PersonalProfile, SkillCategory, ProjectDetail, EducationItem } from '../types';

export const personalProfile: PersonalProfile = {
  name: "Mohammad Shaheen",
  title: "AI & Machine Learning Engineering Student | Aspiring Software Developer",
  typedTitles: [
    "AI & ML Engineering Student",
    "Aspiring Software Developer",
    "Problem Solver & Tech Enthusiast",
    "Full-Stack Web Explorer"
  ],
  college: "AJ Institute of Engineering and Technology (AJIET), Mangaluru",
  educationNote: "Engineering (Listed as 2024 in Resume)",
  location: "Mangaluru, Karnataka, India",
  email: "shaheenadkar@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/mohammad-shaheen-a4621743a",
  resumeUrl: "/Mohammad_Shaheen_Resume.pdf",
  bioSummary: "Engineering student specializing in Artificial Intelligence and Machine Learning at AJIET Mangaluru. Passionate about software development, algorithms, system design, and building practical technology solutions that solve tangible operational problems.",
  aboutDetails: {
    paragraph1: "I am an engineering student specializing in Artificial Intelligence and Machine Learning at AJ Institute of Engineering and Technology (AJIET), Mangaluru. Driven by a deep curiosity about how intelligent systems and software applications work behind the scenes, I focus on building a strong foundation in core computer science, algorithmic thinking, and modern programming paradigms.",
    paragraph2: "My practical work spans software development in Python and C, web applications, and database management. I enjoy taking foundational principles—from data structures and transaction concurrency to network simulations—and transforming them into functioning projects, such as my Queue Management System designed to optimize customer wait times and counter utilization.",
    paragraph3: "As an aspiring developer, I am committed to continuous learning, clean code architecture, and practical engineering. I am eager to apply my technical knowledge and problem-solving mindset to real-world software engineering challenges and collaborative internship opportunities."
  },
  corePillars: [
    {
      title: "AI & Machine Learning",
      description: "Exploring core machine learning concepts, logic reasoning, and predictive data analysis to create intelligent systems.",
      icon: "Cpu"
    },
    {
      title: "Algorithms & Problem Solving",
      description: "Practicing data structures, tree balancing, graph traversals, and algorithmic optimization for robust performance.",
      icon: "Binary"
    },
    {
      title: "Software & Web Development",
      description: "Developing clean web interfaces and backend services using Python frameworks, responsive UI, and structured APIs.",
      icon: "Code"
    },
    {
      title: "Systems & Databases",
      description: "Understanding relational databases, concurrency control, transaction safety, and Linux terminal system operations.",
      icon: "Database"
    }
  ]
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used for problem solving, systems programming, and application logic.",
    skills: [
      { name: "Python", description: "Primary language for AI/ML exploration, scripting, and web backends", badge: "Primary", isCore: true },
      { name: "C", description: "Foundational systems programming, memory management, and DSA implementations", badge: "Core", isCore: true },
      { name: "Java", description: "Object-oriented programming, class hierarchies, and robust application architecture", badge: "Core", isCore: true }
    ]
  },
  {
    title: "Web Development",
    description: "Technologies used for building user interfaces and web service prototypes.",
    skills: [
      { name: "Python Web Frameworks (Flask / Similar)", description: "Backend routing, request handling, and queue management logic", badge: "Project Focused", isCore: true },
      { name: "HTML5 & CSS3", description: "Semantic markup, responsive page layout, and styling fundamentals", isCore: false },
      { name: "JavaScript", description: "Client-side interactivity and asynchronous requests", isCore: false },
      { name: "RESTful Principles", description: "API structure for connecting client interfaces with backend services", isCore: false }
    ]
  },
  {
    title: "Computer Science Fundamentals",
    description: "Core academic and engineering foundations underpinning reliable software engineering.",
    skills: [
      { name: "Data Structures & Algorithms", description: "Trees, graphs, linked lists, sorting, hashing, and complexity analysis", badge: "Foundational", isCore: true },
      { name: "Database Management Systems (DBMS)", description: "Schema design, relational modeling, normalization, and ACID properties", isCore: true },
      { name: "SQL & Relational Queries", description: "Complex queries, GROUP BY, HAVING, subqueries, and table joins", isCore: true },
      { name: "MongoDB (NoSQL)", description: "Document-oriented storage and foundational CRUD operations", isCore: false },
      { name: "Operating Systems & Linux Commands", description: "File permissions, process management, shell workflows on Ubuntu", isCore: true },
      { name: "Computer Networks", description: "OSI / TCP/IP models, routing concepts, and NS-2 simulation", isCore: false }
    ]
  },
  {
    title: "AI & Machine Learning Concepts",
    description: "Specialized engineering discipline topics and analytical reasoning.",
    skills: [
      { name: "AI & ML Fundamentals", description: "Supervised learning paradigms, evaluation metrics, and feature reasoning", isCore: true },
      { name: "Logic & Reasoning Concepts", description: "Propositional logic, inference engines, and search state spaces", isCore: true },
      { name: "Waiting Time Prediction Concepts", description: "Historical duration analysis applied to queuing workflows", badge: "Applied", isCore: false },
      { name: "Algorithmic Efficiency", description: "Big-O time and space optimization for scalable computation", isCore: false }
    ]
  }
];

export const projectsData: ProjectDetail[] = [
  {
    id: "queue-management-system",
    title: "Queue Management System with Waiting Time Prediction",
    category: "Featured",
    isFeatured: true,
    status: "In Progress",
    summary: "A software system designed to optimize queue handling, manage customer flow, and calculate estimated waiting times to reduce congestion.",
    problemStatement: "Organizations frequently encounter counter congestion, inefficient resource utilization, and customer frustration due to unpredictable waiting times and lack of real-time queue visibility.",
    keyFeatures: [
      "Customer registration and digital queue entry point",
      "Dynamic token and sequential queue number generation",
      "Real-time queue status and live position tracking",
      "Estimated waiting-time calculation display based on active counters",
      "Multi-service counter assignment and status toggling",
      "Responsive web-based interface for both operators and customers"
    ],
    plannedFeatures: [
      "Machine learning predictive model using historical service duration patterns to enhance accuracy",
      "Automated SMS/Email notification alerts when customer's turn is approaching",
      "Multi-department priority routing (e.g. VIP, senior citizen, express queues)",
      "Analytics dashboard showing peak congestion hours and counter throughput"
    ],
    technologies: [
      "Python",
      "Flask / Web Framework",
      "HTML5 / CSS3",
      "JavaScript",
      "Queue Management Logic",
      "Time Estimation Algorithm"
    ],
    technicalHighlights: [
      "Developed in Python with cross-platform testing across Windows and Ubuntu Linux environments",
      "Implemented FIFO queue structures with counter availability dispatch logic",
      "Distinguishes clearly between active queue mechanics and the planned predictive ML engine"
    ],
    codeSnippet: {
      language: "python",
      description: "Queue Token Generation & Wait-Time Estimation Logic",
      code: `class QueueManager:\n    def __init__(self, avg_service_time_mins=5):\n        self.queue = []\n        self.current_token = 100\n        self.avg_service_time = avg_service_time_mins\n        self.active_counters = 2\n\n    def register_customer(self, customer_name, service_type):\n        self.current_token += 1\n        token_id = f"T-{self.current_token}"\n        entry = {\n            "token": token_id,\n            "name": customer_name,\n            "service": service_type,\n            "position": len(self.queue) + 1\n        }\n        self.queue.append(entry)\n        estimated_wait = self.estimate_wait_time(len(self.queue))\n        return {"token": token_id, "position": len(self.queue), "wait_mins": estimated_wait}\n\n    def estimate_wait_time(self, queue_position):\n        # Effective wait based on active parallel service counters\n        if self.active_counters <= 0:\n            return None\n        return round((queue_position * self.avg_service_time) / self.active_counters)`
    },
    repoNote: "Active development project in local workspace. Code repository and interactive demo will be published upon completion of the predictive module."
  },
  {
    id: "data-structures-algorithms-practice",
    title: "Data Structures & Algorithms Implementation Practice",
    category: "Algorithms & CS",
    isFeatured: true,
    status: "Learning Project",
    summary: "A rigorous collection of academic algorithm implementations and core data structures developed to deepen computational problem-solving.",
    problemStatement: "Understanding real-world computational efficiency requires hands-on implementation of non-linear data structures, self-balancing trees, and asymptotic analysis.",
    keyFeatures: [
      "Graph traversal algorithms: Breadth-First Search (BFS) and Depth-First Search (DFS)",
      "Tree structures: Binary Search Trees (BST) and self-balancing AVL Trees with tree rotations",
      "Sequential collections: Stacks, Linear Queues, Circular Queues, and Deques",
      "Dynamic memory structures: Singly Linked Lists and Doubly Linked Lists",
      "Sorting algorithms: Quick Sort with partition pivots and Selection Sort",
      "Optimization patterns: Direct Hashing techniques and Prefix Sum array precomputations"
    ],
    technologies: [
      "C",
      "Python",
      "Java",
      "DSA",
      "Algorithm Analysis",
      "Time Complexity"
    ],
    technicalHighlights: [
      "Implemented AVL tree height calculations and LL, RR, LR, RL balancing rotations",
      "Compared recursive vs. iterative implementations for tree traversals",
      "Benchmarked sorting efficiency across varied input distributions (best, worst, average cases)"
    ],
    codeSnippet: {
      language: "c",
      description: "Circular Queue Implementation in C (Wrap-around indexing)",
      code: `#define SIZE 5\nint items[SIZE], front = -1, rear = -1;\n\nint isFull() {\n    return (front == (rear + 1) % SIZE);\n}\n\nint isEmpty() {\n    return (front == -1);\n}\n\nvoid enQueue(int element) {\n    if (isFull()) return; // Queue Overflow\n    if (front == -1) front = 0;\n    rear = (rear + 1) % SIZE;\n    items[rear] = element;\n}`
    },
    repoNote: "Academic practice repository encompassing coursework labs and technical problem-solving exercises."
  },
  {
    id: "database-management-sql-practice",
    title: "Database Management & SQL Systems Practice",
    category: "Systems & Web",
    isFeatured: false,
    status: "Learning Project",
    summary: "Academic and practical exploration of relational database querying, ACID transaction states, concurrency anomalies, and NoSQL document operations.",
    problemStatement: "Modern applications depend on reliable data persistence, normalized schemas, and concurrency management to prevent data corruption and deadlocks.",
    keyFeatures: [
      "Analytical SQL construction utilizing GROUP BY, HAVING, subqueries, and multi-table joins",
      "Study of Transaction States: Active, Partially Committed, Committed, Failed, and Aborted",
      "Analysis of Concurrency Control protocols and serializability guarantees",
      "Investigation of Deadlock detection graphs, prevention techniques, and resource starvation",
      "Hands-on NoSQL document modeling and CRUD operations with MongoDB"
    ],
    technologies: [
      "SQL",
      "Relational DBMS",
      "MongoDB",
      "ACID Transactions",
      "Concurrency Control"
    ],
    technicalHighlights: [
      "Crafted aggregation queries for grouping and filtering datasets on aggregate criteria",
      "Mapped transaction lifecycle diagrams to observe how rollbacks and write-ahead logs preserve consistency",
      "Explored trade-offs between normalized relational tables and flexible schema NoSQL collections"
    ],
    codeSnippet: {
      language: "sql",
      description: "Aggregated Analytics Query with HAVING and Subqueries",
      code: `-- Identify departments with average salary exceeding division threshold\nSELECT \n    d.dept_name, \n    COUNT(e.emp_id) AS total_employees,\n    AVG(e.salary) AS average_salary\nFROM department d\nJOIN employee e ON d.dept_id = e.dept_id\nGROUP BY d.dept_name\nHAVING AVG(e.salary) > (\n    SELECT AVG(salary) FROM employee\n)\nORDER BY average_salary DESC;`
    },
    repoNote: "Coursework lab exercises, query scripts, and transaction analysis documentation."
  },
  {
    id: "computer-networks-ns2-simulation",
    title: "Computer Networks & NS-2 Simulation",
    category: "Academic Labs",
    isFeatured: false,
    status: "Learning Project",
    summary: "Academic network modeling and packet traffic simulation using Network Simulator 2 (NS-2) and Network Animator (NAM) on Linux.",
    problemStatement: "Analyzing network congestion, throughput, and packet-drop behavior in hardware testbeds is expensive; simulation provides controlled visibility into protocol dynamics.",
    keyFeatures: [
      "Simulation of point-to-point and multi-node topology scripts using OTcl in NS-2",
      "Visual tracing of packet routing and flow congestion using Network Animator (NAM)",
      "Evaluation of TCP versus UDP transport protocol transmission behaviors",
      "Observation of queue drop mechanisms (e.g. DropTail, RED) under varying traffic loads",
      "Analysis of trace files to measure packet delivery ratios and latency"
    ],
    technologies: [
      "NS-2 Simulator",
      "NAM (Network Animator)",
      "Ubuntu Linux",
      "OTcl Scripting",
      "TCP/IP Protocols"
    ],
    technicalHighlights: [
      "Executed network simulation scripts in a native Linux terminal environment",
      "Mapped visual packet drops at intermediate node queues during bottleneck traffic spikes",
      "Gained empirical understanding of sliding window mechanisms and flow control"
    ],
    codeSnippet: {
      language: "tcl",
      description: "NS-2 OTcl Script snippet creating duplex link and queue",
      code: `# Initialize Simulator and Nam trace\nset ns [new Simulator]\nset nf [open out.nam w]\n$ns namtrace-all $nf\n\n# Create two nodes and duplex link with DropTail queue\nset n0 [$ns node]\nset n1 [$ns node]\n$ns duplex-link $n0 $n1 2Mb 10ms DropTail\n\n# Setup a TCP Agent and connect to sink\nset tcp [new Agent/TCP]\n$ns attach-agent $n0 $tcp\nset sink [new Agent/TCPSink]\n$ns attach-agent $n1 $sink\n$ns connect $tcp $sink`
    },
    repoNote: "Academic simulation lab scripts conducted in Ubuntu Linux environment."
  },
  {
    id: "linux-unix-command-line-practice",
    title: "Linux & Unix Command-Line System Practice",
    category: "Systems & Web",
    isFeatured: false,
    status: "Learning Project",
    summary: "Practical mastery of Unix/Linux terminal workflows, file system hierarchies, permissions governance, and process management on Ubuntu.",
    problemStatement: "Server environments and developer tooling rely heavily on terminal fluency, access security policies, and resource diagnostic commands.",
    keyFeatures: [
      "File and directory hierarchical navigation, pattern matching, and file archiving",
      "Permission and ownership management using symbolic and octal modes (chmod, chown)",
      "Configuring file access attributes and read/read-only permission flags",
      "System resource inspection and process monitoring (top, ps, kill, df, free)",
      "Text processing pipelines utilizing grep, pipes (|), and standard I/O redirection"
    ],
    technologies: [
      "Ubuntu Linux",
      "Bash / Shell",
      "Unix Architecture",
      "System Administration",
      "CLI Tools"
    ],
    technicalHighlights: [
      "Regular terminal-driven workflows across development and simulation assignments",
      "Configured secure access matrices for collaborative multi-user directory permissions",
      "Constructed reusable shell one-liners for log inspection and batch file management"
    ],
    codeSnippet: {
      language: "bash",
      description: "Essential Linux Permissions and Process Management",
      code: `# Restrict project directory to owner full access and group read\nchmod 750 /var/projects/queuesys\n\n# Verify ownership and octal permissions\nls -ld /var/projects/queuesys\n\n# Monitor running python processes and memory consumption\nps aux | grep python\ntop -b -n 1 | head -n 20`
    },
    repoNote: "Technical practice and daily terminal environment workflows on Ubuntu Linux."
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "AJ Institute of Engineering and Technology (AJIET)",
    shortName: "AJIET Mangaluru",
    degree: "Bachelor of Engineering (B.E.)",
    periodOrYear: "Engineering · 2024",
    location: "Mangaluru, Karnataka, India",
    statusNote: "Education listed as 2024 in verified resume. Specialization in Artificial Intelligence & Machine Learning.",
    highlights: [
      "Specialized in Artificial Intelligence and Machine Learning curriculum",
      "Hands-on laboratory experience across Data Structures, DBMS, and Network Simulation",
      "Active participant in technical workshops, project ideation, and programming exercises",
      "Focused on bridging theoretical algorithms with practical software applications"
    ],
    coursework: [
      "Artificial Intelligence & Machine Learning",
      "Data Structures & Applications",
      "Design & Analysis of Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems & Linux Administration",
      "Computer Networks & Protocols",
      "Object-Oriented Programming (Java / C++)",
      "Discrete Mathematics & Engineering Logic"
    ]
  }
];
