# Stage 2: AI log

## Tool

- [GitHub Copilot in Visual Studio Code](https://code.visualstudio.com/docs/copilot/overview)

## Conversations

- Used Copilot in VS Code to adapt the generic Stage 2 JavaScript examples to the Animal Shelter data model.
- Used Copilot to review the use of `map`, `filter`, `find`, and `reduce`.
- Used Copilot to check that the data-manipulation functions return new arrays instead of modifying the original array.
- Used Copilot to prepare console tests and input validation.

## Key requests

### 1. Create the Animal Shelter data model

- Asked: Replace the generic task list with an array of animals containing `id`, `name`, `adopted`, and `species`.
- Got: The `animals` array with the sample data for Luna, Bella, and Daisy, plus the fixed `SPECIES` values.

### 2. Implement read and search functions

- Asked: Adapt the generic title-listing and search functions to the Animal Shelter fields.
- Got: `listSpecies`, `listNames`, `countAvailable`, and `findAnimalByName`.
- Used array methods such as `map`, `filter`, and `find`.

### 3. Implement immutable data operations

- Asked: Add functions for adding an animal, toggling its adoption status, and deleting an animal without changing the original array.
- Got: `addAnimal`, `toggleAdoption`, and `deleteAnimal`.
- Used `reduce` to generate the next identifier, `map` to toggle adoption, `filter` to delete an animal, and the spread syntax to create a new array.

### 4. Add validation and console tests

- Asked: Reject empty names, names longer than 100 characters, and species outside the allowed list.
- Got: Validation in `addAnimal` using `throw new Error(...)`.
- Added console tests for reading, adding, updating, deleting, immutability, and invalid input.

## What I learned

- `map` creates a new array by transforming every element.
- `filter` creates a new array containing only the elements that satisfy a condition.
- `find` returns the first matching object or `undefined`.
- `reduce` can be used to calculate the highest existing identifier.
- The spread syntax allows a new array to be created without mutating the original array.
- A function parameter such as `animals` receives the array passed when the function is called.
- `adopted: false` represents an animal available for adoption, while `adopted: true` represents an adopted animal.

## What did not work or was changed

- The generic names from the laboratory examples, such as `taskuri`, `titlu`, `gata`, and `prioritate`, were not used in the final implementation.
- They were replaced with the Animal Shelter equivalents: `animals`, `name`, `adopted`, and `species`.
- The search operation was adapted from searching task titles to searching animal names.
- The original array is kept unchanged after add, toggle, and delete operations.

## Verification

- Opened `index.html` in a browser.
- Opened the browser developer tools with F12.
- Checked the console output for listing, counting, searching, adding, toggling, deleting, and validation.
- Verified that the original `animals` array still contains three elements after adding a new animal.