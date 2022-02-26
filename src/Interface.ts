export interface IPokemon{

    id: number,
    name: string,
    base_experience: number,
    height: number,
    weight: number
    back_default: string,
    front_default: string,
    stats: {
        base_stat: number,
        effort: number,
        stat: {
            name: string,
            url: string
        }
    }[],
    types: {
        slot: number,
        type:{
            name: string,
            url: string
        }
    }[],
   

}