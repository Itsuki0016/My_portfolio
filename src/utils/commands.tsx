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
  {
    name: 'history',
    description: 'コマンド履歴を表示します',
    execute: (_args: string[], cmdHistory?: string[]) => {
      if (!cmdHistory || cmdHistory.length === 0) {
        return '履歴はありません';
      }
      const historyList = cmdHistory
        .map((cmd, index) => `  ${(index + 1).toString().padStart(3)} ${cmd}`)
        .join('\n');
      return `コマンド履歴:\n\n${historyList}`;
    },
  },
  {
    name: 'project',
    description: 'プロジェクトの詳細を表示 (使い方: project <番号>)',
    execute: (args: string[]) => {
      const index = parseInt(args[0]) - 1;
      if (isNaN(index) || index < 0 || index >= portfolioData.projects.length) {
        return `使い方: project <番号>\n例: project 1\n\n利用可能なプロジェクト番号: 1-${portfolioData.projects.length}`;
      }
      const project = portfolioData.projects[index];
      let details = `${project.name}\n${'='.repeat(project.name.length)}\n\n`;
      details += `説明: ${project.description}\n\n`;
      details += `技術スタック: ${project.technologies.join(', ')}\n\n`;
      if (project.details) {
        details += `詳細:\n${project.details}\n\n`;
      }
      if (project.highlights && project.highlights.length > 0) {
        details += `ハイライト:\n${project.highlights.map(h => `  • ${h}`).join('\n')}\n\n`;
      }
      if (project.github) {
        details += `GitHub: ${project.github}\n`;
      }
      if (project.url) {
        details += `URL: ${project.url}\n`;
      }
      return details.trim();
    },
  },
  {
    name: 'skill',
    description: 'スキルの詳細を表示 (使い方: skill <スキル名>)',
    execute: (args: string[]) => {
      if (args.length === 0) {
        return `使い方: skill <スキル名>\n例: skill typescript\n\n利用可能なスキル:\n${portfolioData.skills.map(s => `  • ${s}`).join('\n')}`;
      }
      const skillName = args.join(' ');
      const skill = portfolioData.skillDetails.find(
        s => s.name.toLowerCase() === skillName.toLowerCase()
      );
      if (!skill) {
        return `スキル "${skillName}" が見つかりません。\n\n利用可能なスキル:\n${portfolioData.skills.map(s => `  • ${s}`).join('\n')}`;
      }
      const levelMap = {
        beginner: '初級 ★☆☆☆',
        intermediate: '中級 ★★☆☆',
        advanced: '上級 ★★★☆',
        expert: 'エキスパート ★★★★'
      };
      let details = `${skill.name}\n${'='.repeat(skill.name.length)}\n\n`;
      details += `レベル: ${levelMap[skill.level]}\n`;
      details += `経験年数: ${skill.experience}\n\n`;
      if (skill.description) {
        details += `${skill.description}`;
      }
      return details;
    },
  },
  {
    name: 'timeline',
    description: '学歴・経歴を時系列で表示します',
    execute: () => {
      const typeIcons = {
        education: '🎓',
        work: '💼',
        achievement: '🏆'
      };
      const timelineList = portfolioData.timeline
        .map(event => {
          const icon = typeIcons[event.type] || '📌';
          return `${icon} ${event.year} - ${event.title}\n   ${event.description}`;
        })
        .join('\n\n');
      return `タイムライン:\n\n${timelineList}`;
    },
  },
  {
    name: 'theme',
    description: 'テーマを切り替えます (green/blue/amber)',
    execute: (args: string[], _cmdHistory?: string[], setTheme?: (theme: 'green' | 'blue' | 'amber') => void) => {
      const validThemes = ['green', 'blue', 'amber'];
      const theme = args[0]?.toLowerCase();
      
      if (!theme || !validThemes.includes(theme)) {
        return `使い方: theme <テーマ名>\n\n利用可能なテーマ:\n  • green (デフォルト)\n  • blue\n  • amber`;
      }
      
      if (setTheme) {
        setTheme(theme as 'green' | 'blue' | 'amber');
        return `テーマを ${theme} に変更しました`;
      }
      return 'テーマの変更に失敗しました';
    },
  },
];

export const executeCommand = (input: string, cmdHistory?: string[], setTheme?: (theme: 'green' | 'blue' | 'amber') => void): string | JSX.Element => {
  const [commandName, ...args] = input.trim().toLowerCase().split(' ');
  
  if (!commandName) {
    return '';
  }

  const command = commands.find((cmd) => cmd.name === commandName);

  if (command) {
    return command.execute(args, cmdHistory, setTheme);
  } else {
    return `コマンドが見つかりません: ${commandName}\n'help' と入力して利用可能なコマンドを確認してください`;
  }
};
