export interface PokemonCard {
    id: number;
    name: string;
    image: string;
    price: number;
}

export type Products = PokemonCard[];

export type Ability = {
    title: string;
    description: string;
};

export type Stat = {
    title: string;
    value: number;
};

export interface ProductDetailsResponse {
    id: number;
    name: string;
    image: string;
    abilities: Ability[];
    stats: Stat[];
    price: number;
}
