
import { Produit } from "./produit";

export class Marque {
     Id!: number;
     Nom!: String;
     Origine!: String;
    // Navigation properties
    produits: Produit[] = [];

}