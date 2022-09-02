
import { PromoProd } from "./promo_prod";

export class Promotion {
    Id!: Number;
    Datedebut!: Date;
    Datefin!: Date;
    Libelle!: String;

    // Navigation propertizs
    promoProds: PromoProd[] = [];

}