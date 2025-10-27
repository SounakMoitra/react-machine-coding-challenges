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

### Potential improvements

This solution delivers the core functionality but for a production-grade application, I would make the following improvements:

1.  **Use Tanstack Query (React Query):** For a real e-commerce site, the product data would come from an API. I would use **Tanstack Query** to handle data fetching, which provides:

    - Efficient caching to avoid re-fetching data unnecessarily.
    - A built-in way to manage loading, error, and success states.
    - Simpler-to-read components by removing complex `useEffect` logic.

2.  **Robust `useEffect` Fetching:** If I still have to use `useEffect`, I would expand the `useEffect` hook to properly manage all states of the data-fetching lifecycle (loading, error, and data):

```js
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("---");
      const json = await response.json();
      setData(json);
    } catch (e) {
      setError(e);
    }
    setIsLoading(false);
  };

  fetchData();
}, []);
```

### How to Run Locally

1.  Clone this repository.
2.  Navigate to the `01-breadcrumbs` directory: `cd 01-breadcrumbs`
3.  Install dependencies: `npm install`
4.  Start the development server: `npm run dev`
