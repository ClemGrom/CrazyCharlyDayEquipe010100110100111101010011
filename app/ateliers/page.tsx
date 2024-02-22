import {createClient} from '@/app/utils/supabase/server'
import {Button} from '@/components/ui/button'
import AtelierList from "@/app/ateliers/AtelierList";
import {Suspense} from "react";
import {redirect} from "next/navigation";
import Link from "next/link";

export default async function Page() {

    const supabase = createClient()
    const {data: ateliers} = await supabase.from('ateliers').select()

    const {data, error} = await supabase.auth.getUser()

    if (!data.user) {
        redirect('/signin')
    }

    return (<div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
            <main
                className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <Link href="/create">
                <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
                    <Button>Créer un atelier</Button>
                </div>
                </Link>
                <div className="max-w-6xl w-full mx-auto">
                    <Suspense fallback={<AtelierList ateliers={[]} isLoading={true}/>}>
                        <AtelierList ateliers={ateliers || []} isLoading={false}/>
                    </Suspense>
                </div>
            </main>
        </div>)
}