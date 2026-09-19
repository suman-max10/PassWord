<!-- @format -->
## Live Demo 

https://react-random-pasword-generator.netlify.app/

# Password Generator

A simple password generator built with React, Vite, and Tailwind CSS. Generate passwords with a configurable length and optional numbers or special characters, then copy the result to your clipboard.

## Features

- Generate passwords from 4 to 32 characters
- Include numbers optionally
- Include special characters optionally
- Copy the generated password to the clipboard
- Responsive, dark-themed interface

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- ESLint

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository and move into the project directory.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## How It Works

1. Choose a password length with the slider.
2. Enable numbers or special characters as needed.
3. Select **Generate Password**.
4. Select **Copy** to copy the generated password.

The generator starts with uppercase and lowercase letters, then adds the selected character sets before choosing random characters until the requested length is reached.

## Project Structure

```text
src/
├── App.jsx       # Password generator UI and logic
├── index.css     # Tailwind CSS entry point
└── main.jsx      # React application entry point
```

## License

This project is for learning and personal use.
