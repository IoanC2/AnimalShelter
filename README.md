# AnimalShelter

AnimalShelter este o aplicație web pentru administrarea animalelor dintr-un adăpost:
adăugare, evidența adopției și ștergere.

## Modelul de date

Fiecare animal are câmpurile obligatorii cerute de ghid:

| Câmp | Tip | Rol |
| --- | --- | --- |
| `name` | text | numele animalului, obligatoriu, maximum 100 de caractere |
| `adopted` | boolean | starea adopției, schimbată prin bifare |
| `species` | valoare fixă | `dog`, `cat` sau `rabbit` |
| `age_category` | valoare fixă | `Young`, `Adult` sau `Senior` |
| `user` | text | persoana responsabilă de animal |

Datele de test folosite în toate etapele:

1. Luna — disponibilă, câine, Adult, Ana
2. Bella — adoptată, pisică, Senior, Mihai
3. Daisy — disponibilă, iepure, Young, Ioana

## Cum se rulează

Mockup-ul static se deschide din [`mockup/index.html`](mockup/index.html).

Aplicația React se rulează astfel:

```text
cd frontend
npm install
npm run dev
```

Pentru verificarea producției:

```text
npm run lint
npm run build
```

## AI usage

| Instrument | Utilizare |
| --- | --- |
| Gemini | stilizarea CSS din Etapa 1, variabilele de temă, layout responsive și documentație |
| GitHub Copilot în Visual Studio Code | configurarea React, componentele, interacțiunile și verificarea codului din Etapele 3–5 |

Nu există linkuri publice către conversațiile AI; au fost păstrate transcripturi și
descrieri ale solicitărilor în jurnalele din [`ai-log/`](ai-log/).

## Starea etapelor

- [x] Etapa 1: mockup HTML și CSS
- [x] Etapa 2: logică pe date în JavaScript
- [x] Etapa 3: proiect Vite și React
- [x] Etapa 4: componente construite din date
- [x] Etapa 5: state local și evenimente

## Etapa 1: mockup HTML și CSS

Implementarea este în [`mockup/index.html`](mockup/index.html) și
[`mockup/style.css`](mockup/style.css). Pagina are antet, formular, trei carduri,
două coloane pe desktop, o coloană sub 700 px, focus vizibil și temă întunecată.

## Etapa 2: logică pe date

Implementarea este în [`mockup/animals.js`](mockup/animals.js), legat de pagina
statică. Funcțiile listează, numără, caută, adaugă cu validare, comută adopția și
șterg animale fără să modifice array-ul primit. Testele sunt afișate în consola
browserului la încărcarea paginii.

## Etapa 3: Vite și React

Aplicația React este în [`frontend/`](frontend/). Datele inițiale sunt în
[`frontend/src/App.jsx`](frontend/src/App.jsx), iar stilurile reutilizează
structura mockup-ului în [`frontend/src/App.css`](frontend/src/App.css).

## Etapa 4: componente

[`AnimalList.jsx`](frontend/src/components/AnimalList.jsx) primește array-ul prin
props și folosește `map` cu `key={animal.id}`. [`AnimalCard.jsx`](frontend/src/components/AnimalCard.jsx)
primește un animal prin props, afișează câmpurile lui și tratează vizual starea
adopției. Lista goală afișează un mesaj explicit.

## Etapa 5: state și evenimente

Lista este păstrată în `useState`. Formularul colectează numele, specia,
categoria de vârstă și persoana responsabilă. Checkbox-ul comută adopția,
butonul șterge animalul, contorul disponibil este derivat din state, iar butonul
din antet comută tema luminoasă/întunecată prin `data-theme` și variabile CSS.
Formularul adaugă animale noi în state, cu toate câmpurile modelului.

## Direcție vizuală

Interfața folosește paleta verde-portocalie existentă, îmbogățită cu filtre
pentru listă, carduri de profil cu avataruri tematice, etichete de personalitate,
forme organice discrete și micro-animații. Animațiile se dezactivează automat
pentru utilizatorii care preferă reducerea mișcării. Header-ul folosește bannerul
fotografic [`shelter-banner.jpg`](frontend/public/shelter-banner.jpg), cu overlay
verde pentru lizibilitatea textului.

## Tabele de verificare

### Etapa 1

