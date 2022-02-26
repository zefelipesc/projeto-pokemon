// @ts-ignore
import { createStore } from "vuex"
//import VuexPersist from 'vuex-persist'

// a view chama uma action que vai disparar uma ação.
// dispatcher: chama uma ação/evento(que pode ser assícrona, chama uma api por exemplo)
// mutator: vai alterar de fato o estado no vuex
// a mutation são métodos que recebe um state(obrigatório) e um payload(!obrigatório):
//state: estado atual da aplicação. que é manipulável dentro da mutation.
//payload: é o novo valor que eu quero alterar.
export default createStore({

  state: {
    pokeList: [],
    pokeTeam: [],
    teams: []
  },

  // actions can be complex, but never update the state
  actions: {
    
  },


    // mutations should be as simple as possible, and only responsible to update/change the state
    mutations: {
      teamName(state, payload) {
        state.pokeTeam.name = payload.name;
      },

      pushPokemonToPokeTeam(state, pokemon) {
        state.pokeTeam.push(pokemon);
          
      },

      removePokemon(state, pokemon) {
        state.pokeTeam.splice(pokemon, 1)
      },

      savePokeTeam(state, pokemons) {
        state.teams.push(pokemons);
      }
     




    },





 


  //plugins: [
  //	new VuexPersist({
  //		storage: window.localStorage
  //	}).plugin
  //]

})

