# WP made Website Clone

This repository contains a modern single-page application (SPA) clone of the Real-world WP website, developed using **React**, **Chakra UI**, and **Vite**. This project showcases a responsive, accessible design, incorporating reusable components, CSS styling, and features to create a user-friendly interface similar to the original website.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Demo

You can see the live demo of the Fluidtrol clone [here](https://fluidtrol-clone.netlify.app/).

## Features

- **Responsive Design**: The application is fully responsive, adapting to different screen sizes including desktops, tablets, and mobile devices.
- **Chakra UI Integration**: The UI is styled using Chakra UI to ensure consistency and ease of development.
- **Accordion Menu for Mobile**: The navigation menu transforms into an accordion for mobile screens, providing an optimal user experience.
- **Sticky Header**: The header stays sticky on top for easy navigation access.
- **Search Functionality**: A functional search bar that adjusts its position responsively.

## Tech Stack

- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation front-end tool for fast builds and hot reloading.
- **Chakra UI**: Component library for rapid UI development.
- **JavaScript (ES6)**: Modern JavaScript for better code structure and readability.

## Installation

Follow these steps to get a local copy up and running:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Nikolaj-Georgiev/wp-site-clone.git
   cd fluidtrol-clone
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

   The app should be running on [http://localhost:5173](http://localhost:5173).

## Usage

- Open your browser and navigate to [http://localhost:5173](http://localhost:5173).
- Resize your browser window to see the responsiveness in action.
- Explore the navigation menu which changes between desktop and mobile views.

## Folder Structure

```
wp-site-clone/
  ├── src/
  │   ├── assets/                # Images and other static files
  │   ├── components/            # Reusable components (Header, MenuCollapse, MainNav, etc.)
  │   ├── data/                  # Data for menu items
  │   ├── utils/                 # Helper functions
  │   ├── App.jsx                # Main application file
  │   ├── index.js               # Entry point for React
  └── public/                    # Public assets like HTML template
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
