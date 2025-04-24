import { Code, Layers, Database, GitMerge, BarChart, Cloud, BookOpen, Rocket, Target, Trophy } from 'lucide-react';

export const featuredResources = [
  {
    id: '1',
    title: 'Ultimate React Hooks Guide',
    author: 'Sarah Johnson',
    rating: 4.9,
    thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'Hooks'],
    url: '#',
    dateAdded: '2025-01-15',
    views: 8542,
    saves: 1245
  },
  {
    id: '2',
    title: 'Node.js Microservices Architecture',
    author: 'Michael Chen',
    rating: 4.7,
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Backend',
    tags: ['Node.js', 'Microservices', 'API'],
    url: '#',
    dateAdded: '2025-01-10',
    views: 6231,
    saves: 982
  },
  {
    id: '3',
    title: 'Mastering TypeScript: Beyond the Basics',
    author: 'Elena Rodriguez',
    rating: 4.8,
    thumbnail: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Frontend',
    tags: ['TypeScript', 'JavaScript', 'Web Development'],
    url: '#',
    dateAdded: '2025-01-05',
    views: 7125,
    saves: 1087
  },
  {
    id: '4',
    title: 'Docker & Kubernetes: From Zero to Hero',
    author: 'Alex Wilson',
    rating: 4.9,
    thumbnail: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'Container'],
    url: '#',
    dateAdded: '2024-12-28',
    views: 9231,
    saves: 1543
  },
  {
    id: '5',
    title: 'Python Data Analysis with Pandas',
    author: 'James Kim',
    rating: 4.6,
    thumbnail: 'https://images.pexels.com/photos/7108/notebook-computer-chill-relax.jpg?auto=compress&cs=tinysrgb&w=600',
    category: 'Data Science',
    tags: ['Python', 'Pandas', 'Data Analysis'],
    url: '#',
    dateAdded: '2024-12-20',
    views: 5429,
    saves: 876
  },
  {
    id: '6',
    title: 'AWS Cloud Architecture Patterns',
    author: 'Lisa Thompson',
    rating: 4.8,
    thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Cloud',
    tags: ['AWS', 'Cloud', 'Architecture'],
    url: '#',
    dateAdded: '2024-12-15',
    views: 6754,
    saves: 1123
  }
];

export const categories = [
  { id: '1', name: 'Full Stack', icon: 'Layers', count: 248 },
  { id: '2', name: 'Frontend', icon: 'Layout', count: 372 },
  { id: '3', name: 'Backend', icon: 'Database', count: 295 },
  { id: '4', name: 'DevOps', icon: 'GitMerge', count: 183 },
  { id: '5', name: 'Data Science', icon: 'BarChart', count: 215 },
  { id: '6', name: 'Cloud', icon: 'Cloud', count: 164 }
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Miller',
    role: 'Frontend Developer',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'Aura TechHub saved me months of searching for quality React tutorials!',
    rating: 5
  },
  {
    id: '2',
    name: 'David Park',
    role: 'DevOps Engineer',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The Kubernetes resources helped me transition from junior to senior engineer in record time.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Watson',
    role: 'Data Scientist',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'I recommend Aura TechHub to all my colleagues. The Python resources are exceptional.',
    rating: 4
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    role: 'Full Stack Developer',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
    quote: 'The roadmaps feature guided my learning path perfectly. Now I can build complete web applications!',
    rating: 5
  }
];

