# Hop-bee: The Social Hobby Hive 🐝

![Status](https://img.shields.io/badge/status-Beta-orange.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Stack](https://img.shields.io/badge/stack-React_|_Supabase_|_Tailwind-yellow)

**Hop-bee** is a gamified social platform designed to combat loneliness by connecting people through structured hobby journeys. Unlike generic social networks, Hop-bee focuses on active participation, skill progression, and community challenges.

---

## 📱 Core Features

### 1. "The Hive" (Discovery Feed)
A vertical, TikTok-style video feed dedicated to hobbies.
* **Buzzes:** Short-form video content showcasing skills
* **Nectar (Like):** Gamified appreciation system
* **Pollinate (Share):** Spread ideas to other users

### 2. Gamified Skill Badges
Users earn badges based on their journey:
* 🌱 **Seed:** Beginner/Learner
* 🌿 **Sprout:** Intermediate/Hobbyist
* 🌻 **Bloom:** Expert/Mentor

### 3. Guilds & Communities
Join hobby-specific guilds to connect with like-minded enthusiasts, participate in challenges, and grow together.

### 4. Profile & Progress Tracking
Showcase your hobby journey with a personalized profile featuring your skill badges, buzzes, and achievements displayed in a unique honeycomb grid layout.

---

## 🛠️ Tech Stack

* **Frontend:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS, Shadcn UI, Lucide React
* **Backend:** Supabase (PostgreSQL, Auth, Realtime)
* **Routing:** React Router v6
* **State Management:** TanStack Query (React Query)
* **Forms:** React Hook Form + Zod validation
* **UI Components:** Radix UI primitives

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **bun** package manager
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devendrasaim/hobby-hive.git
   cd hobby-hive
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:5173` to see the application running.

---

## 📁 Project Structure

```
hobby-hive/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   └── ui/            # Shadcn UI components
│   ├── features/          # Feature-based modules
│   │   ├── auth/          # Authentication features
│   │   ├── discover/      # Discovery/explore features
│   │   ├── hive/          # Video feed (Buzzes)
│   │   ├── profile/       # User profile features
│   │   └── settings/      # Settings & preferences
│   ├── hooks/             # Custom React hooks
│   ├── layout/            # Layout components
│   │   ├── AppLayout.tsx
│   │   ├── BottomNavigation.tsx
│   │   └── NavLink.tsx
│   ├── lib/               # Utility functions
│   ├── pages/             # Page components (routes)
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🔧 Development Workflow

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run build:dev`** - Build in development mode
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

### Code Style & Conventions

- **TypeScript** for type safety
- **Feature-based architecture** for scalability
- **Component co-location** - keep related files together
- **Functional components** with React Hooks
- **Tailwind CSS** for styling with utility-first approach

### Adding New Features

1. Create a new directory under `src/features/[feature-name]`
2. Add feature-specific components, hooks, and utilities
3. Export public APIs from an `index.ts` file
4. Create corresponding page in `src/pages/` if needed
5. Update routing in `App.tsx`

---

## 🎨 UI Components

This project uses [Shadcn UI](https://ui.shadcn.com/), a collection of re-usable components built with Radix UI and Tailwind CSS.

To add new UI components:
```bash
npx shadcn@latest add [component-name]
```

---

## 🧪 Testing

Currently, the project is in beta and testing infrastructure is being set up. Planned testing stack:
- **Vitest** for unit tests
- **React Testing Library** for component tests
- **Playwright** for E2E tests

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Deployment Platforms

This project can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting service

### Environment Variables

Ensure all environment variables are configured in your deployment platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Update documentation as needed
- Ensure your code passes linting (`npm run lint`)
- Test your changes thoroughly

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Devendra Saim** - [@devendrasaim](https://github.com/devendrasaim)

---

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered development platform
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Powered by [Supabase](https://supabase.com/)

---

## 📞 Support

For support, questions, or feedback:
- Open an issue on [GitHub Issues](https://github.com/devendrasaim/hobby-hive/issues)
- Contact: [Your Email/Social Media]

---

## 🗺️ Roadmap

- [ ] User authentication & authorization
- [ ] Video upload & processing
- [ ] Real-time notifications
- [ ] Guild creation & management
- [ ] Challenge system
- [ ] Mobile app (React Native)
- [ ] AI-powered hobby recommendations

---

<div align="center">
  <strong>Made with ❤️ and 🐝 by the Hop-bee team</strong>
</div>
