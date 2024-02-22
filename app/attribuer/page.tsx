'use client';

import { Button } from "@/components/ui/button";

export default function Page(){

    const handleClick = ():void => {
        fetch("api").then( (rep) => {
            console.log(rep);
        })
    }

    return (

        <div>
            <Button onClick={handleClick} >Attribuer les affectations</Button>
        </div>

    );
}