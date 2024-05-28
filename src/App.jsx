import React, { useState } from "react";
import './App.css'

function App() {
    const [strawberries, setStrawberries] = useState(0);
    const [bananas, setBananas] = useState(0);
    const [apples, setApples] = useState(0);
    const [kiwis, setKiwis] = useState(0);
    
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
                </button>
                <p></p>
                <button></button>
            </article>
            <article>
                <h2>🍌Bananen</h2>
                <button
                    type="button"
                    disabled={bananas === 0}
                    onClick={() => setBananas(bananas - 1)}>
                    -
                </button>
                <p></p>
                <button></button>
            </article>
            <article>
                <h2>🍏 Appels</h2>
                <button
                    type="button"
                    disabled={apples === 0}
                    onClick={() => setApples(apples - 1)}>
                    -
                </button>
                <p></p>
                <button></button>
            </article>
            <article>
                <h2>🥝 Kiwi's</h2>
                <button
                    type="button"
                    disabled={kiwis === 0}
                    onClick={() => setKiwis(kiwis - 1)}>
                    -
                </button>
                <p></p>
                <button></button>
            </article>



            
            
        </section>
    </>
  )
}

export default App
