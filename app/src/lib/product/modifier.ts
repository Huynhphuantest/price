import type { Product } from './type.ts';

export interface Varianted {
    variants: Map<string, Product>
}
export function isVarianted(obj:any) {
    return "variants" in obj;
}

export interface Packed {
    amountPerPack: number
    packPrice?:number
}
export type PackedUnit = "Lốc";
export function isPacked(obj:any) {
    return "amountPerPack" in obj;
}

// If obj also implements Packed then it is mean pack per crated
export interface Crated {
    amountPerCrate: number
    cratePrice?:number
}
export function isCrated(obj:any) {
    return "amountPerCrate" in obj;
}
export type CratedUnit = "Thùng";