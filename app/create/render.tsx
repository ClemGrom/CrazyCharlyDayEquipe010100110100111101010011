'use client';

import {createClient} from "@/app/utils/supabase/client";
import {useState} from "react";
import {Label} from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";
import {toast} from "sonner";

export default function Action() {

    const supabase = createClient();

    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [dataForm, setDataForm] = useState({
        theme: "",
        nb: 0,
    });

    function notify(title: string, desc: string) {
        toast(title, {
            description: desc,
            action: {
                label: "Fermer",
                onClick: () => {

                }
            },
        })
    }

    const handleCreation = () => {
        setLoading(true);
        setErrorMsg("");
        if (dataForm.nb >= 1 && (dataForm.theme === "FR" || dataForm.theme === "IT" || dataForm.theme === "JP" || dataForm.theme === "MEX" || dataForm.theme === "GR" || dataForm.theme === "OR")) {
            supabase.from('ateliers').insert(dataForm).then(r => {
                setLoading(false);
                notify("L'atelier a été créé avec succès", `${dataForm.nb} personnes pour un atelier de cuisine ${dataForm.theme} ont été ajoutées à la base de données`);
            });
        } else {
            setLoading(false);
            setErrorMsg("Veuillez remplir tous les champs correctement (nombre de personnes et thème de la cuisine)");
        }

    }

    const handleSelectChange = (value: string) => {
        setDataForm({...dataForm, theme: value});
    }

    const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataForm({...dataForm, nb: Number(e.target.value)});
    }

    return (
        <>
            <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Créer un nouvel
                        atelier</h2>
                    {errorMsg ?
                        <div className="bg-red-500 rounded-md w-fit p-3">
                            <p className="text-white">{errorMsg}</p>
                        </div>
                        : null
                    }

                    <div className="mx-auto max-w-[550px] space-y-4">
                        <div className="grid grid-cols-2 gap-4">

                            <div className="space-y-2">
                                <Label className="text-sm" htmlFor="nom">
                                    Thème de la cuisine
                                </Label>
                                <Select onValueChange={handleSelectChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Choisir un thème"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Thème</SelectLabel>
                                            <SelectItem value="FR">Française</SelectItem>
                                            <SelectItem value="IT">Italienne</SelectItem>
                                            <SelectItem value="JP">Japonaise</SelectItem>
                                            <SelectItem value="MEX">Mexicaine</SelectItem>
                                            <SelectItem value="GR">Grecque</SelectItem>
                                            <SelectItem value="OR">Orientale</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm" htmlFor="email">
                                    Nombre de personnes prévues
                                </Label>
                                <Input onChange={handleNombreChange} id="nombre" placeholder="Nombre" type="number"/>
                            </div>
                        </div>
                        <Button onClick={handleCreation} className="w-full" type="submit">
                            {loading ? <Loader2 className="h-4 w-4 animate-spin"/> : null}
                            Créer l'atelier
                        </Button>
                    </div>

                </div>
            </section>
        </>
    );
}