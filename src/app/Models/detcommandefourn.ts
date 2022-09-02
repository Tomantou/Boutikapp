
import { Commandefourn } from "./commandefourn";
import { Produit } from "./produit";

export class Detcommandefourn {
    Id!: Number;
    Quantite!: Number;
    Prix!: Number;

    // Navigation properties

    CommandefournId!: Number;
    commandefourn!: Commandefourn;
    ProduitId!: Number;
    produit!: Produit;
}
