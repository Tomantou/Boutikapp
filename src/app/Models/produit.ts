
import { Categorie } from "./categorie";
import { Marque } from "src/app/Models/marque";
import { PromoProd } from "src/app/Models/promo_prod";
import { Stock } from "./stock";
export class Produit {

    id?: number=0;
    nom: String='';
    prix: number=0;
    photo: String='';
    nouveaute: string='';
    description: string='';
    // Navigation properthies
    categorieid: number=0;
    marqueid: number=0;
    soldePromo: number=0;
   
}
