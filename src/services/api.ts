import axios from 'axios'

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2"
})

export default class ManagerPokemons {
    static async getPokemon(id: number | string) {
        return await api.get(`pokemon/${id}`)
    }
    static async getPokeList(payload: number | string) {
         return await api.get(`pokemon?limit=20&offset=${payload}`)
    }
}
