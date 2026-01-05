import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Itsuki',
  title: 'Full Stack Developer',
  bio: 'プログラミングとテクノロジーに情熱を持つ開発者です。ユーザー体験を重視したアプリケーション開発に取り組んでいます。',
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'Docker',
    'Git',
    'AWS',
    'PostgreSQL',
  ],
  projects: [
    {
      name: 'Terminal Portfolio',
      description: 'インタラクティブなターミナル風ポートフォリオサイト',
      technologies: ['TypeScript', 'React', 'Vite'],
      github: 'https://github.com/Itsuki0016/My_portfolio',
    },
    // ここに他のプロジェクトを追加できます
  ],
  contact: {
    email: 'your.email@example.com',
    github: 'https://github.com/Itsuki0016',
    linkedin: 'https://linkedin.com/in/yourprofile',
  },
  experience: [
    {
      company: 'あなたの会社名',
      position: 'ソフトウェアエンジニア',
      period: '2023 - 現在',
      description: 'Webアプリケーションの開発とメンテナンス',
    },
    // ここに他の経験を追加できます
  ],
};
