
import { Commandecl } from "./commandecl";
import { Commandefourn } from "./commandefourn";
import { Gerant } from "./gerant";

export class Pvente {
    id: Number=0;
    adresse: String='';
    contact: String='';
    email: String='';
    codepostal: String='';
    ville: String='';
    // Navigation properties
    gerantId: Number=0;
    gerant!: Gerant;
    commandecls: Commandecl[] = [];
    commandefourns: Commandefourn[]= [];

}
