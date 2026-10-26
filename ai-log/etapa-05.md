# Stage 5: Local state and events

## Tool

- GitHub Copilot in Visual Studio Code

## Assistance

- I was assisted by AI in adapting the state and event examples to the
  AnimalShelter data model and in resolving implementation and styling errors.
- AI suggestions were used to check the controlled checkbox, delete action,
  derived counter, and light/dark theme toggle.

## Implementation

- Moved the animal list into React state.
- Added adoption toggling and deletion through immutable state updates.
- Added a controlled checkbox and an accessible delete button to each card.
- Added a button for switching between light and dark themes.
- Added an extra form for creating a new animal with a name and species.

## Verification

From the `frontend/` directory:

```text
npm run lint
npm run build
npm run dev
```

The list, counter, card appearance, delete action, and theme update when the
corresponding controls are used.
