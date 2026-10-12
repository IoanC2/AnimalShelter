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
Open `index.html` in a browser. No build step, no server.
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| Gemini | Stage 1 CSS styling, theme variable definition, responsive layout, and documentation |
Details per stage: see the ai-log/ folder.
## Status
- [x] Stage 1: static mockup
☐ Stage 2: data logic in JavaScript
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
