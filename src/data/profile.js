// All portfolio content lives here — edit this file to update the site.

export const profile = {
  name: 'Salahaldin Tawafsha',
  shortName: 'Salah',
  title: 'Full-Stack Engineer',
  roles: ['Full-Stack Engineer', 'Mobile Developer', 'Backend Engineer', 'React Native · Node.js'],
  summary:
    'Full-Stack Engineer with over two years of experience building web and mobile applications across Flutter, Python (Frappe), Spring Boot, and Angular. Currently building cross-platform mobile apps with React Native, Node.js, PostgreSQL, and PostGIS, with a focus on clean, efficient, well-tested code.',
  cv: './Salahaldin-Tawafsha-CV.pdf',
  contact: {
    location: 'Sinjel, Ramallah, Palestine',
    phone: '+970 59-248-5699',
    phoneHref: 'tel:+970592485699',
    email: 'salaht321@gmail.com',
    linkedin: 'linkedin.com/in/salah-tawafsha',
    linkedinHref: 'https://linkedin.com/in/salah-tawafsha',
    github: 'github.com/SalahTawafsha',
    githubHref: 'https://github.com/SalahTawafsha',
  },
  languages: ['Arabic', 'English'],
  stats: [
    { value: '2+', label: 'Years experience' },
    { value: '4', label: 'Companies' },
    { value: '3', label: 'Platforms' },
  ],
};

export const experience = [
  {
    role: 'Mobile Full-Stack Developer',
    company: 'VNG International',
    period: 'Jun 2026 – Present',
    current: true,
    points: [
      'Building cross-platform mobile applications with React Native, delivering responsive, high-performance UIs across iOS and Android from a single codebase.',
      'Developed RESTful backend services in Node.js, designing clean API layers and handling authentication, validation, and error handling.',
      'Designed and optimized PostgreSQL schemas, writing efficient queries and managing migrations for reliable data access.',
      'Implemented geospatial features using PostGIS for mapping, proximity search, and spatial analysis.',
      'Integrated offline-first storage with SQLite on the mobile client, enabling local persistence and seamless data synchronization when connectivity is restored.',
      'Collaborated on API contracts between the React Native front end and Node.js backend, ensuring consistent data models and smooth end-to-end feature delivery.',
    ],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'PostGIS', 'SQLite', 'REST'],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'LogesTechs',
    period: 'May 2025 – May 2026',
    points: [
      'Developed and maintained RESTful APIs using Spring Boot and Angular, focusing on scalability, performance, and user experience.',
      'Designed and optimized MySQL database schemas, mapping them to Java entities and handling data operations with JDBC Templates and advanced MySQL queries.',
      'Collaborated with the Customer Success team to investigate and resolve production bugs and data issues directly on live environments.',
      'Worked with caching intermediate data in Redis and orchestrating task scheduling using RabbitMQ.',
      'Integrated multiple external APIs, including authentication flows and 3PL (Third-Party Logistics) services, ensuring accurate error handling and user feedback.',
      'Developed and enhanced multiple Angular pages with a focus on responsive design and usability.',
      'Improved user experience across several existing modules through UI/UX refinements and performance optimizations.',
    ],
    tech: ['Spring Boot', 'Angular', 'MySQL', 'Redis', 'RabbitMQ', 'JDBC'],
  },
  {
    role: 'Mobile Full-Stack Developer',
    company: 'ERPMax Solutions',
    period: 'Apr 2024 – May 2025',
    points: [
      'Built and optimized REST APIs using MySQL for integration with Flutter applications.',
      'Led development of the MaxFlow Distributor App, implementing all screens, and contributing to multiple other Flutter apps.',
      'Designed local database solutions in Flutter for offline functionality with seamless data synchronization on reconnect.',
    ],
    tech: ['Flutter', 'MySQL', 'REST', 'Offline sync'],
  },
  {
    role: 'Back-End Developer Training',
    company: 'Asal Technologies',
    period: 'Aug 2023 – Sep 2023',
    points: [
      'Strengthened Python skills and algorithm knowledge with a focus on time-complexity optimization.',
      'Consumed existing APIs and developed new REST APIs using the Django framework.',
      'Implemented unit testing for comprehensive test coverage across all projects.',
    ],
    tech: ['Python', 'Django', 'PyTest', 'Algorithms'],
  },
];

