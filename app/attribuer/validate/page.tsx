'use client';

import React, {useEffect, useState} from "react";
import {AlgoResponse} from "@/app/optimisation/algo";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Atelier, Participant} from "@/app/optimisation/models";
import {Button} from "@/components/ui/button";

export default function Page() {

    const [affectation, setAffectation] = useState<AlgoResponse | null>(null);
    const [candidats, setCandidats] = useState<Participant[] | null>(null);
    const [ateliers, setAteliers] = useState<Atelier[] | null>(null);

    useEffect(() => {
        const dataAffect = localStorage.getItem("affectation");
        if (dataAffect) {
            setAffectation(JSON.parse(dataAffect).data);
        }

        const dataCandid = localStorage.getItem("candidats");
        if (dataCandid) {
            setCandidats(JSON.parse(dataCandid).data);
        }

        const dataAtelier = localStorage.getItem("ateliers");
        if (dataAtelier) {
            setAteliers(JSON.parse(dataAtelier).data);
        }

    }, []);

    console.log(affectation);

    if (!affectation) {
        return <span>Vous n'avez aucune affectation en cours.</span>
    }

    const listeJsx = affectation.listeAffectation.map((affectation) => {

        const atelier = ateliers?.find((atelier) => atelier.id === affectation.idAtelier);
        const participant = candidats?.find((candidat) => candidat.id === affectation.idParticipant);

        return (
            <TableRow>
                <TableCell>{atelier?.theme}</TableCell>
                <TableCell>{participant?.nom}</TableCell>
            </TableRow>
        )
    });

    return (
        <Card>
            <CardHeader>
                <CardTitle>Validation des affectations (score: {affectation.score})</CardTitle>
                <Button className="w-fit">Valider</Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Atelier affecté</TableHead>
                            <TableHead>Affecté(e) à </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {listeJsx}
                    </TableBody>
                </Table>
                <Button>Valider</Button>
            </CardContent>
        </Card>
    );
}