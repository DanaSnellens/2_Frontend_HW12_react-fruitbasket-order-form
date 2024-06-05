import React, { useState } from "react";
import './App.css'
import Button from "./components/Button.jsx";
import Counter from "./components/Counter.jsx";
import InputField from "./components/InputField.jsx";

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [zipCode, setZipCode] = useState('');
    const [deliveryFrequency, setDeliveryFrequency] = useState('week');
    const [deliveryTime, setDeliveryTime] = useState('daytime');
    const [comment, setComment] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);

    
    function resetFruits() {
        setStrawberries(0);
        setBananas(0);
        setApples(0);
        setKiwis(0);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(`
            Voornaam: ${firstName},
            Achternaam: ${lastName},
            Leeftijd: ${age},
            Postcode: ${zipCode},
            Bezorgfrequentie: ${deliveryFrequency},
            Opmerkingen: ${comment},
            Algemene voorwaarden: ${agreeTerms}
            `);
        console.log(`Fruitmand bestelling - aardbeien: ${strawberries}, bananen: ${bananas}, appels: ${apples}, kiwi's: ${kiwis}`);
    }


  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="fruit-boxes">
            <article>
                <h2>🍓 Aardbeien</h2>
                <Counter
                    fruitCount={strawberries}
                    setFruitCount={setStrawberries}
                />
            </article>
            <article>
                <h2>🍌Bananen</h2>
                <Counter
                    fruitCount={bananas}
                    setFruitCount={setBananas}
                />
            </article>
            <article>
                <h2>🍏 Appels</h2>
                <Counter
                    fruitCount={apples}
                    setFruitCount={setApples}
                />
            </article>
            <article>
                <h2>🥝 Kiwi's</h2>
                <Counter
                    fruitCount={kiwis}
                    setFruitCount={setKiwis}
                />
            </article>
            <Button type="button" clickHandler={resetFruits}>Reset</Button>
        </section>
        <form onSubmit={handleSubmit}>
            <section>
                <InputField name="firstname" label="Voornaam: " inputType="text"
                            value={firstName} changeHandler={setFirstName}/>
            </section>
            <section>
                <InputField name="lastname" label="Achternaam: " inputType="text"
                            value={lastName} changeHandler={setLastName}/>
            </section>
            <section>
                <InputField name="age" label="Leeftijd: " inputType="number"
                            value={age} changeHandler={setAge}/>
            </section>
            <section>
                <InputField name="zipCode" label="Postcode: " inputType="text"
                            value={zipCode} changeHandler={setZipCode}/>
            </section>
            <section>
                <label htmlFor="form-deliveryFrequency">
                    Bezorgfrequentie
                    <select
                        id="form-deliveryFrequency"
                        name="delivery"
                        value={deliveryFrequency}
                        onChange={(e) => setDeliveryFrequency(e.target.value)}
                    >
                        <option value="week">Iedere week</option>
                        <option value="two-week">Om de week</option>
                        <option value="month">Iedere maand</option>
                    </select>
                </label>
            </section>
            <section>
                <input
                    type="radio"
                    id="form-deliveryTime-daytime"
                    name="deliveryTime"
                    value="daytime"
                    checked={deliveryTime === 'daytime'}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                />
                <label htmlFor="form-deliveryTime-daytime">
                    Overdag
                </label>
                <input
                    type="radio"
                    id="form-deliveryTime-evening"
                    name="deliveryTime"
                    value="evening"
                    checked={deliveryTime === 'evening'}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                />
                <label htmlFor="form-deliveryTime-evening">
                    's Avonds
                </label>
            </section>
            <section>
                <label htmlFor="form-comment">
                    Opmerkingen:
                    <textarea
                        id="form-comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows={5}
                        cols={35}
                    />
                </label>
            </section>
            <section>
                <input
                    type="checkbox"
                    name="agreeTerms"
                    id="agreeTerms"
                    value={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label htmlFor="agreeTerms">Ik ga akkoord met de voorwaarden</label>
            </section>
            <Button type="submit">Verzend</Button>
        </form>
    </>
  )
}

export default App
