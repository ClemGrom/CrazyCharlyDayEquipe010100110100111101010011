import {createClient} from '@/app/utils/supabase/server'
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { algo } from '../optimisation/algo';
import { Atelier, Participant } from '../optimisation/models';

export default async function Page() {

    const supabase = createClient()

    const {data, error} = await supabase.auth.getUser()

    if (!data.user) {
        redirect('/signin')
    }

    if (!data.user.user_metadata.admin) {
        return (<div className="flex flex-col items-center justify-center">
            <h1 className="text-5xl mt-10">Vous n'avez pas accès à cette page !</h1>
            <Link href="/"><Button className="mt-10">Retourner à l'accueil</Button></Link>
        </div>);
    }

    return (<div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900 items-center">
        <h1 className="text-5xl mt-10">Panel administrateur</h1>
        <div className="flex space-x-3 mt-10">
        <Link href="/attribuer">
            <Button>Attribuer les affectations</Button>
            </Link>
            <Link href="/create">
                <Button>Créer un atelier</Button>
                </Link>
        </div>
    </div>)
}