# InfoTech - Project Context & Coding Guidelines

## 1. Project Overview

**Name:** InfoTech
**Organization:** OSUT Cluj (Organizația Studenților din Universitatea Tehnică)
**Industry:** Student Organization, Technology Education, Career Development
**Goal:** A high-performance, engaging website to attract students, showcase events, and connect with sponsors.
**Target Audience:**

1.  **Students:** UTCN students looking for career guidance, technical training, and networking opportunities.
2.  **Companies/Sponsors:** Tech companies seeking to recruit students and sponsor events.
3.  **University Community:** Faculty, administration, and prospective students.

**Key Values:** Innovation, Career Development, Community, Hands-on Learning.

## 2. Tech Stack

- **Framework:** Next.js 16+ (App Router with Turbopack).
- **Language:** TypeScript (Strict mode).
- **Styling:** Tailwind CSS v4 (new syntax: `bg-linear-to-r` instead of `bg-gradient-to-r`).
- **UI Library:** shadcn/ui (Radix UI primitives).
- **Animations:** Framer Motion.
- **Carousel:** Embla Carousel (via shadcn/ui carousel component).
- **Internationalization:** Route-based (`/en`, `/ro`) with server-side dictionary loading.
- **Icons:** Lucide React, React Icons (for social icons).
- **Deployment:** Cloudflare Pages.

## 3. Design & UX Guidelines

- **Style:** Modern, Tech-focused, Dark theme with purple/blue accents.
- **Vibe:** "Student Tech Community" - Energetic but professional.
- **Background:** Dark (#0c091e) with glassmorphism effects (backdrop-blur, semi-transparent backgrounds).
- **Readability:** High contrast text on dark backgrounds, gradient text for headings.
- **Accessibility:** Clear navigation, responsive design for mobile and desktop.
- **Color Palette:**
  - **Primary:** Purple shades (#9333ea, purple-400, purple-500, purple-600)
  - **Secondary:** Blue accents (blue-300, blue-400)
  - **Background:** Dark slate (#0c091e, gray-900)
  - **Text:** White, gray-200, gray-300
  - **Borders/Accents:** white/10, white/20, purple-500/20, purple-500/30

## 4. Coding Principles & Best Practices

### A. Internationalization (i18n) - ZERO RAW STRINGS

- **Strict Rule:** Never hardcode text inside components.
- **Routing:** Dynamic route structure: `app/[locale]/...` with `/en` and `/ro` locales.
- **Implementation:**
  - Translations stored in `src/data/translations.json`.
  - Dictionary loaded server-side via `getDictionary(locale)`.
  - Components receive `dictionary` prop typed to `Dictionary` from `@/i18n/getDictionary`.
  - Middleware redirects `/` to default locale based on Accept-Language header.
- **Example:**
  - ❌ _BAD:_ `<h1>About Us</h1>`
  - ✅ _GOOD:_ `<h1>{dictionary.about.title}</h1>`

### B. TypeScript Rules

- **No `any` types** (except for JSON data mapping where necessary).
- Use `interface` for object definitions.
- Props should be destructured in the function signature.
- **Type the Dictionary:** Use `Dictionary` type from `@/i18n/getDictionary` for all translation props.

### C. Next.js App Router Structure

- **Server Components:** Default. Use for static content that receives dictionary as props.
- **Client Components:** Use `'use client'` only when needed:
  - Components with `useState`, `useEffect`, event handlers
  - Interactive elements (Tabs, Dialogs, Carousels, Forms)
  - Components using Framer Motion animations
- **Static Generation:** Pages are pre-rendered at build time using `generateStaticParams` for locales.

### D. Component Architecture

- **Props-based translations:** Pass `dictionary` prop from page → layout → components.
- **Client components still receive dictionary:** Even `'use client'` components receive `dictionary` as props, not via hooks.
- **LanguageProvider:** Only used for `toggleLanguage` functionality (switching between /en and /ro).

### E. Component Usage (shadcn/ui)

- Use standard shadcn components (`Card`, `Button`, `Tabs`, `Dialog`, `Carousel`, `Badge`).
- Style with glassmorphism: `bg-gray-900/40 backdrop-blur-xl border-0 rounded-xl`.
- Gradient text: `bg-linear-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent`.
- Purple glow effects: `shadow-lg shadow-purple-500/20`.

### F. Assets & Performance

- **Images:** ALWAYS use `next/image` with proper `fill`, `width/height`, `alt`, and `sizes` props.
- **Logo quality:** Use `quality={100}` and `unoptimized` for logos to prevent blurriness.
- **Fonts:** Use `next/font` for Open Sans (body) and custom font for display headings.

## 5. Project Structure

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx    # Locale layout with LanguageProvider
│   │   └── page.tsx      # Renders HomePage with dictionary
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Redirects to default locale
│   └── globals.css
├── components/
│   ├── navigation/       # Navbar, DesktopNav, MobileNav
│   ├── events/           # Events, EventDialog, EventCarousel, tabs/
│   ├── ui/               # shadcn components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Footer.tsx
│   ├── Sponsors.tsx
│   ├── TeamMemberCards.tsx
│   └── HomePage.tsx
├── data/
│   ├── translations.json # All UI text in en/ro
│   ├── events.json       # Training events data
│   └── teamMembers.json  # Team member data
├── i18n/
│   ├── config.ts         # Locale configuration
│   ├── getDictionary.ts  # Server-side dictionary loader
│   └── LanguageProvider.tsx # Client context for language toggle
└── types/
    ├── ActiveTab.ts
    ├── EventType.ts
    ├── Language.ts
    ├── Role.ts
    └── TeamMember.ts
```

## 6. Specific Content Instructions

- **Events:**
  - ContestNight: Student competition event
  - InfoNight: Career fair with companies
  - InfoWeek: Company visits throughout a week
  - Trainings: Skill-building workshops (CV, Interview, Startup, etc.)
- **Terminology:**
  - _RO:_ Training-uri, Evenimente, Echipa Noastră, Sponsori
  - _EN:_ Trainings, Events, Meet our team, Sponsors
- **Tone:** Friendly, encouraging, student-focused but professional when addressing sponsors.

## 7. Response Format

- When asked to create a component, provide the **full code block**.
- Include the **interface** for props including the `dictionary` prop.
- Specify if component needs `'use client'` directive.
- Explain the code briefly before the code block.

---

**MASTER PROMPT END**
