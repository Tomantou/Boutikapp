
import { Categorie } from "./categorie";
import { Marque } from "src/app/Models/marque";
import { PromoProd } from "src/app/Models/promo_prod";
import { Stock } from "./stock";
export class Produit {

    Id!: number;
    Nom!: String;
    Prix!: number;
    Photo!: String;
    Nouveaute!: string;

    // Navigation properthies

    CategorieId!: number;
    Categorie!: Categorie; 

    MarqueId!: number;
    Marque!: Marque;

    StockId!: number;
    Stock!: Stock;
    
    PromoProds:PromoProd[] = [];
}
