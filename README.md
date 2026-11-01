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
| S1-R1 | descriere, câmpuri, date de test și rulare | [`README.md`](README.md) | citește secțiunile de mai sus |
| S1-R2 | secțiunea AI usage | [`README.md`](README.md) | citește secțiunea AI usage |
| S1-R3 | jurnalul etapei | [`ai-log/etapa-01.md`](ai-log/etapa-01.md) | citește jurnalul |
| S1-R4 | antet, formular, select și trei carduri | [`mockup/index.html`](mockup/index.html) | deschide pagina |
| S1-R5 | card adoptat cu aspect distinct | [`mockup/style.css`](mockup/style.css) | verifică `.done` |
| S1-R6 | două coloane/una sub 700 px | [`mockup/style.css`](mockup/style.css) | redimensionează fereastra |
| S1-R7 | focus vizibil și temă întunecată | [`mockup/style.css`](mockup/style.css) | folosește Tab și tema sistemului |
| S1-R8 | commit public cu mesaj `Stage 1` | istoricul Git | de completat prin commit conform |

### Etapa 2

| ID | Cerință | Unde | Verificare |
| --- | --- | --- | --- |
| S2-R1 | script legat și teste în consolă | [`mockup/index.html`](mockup/index.html), [`mockup/animals.js`](mockup/animals.js) | deschide F12/Console |
| S2-R2 | cel puțin trei obiecte cu câmpurile obligatorii | [`mockup/animals.js`](mockup/animals.js) | citește array-ul |
| S2-R3 | listare, numărare, căutare, adăugare, comutare, ștergere | [`mockup/animals.js`](mockup/animals.js) | verifică funcțiile în consolă |
| S2-R4 | respingere nume/specie/categorie invalide | [`mockup/animals.js`](mockup/animals.js) | rulează testele de validare |
| S2-R5 | array inițial nemodificat | [`mockup/animals.js`](mockup/animals.js) | compară lungimile |
| S2-R6 | README și jurnal | [`README.md`](README.md), [`ai-log/etapa-02.md`](ai-log/etapa-02.md) | citește documentația |
| S2-R7 | commit public cu mesaj `Stage 2` | istoricul Git | de completat prin commit conform |

### Etapele 3–5

| ID | Cerință | Unde | Verificare |
| --- | --- | --- | --- |
| S3-R1–S3-R5 | Vite pornește, datele sunt calculate, build-ul trece și dependențele sunt ignorate | [`frontend/package.json`](frontend/package.json), [`frontend/.gitignore`](frontend/.gitignore), [`frontend/src/App.jsx`](frontend/src/App.jsx) | `npm run lint`, `npm run build` |
| S3-R6 | README și jurnal | [`README.md`](README.md), [`ai-log/etapa-03.md`](ai-log/etapa-03.md) | citește documentația |
| S3-R7 | commit public cu mesaj `Stage 3` | istoricul Git | de completat prin commit conform |
| S4-R1–S4-R5 | componente, props, `map`/`key`, listă goală și aspect condițional | [`frontend/src/components/`](frontend/src/components/) | inspectează și testează pagina |
| S4-R6 | README și jurnal | [`README.md`](README.md), [`ai-log/etapa-04.md`](ai-log/etapa-04.md) | citește documentația |
| S4-R7 | commit public cu mesaj `Stage 4` | istoricul Git | de completat prin commit conform |
| S5-R1–S5-R6 | state, bifare, ștergere, contor derivat, update-uri imutabile și temă | [`frontend/src/App.jsx`](frontend/src/App.jsx), [`frontend/src/components/AnimalCard.jsx`](frontend/src/components/AnimalCard.jsx), [`frontend/src/App.css`](frontend/src/App.css) | interacționează cu aplicația |
| S5-R7 | consolă fără avertismente, README și jurnal | [`README.md`](README.md), [`ai-log/etapa-05.md`](ai-log/etapa-05.md) | F12/Console |
| S5-R8 | commit public cu mesaj `Stage 5` | [`c4bc04d`](https://github.com/IoanC2/AnimalShelter/commit/c4bc04d) | deschide commitul |
