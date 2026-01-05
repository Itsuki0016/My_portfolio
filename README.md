# Terminal Portfolio

インタラクティブなターミナル風ポートフォリオサイトです。

## 🚀 特徴

- **インタラクティブなターミナルUI**: 本物のターミナルのような体験
- **コマンドベースのナビゲーション**: ユーザーがコマンドを入力して情報を探索
- **TypeScript + React**: 型安全で保守性の高いコード
- **レスポンシブデザイン**: モバイルからデスクトップまで対応

## 📦 セットアップ

### 必要な環境

- Node.js (v18以上推奨)
- npm または yarn

### インストール

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## 🎮 利用可能なコマンド

サイトで使用できるコマンド一覧:

- `help` - 利用可能なコマンドを表示
- `about` - 自己紹介を表示
- `skills` - スキルセットを表示
- `projects` - プロジェクト一覧を表示
- `experience` - 職務経歴を表示
- `contact` - 連絡先情報を表示
- `clear` - ターミナルをクリア
- `whoami` - 現在のユーザーを表示
- `date` - 現在の日時を表示
- `banner` - ウェルカムバナーを表示

## 🛠️ カスタマイズ

### 個人情報の編集

`src/data/portfolio.ts` ファイルを編集して、あなたの情報に書き換えてください:

```typescript
export const portfolioData: PortfolioData = {
  name: 'あなたの名前',
  title: 'あなたの肩書き',
  bio: 'あなたの自己紹介',
  // ... その他の情報
};
```

### 新しいコマンドの追加

`src/utils/commands.tsx` ファイルに新しいコマンドを追加できます:

```typescript
{
  name: 'mycommand',
  description: 'コマンドの説明',
  execute: () => {
    return 'コマンドの出力';
  },
}
```

### スタイルのカスタマイズ

- `src/components/Terminal.css` - ターミナルのスタイル
- `src/index.css` - グローバルスタイル

色やフォントを変更して、あなた好みのデザインにカスタマイズできます。

## 📁 プロジェクト構造

```
My_portfolio/
├── src/
│   ├── components/
│   │   ├── Terminal.tsx      # メインのターミナルコンポーネント
│   │   └── Terminal.css      # ターミナルのスタイル
│   ├── data/
│   │   └── portfolio.ts      # ポートフォリオデータ
│   ├── types/
│   │   └── index.ts          # TypeScript型定義
│   ├── utils/
│   │   └── commands.tsx      # コマンド定義と実行ロジック
│   ├── App.tsx               # メインアプリケーション
│   ├── App.css               # アプリケーションスタイル
│   ├── main.tsx              # エントリーポイント
│   └── index.css             # グローバルスタイル
├── index.html                # HTMLテンプレート
├── package.json              # プロジェクト設定
├── tsconfig.json             # TypeScript設定
└── vite.config.ts            # Vite設定
```

## 🎨 技術スタック

- **TypeScript** - 型安全なJavaScript
- **React** - UIライブラリ
- **Vite** - 高速なビルドツール
- **CSS3** - スタイリング

## 📝 ライセンス

MIT

## 🤝 貢献

プルリクエストを歓迎します!

---

Made with ❤️ by Itsuki
