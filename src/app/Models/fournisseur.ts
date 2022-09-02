import { Commandefourn } from "./commandefourn";

export class Fournisseur {
    Id!: Number;
    Nom!: String;
    Adresse!: String;
    Contact!: String;
    Email!: String;

        // Navigation properties
    commandefourns: Commandefourn [] = [];
    
}