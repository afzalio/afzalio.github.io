export interface LearningTopic {
  id: string;
  name: string;
  category: string;
  description: string;
  iconName: string;
  status: "Actively Learning" | "Exploring" | "Practicing";
}

export interface LearningData {
  tagline: string;
  subheading: string;
  topics: LearningTopic[];
}

export const learningData: LearningData = {
  tagline: "Always learning, always building.",
  subheading: "Building today's applications while learning how to design tomorrow's systems.",
  topics: [
    {
      id: "system-design",
      name: "System Design",
      category: "Architecture",
      description: "High-availability, fault tolerance, load balancing, and distributed database partitioning.",
      iconName: "Network",
      status: "Actively Learning"
    },
    {
      id: "microservices",
      name: "Microservices",
      category: "Architecture",
      description: "Decomposing monoliths, event-driven messaging, and service-to-service communication.",
      iconName: "Boxes",
      status: "Actively Learning"
    },
    {
      id: "docker",
      name: "Docker & Containerization",
      category: "DevOps",
      description: "Containerizing backend services, multi-stage builds, and docker-compose orchestration.",
      iconName: "Container",
      status: "Practicing"
    },
    {
      id: "cicd",
      name: "CI / CD Pipelines",
      category: "DevOps",
      description: "Automated testing, linting, and zero-downtime deployment pipelines with GitHub Actions.",
      iconName: "Workflow",
      status: "Practicing"
    },
    {
      id: "cloud-deployment",
      name: "Cloud Deployment",
      category: "Infrastructure",
      description: "Deploying production workloads, server management, SSL, and DNS configurations.",
      iconName: "Cloud",
      status: "Exploring"
    },
    {
      id: "performance-optimization",
      name: "Performance Optimization",
      category: "Engineering",
      description: "Database indexing strategies, redis caching, query profiling, and memory efficiency.",
      iconName: "Gauge",
      status: "Actively Learning"
    }
  ]
};
