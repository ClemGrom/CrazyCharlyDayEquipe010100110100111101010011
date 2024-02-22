export interface Atelier {
    id: number;
    theme: string;
    nb: number
}

export interface Participant {
    id: number;
    nom: string;
    nbDemande: number;
    ordre1: string;
    ordre2: string;
    ordre3: string;
    ordre4: string;
    ordre5: string;
    ordre6: string;
}