export interface TechItem {
  name: string;
  description?: string;
  iconName: string;
  featured?: boolean;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    id: "backend",
    title: "Backend & Core Languages",
    description: "Enterprise PHP/Node server frameworks, REST/SOAP web services, and database engineering.",
    items: [
      { name: "PHP", description: "Modern PHP 8+ & OOP Architecture", iconName: "Code2", featured: true },
      { name: "Laravel", description: "MVC & Multi-Tenant SaaS Framework", iconName: "Server", featured: true },
      { name: "CodeIgniter 3", description: "Legacy System Modernization & Performance", iconName: "Zap", featured: true },
      { name: "Node.js", description: "Asynchronous Server Runtime", iconName: "Cpu", featured: true },
      { name: "Express.js", description: "Minimalist Node Web Framework", iconName: "Layers" },
      { name: "TypeScript", description: "Strongly Typed Application Logic", iconName: "FileCode", featured: true },
      { name: "JavaScript (ES6+)", description: "Core Engine & Functional JS", iconName: "FileCode", featured: true },
      { name: "SQL", description: "Complex Queries, Indexes & Stored Procedures", iconName: "Database", featured: true }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Responsive web apps, component architectures, vector animations, and modern UI frameworks.",
    items: [
      { name: "React.js", description: "Component-Driven Client Applications", iconName: "Atom", featured: true },
      { name: "Next.js", description: "Server-Side Rendered & Static React Apps", iconName: "Globe", featured: true },
      { name: "Material UI", description: "React Enterprise UI Library", iconName: "Component", featured: true },
      { name: "Bootstrap", description: "Grid Systems & Responsive Layouts", iconName: "Boxes" },
      { name: "HTML5 & CSS3", description: "Semantic Standards & Modern Styling", iconName: "Layout" },
      { name: "AJAX", description: "Asynchronous Data Fetching & DataTables", iconName: "Radio" }
    ]
  },
  {
    id: "database",
    title: "Databases & Storage",
    description: "Relational schema design, query optimization, indexing, and DataTables AJAX pagination.",
    items: [
      { name: "MySQL", description: "Stored Procedures, Indexes & Set-Based Queries", iconName: "Database", featured: true },
      { name: "MariaDB", description: "Relational DBMS & Transaction Safety", iconName: "HardDrive", featured: true }
    ]
  },
  {
    id: "api-security",
    title: "APIs, Real-Time & Security",
    description: "Stateless security protocols, IoT hardware integrations, and live WebSocket broadcasting.",
    items: [
      { name: "RESTful APIs", description: "75+ Secure Endpoint Architectures", iconName: "Webhook", featured: true },
      { name: "SOAP APIs", description: "Enterprise Protocol Integrations", iconName: "Network" },
      { name: "JWT Authentication", description: "Stateless Security & Token Auth", iconName: "Key", featured: true },
      { name: "WebSockets", description: "Real-Time Event Broadcasting", iconName: "Radio", featured: true },
      { name: "Laravel Reverb", description: "First-Party WebSocket Server", iconName: "Zap", featured: true },
      { name: "RBAC", description: "Role-Based Access Control Protocols", iconName: "Key", featured: true },
      { name: "Hikvision IoT", description: "Biometric Hardware API Integration", iconName: "Cpu", featured: true }
    ]
  },
  {
    id: "devops-tools",
    title: "DevOps & Developer Tools",
    description: "Linux server environments, build orchestration, version control, and API testing.",
    items: [
      { name: "Linux (Ubuntu)", description: "Apache Server Builds & Administration", iconName: "Server", featured: true },
      { name: "Apache", description: "Production Server Configuration", iconName: "Cloud", featured: true },
      { name: "Git & GitHub", description: "Version Control & Release Pipelines", iconName: "GitBranch", featured: true },
      { name: "Figma", description: "Pixel-Perfect UI Component Conversion", iconName: "Palette" },
      { name: "Postman", description: "API Testing & Documentation", iconName: "Webhook" },
      { name: "Composer", description: "PHP Dependency Management", iconName: "Package" },
      { name: "npm & Vite", description: "Node Package Manager & Bundler", iconName: "Box", featured: true }
    ]
  }
];
