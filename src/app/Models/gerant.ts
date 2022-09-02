
import { Pvente } from "./pvente";
import { Transfertstock } from "./transfertStock";

export class Gerant {
    Id!: Number;
    Categorie!: String;
    Nom!: String;
    Prenom!: String;
    Contact!: String;
    Email!: String;
    // Navigathion properties
    pventes: Pvente[] = [];
    transfertStocks: Transfertstock[] = [];
    
}
