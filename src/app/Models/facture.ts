
import { Client } from "./client";

export class Facture {
    Id!: Number;
    Date!: Date;
    Statut!: String;

    // Navigation properties
   
    ClientId!: Number;
    client!: Client;

}