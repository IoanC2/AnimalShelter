# <AnimalShelter>
<This app is used to manage an animal shelter>
## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| name | text | required, max 100 chars |
| adopted | boolean | toggled from the list, default false |
| species | fixed values | cat, dog, rabbit |
| age_category | relation | Young, Adult, Senior |
| user | relation | the owner of the item (from week 11) |
Sample data used across all stages:
1. "Luna", available, dog
2. "Bella", adopted, cat
3. "Daisy", available, rabbit
## How to run
The React application lives in `frontend/` and runs with Vite:

```text
cd frontend
npm install
npm run dev
```

Open the address printed by Vite (usually `http://localhost:5173`).
The original static mockup is kept in `mockup/` for reference.
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini | Stage 1 CSS styling, theme variable definition, responsive layout, and documentation |
| GitHub Copilot in Visual Studio Code | Assistance with the React setup, component adaptation, implementation checks, and resolving configuration errors in Stages 3 and 4 |
Details per stage: see the ai-log/ folder.
## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events

## Stage 3: Vite and React project
The app now lives in `frontend/`, built with Vite. The animal data from Stage 2
was moved into the main React component. The header displays the total number
of animals and the calculated number of available animals. In Stage 4, the
temporary JSON output was replaced with reusable React components.

### Stage 3 verification

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S3-R1 | The development server starts without errors | `frontend/package.json` | Run `npm install`, then `npm run dev` from `frontend/` |
| S3-R2 | The app name and counter are calculated from the data | `frontend/src/App.jsx` | Change an item in `animals` and verify the counter after saving |
| S3-R3 | The data matches the Animal Shelter README | `frontend/src/App.jsx` | Compare the three objects with the sample data above |
| S3-R4 | Stage 1 styles are reused | `frontend/src/App.css` | Inspect the rendered page and the copied CSS variables/layout |
| S3-R5 | Dependencies are ignored and the build passes | `frontend/.gitignore` | Run `npm run build`; `node_modules/` and `dist/` stay untracked |
| S3-R6 | Documentation and AI log are complete | `README.md`, `ai-log/etapa-03.md` | Read this section and the stage log |

## Stage 4: Components rendered from data
The JSON list from Stage 3 was replaced with reusable React components:

- `AnimalList` receives the complete `animals` array through props and renders
  one `AnimalCard` for each item;
- `AnimalCard` receives one animal through props and displays its name, species,
  and adoption status;
- the card appearance changes for adopted animals;
- an explicit message is displayed when the list is empty.

### Stage 4 verification

