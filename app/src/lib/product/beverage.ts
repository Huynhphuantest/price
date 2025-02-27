import type { BeverageUnit, Product } from './type.ts';
import * as MODIFIERS from './modifier.ts';

type BeverageProduct = Product & {
    unit: BeverageUnit;
    type: string;
};

// Factory for creating a beverage product
function createBeverageProduct(
    base: Product & { unit: BeverageUnit },
    modifiers: Partial<{
        Packed: MODIFIERS.Packed;
        Crated: MODIFIERS.Crated;
        Varianted: Map<string, Product>;
    }>
): BeverageProduct & Partial<MODIFIERS.Packed> & Partial<MODIFIERS.Crated> & Partial<MODIFIERS.Varianted> {
    return {
        ...base,
        ...modifiers.Varianted,
        ...modifiers.Packed,
        ...modifiers.Crated,
        type: "Nước uống",
        variants: modifiers?.Varianted
    };
}

// Beverage list
export const beverages = [
    createBeverageProduct(
        {
            name: "CocaCola",
            image: "cocacola.png",
            unit: "Lon",
            price: 9_000,
        },
        {
            Packed: { amountPerPack: 6 },
            Crated: { amountPerCrate: 3 },
            Varianted: new Map([
                ["Big", {
                    name: "CocaCola",
                    image: "big-cocacola.png",
                    unit: "Chai",
                    price: 17_000
                }]
            ])
        }
    ),
    createBeverageProduct(
        {
            name: "Pepsi",
            image: "pepsi.png",
            unit: "Lon",
            price: 9_000,
        },
        {
            Packed: { amountPerPack: 6 },
            Crated: { amountPerCrate: 3 },
            Varianted: new Map([
                ["Big",{
                    name: "Pepsi",
                    image: "big-pepsi.png",
                    unit: "Chai",
                    price: 17_000
                }]
            ])
        }
    ),
];