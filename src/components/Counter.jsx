import React from "react";
import Button from "./Button.jsx";

function Counter({ fruitCount, setFruitCount}) {
    return (
        <>
            <Button type="button" disabled={fruitCount === 0}
                    clickHandler={() => setFruitCount(fruitCount - 1)}>
                -
            </Button>
            <p>{fruitCount}</p>
            <Button type="button"
                    clickHandler={() => setFruitCount(fruitCount + 1)}>
                +
            </Button>
        </>
    );
}

export default Counter;
