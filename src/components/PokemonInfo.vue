<script lang="ts" setup>
import { ref } from "vue";
import Store from "./Store";
import PokemonList from "./PokemonList.vue";
import CreatePokemonTeam from "./CreatePokemonTeam.vue";
import { useStore } from "vuex";

defineProps<{
  pokemon: {};
}>();
const store = useStore();

const show = ref(true)

function closeInfo() {
  show.value = !show.value;
}

const isCreatingATeam = ref(false);


</script>

<template>
  <div class="detail" v-if="show">
    <div class="detail-view">
      <div class="image">
        <img
          :src="pokemon.sprites.other['official-artwork'].front_default"
          width="150"
          height="150"
          alt=""
        />
      </div>

      <div class="data">
        <h2>{{ pokemon.name }}</h2>
        <div class="property">
          <div class="left">Base Experience</div>
          <div class="right">{{ pokemon.base_experience }} XP</div>
        </div>

        <div class="property">
          <div class="left">Height</div>
          <div class="right">{{ pokemon.height / 10 }} m</div>
        </div>

        <div class="property">
          <div class="left">Weight</div>
          <div class="right">{{ pokemon.weight / 10 }} kg</div>
        </div>

        <h3>Pokemon Types</h3>
        <div class="types">
          <div
            class="type"
            v-for="(value, index) in pokemon.types"
            :key="'value' + index"
          >
            {{ value.type.name }}
          </div>
        </div>
        <h3>Abilities</h3>
        <div class="abilities">
          <div
            class="ability"
            v-for="(value, index) in pokemon.abilities"
            :key="'value' + index"
          >
            {{ value.ability.name }}
          </div>
        </div>
      </div>

      <button class="close" @click="closeInfo">close</button>
      <button class="close" @click="$emit('addPokemon', pokemon)">
        Add Pokemon to a Team
      </button>
    </div>
  </div>

  <CreatePokemonTeam v-if="isCreatingATeam" :addedPokemon="addPokemon" />
</template>



<style lang="scss" scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 110px 10px 10px;
  width: calc(100% - 30px);
  height: calc(100vh - 20px);
  background: rgba($color: #000000, $alpha: 0.7);
  .detail-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 500px;
    padding: 110px 0 0;
    background-color: #fff;
    border-radius: 5px;

    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -70px;
      width: 250px;
      height: 200px;
      background-color: #333;
      border-radius: 10%;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
    }
    h2 {
      text-transform: capitalize;
    }
    .data {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 40px;
      .property {
        width: 90%;
        max-width: 400px;
        border-bottom: 2px solid rgb(173, 149, 11);
        margin-bottom: 12px;
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
      h3 {
        width: 90%;
        max-width: 400px;
        border-bottom: 2px solid rgb(173, 149, 11);
      }
      .types,
      .abilities {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 90%;
        max-width: 400px;
        .type,
        .ability {
          margin: 0 10px 10px 0;
          padding: 5px 10px;
          border-radius: 20px;
          color: #fff;
          //	Relative to font-size of the root element
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: capitalize;
        }
        .type {
          background-color: #856602;
        }
        .ability {
          background-color: #856602;
        }
      }
    }
    .close {
     border-radius: 10px;
    background-color: #333;
    color: #ffdc3d;
    padding: 7px 15px;
    margin-bottom: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    }
  }
}
</style>