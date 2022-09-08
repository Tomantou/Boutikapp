
import { Categorie } from "./categorie";
import { Marque } from "src/app/Models/marque";
import { PromoProd } from "src/app/Models/promo_prod";
import { Stock } from "./stock";
export class Produit {

    Id: number=0;
    Nom: String='';
    Prix: number=0;
    Photo: String='';
    Nouveaute: string='';
    // Navigation properthies
    CategorieId: number=0;
    Categorie!: Categorie; 
    MarqueId: number=0;
    Marque!: Marque; 
    PromoProds:PromoProd[] = [];
}
