import { Produit } from "./produit";
import { Pvente } from "./pvente";



export class Stock {
    Id!: String;
    Quantite!: Number;
    QuantiteMin!: Number;
    QuantiteMax!: Number;

    // navigation properties
    PventeId!: Number;
    pvente!: Pvente;
    ProduitId!: Number;
    produit!: Produit;
    //transfertstocks: Transfertstock[] = [];
}
