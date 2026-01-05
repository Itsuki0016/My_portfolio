import { Command } from '../types';
import { portfolioData } from '../data/portfolio';

export const commands: Command[] = [
  {
    name: 'help',
    description: '利用可能なコマンドを表示します',
    execute: () => {
      const commandList = commands
        .map((cmd) => `  ${cmd.name.padEnd(15)} - ${cmd.description}`)
        .join('\n');
      return `利用可能なコマンド:\n\n${commandList}\n\nヒント: コマンド名を入力してEnterキーを押してください`;
    },
  },
  {
    name: 'about',
    description: '自己紹介を表示します',
    execute: () => {
      return `${portfolioData.name} - ${portfolioData.title}\n\n${portfolioData.bio}`;
    },
  },
  {
    name: 'skills',
    description: 'スキルセットを表示します',
    execute: () => {
      const skillsList = portfolioData.skills
        .map((skill, index) => `  ${index + 1}. ${skill}`)
        .join('\n');
      return `スキル:\n\n${skillsList}`;
    },
  },
  {
    name: 'projects',
    description: 'プロジェクト一覧を表示します',
    execute: () => {
      const projectsList = portfolioData.projects
        .map((project, index) => {
          let projectInfo = `${index + 1}. ${project.name}\n   ${project.description}\n   技術: ${project.technologies.join(', ')}`;
          if (project.github) {
            projectInfo += `\n   GitHub: ${project.github}`;
          }
          if (project.url) {
            projectInfo += `\n   URL: ${project.url}`;
          }
          return projectInfo;
        })
        .join('\n\n');
      return `プロジェクト:\n\n${projectsList}`;
    },
  },
  {
    name: 'experience',
    description: '職務経歴を表示します',
    execute: () => {
      const experienceList = portfolioData.experience
        .map((exp, index) => {
          return `${index + 1}. ${exp.position} @ ${exp.company}\n   期間: ${exp.period}\n   ${exp.description}`;
        })
        .join('\n\n');
      return `職務経歴:\n\n${experienceList}`;
    },
  },
  {
    name: 'contact',
    description: '連絡先情報を表示します',
    execute: () => {
      let contactInfo = `連絡先:\n\nEmail: ${portfolioData.contact.email}\nGitHub: ${portfolioData.contact.github}`;
      if (portfolioData.contact.linkedin) {
        contactInfo += `\nLinkedIn: ${portfolioData.contact.linkedin}`;
      }
      if (portfolioData.contact.twitter) {
        contactInfo += `\nTwitter: ${portfolioData.contact.twitter}`;
      }
      return contactInfo;
    },
  },
  {
    name: 'clear',
    description: 'ターミナルをクリアします',
    execute: () => 'CLEAR_SCREEN',
  },
  {
    name: 'whoami',
    description: '現在のユーザーを表示します',
    execute: () => `visitor@portfolio:~$ ${portfolioData.name}`,
  },
  {
    name: 'date',
    description: '現在の日時を表示します',
    execute: () => new Date().toLocaleString('ja-JP'),
  },
  {
    name: 'banner',
    description: 'ウェルカムバナーを表示します',
    execute: () => {
      return `
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║  Welcome to ${portfolioData.name}'s Interactive Portfolio        ║
║                                                          ║
║  Type 'help' to see available commands                   ║
║  Type 'about' to learn more about me                     ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
      `.trim();
    },
  },
];

export const executeCommand = (input: string): string | JSX.Element => {
  const [commandName, ...args] = input.trim().toLowerCase().split(' ');
  
  if (!commandName) {
    return '';
  }

  const command = commands.find((cmd) => cmd.name === commandName);

  if (command) {
    return command.execute(args);
  } else {
    return `コマンドが見つかりません: ${commandName}\n'help' と入力して利用可能なコマンドを確認してください`;
  }
};
