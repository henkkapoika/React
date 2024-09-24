// 5kpl termejä

// 1. Components
// Kaikki Reactissa rakentuu yksittäisistä komponenteista
// Vähän sama idea kuin elementit perus HTML-koodissa
// React-sovellus on kokoelma komponentteja
// Poikkeuksena, että React-komponentti on usein yhdistelmä
// HTML, CSS ja JavaScript koodia
// Esim: App.js (HTML, js) App.css(css)

// Kaksi sääntöä komponentilla:
// 1. Alkaa isolla kirjaimella ja uudet sanat isolla yhteen
//      PascalCase: NewComponent.js
// 2. Palauttaa jotakin, jonka voi renderöidä käyttöliittymään(user interface, UI)
// Komponentteja on kahta erilaista:
// 1. functional component, tehty funktiona
// 2. class component, tehty luokkana/objektina (vanha)

// Functional component
const EkaComponent = () => {
    return <h1>Hello, world!</h1>;
}

export default EkaComponent; // Jotta voidaan käyttää muualla

// 2. JSX
// JavaScript XML
// React tiedostoissa kirjoitetaan js-koodia
// Vaikka osa näyttää HTML-koodilta, se on oikeasti JavaScriptiä
// React kääntää js/jsx tiedostot HTML-muotoon selaimelle.
// Selain ei ymmärrä JSX-syntaksia.

// Esim: <h1>Hello, world</h1>
// on oikeasti: React.createElement('h1', null, 'Hello, world');

// 3. ReactDOM
// ReactComponents => ReactDOM => DOM
// Muutokset tapahtuvat ensin ReactDOM:iin ja sitten tarvittaessa oikeaan DOM:iin.

// 4. State
// Reactin UI:in päivitys perustuu state:n muutoksiin
// Jokin muuttuja vaihtaa arvoa, silloin suoritetaan uusi render
// render päivittää käyttöliittymän
// React huolehtii state:n olemassa olosta ja sen muutokset täytyy suorittaa Reactin kautta

// 5. Hooks
// Eli state päivitykset (functional components)
// useState
// useEffect
// luokka komponenteilla on eri systeemi