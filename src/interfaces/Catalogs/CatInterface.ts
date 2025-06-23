export interface CatMunicipalitiesInterface {
    id: number;
    name: string;
    id_state: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

export interface CatStatesInterface {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}

export interface CatsInterface {
    cat_states: CatStatesInterface[];
    cat_municipalities: CatMunicipalitiesInterface[];
}