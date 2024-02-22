// Script d'automatisation du système de score 

import { Atelier, Participant } from "./models";


interface ScoreParams {
    listeAteliers: Atelier[];
    listeParticipants: Participant[];
}
// TODO à refaire 
const checkLimitWorkshop = (params: ScoreParams): boolean => {
    // Init
    let countWorkshop = {} as { [key: number]: number };
    params.listeAteliers.forEach(atelier => {
        countWorkshop[atelier.id] = 0;
    });

    // Counting
    params.listeParticipants.forEach(participant => {
        let atelier = getIdByTheme(params.listeAteliers, participant.ordre1);
        countWorkshop[atelier] = countWorkshop[atelier] + 1;
    });

    // Check if all workshops are full
    let b = true;
    for (let key in countWorkshop) {
        if (countWorkshop[key] < params.listeAteliers[Number(key)].nb) {
            b = false;
        }
    }
    return b;
};


// TODO à voir
const checkDouble = (params: ScoreParams) => {

};

const gainByPreference = (params: ScoreParams) : number=> {
    let score = 0;
    params.listeParticipants.forEach(participant => {
        // regarder pour chaque participant sa liste de préférence
        let voeux: String[] = [participant.ordre1, participant.ordre2, participant.ordre3, participant.ordre4, participant.ordre5, participant.ordre6];
        voeux.forEach(choix => {
            // regarder pour chaque atelier si c'est son choix
            params.listeAteliers.forEach(atelier => {
                if (atelier.theme === choix) {
                    // si c'est son choix
                    if (atelier.listeIdParticipants.includes(participant.id)) {
                        switch (choix) {
                            case participant.ordre1:
                               score += 6;
                            case participant.ordre2:
            
                            case participant.ordre3:
            
                            case participant.ordre4:
            
                            case participant.ordre5:
            
                            case participant.ordre6:
                        }
            
                    }
                }
            
            });
           

        });
    });
    return score;
};

const degression = (params: ScoreParams) => { };

const allAreServe = (params: ScoreParams) => { };

const equity = (params: ScoreParams) => { };

const getIdByTheme = (listeAteliers: Atelier[], theme: String) => {
    let id = -1;
    listeAteliers.forEach(atelier => {
        if (atelier.theme === theme) {
            id = atelier.id;
        }
    });
    return id;

};

const score = (params: ScoreParams) => {
    let score = 0;

}
