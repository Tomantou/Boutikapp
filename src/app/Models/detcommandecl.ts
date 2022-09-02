
import { Commandecl } from "./commandecl";
import { Produit } from "./produit";

export class Detcommandecl {
    Id!: Number;
    Quantite!: Number;
    Prix!: Number;
    // navigation properties
    ProduitId!: Number;
    produit!: Produit;
    CommandeclId!: Number;
    commandecl!: Commandecl;

}