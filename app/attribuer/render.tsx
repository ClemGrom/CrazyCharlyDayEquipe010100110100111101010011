'use client';

import {Button} from "@/components/ui/button";
import {createClient} from "@/app/utils/supabase/client";

export default async function Render() {

    const supabase = createClient();
    const participants = await supabase.from('candidats').select();
    const ateliers = await supabase.from('ateliers').select();

    const handleClick = (): void => {
        fetch("api/calcul").then((rep) => rep.json())
            .then((data) => {
                localStorage.setItem("affectation", JSON.stringify(data));
                localStorage.setItem("candidats", JSON.stringify(participants));
                localStorage.setItem("ateliers", JSON.stringify(ateliers));
                window.location.href = "/attribuer/validate";
            });
    }

    return (<>
            <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800 flex flex-col space-y-3 items-center">
                <h1 className="text-4xl font-bold">Calcul des affections</h1>
                <Button className="w-fit" onClick={handleClick}>Attribuer les affectations</Button>
            </section>
        </>

    );
}