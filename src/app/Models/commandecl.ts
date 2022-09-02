
import { Client } from "./client";
import { Detcommandecl } from "./detcommandecl";
import { Pvente } from "./pvente";

export class Commandecl {
    Id!: Number;
    date!: Date;
    Total!: Number;
    Adresselivraison!: String;
    Statut!: String;

    //Navigation properties
    ClientId!: Number;
    client!: Client;
    PventeId!: Number;
    pvente!: Pvente;
    detcommandecls: Detcommandecl[] = [];
    
}
