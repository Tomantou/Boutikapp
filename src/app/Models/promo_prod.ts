
import { Produit } from "./produit";
import { Promotion } from "./promotion";

export class PromoProd {
    Id!: Number;
    PromotionId!: Number;
    promotion!: Promotion;
    ProduitId!: Number;
    produit!: Produit;
    
}