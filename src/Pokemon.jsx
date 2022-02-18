import React from "react";
import pokemons from "./Data";
import PropTypes from "prop-types"
import { string } from "prop-types";

class Pokemon extends React.Component {
    render() {
        return (
            pokemons.map((pokemon) => {
                const { id ,name, type,averageWeight:{value, measurementUnit}, image } = pokemon
                console.log()
               
                return <section className="box" key={ id }>
                        <div className="pokemonInfo">
                          <p>name: {name}</p>
                          <p>tipo: {type}</p>
                          <p>Peso: {value} {measurementUnit}</p>
                        </div>
                        <div>
                          <img className="image" src={image} alt="" />
                        </div>
                      </section>
            }
            
            )
        )
    }
}
Pokemon.propTypes = {
  pokemons: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.string,
      measurementUnit: string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}
export default Pokemon