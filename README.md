# AI Resume Analyzer | ATS Hero 🚀

ATS Hero is a professional, modern AI-powered Resume Analyzer designed to help job seekers optimize their profiles for Applicant Tracking Systems (ATS). Built with a premium SaaS aesthetic and powered by the latest Gemini 3.1 AI model.

![Main Hero Section](https://img.shields.io/badge/UI-Modern_SaaS-indigo)
![AI Model](https://img.shields.io/badge/AI-Gemini_3.1_Flash--Lite-violet)
![Framework](https://img.shields.io/badge/Framework-Next.js_15-black)

## ✨ Features

-   **AI-Powered ATS Scoring**: Instant analysis of your resume against industry benchmarks or specific job descriptions.
-   **Modern Light SaaS UI**: A clean, professional interface featuring soft gradients and glassmorphism elements.
-   **Smart Skill Extraction**: Identifies your top skills and highlights critical gaps for your target roles.
-   **Actionable Suggestions**: Personalized feedback to improve formatting, wording, and impact.
-   **Stable PDF/DOCX Parsing**: Highly reliable text extraction even from complex resume layouts.
-   **Professional PDF Export**: Export your analysis dashboard as a clean, ready-to-share PDF report.

## 🛠️ Tech Stack

-   **Frontend**: Next.js 15 (App Router), Tailwind CSS, shadcn/ui.
-   **AI Engine**: [Google Gemini 3.1 Flash-Lite](https://ai.google.dev/gemini-api/docs/models/gemini-v2#flash-lite-2-0)
-   **Parsing**: `pdf-parse` (v1.1.1 submodule bypass for stability), `mammoth`.
-   **Icons**: Lucide React.
-   **Deployment**: Vercel.

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Anas16-10/ai-resume-analyzer.git
cd ai-resume-analyzer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env.local` file in the root directory:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app!

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by [Anas](https://anas-portfolio-eta.vercel.app/)
