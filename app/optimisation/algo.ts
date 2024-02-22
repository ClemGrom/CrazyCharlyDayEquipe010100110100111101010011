import { createClient } from "../utils/supabase/server";
import { Atelier, Participant } from "./models";

interface ParticipantAlgo {
    participant: Participant;
    score: number;
    nbAtelier: number;
    listeAteliers: Atelier[];
}

interface AtelierParticipant {
    idAtelier: number;
    idParticipant: number;
}

interface colonneRegle3 {
    rang: number;
    points: number;
}

const tableauRegle3: colonneRegle3[] = [
    { rang: 1, points: 10 },
    { rang: 2, points: 8 },
    { rang: 3, points: 6 },
    { rang: 4, points: 4 },
    { rang: 5, points: 2 },
    { rang: 6, points: 1 },
]

function prepaAlgo(listeAteliers: Atelier[], listeParticipants: ParticipantAlgo[], nbDemandes: number, nbPlacesAteliers: number): number {

    var total : number = 0;
    const listeAP : AtelierParticipant[] = [];

    while (nbDemandes != 1 && nbPlacesAteliers != 1) {
        listeParticipants.forEach((p) => {
            if (p.nbAtelier < p.participant.nbDemande) {
                const voeux = [p.participant.ordre1, p.participant.ordre2, p.participant.ordre3, p.participant.ordre4, p.participant.ordre5, p.participant.ordre6];
                for (let i = 0; i < voeux.length; i++) {
                    const voeu = voeux[i];
                    for (let j = 0; j < listeAteliers.length; j++) {
                        const atelier = listeAteliers[j];
                        if (atelier.theme.match(voeu) && atelier.nb > 0 && atelier.listeIdParticipants.includes(p.participant.id)) {
                            listeAP.push({idAtelier:atelier.id,idParticipant:p.participant.id});
                            atelier.listeIdParticipants.push(p.participant.id);
                            atelier.nb -= 1;
                            nbDemandes -= 1;
                            nbPlacesAteliers -= 1;
                            p.nbAtelier += 1;
                            // Règle  3 +  4
                            var rang = voeux.indexOf(voeu) + p.nbAtelier;
                            if (rang > 5) rang = 5;
                            p.score += tableauRegle3[rang].points;
                            break; // Breaks out of the inner loop
                        }
                    }
                }
            }
        })
        listeParticipants.sort((a, b) => a.score - b.score);
    } 

    listeParticipants.forEach(p => {
        total += p.score;
    })

    const supabase = createClient();

    listeAP.forEach(async (ap) => {
        const { error } = await supabase.from('countries').insert(ap);
    })

    return total;
}


function algo(listeAteliers: Atelier[], listeParticipants: Participant[]): number {

    const listeParticipantsAlgo: ParticipantAlgo[] = [];
    var demandes: number;
    var nbPlaces: number;

    listeParticipants.forEach(participant => {
        let participantAlgo = {} as ParticipantAlgo;
        participantAlgo.participant = participant;
        participantAlgo.score = 0;
        participantAlgo.nbAtelier = 0;
        participantAlgo.listeAteliers = [];
        listeParticipantsAlgo.push(participantAlgo);
        demandes += participant.nbDemande;
    });
    listeAteliers.forEach(atelier => {
        nbPlaces += atelier.nb;
    })

    return prepaAlgo(listeAteliers, listeParticipantsAlgo, demandes, nbPlaces);
}

export { algo }