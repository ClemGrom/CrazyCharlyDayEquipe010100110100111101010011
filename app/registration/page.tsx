"use client";

import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {useState} from "react";
import {Input} from "@/components/ui/input";

export default function Component() {

    const [data, setData] = useState({nom: '', nbDemande: 6, ordre1: '', ordre2: '', ordre3: '', ordre4: '', ordre5: '', ordre6: ''});

    const handleSelectChange1 = (value: string) => {
        setData({...data, ordre1: value})
    };

    const handleSelectChange2 = (value: string) => {
        setData({...data, ordre2: value})
    }


    const handleSelectChange3 = (value: string) => {
        setData({...data, ordre3: value})
    };

    const handleSelectChange4 = (value: string) => {
        setData({...data, ordre4: value})
    };

    const handleSelectChange5 = (value: string) => {
        setData({...data, ordre5: value})
        console.log(value);
    };

    const handleSelectChange6 = (value: string) => {
        setData({...data, ordre6: value})
    };

    const handleNom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, nom: event.target.value})
    };

    const handleSave = () => {

        fetch('/api/sumbission', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())

       console.log(data);
    };

    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-850">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Ateliers disponibles
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            Glissez-déposez la liste des ateliers par ordre de préférence
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Label>1.</Label>
                        <Select onValueChange={handleSelectChange1}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choisir un thème"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
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
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Label>2.</Label>
                        <Select onValueChange={handleSelectChange2}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choisir un thème"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
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
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Label>3.</Label>
                        <Select onValueChange={handleSelectChange3}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choisir un thème"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
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
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Label>4.</Label>
                        <Select onValueChange={handleSelectChange4}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choisir un thème"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
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
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Label>5.</Label>
                        <Select onValueChange={handleSelectChange5}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choisir un thème"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
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
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Label>6.</Label>
                        <Select onValueChange={handleSelectChange6}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Choisir un thème"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
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
                    <div className="flex flex-col gap-4 items-center justify-center">
                        <Label>Nom</Label>
                        <Input onChange={handleNom} type="text"></Input>
                    </div>
                    <Button onClick={handleSave} className="w-full max-w-xs">Save Changes</Button>
                </div>
            </div>
        </div>
    );
}
