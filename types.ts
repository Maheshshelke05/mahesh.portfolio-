
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: 'DevOps' | 'Personal';
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
