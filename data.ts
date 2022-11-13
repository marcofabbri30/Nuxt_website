interface Name {
    id: number;
    name: string;
    gender: Gender;
    popularity:Popularity;
    length:Length;
}

export enum Gender {
    GIRL = 'Girl',
    BOY = 'Boy',
    UNISEX = 'Unisex' 
}
export enum Popularity {
    TRENDY = 'Trendy',
    UNIQUE = 'Unique'
}

export enum Length {
    SHORT = 'Short',
    LONG = 'Long',
    ALL = 'All' 
}

export const names: Name[] = [
    {
        id: 1,
        name: "Marco",
        gender: Gender.BOY,
        popularity: Popularity.TRENDY,
        length: Length.SHORT
    },
    {
        id: 2,
        name: "Giulia",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.SHORT
    },
    {
        id: 3,
        name: "Elisabetta",
        gender: Gender.GIRL,
        popularity: Popularity.TRENDY,
        length: Length.LONG
    }
]