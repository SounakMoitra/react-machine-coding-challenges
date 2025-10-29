# 02. Selectable Grid Challenge

A dynamic, fully responsive grid component where users can select multiple cells by clicking and dragging their cursor over the grid.

### The Challenge

The primary goal was to create a component that simulates multi-selection, similar to dragging a cursor over icons on a desktop. The selection mechanism had to identify which grid cells are intersected by the user's drag action and visually highlight them, updating in real-time.

### Features Implemented

- **Click-and-Drag Selection:** Users can initiate selection by holding the mouse button down and dragging over multiple cells.
- **Real-time Highlighting:** Cells are instantly highlighted as the drag box intersects them.
- **State Management:** Properly tracks the state of selected cells and the boundary of the drag action.
- **Dynamic Grid:** The component is built to accept dynamic row/column inputs (e.g., Grid(5, 5) for a 5x5 grid).
- **Visual Feedback:** Clearly displays the total count of selected cells.

### Tech Stack

- React.js (Vite)

### Key Learnings:

This challenge was an excellent exercise in DOM manipulation and handling complex interactive state:

1.  **Event Handling (**`onMouseDown`, `onMouseMove`, `onMouseUp`**):** I learned how to use these native event handlers to manage the three distinct phases of a drag operation.
2.  **Calculating Intersection:** The core difficulty was writing the logic to mathematically determine if the drag box coordinates (top-left/bottom-right) intersected with the coordinates of individual grid cells.
    - This involved using methods like `getBoundingClientRect()` to get the absolute position of the grid and its cells relative to the viewport.
3.  **Performance Optimization:** Since drag-and-drop involves frequent `onMouseMove` events, the component logic was structured to avoid performance issues and unnecessary re-renders during the drag action.

### How to Run Locally

1.  Clone this repository.
2.  Navigate to the `02-selectable-grid` directory: `cd 02-selectable-grid`
3.  Install dependencies: `npm install`
4.  Start the development server: `npm run dev`
