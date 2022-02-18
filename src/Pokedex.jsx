import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
    render() {
        return(
            <main className="pokedex">
                <h1>Pokedex</h1>
                <section className="pokemonContainer">
                <Pokemon/>
                </section>
            </main>
        )
    }
}

export default Pokedex