export const roadmaps = [
  {
    id: 'fullstack',
    name: 'Full Stack',
    icon: Layers,
    stages: [
      {
        id: 'fullstack-1',
        name: 'Learn Basics',
        level: 'beginner',
        icon: BookOpen,
        description: 'Start here! Learn fundamentals with easy tutorials.',
        topics: [
          {
            id: 'html-css',
            name: 'HTML & CSS',
            description: 'Learn the building blocks of web development',
            estimatedTime: '20 hours',
            skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
            resources: [
              { title: 'MDN Web Docs Guide', url: '#', isFree: true },
              { title: 'CSS Tricks Complete Guide', url: '#', isFree: true },
              { title: 'Frontend Masters Bootcamp', url: '#', isFree: false }
            ]
          },
          {
            id: 'javascript',
            name: 'JavaScript Fundamentals',
            description: 'Master core JavaScript concepts',
            estimatedTime: '30 hours',
            skills: ['Variables', 'Functions', 'DOM', 'ES6+', 'Async/Await'],
            resources: [
              { title: 'JavaScript.info', url: '#', isFree: true },
              { title: 'Eloquent JavaScript Book', url: '#', isFree: true },
              { title: 'JavaScript30 Challenge', url: '#', isFree: true }
            ]
          },
          {
            id: 'git',
            name: 'Git & GitHub',
            description: 'Learn version control basics',
            estimatedTime: '10 hours',
            skills: ['Git Basics', 'Branching', 'Pull Requests', 'Collaboration'],
            resources: [
              { title: 'Git Handbook', url: '#', isFree: true },
              { title: 'GitHub Learning Lab', url: '#', isFree: true }
            ]
          }
        ]
      },
      {
        id: 'fullstack-2',
        name: 'Build Projects',
        level: 'intermediate',
        icon: Rocket,
        description: 'Time to build. Create 2-3 projects to reinforce concepts.',
        topics: [
          {
            id: 'react',
            name: 'React Development',
            description: 'Build modern web applications with React',
            estimatedTime: '40 hours',
            skills: ['Components', 'State', 'Props', 'Hooks', 'Context'],
            resources: [
              { title: 'React Official Docs', url: '#', isFree: true },
              { title: 'React for Beginners', url: '#', isFree: false },
              { title: 'Build a Twitter Clone', url: '#', isFree: true }
            ]
          },
          {
            id: 'node',
            name: 'Node.js & Express',
            description: 'Create backend services with Node.js',
            estimatedTime: '35 hours',
            skills: ['APIs', 'Express', 'MongoDB', 'Authentication'],
            resources: [
              { title: 'Node.js Crash Course', url: '#', isFree: true },
              { title: 'REST API Tutorial', url: '#', isFree: true }
            ]
          }
        ]
      },
      {
        id: 'fullstack-3',
        name: 'Master Concepts',
        level: 'advanced',
        icon: Target,
        description: 'Dive deep. Explore best practices and optimization.',
        topics: [
          {
            id: 'testing',
            name: 'Testing & Quality',
            description: 'Learn testing methodologies',
            estimatedTime: '25 hours',
            skills: ['Jest', 'React Testing Library', 'E2E Testing', 'TDD'],
            resources: [
              { title: 'Testing JavaScript', url: '#', isFree: false },
              { title: 'Jest Documentation', url: '#', isFree: true }
            ]
          },
          {
            id: 'deployment',
            name: 'Deployment & DevOps',
            description: 'Deploy and maintain applications',
            estimatedTime: '30 hours',
            skills: ['CI/CD', 'Docker', 'AWS/Vercel', 'Monitoring'],
            resources: [
              { title: 'DevOps Basics', url: '#', isFree: true },
              { title: 'AWS for Frontend', url: '#', isFree: false }
            ]
          }
        ]
      },
      {
        id: 'fullstack-4',
        name: 'Specialize & Contribute',
        level: 'expert',
        icon: Trophy,
        description: 'Contribute to open source or specialize further.',
        topics: [
          {
            id: 'architecture',
            name: 'System Architecture',
            description: 'Design scalable applications',
            estimatedTime: '45 hours',
            skills: ['System Design', 'Scalability', 'Performance', 'Security'],
            resources: [
              { title: 'System Design Primer', url: '#', isFree: true },
              { title: 'Architecture Patterns', url: '#', isFree: false }
            ]
          },
          {
            id: 'opensource',
            name: 'Open Source',
            description: 'Contribute to the community',
            estimatedTime: 'Ongoing',
            skills: ['Code Review', 'Documentation', 'Collaboration'],
            resources: [
              { title: 'First Contributions', url: '#', isFree: true },
              { title: 'Open Source Guide', url: '#', isFree: true }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Code,
    stages: []
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Database,
    stages: []
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: GitMerge,
    stages: []
  },
  {
    id: 'datascience',
    name: 'Data Science',
    icon: BarChart,
    stages: []
  },
  {
    id: 'cloud',
    name: 'Cloud & AI',
    icon: Cloud,
    stages: []
  }
];