export const projects = [
  {
    name: 'MySolar',
    platform: 'Flutter · Mobile',
    description:
      'Mobile app for ordering, installing and monitoring home solar systems — connecting customers with an installation company from system design to live power monitoring.',
    features: [
      'Guided stepper to design a system, with recommended panels, stands, inverters and batteries',
      'Company admin profile to manage components, prices, employees and activate installed systems',
      'Live monitoring of generated vs. consumed power, battery charge and user profit',
      'Date-range reports exported as PDF; Firebase Auth with email verification',
    ],
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'PDF reports'],
    images: ['./projects/mysolar-home.jpg', './projects/mysolar-dashboard.jpg', './projects/mysolar-battery.jpg'],
    links: [{ label: 'Source code', href: 'https://github.com/SalahTawafsha/MySolar-app', icon: 'github' }],
  },
  {
    name: 'PassKeeper',
    platform: 'Android · Java',
    description:
      'Android password manager that lets users store, generate and organize their passwords securely in the cloud.',
    features: [
      'Three ways to sign in: email & password, phone number (OTP) and fingerprint',
      'Add, edit, search and copy passwords, grouped as social, email, finance and website',
      'Built-in password generator with a strength indicator',
      'Reminder notifications for passwords unchanged for 3 months; email password reset',
    ],
    tech: ['Java', 'Android', 'Firebase Auth', 'Firebase Database', 'Biometrics'],
    images: ['./projects/passkeeper-welcome.jpg', './projects/passkeeper-home.jpg', './projects/passkeeper-add.jpg'],
    links: [{ label: 'Source code', href: 'https://github.com/SalahTawafsha/PassKeeper', icon: 'github' }],
  },
  {
    name: 'Quill — Blog Platform',
    platform: 'Django · Web',
    layout: 'web',
    description:
      'Blogging website where users publish posts, subscribe to other writers’ channels and interact through likes, dislikes and comments — with built-in AI writing tools and anti-spam rules.',
    features: [
      'GPT-3 writing tools: draft a post from its title, fix grammar and summarize',
      'Subscriptions with notifications when a followed user publishes',
      'Rate limits: 3 posts and 3 free reads per day, 30-second comment cooldown',
      'Profanity filter that masks bad words, issues warnings and blocks repeat offenders for 10 days',
      'Django authentication, URL slugs, pagination and APIs for the site’s features',
    ],
    tech: ['Python', 'Django', 'OpenAI GPT-3', 'HTML', 'CSS'],
    images: ['./projects/blog-create-post.jpg'],
    links: [{ label: 'Source code', href: 'https://github.com/SalahTawafsha/blog-website-by-Django', icon: 'github' }],
  },
];

export const education = {
  degree: "Bachelor's degree in Computer Science",
  school: 'Birzeit University',
  period: 'Sep 2020 – Feb 2024',
  details: ['Graduated with a GPA of 80.1', 'Honor List — first semester 2020/2021'],
};

export const skills = [
  {
    category: 'Front-end',
    icon: 'layout',
    items: [
      'Angular',
      'React Native',
      'TypeScript',
      'JavaScript',
      'HTML, CSS & SCSS',
      'Responsive & adaptive UI',
      'Flutter',
      'jQuery',
      'Bootstrap',
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    items: [
      'Node.js',
      'Spring Boot',
      'Frappe Framework (Python)',
      'Django',
      'RESTful API design',
      'Third-party API integration',
    ],
  },
  {
    category: 'Databases',
    icon: 'database',
    items: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQLite', 'ObjectBox', 'Redis'],
  },
  {
    category: 'Testing',
    icon: 'check',
    items: ['JUnit', 'PyTest', 'Debugging & troubleshooting', 'Postman'],
  },
  {
    category: 'Tools',
    icon: 'tool',
    items: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'RabbitMQ'],
  },
];

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