| ID | Cerință | Unde | Verificare |
| --- | --- | --- | --- |
| S1-R1 | descriere, câmpuri, date de test și rulare | [README.md#L1-L41](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/README.md#L1-L41) | citește secțiunile de mai sus |
| S1-R2 | secțiunea AI usage | [README.md#L26-L31](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/README.md#L26-L31) | citește secțiunea AI usage |
| S1-R3 | jurnalul etapei | [ai-log/etapa-01.md#L1-L17](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/ai-log/etapa-01.md#L1-L17) | citește jurnalul |
| S1-R4 | antet, formular, select și trei carduri | [mockup/index.html#L10-L85](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/index.html#L10-L85) | deschide pagina |
| S1-R5 | card adoptat cu aspect distinct | [mockup/style.css#L318-L323](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/style.css#L318-L323) | verifică `.done` |
| S1-R6 | două coloane/una sub 700 px | [mockup/style.css#L146-L155](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/style.css#L146-L155), [mockup/style.css#L340-L355](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/style.css#L340-L355) | redimensionează fereastra |
| S1-R7 | focus vizibil și temă întunecată | [mockup/style.css#L29-L78](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/style.css#L29-L78), [mockup/style.css#L335-L338](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/style.css#L335-L338) | folosește Tab și tema sistemului |
| S1-R8 | commit public cu mesaj `Stage 1` | [commitul Stage 1](https://github.com/IoanC2/AnimalShelter/commit/6d055e20e31bcfe7000bddbd3610210a1e36a263) | deschide istoricul Git |

### Etapa 2

| ID | Cerință | Unde | Verificare |
| --- | --- | --- | --- |
| S2-R1 | script legat și teste în consolă | [mockup/index.html#L88-L89](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/index.html#L88-L89), [mockup/animals.js#L96-L120](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/animals.js#L96-L120) | deschide F12/Console |
| S2-R2 | cel puțin trei obiecte cu câmpurile obligatorii | [mockup/animals.js#L1-L29](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/animals.js#L1-L29) | citește array-ul |
| S2-R3 | listare, numărare, căutare, adăugare, comutare, ștergere | [mockup/animals.js#L31-L94](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/animals.js#L31-L94) | verifică funcțiile în consolă |
| S2-R4 | respingere nume/specie/categorie invalide | [mockup/animals.js#L48-L65](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/animals.js#L48-L65), [mockup/animals.js#L121-L133](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/animals.js#L121-L133) | rulează testele de validare |
| S2-R5 | array inițial nemodificat | [mockup/animals.js#L81-L82](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/animals.js#L81-L82), [mockup/animals.js#L104-L107](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/mockup/animals.js#L104-L107) | compară lungimile |
| S2-R6 | README și jurnal | [README.md#L67-L73](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/README.md#L67-L73), [ai-log/etapa-02.md#L1-L62](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/ai-log/etapa-02.md#L1-L62) | citește documentația |
| S2-R7 | commit public cu mesaj `Stage 2` | [commitul Stage 2](https://github.com/IoanC2/AnimalShelter/commit/09eb714100fb2d5ccb897714c15130102a9ebad3) | deschide istoricul Git |

### Etapele 3–5

| ID | Cerință | Unde | Verificare |
| --- | --- | --- | --- |
| S3-R1–S3-R5 | Vite pornește, datele sunt calculate, build-ul trece și dependențele sunt ignorate | [frontend/package.json#L1-L22](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/package.json#L1-L22), [frontend/.gitignore#L1-L3](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/.gitignore#L1-L3), [frontend/src/App.jsx#L4-L37](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/src/App.jsx#L4-L37) | `npm run lint`, `npm run build` |
| S3-R6 | README și jurnal | [README.md#L42-L60](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/README.md#L42-L60), [ai-log/etapa-03.md#L1-L25](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/ai-log/etapa-03.md#L1-L25) | citește documentația |
| S3-R7 | commit public cu mesaj `Stage 3` | [commitul Stage 3](https://github.com/IoanC2/AnimalShelter/commit/da62944291a7ca9ef6fab30b7add96040251daf3) | deschide istoricul Git |
| S4-R1–S4-R5 | componente, props, `map`/`key`, listă goală și aspect condițional | [frontend/src/components/AnimalList.jsx#L1-L20](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/src/components/AnimalList.jsx#L1-L20), [frontend/src/components/AnimalCard.jsx#L7-L43](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/src/components/AnimalCard.jsx#L7-L43) | inspectează și testează pagina |
| S4-R6 | README și jurnal | [README.md#L75-L86](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/README.md#L75-L86), [ai-log/etapa-04.md#L1-L31](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/ai-log/etapa-04.md#L1-L31) | citește documentația |
| S4-R7 | commit public cu mesaj `Stage 4` | [commitul Stage 4](https://github.com/IoanC2/AnimalShelter/commit/da62944) | deschide istoricul Git |
| S5-R1–S5-R6 | state, bifare, ștergere, contor derivat, update-uri imutabile și temă | [frontend/src/App.jsx#L25-L98](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/src/App.jsx#L25-L98), [frontend/src/components/AnimalCard.jsx#L16-L51](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/src/components/AnimalCard.jsx#L16-L51), [frontend/src/App.css#L29-L131](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/frontend/src/App.css#L29-L131) | interacționează cu aplicația |
| S5-R7 | consolă fără avertismente, README și jurnal | [README.md#L88-L101](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/README.md#L88-L101), [ai-log/etapa-05.md#L1-L30](https://github.com/IoanC2/AnimalShelter/blob/bf7248b3d625da031094c5cf865f0a4de65b3717/ai-log/etapa-05.md#L1-L30) | F12/Console |
| S5-R8 | commit public cu mesaj `Stage 5` | [commitul Stage 5](https://github.com/IoanC2/AnimalShelter/commit/bf7248b3d625da031094c5cf865f0a4de65b3717) | deschide commitul |
