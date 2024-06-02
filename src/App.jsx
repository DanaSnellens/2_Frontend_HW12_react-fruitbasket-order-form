import React, { useState } from "react";
import './App.css'

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [zipCode, setZipCode] = useState('');
/*    const [deliveryFrequency, setDeliveryFrequency] = useState('week');
    const [deliveryTime, setDeliveryTime] = useState('daytime');
    const [comment, setComment] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);*/

    
    function resetFruits() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }


  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="fruit-boxes">
            <article>
                <h2>🍓 Aardbeien</h2>
                <button
                    type="button"
                    disabled={strawberries === 0}
                    onClick={() => setStrawberries(strawberries - 1)}>
                    -
                </button>
                <p>{strawberries}</p>
                <button
                    type="button"
                    onClick={() => setStrawberries(strawberries + 1)}>
                    +
                </button>
            </article>
            <article>
                <h2>🍌Bananen</h2>
                <button
                    type="button"
                    disabled={bananas === 0}
                    onClick={() => setBananas(bananas - 1)}>
                    -
                </button>
                <p>{bananas}</p>
                <button
                    type="button"
                    onClick={() => setBananas(bananas + 1)}>
                    +
                </button>
            </article>
            <article>
                <h2>🍏 Appels</h2>
                <button
                    type="button"
                    disabled={apples === 0}
                    onClick={() => setApples(apples - 1)}>
                    -
                </button>
                <p>{apples}</p>
                <button
                    type="button"
                    onClick={() => setApples(apples + 1)}>
                    +
                </button>
            </article>
            <article>
                <h2>🥝 Kiwi's</h2>
                <button
                    type="button"
                    disabled={kiwis === 0}
                    onClick={() => setKiwis(kiwis - 1)}>
                    -
                </button>
                <p>{kiwis}</p>
                <button
                    type="button"
                    onClick={() => setKiwis(kiwis + 1)}>
                    +
                </button>
            </article>
            <button
                type="button"
                onClick={() => resetFruits()}>
                Reset
            </button>
        </section>
        <form>
            <label htmlFor="form-firstName">
                Voornaam:
                <input
                    type="text"
                    id="form-firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label htmlFor="form-lastName">
                Achternaam:
                <input
                    type="text"
                    id="form-lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label htmlFor="form-age">
                Leeftijd:
                <input
                    type="text"
                    id="form-age"
                    name="age"
                    value={age}
                    placeholder="0"
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>
            <label htmlFor="form-zipCode">
                Postcode
                <input
                    type="text"
                    id="form-zipCode"
                    name="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                />
            </label>

        </form>
    </>
  )
}

export default App
