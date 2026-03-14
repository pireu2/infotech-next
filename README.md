# InfoTech Next

InfoTech is a high-performance, engaging website designed for OSUT Cluj (Organizația Studenților din Universitatea Tehnică) to attract students, showcase career events, and connect with sponsors.

## 🚀 Teck Stack

- **Framework:** [Next.js 16+](https://nextjs.org/) (App Router & Turbopack)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Library:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Internationalization:** Route-based (\`/en\`, \`/ro\`) with server-side dictionary loading
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm / pnpm / yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/osutcluj/infotech-next.git
   cd infotech-next
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- \`src/app/[locale]\` - Main page routing and layout with i18n support.
- \`src/components\` - Reusable UI components (Hero, About, Events, etc.).
- \`src/data\` - Data for translations, events, and team members.
- \`src/i18n\` - Internationalization configuration and dictionary loaders.
- \`src/types\` - TypeScript interfaces and types.

## 🌍 Internationalization (i18n)

This project uses a strict i18n implementation. **No raw strings** should be hardcoded in components. All text is managed in [src/data/translations.json](src/data/translations.json).

To add or modify text:

1. Update [src/data/translations.json](src/data/translations.json).
2. Use the \`dictionary\` prop in your components to access the translations.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by **OSUT Cluj**.
