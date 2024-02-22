import { Atelier, Participant } from "./models";


interface algoParams {
    listeAteliers: Atelier[];
    listeParticipants: Participant[];
}

interface ParticipantAlgo {
    participant: Participant;
    score: number;
    nbAtelier: number;
}


const algo = (algoParams: algoParams) => {

    const tempParticipants: Participant[] = [];
    const listeParticipantsAlgo: ParticipantAlgo[] = [];
    tempParticipants.forEach(participant => {
        let participantAlgo = {} as ParticipantAlgo;
        participantAlgo.participant = participant;
        participantAlgo.score = 0;
        participantAlgo.nbAtelier = 0;
        listeParticipantsAlgo.push(participantAlgo);
    });


    // {idParticipant : score}
    let atelierDispo = true;
    let demandeFournis = false;
    while (atelierDispo && !demandeFournis) {
        algoParams.listeAteliers.forEach(atelier => {
            if (atelier.nb < atelier.listeIdParticipants.length) {
                atelierDispo = false;
            }
        });
        //Liste des participants avec ces choix
        let listeParticipantsChoix = [] as Participant[];
        
        listeParticipantsAlgo.forEach(participantAlgo => {

        });
    }
}