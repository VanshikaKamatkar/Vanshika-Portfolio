# ⚡ Vanshika Kamatkar | Full Stack Developer Portfolio

A modern, high-performance personal portfolio website built to showcase my full-stack development skills, projects, and experience. Designed with a **dark-themed, glassmorphic aesthetic** using **Tailwind CSS v4** and **Framer Motion**.

🔗 **Live Demo:** [[Insert Your Vercel Link Here](https://vanshika-portfolio-sand.vercel.app/)]

## ✨ Key Features

* **🎨 Modern Design System:** Custom purple/pink color palette with "Glassmorphism" effects.
* **📱 Fully Responsive:** Optimized for mobile, tablet, and desktop screens.
* **⚡ Fast Performance:** Built with **Vite** for lightning-fast HMR and bundling.
* **🎬 Smooth Animations:** Entrance animations, hover effects, and scroll reveals using **Framer Motion**.
* **🧩 Modular Components:**
    * **Floating Navbar:** Glass-effect navigation with smooth scroll and active state tracking.
    * **Holographic Project Cards:** Interactive cards with zoom and glow effects.
    * **Experience Section:** Clean, spacious layout for internship details.
    * **Tech Stack Grid:** Interactive grid showcasing tools and languages.
    * **Contact Form:** Functional layout with validation states.

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js (v16 or higher)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/VanshikaKamatkar/Vanshika-Portfolio.git](https://github.com/VanshikaKamatkar/my-portfolio.git)
    cd my-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components
│   ├── Navbar.jsx    # Top navigation & Resume download
│   ├── Hero.jsx      # Introduction & Profile picture
│   ├── About.jsx     # Bio, Education & Interests
│   ├── Experience.jsx# Internship timeline
│   ├── TechStack.jsx # Grid of skills (React, Node, etc.)
│   ├── Projects.jsx  # Project showcase grid
│   └── Contact.jsx   # Contact form & Footer
├── index.css         # Tailwind v4 Theme Configuration
├── App.jsx           # Main layout assembly
└── main.jsx          # React entry point
public/
├── resume.pdf        # Your downloadable resume
└── profile.jpg       # Your profile picture