import logo from '../logo.svg';
import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from './ClassComponent'
import Counter from './Counter';
import Product from './Product/Product'
import {PRODUCTS} from '../data/data' // dummy data
import Header from './HeaderComponent'
import TabButton from './TabButton/TabButton';
import { useState } from 'react';
import { CATEGORIES } from '../data/categories';

// Root komponentti

function App() {

  // Täällä eläisi Products state

  console.log("APP EXECUTING")

  function handleSelect(selectedButton){
    //selectedCategory = selectedButton // Ei UI-päivitystä
    setSelectedCategory(selectedButton)
    console.log(`kategoria clicked! - ${selectedCategory.title}`)
}

  // Tämänä muokkaus ei suorita käyttöliittymän päivitystä
  //let selectedCategory = "Kategoria 1";

  // Jotta käyttöliittymä päivittyy, tarvitaan komponenttiin state
  // useState pitää luoda komponentin juureen
  // useState() palauttaa taulukon, jossa on:
  //     state muuttuja,   funktio,    päivittää state    (oletusarvo)
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0])

  // Kuvitteellisesti haettu tietokannasta tähän state:iin
  const [categories, setCategories] = useState(CATEGORIES)

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Counter />
        {/* <EkaComponent />
        <ClassComponent /> */}
        <section>
          <h2>Tuotteet</h2>
          <ul>
            {/* 1. vaihtoehto: props, properties */}
            <Product img={PRODUCTS[0].img} title={PRODUCTS[0].title} description={PRODUCTS[0].description}/>
            {/* Voi käyttää destructure ... syntaksia, jos 
            lähde datan avaimet ovat samat kuin komponentin avaimet */}
            <Product {...PRODUCTS[1]} />
            <Product {...PRODUCTS[2]}  />
          </ul>
        </section>
        <section>
          <h2>Kategoriat</h2>
          <menu>
            {/* 2. vaihtoehto: component composition */}
            {/* Kaikkea lapsi dataa ei tarvitse pyörittää propsien kautta */}
            {/* Nappien on tarkoitus päivittää jotakin state-arvoa
                ja tämä state päivittää komponenttia napin ulkopuolella.
                Tämän vuoksi state ei elä napin sisällä, vaan sinne lähetetään
                viittaus funktioon, joka suoritetaan korkeamalla tasolla. */}
            {/* <TabButton onSelect={() => {handleSelect('Kategoria 1')}}>Kategoria 1</TabButton>
            <TabButton onSelect={() => {handleSelect('Kategoria 2')}}>Kategoria 2</TabButton>
            <TabButton onSelect={() => {handleSelect('Kategoria 3')}}>Kategoria 3</TabButton>
            <TabButton onSelect={() => {handleSelect('Kategoria 4')}}>Kategoria 4</TabButton> */}
            {/* Generoidaan napit "haetun" datan perusteella */}
            {/* Taulukon map()-funktiolla leivotaan data toiseen muotoon */}
            {categories.map((category, index)=>(
              // Tässä koodi, jonka map toteuttaa joka kierroksella
              (<TabButton key={index} onSelect={()=>{handleSelect(category)}}>
                {category.title}
              </TabButton>)
            ))}
          </menu>
          {/* Tähän päivittyy uusi sisältö */}
          {selectedCategory ?
          <div>
            <h3>{selectedCategory.title}</h3>
            <p>{selectedCategory.description}</p>
          </div>
          : <p>Select a category!</p>
          }
        </section>
      </header>
    </div>
  );
}

export default App;
