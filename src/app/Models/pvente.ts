
import { Commandecl } from "./commandecl";
import { Commandefourn } from "./commandefourn";
import { Gerant } from "./gerant";

export class Pvente {
    Id!: Number;
    Adresse!: String;
    Contact!: String;
    Email!: String;
    Codepostal!: String;
    Ville!: String;
    // Navigation properties
    gerantId!: Number;
    gerant!: Gerant;
    commandecls: Commandecl[] = [];
    commandefourns: Commandefourn[]= [];

}
