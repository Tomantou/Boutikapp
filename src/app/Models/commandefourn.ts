
import { Detcommandefourn } from "./detcommandefourn";
import { Fournisseur } from "./fournisseur";
import { Pvente } from "./pvente";

export class Commandefourn {
    Id!: Number;
    Total!: Number;
    date!: Date;
    situation!: String;

    // Navigation properties
    FournisseurId!: Number;
    fournisseur!: Fournisseur;
    PventeId!: Number;
    pvente!: Pvente;
    detcommandefourns: Detcommandefourn[] = [];

}
