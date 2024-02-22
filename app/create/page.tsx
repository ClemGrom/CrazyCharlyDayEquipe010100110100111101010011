"use client";

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {CalendarIcon} from "lucide-react";
import {useState} from "react";
import {format} from "date-fns"
import {Calendar} from "@/components/ui/calendar";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export default function Page(): JSX.Element {
    const [date, setDate] = useState<Date>()


    return (
        <>
            <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Créer un nouvel
                        atelier</h2>
                    <div className="mx-auto max-w-[550px] space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-sm" htmlFor="nom">
                                    Thème de la cuisine
                                </Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Choisir un thème" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Thème</SelectLabel>
                                            <SelectItem value="fr">Française</SelectItem>
                                            <SelectItem value="it">Italienne</SelectItem>
                                            <SelectItem value="jp">Japonaise</SelectItem>
                                            <SelectItem value="mex">Mexicaine</SelectItem>
                                            <SelectItem value="gr">Grecque</SelectItem>
                                            <SelectItem value="or">Orientale</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm" htmlFor="email">
                                    Nombre de personnes prévues
                                </Label>
                                <Input id="nombre" placeholder="3" type="number"/>
                            </div>
                        </div>
                        <Button className="w-full" type="submit">
                            Créer l'atelier
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}