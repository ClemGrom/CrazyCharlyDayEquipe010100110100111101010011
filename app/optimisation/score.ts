// Script d'automatisation du système de score 

import { Atelier, Participant } from "./models";

interface ScoreParams {
    listeAteliers:Atelier[];
    listeParticipants:Participant[];
}

const checkLimitWorkshop = (params : ScoreParams):boolean =>  {
    // Init
    let countWorkshop =  {} as {[key: number]: number};
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
        if (countWorkshop[key] < 10) {
            b = false;
        }
    }
    return b;
};

const checkDouble = (params : ScoreParams) => {

};

const gainByPreference = (params : ScoreParams) => { };

const degression = (params : ScoreParams) => { };

const allAreServe = (params : ScoreParams) => { };

const equity = (params : ScoreParams) => { };

const getIdByTheme = (listeAteliers:Atelier[], theme:String) => { 
    let id = -1;
    listeAteliers.forEach(atelier => {
        if (atelier.theme === theme) {
            id = atelier.id;
        }
    });
    return id;

};