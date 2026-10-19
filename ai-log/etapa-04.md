# Stage 4: React components from animal data

## Tool

- GitHub Copilot in Visual Studio Code

## Assistance

- I was assisted by AI in adapting the React components to the Animal Shelter
  data model and in resolving implementation and configuration errors.
- AI suggestions were also used to check the list rendering, props, empty-list
  handling, and the adopted-animal styling.

## Implementation

- Replaced the temporary JSON output with a React list of animal cards.
- Created `AnimalCard.jsx` for displaying one animal.
- Created `AnimalList.jsx` for rendering the complete list from the `animals`
  array.
- Passed animal data through props and used `map` with `animal.id` as the
  React key.
- Added an empty-list message and different styling for adopted animals.
- Reused the Stage 1 styles and adapted the species labels to the Animal Shelter
  data model.

## Verification

From the `frontend/` directory:

```text
npm run lint
npm run build
npm run dev
```

The list is rendered from the animal data, and the application starts and
builds without errors.
