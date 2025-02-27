export type Unit = string;
export type WeightUnit = Unit & (
    "Kg" |
    "G"
);
export type BeverageUnit = Unit & (
    "Chai" |
    "Lon" |
    "Chai & Lon"
);
export interface Product {
    name: string;
    price: number;
    unit: Unit;
    image?: string;
    description?: string;
}