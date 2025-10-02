# Opgave: Lav en tutorial om React Router

## Formål

Du skal lave en pædagogisk og teknisk korrekt tutorial, der viser hvordan man bruger [React Router](https://reactrouter.com/) til at navigere mellem sider i en React-applikation. Målet er at formidle din viden, så andre elever eller udviklere kan lære af din vejledning.

## Læringsmål

- Forstå og anvende React Router til routing i en [SPA (Single Page Application)](https://reactrouter.com/en/main/start/tutorial)
- Forklare centrale begreber som [`<BrowserRouter>`](https://reactrouter.com/en/main/router-components/browser-router), [`<Routes>`](https://reactrouter.com/en/main/router-components/routes), [`<Route>`](https://reactrouter.com/en/main/router-components/route), og [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate)
- Demonstrere hvordan man opretter og strukturerer flere sider i en React-app
- Kommunikere teknisk viden klart og målrettet
- Publicere en fungerende tutorial online

## Opgavekrav

Du skal:

1. **Introducere React Router**  
   Forklar kort hvad React Router er, og hvorfor det bruges i moderne webapps.

2. **Installere og konfigurere**  
   Vis hvordan man installerer React Router via `npm` eller `yarn` og sætter det op i en React-app med [`<BrowserRouter>`](https://reactrouter.com/en/main/router-components/browser-router).

3. **Oprette flere sider**  
   Lav mindst tre komponenter (f.eks. Home, About, Contact) og vis hvordan de routes med [`<Route>`](https://reactrouter.com/en/main/router-components/route) og [`<Routes>`](https://reactrouter.com/en/main/router-components/routes).

4. **Navigering**  
   Demonstrer brugen af [`<Link>`](https://reactrouter.com/en/main/components/link) og [`useNavigate`](https://reactrouter.com/en/main/hooks/use-navigate) til at skifte mellem sider.

5. **Fejlhåndtering og 404-side**  
   Vis hvordan man håndterer ukendte routes med en fallback-side, typisk ved at bruge en `*`-route i [`<Route>`](https://reactrouter.com/en/main/router-components/route).

6. **Publicering**  
   Din tutorial skal være tilgængelig online via [GitHub Pages](https://docs.github.com/en/pages), [Vercel](https://vercel.com/docs), [Netlify](https://docs.netlify.com/) eller tilsvarende. Link til den færdige tutorial skal afleveres sammen med opgaven.

7. **Tutorial-format**  
   Du vælger selv format:
   - Video (maks 5 min)
   - Skriftlig guide med kodeeksempler og screenshots

## Evalueringskriterier

- Klar og korrekt teknisk forklaring
- Brug af relevante React Router-komponenter
- Struktur og layout af tutorial
- Evne til at formidle til målgruppen (andre elever)
- Fungerende og tilgængelig publicering online

## Min Tutorial
1. **Hvorfor React Router**
   Vi bruger React Router for at kunne skifte indholdet på siden, uden at skulle refresh siden, da det er mere brugervenligt så brugeren ikke sidder og skal vente på en hel hvid og blank side


2. **Instalation, og konfiguration**
   Man skal starte med at downloade Vite igennem terminalen med npm med commanden 'npm create vite@latest', der er det vigtigt man vælger react, øvrige valg er op til dig selv. Derefter skal man køre, igen i terminalen, 
   ```sh
   npm i react-route.
   ```

   Så skal du render en `<BrowserRouter>` rundt om de functioner der skal displays på din side
   
   ```js
   import ReactDOM from "react-dom/client";
   import { BrowserRouter, Routes, Route } from "react-router";
   import App from "./App.jsx";

   const root = document.getElementById("root");

   ReactDOM.createRoot(root).render(
      <BrowserRouter>
         <App />
      </BrowserRouter>
   );
   ```
3. **Oprette flere sider**
   Nu har jeg oprettet flere sider, som man kan navigere til uden at refreshe siden, ved hjælp af routes som f.eks. `<Route path="hej" element="<App />" />`, så ville man bruge `<Link to="hej"></Link`