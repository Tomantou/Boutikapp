
import { Commandecl } from "./commandecl";
import { Facture } from "./facture";

export class Client {
    id: number=0;
    nom: String='';
    prenoms: String='';
    adresse: String='';
    contact: String= '';
    email: String ='';
    codepostal: String='';
    ville: String='';
    civilite: String='';
    // Navigation properties
    commandescl: Commandecl[] = [];
    factures: Facture[] =[];

}