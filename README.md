# BoxUp - Frontend

<img src="https://img.shields.io/badge/Status-In_Development-green" />

## Description

**BoxUp** is a SaaS management platform for CrossTraining boxes, focused on athlete management, memberships, reservations, and performance statistics.  
The project is designed with a scalable and maintainable architecture, prepared for future integration with a real backend.

## Demo

The application includes a demo access with mocked data, allowing anyone to explore the main features without registration.

**Demo credentials:**

- Email: `demo@demo.es`
- Password: `Dem01234`

> ⚠️ The demo uses mocked data. Some sections are still under active development.

## Current Features (MVP)

- Authentication and session management
- Athlete dashboard
- Monthly statistics visualization
- Membership management
- Architecture based on actions and custom hooks
- Centralized global state
- Demo environment with mocked data

## Tech Stack

- **Frontend**: React + TypeScript
- **State management**: Zustand
- **Styling**: Tailwind CSS, React Icons
- **Testing**: Vitest
- **Architecture**:
  - Business logic separated using `actions`
  - Reusable state and effects through `custom hooks`
  - Stores decoupled from UI components

## Architectural Decisions

- **Zustand** is used instead of Redux to reduce boilerplate and keep the codebase simple and readable.
- Business logic is centralized in **actions**, keeping UI components clean and focused on rendering.
- **Custom hooks** are used to encapsulate reusable stateful logic and side effects.
- The project structure allows an easy transition from mocked data to a real backend without impacting the UI.
- The main focus of the project is **scalability and maintainability**, not just feature delivery.

## Steps for usage

1. Clone repository
2. Execute `npm install`
3. Execute `npm run dev`
