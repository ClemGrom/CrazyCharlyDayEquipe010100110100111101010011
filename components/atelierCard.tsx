import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {HomeIcon, MoreHorizontalIcon} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import React from "react";

export default async function AtelierCard(
    {theme, nb}:
        { theme: string, nb: number }) {


    return (<Card>
        <CardHeader className="flex flex-row items-center gap-4">
            <HomeIcon className="w-8 h-8"/>
            <div className="grid gap-1">
                <CardTitle>{theme}</CardTitle>
                <CardDescription>Nombre de participants : {nb}</CardDescription>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" size="icon" variant="ghost">
                        <MoreHorizontalIcon className="w-4 h-4"/>
                        <span className="sr-only">Toggle menu</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Project</DropdownMenuItem>
                    <DropdownMenuItem>View Settings</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </CardHeader>
        <CardContent className="grid gap-2">
            <div className="text-sm font-semibold">lorem</div>
        </CardContent>
    </Card>);
}