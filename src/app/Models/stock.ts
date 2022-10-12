import { Produit } from "./produit";
import { Pvente } from "./pvente";



export class Stock {
    id: String ='';
    quantite: Number=0;
    quantitemin: Number=0;
    quantitemax: Number = 0;
    // navigation properties
    pventeid: Number = 0;
    produitid: Number =0;
    //produit: Produit = new Produit;
    //transfertstocks: Transfertstock[] = [];
}
