import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import React from "react";
import {createClient} from "@/app/utils/supabase/client";
import AtelierCard from "@/components/atelierCard";

export default async function Page() {

    const supabase = createClient()
    const {data: ateliers} = await supabase.from('ateliers').select()

    return (
        <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            <main
                className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
                    <form className="flex-1">
                        <Input className="bg-white dark:bg-gray-950" placeholder="Rechercher un atelier"/>
                        <Button className="sr-only" type="submit">
                            Rechercher
                        </Button>
                    </form>
                    <Button>Créer un atelier</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
                    {
                        ateliers?.map((atelier) => {
                            return <AtelierCard theme={atelier.theme} nb={atelier.nb}
                                                key={atelier.id}/>
                        })
                    }
                </div>
            </main>
        </div>
    )
}