import React from "react";
import PropTypes from "prop-types"
import pokemons from "./Data";

class Pokemon extends React.Component {
  constructor(props) {
    super() 
    // this.nextPokemon = this.nextPokemon.bind(this);
    // this.previousPokemon = this.previousPokemon.bind(this);
    this.getTypePokemon = this.getTypePokemon.bind(this)
    this.state = {
      contador: 0,
      pokemonTypes: pokemons,
    }
  }

  
  // nextPokemon() {
  //   const pokemons = this.state.pokemonTypes
  //   const quantidadePoke = pokemons.length -1 
  //   if(this.state.contador === quantidadePoke) {
  //       this.setState({
  //         contador: 0,
  //       })
  //     } else 
  //     this.setState({
  //       contador: this.state.contador + 1
  //     })
  //   }
  
  // previousPokemon() {
  //   const pokemons = this.state.pokemonTypes
  //   const ultimoPoke = pokemons.length -1
  //   if(this.state.contador === 0) {
  //     this.setState({
  //       contador: ultimoPoke
  //     })
  //   } else 
  //   this.setState({
  //     contador: this.state.contador - 1
  //   })
    
  // }
  
  getTypePokemon(event) {
    let generePokemon = pokemons.filter((ele) => ele.type === event.target.innerHTML)
    if(generePokemon.length === 0) {
      generePokemon = pokemons
    }
    this.setState({
      pokemonTypes: generePokemon
    })
    }
  render() {
    // const pokemon = this.state.contador
    const typePokemon = this.state.pokemonTypes
    console.log(typePokemon);
    return ( 
      <>
      <div className="button">
      <button onClick={this.getTypePokemon}>Fire</button>
      <button onClick={this.getTypePokemon}>Psychic</button>
      <button onClick={this.getTypePokemon}>Electric</button>
      <button onClick={this.getTypePokemon}>Bug</button>
      <button onClick={this.getTypePokemon}>Poison</button>
      <button onClick={this.getTypePokemon}>Normal</button>
      <button onClick={this.getTypePokemon}>Dragon</button>
      <button onClick={this.getTypePokemon}>All</button>
      </div>
      <div className="pokemonContainer">
      {
        typePokemon.map((ele,index) => {
      return <section className="box" key={ele.id}>
        <div className="pokemonInfo">
          <p>name: {ele.name}</p>
          <p>tipo: {ele.type}</p>
          <p>Peso: {ele.value} {ele.measurementUnit}</p>
        </div>
        <div>
          <img className="image" src={ele.image} alt="" />
        </div>
      </section>
        })
      }
      </div>
        {/* <button onClick={this.previousPokemon}>previous</button>
        <button onClick={this.nextPokemon}>Next</button> */}
      </>
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
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  })
}
export default Pokemon