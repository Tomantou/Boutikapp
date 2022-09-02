
import { Commandecl } from "./commandecl";
import { Facture } from "./facture";

export class Client {
    Id!: number;
    Nom!: String;
    Preoms!: String;
    Adresse!: String;
    Contact!: String;
    Email!: String;
    Codepostal!: String;
    Ville!: String;
    Civilite!: String;
    // Navigation properties
    commandescl: Commandecl[] = [];
    factures: Facture[] =[];

}