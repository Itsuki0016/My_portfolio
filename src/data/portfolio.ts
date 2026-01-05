import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: 'Itsuki Murata',
  title: 'Full Stack Developer',
  bio: '未知の領域でも自走して"実際に使えるところまで"持っていくエンジニア。実務・社会課題に直結するシステム開発を得意とし、実装力×現実課題×見せ方を重視したプロジェクトを展開。',
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'AWS',
    'Laravel',
    'MySQL',
    'Docker',
    'Git',
  ],
  skillDetails: [
    {
      name: 'TypeScript',
      level: 'advanced',
      experience: '2年',
      description: '型安全なWebアプリケーション開発に使用。React、Node.jsと組み合わせて多数のプロジェクトを開発。Terminal Portfolioやカジノチェックインシステムなどで活用。'
    },
    {
      name: 'React',
      level: 'advanced',
      experience: '2年',
      description: 'モダンなUIコンポーネント開発。Hooks、Context API、カスタムフックの活用に精通。Next.jsと組み合わせた実務レベルの開発経験あり。'
    },
    {
      name: 'Node.js',
      level: 'intermediate',
      experience: '1.5年',
      description: 'バックエンドAPI開発、RESTful API、Express.jsを使用したサーバー構築。Bun/Honoなどモダンランタイムの経験も豊富。'
    },
    {
      name: 'Python',
      level: 'intermediate',
      experience: '1年',
      description: 'Django、FlaskでのWeb開発経験。データ処理、スクリプト自動化も得意。暗号化アプリやSNSアプリの開発実績。'
    },
    {
      name: 'AWS',
      level: 'advanced',
      experience: '1年',
      description: 'Lambda、Bedrock、S3、DynamoDB、API Gateway、CloudFrontなど幅広く活用。All-Vault-CloudでサーバーレスアーキテクチャによるPoC構築実績。'
    },
    {
      name: 'Laravel',
      level: 'advanced',
      experience: '1.5年',
      description: 'PHPフレームワークを用いた本格的なWebアプリケーション開発。Apple Calendar風の高機能スケジューラーを実装。'
    },
    {
      name: 'MySQL',
      level: 'intermediate',
      experience: '1年',
      description: 'データベース設計、クエリ最適化、リレーショナルデータベースの構築。Drizzle ORMなどモダンなツールも使用。'
    },
    {
      name: 'Docker',
      level: 'intermediate',
      experience: '1年',
      description: 'コンテナ化、Docker Compose、開発環境の構築と管理。本番環境でのデプロイ経験あり。'
    },
    {
      name: 'Git',
      level: 'advanced',
      experience: '2年',
      description: 'バージョン管理、ブランチ戦略、GitHub/GitLabでのコラボレーション。チーム開発での運用経験も豊富。'
    },
  ],
  projects: [
    {
      name: 'All-Vault-Cloud (AVC)',
      description: '行政向けFAX・メール業務のデジタル化システム',
      technologies: ['AWS Lambda', 'Bedrock', 'S3', 'DynamoDB', 'API Gateway', 'SES', 'CloudFront', 'Claude 3.5'],
      details: 'FAX文化が根強く残る行政の業務効率化を目指したシステム。FAXやメールで届く書類を自動でOCR処理し、AI（Claude 3.5 Sonnet/Haiku）による分類・件名ベースのファイル命名を実現。年間約2,000時間の業務削減を試算。',
      highlights: [
        'AWS Bedrockを活用した高精度な文書分類',
        'OCR → 分類 → PDF自動生成の完全自動化',
        'サーバーレスアーキテクチャによるスケーラブルな設計',
        '行政導入を想定した本格的なPoC実装',
        'プレゼン・デモ・ROI算出まで実施'
      ]
    },
    {
      name: 'カジノチェックインシステム',
      description: '学園祭カジノバー向け来場者管理システム',
      technologies: ['Bun', 'Hono', 'React', 'Next.js', 'MySQL', 'Drizzle ORM'],
      details: '学園祭で実際に運用されることを前提に開発した来場者管理システム。チェックイン・滞在時間管理機能を実装し、本番サーバー・独自ドメインでの運用を実現。',
      highlights: [
        '実イベントでの本番運用を想定した設計',
        'Bunによる高速なバックエンド実装',
        'リアルタイムでの来場者数管理',
        'モダンなフレームワークの組み合わせ',
        '独自ドメイン・本番環境での運用経験'
      ]
    },
    {
      name: 'Laravel カレンダー',
      description: 'Apple Calendar風の高機能スケジュール管理アプリ',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      details: 'Apple Calendarを参考にしたUI/UXの高機能予定管理システム。月表示・日表示（0-24時）、予定の重なり完全表示、14色ローテーション自動配色など、細部までこだわった実装。',
      highlights: [
        'Apple Calendar風の洗練されたUI/UX',
        '予定の重なりを視覚的に表示',
        '14色自動配色システム',
        '期限バー・現在時刻ラインの実装',
        'モバイル対応のレスポンシブデザイン'
      ]
    },
    {
      name: 'Terminal Portfolio',
      description: 'コマンドラインインターフェース型ポートフォリオサイト',
      technologies: ['TypeScript', 'React', 'Vite'],
      github: 'https://github.com/Itsuki0016/My_portfolio',
      details: 'ターミナル風UIでユーザーがコマンドを入力して情報を探索できるインタラクティブなポートフォリオ。タブ補完、コマンド履歴、テーマ切り替えなど本物のターミナルに近い機能を実装。',
      highlights: [
        'TypeScriptによる型安全な実装',
        'Reactフックを活用した状態管理',
        'タブ補完・コマンド履歴機能',
        'テーマ切り替え（green/blue/amber）',
        'リアルタイム自動スクロール'
      ]
    },
    {
      name: 'Django暗号化アプリ',
      description: '暗号化・復号化機能付きWebアプリケーション',
      technologies: ['Python', 'Django', 'SQLite'],
      details: 'ログイン機能を備えた暗号化・復号化サイト。暗号化履歴の保存機能により、過去の処理を追跡可能。課題でも「一段上」を目指した実装。',
      highlights: [
        'ユーザー認証機能の実装',
        '暗号化履歴の永続化',
        'セキュアな実装設計',
        'Djangoフレームワークの理解'
      ]
    },
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
  timeline: [
    {
      year: '2024',
      title: '京都デザイン＆テクノロジー専門学校 入学',
      description: 'ホワイトハッカー専攻。セキュリティとWeb開発を学習開始',
      type: 'education'
    },
    {
      year: '2024',
      title: 'All-Vault-Cloud (AVC) 開発',
      description: 'AWS Bedrockを活用した行政向けFAX業務デジタル化システムをPoC実装。年間2,000時間削減を試算',
      type: 'achievement'
    },
    {
      year: '2024',
      title: 'カジノチェックインシステム 開発・運用',
      description: '学園祭で実運用されるBun/Hono/React製の来場者管理システムを構築',
      type: 'achievement'
    },
    {
      year: '2024',
      title: 'Laravel カレンダー 開発',
      description: 'Apple Calendar風UIを持つ高機能スケジューラーアプリを実装',
      type: 'achievement'
    },
    {
      year: '2026',
      title: 'Terminal Portfolio開発',
      description: 'TypeScript + Reactでインタラクティブなターミナル風ポートフォリオサイトを構築',
      type: 'achievement'
    },
  ],
};
