import { Produit } from "./produit";
import { Pvente } from "./pvente";



export class Stock {
    id: String ='';
    quantite: Number=0;
    quantitemin: Number=0;
    quantitemax: Number = 0;
    // navigation properties
    pventeId: Number = 0;
    pvente: Pvente  = new Pvente;
    produitid: Number =0;
    //produit: Produit = new Produit;
    //transfertstocks: Transfertstock[] = [];
}
