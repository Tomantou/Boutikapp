
import { Categorie } from "./categorie";
import { Marque } from "src/app/Models/marque";
import { PromoProd } from "src/app/Models/promo_prod";
import { Stock } from "./stock";
export class Produit {

    id: number=0;
    nom: String='';
    prix: number=0;
    photo: String='';
    nouveaute: string='';
    // Navigation properthies
    categorieId: number=0;
    categorie!: Categorie; 
    marqueId: number=0;
    marque!: Marque; 
    promoProds:PromoProd[] = [];
}
