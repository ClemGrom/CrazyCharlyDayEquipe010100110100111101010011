import {createClient} from '@/app/utils/supabase/server'
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React from "react";
import {Select} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Action from "@/app/create/render";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";

export default async function Page() {

    const supabase = createClient()
    const {data: ateliers} = await supabase.from('ateliers').select()
    const {data: candidats} = await supabase.from('candidats').select()

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

    return (<main className="flex flex-col gap-4 p-4 md:gap-8 md:p-6 justify-center items-center">
        <Tabs className="w-full max-w-3xl" defaultValue="account">
            <TabsList className="grid grid-cols-2">
                <TabsTrigger value="account">Assigner un participant</TabsTrigger>
                <TabsTrigger value="password">Créer un atelier</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
                <div className="space-y-4">
                    <Card>
                        <CardContent>
                            <div className="flex flex-col items-center mt-10">
                                <Link href={"attribuer"}>
                                    <Button>Attribuer les affectations</Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
            <TabsContent value="password">
                <div className="space-y-4">
                    <Card>
                        <CardContent>
                            <Action/>
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
    </main>);
}
