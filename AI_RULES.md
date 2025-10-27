# AI Studio Application Rules

This document outlines the core technologies and guidelines for developing this application.

## Tech Stack

*   **React**: The primary library for building the user interface.
*   **TypeScript**: Used for type safety across the entire codebase, ensuring robust and maintainable code.
*   **Tailwind CSS**: A utility-first CSS framework for rapid and consistent styling, emphasizing responsive design.
*   **Vite**: The build tool providing a fast development experience and optimized production builds.
*   **React Router**: For declarative routing within the application, managing navigation between different views.
*   **shadcn/ui & Radix UI**: A collection of beautifully designed and accessible UI components built on Radix UI primitives, to be used for consistent UI elements.
*   **Lucide React**: A library providing a set of customizable and tree-shakable SVG icons.
*   **Recharts**: A charting library built with React and D3, used for data visualization.
*   **GoogleGenAI SDK (`@google/genai`)**: The official SDK for interacting with Google's Gemini AI models.

## Library Usage Rules

To maintain consistency, performance, and ease of development, please adhere to the following rules when choosing and using libraries:

*   **UI Components**:
    *   **Always** prioritize `shadcn/ui` components for all user interface elements.
    *   If a specific component is not available in `shadcn/ui`, consider building a custom component using `Radix UI` primitives or plain React with Tailwind CSS.
    *   **Do not** modify `shadcn/ui` component files directly; create new components if customization beyond props is needed.
*   **Styling**:
    *   **Exclusively** use `Tailwind CSS` for all styling. Avoid inline styles or custom CSS files.
    *   Ensure designs are responsive by utilizing Tailwind's responsive utility classes.
*   **Icons**:
    *   Use `lucide-react` for all icons throughout the application.
*   **Charting/Data Visualization**:
    *   Use `Recharts` for any data visualization needs, such as graphs and charts.
*   **AI Integration**:
    *   Use the `@google/genai` SDK for all interactions with Google's Gemini API.
*   **Routing**:
    *   Use `React Router` for all client-side routing. Keep route definitions consolidated within `src/App.tsx`.
*   **State Management**:
    *   For local component state, use React's `useState` and `useReducer` hooks.
    *   For global state, consider using React Context API if necessary, keeping implementations simple and focused.
*   **Dependencies**:
    *   Before introducing new third-party libraries, verify if existing ones can fulfill the requirement.
    *   If a new library is essential, ensure it is well-maintained, widely adopted, and aligns with the project's overall tech stack.