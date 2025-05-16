# React Projects Portfolio

A collection of React projects built with modern tools. Each project has a deployed version and a brief description, along with detailed instructions for local setup in its individual README file.

## Projects

### 1. [Football Tournament Website](./football-tournament/README.md)

A web application that visualizes matches and results from the European Football Championship, demonstrating skills in React development, data manipulation, and responsive design.

- **Features**:
  - Tournament stages visualization
  - Match details with team formations and results
  - Bracket view for final stages
  - Responsive design
- **Technologies Used**: React, React Router, SCSS, Jest, React Testing Library, Vite
- **[Live Demo](https://ng-football-tournament-v2.netlify.app)**

### 2. [Tic-Tac-Toe](./tic-tac-toe/README.md)

A classic Tic-Tac-Toe game implemented with React and TypeScript, showcasing essential front-end development skills, including component-based architecture, state management, and basic AI for solo play against the computer.

- **Features**:
  - Interactive gameplay between two players or solo play against the computer
  - Game status display and win detection
  - Option to reset the game
  - Responsive design for various screen sizes
- **Technologies Used**: React, TypeScript, CSS, Vite
- **[Live Demo](https://tic-tac-toe-v2-nikolaj-georgiev.netlify.app/)**

### 3. [Gauge Component with Touch Interaction](./reusable-gauge/README.md)

An interactive Gauge component implemented with React, featuring touch-screen capabilities for mobile devices. This project demonstrates advanced front-end skills, including custom animations, dynamic style updates, and touch event handling.

- **Features**:
  - Interactive gauge that can be controlled via input fields or touch interaction
  - Responsive updates based on size selection (small, medium, large)
  - Real-time value changes with visual feedback
  - Optimized for both desktop and mobile experiences
- **Technologies Used**: React, JavaScript, CSS, Vite
- **[Live Demo](https://gauge-nikolaj-georgiev.netlify.app/)**

### 4. [Facts Sharing App](./facts-app/README.md)

A facts-sharing app implemented using React, designed to allow users to share interesting facts and vote on their accuracy. This project makes use of a flexible architecture that incorporates Supabase as the backend and database, demonstrating CRUD operations and state management with reusable components. The application also features a responsive design for enhanced user experience on different devices.

- **Features**:
  - Fact submission with validation for correctness before adding to the database
  - Category filtering to easily navigate and display specific types of facts
  - Voting system to mark facts as interesting, mind-blowing, or false
  - Responsive design for desktop and mobile compatibility
- **Technologies Used**: React, CSS, Vite, Supabase
- **[Live Demo](https://facts-gnikolay.netlify.app/)**

### 5. [WP site clone](./wp-site-clone/README.md)

Modern single-page application (SPA) clone of the real-world WP made website, developed using **React**, **Chakra UI**, and **Vite**. This project showcases a responsive, accessible design, incorporating reusable components, CSS styling, and features to create a user-friendly interface similar to the original website.

- **Features**:
  - **Responsive Design**: The application is fully responsive, adapting to different screen sizes including desktops, tablets, and mobile devices.
  - **Chakra UI Integration**: The UI is styled using Chakra UI to ensure consistency and ease of development.
  - **Accordion Menu for Mobile**: The navigation menu transforms into an accordion for mobile screens, providing an optimal user experience.
  - **Sticky Header**: The header stays sticky on top for easy navigation access.
  - **Search Functionality**: A functional search bar that adjusts its position responsively.
- **Technologies Used**: React, CSS, JavaScript (ES6), Vite, Chakra UI
- **[Live Demo](https://clonetroll.netlify.app/)**

### 6. [Reactlicate Image Gen](./react-image-gen/README.md)

A full-stack AI-powered image generation app where users can register, log in, and generate up to 5 images using the Replicate API (Flux 1.1 Pro model). The backend is hosted on a Hetzner server (Ubuntu) with nginx as a reverse proxy and PM2 for process management, utilizing a [nip.io](https://nip.io/) subdomain for SSL via Let's Encrypt. The frontend is deployed on Netlify.

- **Features**:
  - User registration and JWT authentication
  - Honeypot logic to prevent bot attacks on forms
  - AI image generation via Replicate API (Flux 1.1 Pro)
  - Limit of 5 images per user
  - Preview and download generated images
  - Modern, responsive UI with TailwindCSS
- **Technologies Used**: React 19, Vite, TailwindCSS, Node.js, Express, better-sqlite3, SQLite3, Replicate API
- **[Live Demo](https://reaclicate-image-gen.netlify.app/)**

## Development Instructions

Each project in this repository follows similar steps for local setup and development:

1. **Clone the repository**:

```bash
git clone https://github.com/Nikolaj-Georgiev/simple-react-projects.git
```

2. **Navigate into the project subfolder**:

```bash
cd project-name
```

3. **Install dependencies**:

```bash
npm install
```

4. **Run the development server**:

```bash
npm run dev
```

5. **Open http://localhost:5173 in your browser**
