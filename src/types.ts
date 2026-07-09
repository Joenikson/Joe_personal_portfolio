export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'tools' | 'other';
  iconName: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'internship' | 'certification' | 'achievement';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
