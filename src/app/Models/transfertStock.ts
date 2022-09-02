
import { Pvente } from "./pvente";
import { Stock } from "./stock";

export class Transfertstock {
    Id!: Number;
    Quantite!: Number;
    Date!: Date;
    StockDestinationId!: String;
        // Navigation properties
    StockId!: String;
    stock!: Stock;
    PventeId!: Number;
    pvente!: Pvente;
    
}
