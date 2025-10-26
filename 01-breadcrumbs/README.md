# 01. Breadcrumbs Challenge

A simple e-commerce website featuring a dynamic breadcrumb navigation component.

### The Challenge

The task was to build a simple application (like an e-commerce site) that includes a breadcrumb navigation component. The breadcrumbs should dynamically update based on the user's current route.

### Features Implemented

- **Dynamic Breadcrumbs:** The navigation bar updates to reflect the current page (e.g., `Home > Products > 3`).
- **Clickable Navigation:** Breadcrumb links are active and allow users to navigate back to parent pages.
- **Product Catalog:** A main products page that displays all available items.
- **Product Details Page:** A dynamic route for each product that shows detailed information (price, ratings, description, etc.).

### Tech Stack

- React.js (Vite)
- React Router v7

### Key Learnings:

This project was a great exercise in managing and parsing URL state.

- Used `useLocation` hook from React Router to get the current `pathname`, split it into segments, and dynamically generate the breadcrumb links.

### How to Run Locally

1.  Clone this repository.
2.  Navigate to the `01-breadcrumbs` directory: `cd 01-breadcrumbs`
3.  Install dependencies: `npm install`
4.  Start the development server: `npm run dev`
