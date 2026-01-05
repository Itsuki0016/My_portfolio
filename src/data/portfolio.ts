import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Itsuki Murata',
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
    'MySQL',
    ],
  projects: [
    {
      name: 'Terminal Portfolio',
      description: '村田一生によるエンジニアのためのインタラクティブなターミナル風ポートフォリオサイト',
      technologies: ['TypeScript', 'React', 'Vite'],
      github: 'https://github.com/Itsuki0016/My_portfolio',
    },
    // ここに他のプロジェクトを追加できます
  ],
  contact: {
    email: 'ktc24a31e0016@edu.kyoto-tech.ac.jp',
    github: 'https://github.com/Itsuki0016',
  },
  experience: [
    {
      company: '京都デザイン＆テクノロジー専門学校',
      position: '学生',
      period: '2024 - 現在',
      description: 'ホワイトハッカーを専攻し、Web開発やソフトウェアエンジニアリングを学んでいます',
    },
    // ここに他の経験を追加できます
  ],
};
