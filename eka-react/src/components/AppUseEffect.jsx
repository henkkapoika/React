import logo from '../logo.svg';
import './App.css';
import EkaComponent from './EkaComponent';
import ClassComponent from './ClassComponent'
import Counter from './Counter';
import Product from './Product/Product'
import {PRODUCTS} from '../data/data' // dummy data
import Header from './HeaderComponent'
import TabButton from './TabButton/TabButton';
import { useEffect, useState } from 'react';
import { CATEGORIES } from '../data/categories';

// Root komponentti

function AppUseEffect() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  const [formData, setFormData] = useState({
    userId: '',
    message: ''
  })

  const handleChange = (event) => {
    //console.log(formData)
    //console.log(event.target)
    const {name, value} = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  }

  const handleSubmit = async (e) => {
    // estetään eventin oletuskäyttätyminen
    // eli sivun uudelleenlataus
    e.preventDefault()

    // Yritetään tehdä tallennus
    try{
      // domain: http://localhost:3001/ esim google.com
      // route: /jokin/route/talla/tavalla esim /search
      const response = await fetch('http://localhost:3001/api/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      console.log('Response from server: ', result)

    }catch(error){
      console.log('Error sending data: ', error)
    }
  }

  useEffect(() => {
    // tiedonhaku
    //fetch('http://localhost:9000/react-apis/data.php')
    fetch('http://localhost:3001/')
      .then((response) => {
        if(!response.ok){
          // Joko heitetään virhe
          throw new Error("Network response was not ok!");
        }
        // Tai palautetaan HTTP-response json data
        return response.json();
      })
      .then((jsonResponse) => {
        setData(jsonResponse) // Päivitetään data state
      }
      )
      .catch((error) => {
        setError('Error: ' + error.message) // Päivitetään virhe state
      })
  }, []) // [] dependency array, tyhjä tarkoittaa, että tämä useEffect suoritetaan kun komponentti lisätään (oikeaan) DOM:iin
  
  return (
    <div className='App'>
        <header className='App-header'>
            {/* Otetaan React-sovelluksesta yhteys PHP-palvelimeen */}
            {/* Käynnistetään Docker PHP-container */}

        {error && <p>{error}</p>} {/* Jos error != null */}
        {data ? (
          <div>
          <h2>{data.message}</h2>
          <h3>Users:</h3>
          <ul>
            {data.users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
          </div>
        ) : (
          <p>Loading...</p>
        )
        }

        <section>
          <h2>Post test</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="userId" placeholder="UserId" value={formData.userId} onChange={handleChange} />
            <input type="text" name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
            <button type="submit">Send</button>
          </form>
        </section>
        </header>
    </div>
  )
    
}

export default AppUseEffect;
