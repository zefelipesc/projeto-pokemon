<script lang="ts" setup>
import Store from "./Store";
import api from "../services/api";
import { onMounted, ref } from "vue";
import PokemonInfo from "./PokemonInfo.vue";
import router from "../router";
import { log } from "console";
import { useStore } from "vuex";

const isShowingInformation = ref(false)

const pokemons = ref([]) as any;

const store = useStore();

onMounted(async () => {
  const pokeList = await api.getPokeList(0);

  await pokeList.data.results.forEach(async (result: any) => {
    const getPokemon = await api.getPokemon(result.name);
    pokemons.value.push(getPokemon.data);

  });
});

let pokemonAtual = ref({});

function changeShowInformations(pokemon: any): void {
  isShowingInformation.value = !isShowingInformation.value
  pokemonAtual.value = pokemon;
}

// o commit chama uma mutation
function addPoke(pokemon: any) {
  store.commit('pushPokemonToPokeTeam', pokemon)
  alert('Pokemon added. See all selected pokemon on page  Create Team ')
}

</script>



<template>
  <PokemonInfo v-if="isShowingInformation" :pokemon="pokemonAtual" @addPokemon="addPoke" />
  <h4>Click on the image to see the pokemon informations</h4>
  <div class="list">
    <div v-if="pokemons.length > 0">
      <article v-for="(pokemon, index) in pokemons" :key="index">
        <img
          @click="changeShowInformations(pokemon)"
          class="pointer"
          :src="pokemon.sprites.other['official-artwork'].front_default"
        />

        <h3>{{ pokemon.name }}</h3>
      </article>
    </div>
  </div>
</template>




<style lang="scss" scoped>
.list {
  text-align: center;
  margin-top: 2%;
  //display: grid;
  width: 100%;
  max-width: 800px;
  article {
    height: 300px;
    background-color: #efefef;
    text-align: center;
    text-transform: capitalize;
    border-radius: 10px;
    display: inline-block;
    cursor: pointer;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.5);
    h3 {
      margin: 5;
    }
  }
}

.pointer {
  cursor: pointer;
  height: 200px;
  width: 200px;
}
</style>
