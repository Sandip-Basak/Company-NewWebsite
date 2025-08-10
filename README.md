# QubitOne - Brand Portfolio

This is a brand portfolio website for Atmosflix, a company specializing in brand building, graphic design, website development, and other digital marketing services. The website is built with React, Vite, and Tailwind CSS, and features a modern, interactive design with 3D models and animations.

## Features

*   **Services Showcase:** Detailed descriptions of the services offered, including:
    *   Brand Building
    *   Graphic Design
    *   Website Development
    *   Packaging Design
    *   Social Media Marketing
    *   Influencer Marketing
*   **Project Portfolio:** A showcase of past projects with descriptions, images, and the technologies used.
*   **Client Testimonials:** A section with testimonials from satisfied clients.
*   **Interactive UI:** An engaging user experience with 3D models, animations, and a dynamic starry background, built with `framer-motion`, `three.js`, and `react-three/fiber`.
*   **Contact Form:** A functional contact form for inquiries.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js and npm installed on your machine.

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_project_name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

## Project Structure

The project is organized as follows:

```
.
├── public/         # Static assets
│   ├── assets/     # Images, icons, and logos
│   └── models/     # 3D models (.glb files)
├── src/
│   ├── components/ # Reusable React components
│   │   ├── UI/       # UI-specific components
│   │   ├── Alert.jsx
│   │   ├── Astronaut.jsx
│   │   ├── Card.jsx
│   │   ├── CopyEmailButton.jsx
│   │   ├── EarthModel.jsx
│   │   ├── FrameWorks.jsx
│   │   ├── Globe.jsx
│   │   ├── HeroText.jsx
│   │   ├── Loader.jsx
│   │   ├── Marquee.jsx
│   │   ├── OrbitIcons.jsx
│   │   ├── Project.jsx
│   │   ├── ProjectPopUp.jsx
│   │   └── Timeline.jsx
│   ├── constants/  # Constant data
│   │   └── index.js
│   ├── lib/        # Utility functions
│   │   └── utils.js
│   ├── sections/   # Main sections of the website
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Process.jsx
│   │   ├── Projects.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx     # Main application component
│   ├── index.css   # Global CSS styles
│   └── main.jsx    # Entry point of the application
├── .gitignore
├── index.html
├── package.json
└── README.md
```

### File Descriptions

*   **`public/`**: This directory contains all the static assets that are publicly accessible.
    *   `assets/`: Contains all the images, icons, and logos used in the application.
    *   `models/`: Contains the 3D models in `.glb` format.
*   **`src/`**: This directory contains the main source code of the application.
    *   **`components/`**: This directory contains all the reusable React components.
        *   `Alert.jsx`: A component to display success or error messages.
        *   `Astronaut.jsx`: A 3D model of an astronaut.
        *   `Card.jsx`: A draggable card component.
        *   `CopyEmailButton.jsx`: A button to copy the email address to the clipboard.
        *   `EarthModel.jsx`: A 3D model of the Earth.
        *   `FrameWorks.jsx`: A component to display orbiting framework icons.
        *   `Globe.jsx`: An interactive 3D globe.
        *   `HeroText.jsx`: The main heading text with a word-flipping animation.
        *   `Loader.jsx`: A loading indicator for 3D models.
        *   `Marquee.jsx`: A scrolling marquee component.
        *   `OrbitIcons.jsx`: A component for creating orbiting icons.
        *   `Project.jsx`: A component to display a single project.
        *   `ProjectPopUp.jsx`: A popup modal to show project details.
        *   `Timeline.jsx`: A component to display a timeline of experiences.
        *   **`UI/`**: This directory contains UI-specific components.
            *   `CombinedStarryBackground.jsx`: A dynamic starry background with shooting stars.
            *   `FlipWords.jsx`: A component for animating text with a flipping effect.
            *   `SplashCursor.jsx`: A fluid simulation cursor effect.
    *   **`constants/`**: This directory contains all the constant data used in the application.
        *   `index.js`: Contains an array of project details, testimonials, and experiences.
    *   **`lib/`**: This directory contains all the utility functions.
        *   `utils.js`: Contains utility functions for class names.
    *   **`sections/`**: This directory contains the main sections of the website.
        *   `About.jsx`: The "About" section of the website.
        *   `Contact.jsx`: The "Contact" section with a contact form.
        *   `Hero.jsx`: The hero section with a 3D astronaut model.
        *   `Navbar.jsx`: The navigation bar of the website.
        *   `Process.jsx`: The "Process" section, which displays the work experience timeline.
        *   `Projects.jsx`: The "Projects" section of the website.
        *   `Testimonials.jsx`: The "Testimonials" section of the website.
    *   `App.jsx`: The main application component that combines all the sections.
    *   `index.css`: This file contains all the global CSS styles.
    *   `main.jsx`: The entry point of the application.

## Technologies Used

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Three.js](https://threejs.org/)
*   [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
*   [Framer Motion](https://www.framer.com/motion/)
*   [EmailJS](https://www.emailjs.com/)

## License

Distributed under the MIT License. See `LICENSE` for more information.