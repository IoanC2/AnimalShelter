# Stage 6: Date de la un API

## Instrumente

- GitHub Copilot în Visual Studio Code

## Solicitări și asistență

- Am adaptat exemplul cu `json-server`, `fetch`, `useEffect`, `loading` și
  `error` la modelul AnimalShelter.
- Am verificat separarea cererilor HTTP în `frontend/src/api.js` și folosirea
  variabilei `VITE_API_URL`.
- Am verificat tratarea cazurilor în care API-ul răspunde cu succes sau nu este
  pornit.

## Implementare

- Datele au fost mutate în `frontend/db.json`, sub cheia `animals`.
- API-ul este pornit cu `npm run api` pe portul 3001.
- `fetch` apare doar în `frontend/src/api.js`.
- `App.jsx` încarcă datele la montare cu `useEffect`.
- Aplicația afișează starea de încărcare și un mesaj explicit de eroare.
- Bifarea și ștergerea rămân locale în Etapa 6 și se pierd la refresh, conform
  ghidului; salvarea pe server este prevăzută pentru Etapa 7.

## Verificare

Din folderul `frontend/`, în două terminale:

```text
npm run api
npm run dev
```

Ruta API poate fi verificată la `http://localhost:3001/animals`. Pentru starea
de încărcare se poate porni temporar serverul cu:

```text
npx json-server --watch db.json --port 3001 --delay 4000
```

Pentru starea de eroare se oprește API-ul și se reîncarcă pagina React.