| ID | Requirement | Where | How to check |
| --- | --- | --- | --- |
| S4-R1 | At least two components exist in `src/components/` | `frontend/src/components/` | Inspect `AnimalCard.jsx` and `AnimalList.jsx` |
| S4-R2 | The card receives data through props | `frontend/src/components/AnimalCard.jsx` | Inspect `AnimalCard({ animal })` |
| S4-R3 | The list uses `map` and a stable key | `frontend/src/components/AnimalList.jsx` | Inspect `animals.map` and `key={animal.id}` |
| S4-R4 | An empty list displays a message | `frontend/src/components/AnimalList.jsx` | Temporarily set `animals` to `[]` |
| S4-R5 | Adoption state changes the card appearance | `frontend/src/components/AnimalCard.jsx` | Change an animal's `adopted` value and save |
| S4-R6 | README and AI log are updated | `README.md`, `ai-log/etapa-04.md` | Read the stage documentation |
| S4-R7 | The Stage 4 changes are committed and published | [Stage 4 commit](https://github.com/IoanC2/AnimalShelter/commit/da62944) | Open the commit and inspect its changed files |

## Adaptarea la tema proprie
| Element | TaskFlow | BookShelf | WatchList | Tema proprie: AnimalShelter |
| --- | --- | --- | --- | --- |
| fișierul JavaScript | `taskuri.js` | `carti.js` | `filme.js` | `animale.js` |
| array-ul | `taskuri` | `carti` | `filme` | `animale` |
| valorile fixe | `PRIORITATI` | `FORMATE` | `TIPURI` | `SPECII` |
| numărarea elementelor active | `numaraActive` | `numaraNecitite` | `numaraDeVazut` | `numaraDisponibile` |
| comutarea stării | `comutaGata` | `comutaCitita` | `comutaVazu` | `comutaAdoptia` |
| adăugarea unui element | `adaugaTask` | `adaugaCarte` | `adaugaFilm` | `adaugaAnimal` |
| ștergerea unui element | `stergeTask` | `stergeCarte` | `stergeFilm` | `stergeAnimal` |
| căutarea după ID | `cautaTaskDupaId` | `cautaCarteDupaId` | `cautaFilmDupaId` | `cautaAnimalDupaId` |
| căutarea după etichetă | `cautaDupaEticheta` | `cautaDupaFormat` | `cautaDupaTip` | `cautaDupaSpecie` |
| câmpul pentru titlu | `titlu` | `titlu` | `titlu` | `name` |
| câmpul pentru etichetă | `eticheta` | `format` | `tip` | `species` |
| câmpul pentru stare | `gata` | `citita` | `vazut` | `adopted` |
| stare inițială | `false` | `false` | `false` | `false` — disponibil pentru adopție |
## Verification table
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README contains the application description, data fields, sample data, and run instructions | [README.md](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/README.md#L1-L16) | Read the linked sections |
| S1-R2 | README contains the AI usage section | [README.md](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/README.md#L17-L21) | Read the AI usage table |
| S1-R3 | Stage 1 AI log is documented | [ai-log/etapa-01.md](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/ai-log/etapa-01.md#L1-L17) | Read the stage log |
| S1-R4 | Page contains a header, a text input, a select, and three cards with project data | [index.html](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/index.html#L10-L70) | Open the page and inspect the form and list |
| S1-R5 | Adopted card has a distinct completed appearance | [style.css](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/style.css#L312-L318) | Inspect Bella's card |
| S1-R6 | Layout has two columns on desktop and one column below 700px | [style.css](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/style.css#L199-L204), [style.css](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/style.css#L334-L347) | Resize the page below 700px |
| S1-R7 | Page provides visible keyboard focus and a readable dark theme | [style.css](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/style.css#L29-L72), [style.css](https://github.com/IoanC2/AnimalShelter/blob/6d055e20e31bcfe7000bddbd3610210a1e36a263/style.css#L329-L331) | Use Tab and enable dark mode |
| S1-R8 | Stage 1 commit is present in the repository history | [Stage 1 commit](https://github.com/IoanC2/AnimalShelter/commit/6d055e20e31bcfe7000bddbd3610210a1e36a263) | Open the commit and inspect its changed files |
| S2-R1 | JavaScript file is linked and console tests run when the page loads | [index.html](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/index.html#L11), [animals.js](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/animals.js#L1-L51) | Open the page, press F12, open the Console tab, and check the output |
| S2-R2 | Array contains at least three animals with an id, name, state, and species | [animals.js](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/animals.js#L1-L5) | Read the `animals` array |
| S2-R3 | Listing, counting available animals, searching, adding, toggling adoption, and deleting are implemented | [animals.js](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/animals.js#L7-L51) | Inspect the functions and verify their results in the browser Console |
| S2-R4 | Adding an animal rejects an empty name and an invalid species | [animals.js](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/animals.js#L25-L44) | Run invalid calls in the Console and check that errors are reported |
| S2-R5 | The original `animals` array remains unchanged after adding an animal | [animals.js](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/animals.js#L25-L44) | Compare `animals.length` with the length of the array returned by `addAnimal` |
| S2-R6 | README contains the Stage 2 section and the AI log is documented | [README.md](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/README.md), [ai-log/etapa-02.md](https://github.com/IoanC2/AnimalShelter/blob/COMMIT_SHA/ai-log/etapa-02.md) | Read the Stage 2 documentation |
| S2-R7 | Stage 2 commit was pushed to GitHub | [Stage 2 commit](https://github.com/IoanC2/AnimalShelter/commit/COMMIT_SHA) | Open the commit and inspect its changed files |
