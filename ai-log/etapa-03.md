# Stage 3: Vite and React project

## Tool

- GitHub Copilot in Visual Studio Code

## Implementation

- Created a Vite React application in `frontend/`.
- Moved the Animal Shelter sample data from Stage 2 into `frontend/src/App.jsx`.
- Calculated the number of available animals from the data with `filter`.
- Rendered the application name, total count, available count, and the data as
  formatted JSON. The interactive list is intentionally deferred to Stage 4.
- Reused the Stage 1 styles in `frontend/src/App.css`, with one column because
  Stage 3 contains only the data panel.
- Added a Vite `.gitignore` so `node_modules/` and `dist/` are not published.

## Verification

From the `frontend/` directory:

```text
npm install
npm run build
npm run dev
```

The production build completes without errors and the development server
renders the React application at the address provided by Vite.
