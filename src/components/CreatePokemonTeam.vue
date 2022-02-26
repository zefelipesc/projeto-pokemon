<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import router from "../router";
import Teams from "../views/Teams.vue";

defineProps<{
  addedPokemon: {};
}>();

const pokeTeam = ref([]);
const store = useStore();

function pokemonTeam(addedPokemon: any) {
  pokeTeam.value = addedPokemon;
}

function removePokemonOfTeam(id: any) {
  store.commit("removePokemon", id);
}

function saveName() {
  const teamName: any = document.querySelector(".input");
  store.commit("teamName", { name: teamName.value });
}

function saveTeam(pokeTeam) {
  store.commit('savePokeTeam', store.state.teams = pokeTeam)
  router.push('/teams')
}
</script>

<template>
  <div class="list">
    <div>
      <input type="text" class="input" placeholder="Name of Poke Team" />
      <button class="remove" @click="saveName">save</button>
      <h4>{{ store.state.pokeTeam.name }}</h4>
    </div>
    <article v-for="(pokemon, id) in store.state.pokeTeam" :key="id">
      <img
        class="pointer"
        :src="pokemon.sprites.other['official-artwork'].front_default"
      />
      <h3>{{ pokemon.name }}</h3>
      <button class="remove" @click="removePokemonOfTeam(id)">Remove</button>
    </article>

    <button class="remove" @click="saveTeam(store.state.pokeTeam)">
      Save Your Team
    </button>
  </div>
</template>


<style lang="scss" scoped>
.list {
  text-align: center;
  margin-top: 2%;
  width: 100%;
  max-width: 800px;
  .input {
    border-radius: 5px;
    width: 500px;
    height: 30px;
    font-size: 20px;
  }
  article {
    height: 340px;
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
  .remove {
    border-radius: 10px;
    background-color: #333;
    color: #ffdc3d;
    padding: 6px 5px;
    margin-bottom: 20px;
    font-size: 1.2rem;
    cursor: pointer;
  }
}

.pointer {
  cursor: pointer;
  height: 200px;
  width: 200px;
}
</style>
