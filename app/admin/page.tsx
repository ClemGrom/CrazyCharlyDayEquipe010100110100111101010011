import {createClient} from '@/app/utils/supabase/server'
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import React from "react";
import {Select} from "@/components/ui/select";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Action from "@/app/create/render";

export default async function Page() {

    const supabase = createClient()
    const {data: ateliers} = await supabase.from('ateliers').select()

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
                        <CardHeader>
                            <CardTitle>Assigner un participant</CardTitle>
                            <CardDescription>Assigner un participant à un atelier</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="user">Select user</Label>
                                        <Select>
                                            <option>John Doe</option>
                                            <option>Anna Smith</option>
                                            <option>Peter Parker</option>
                                            <option>Susan Johnson</option>
                                            <option>Mike Williams</option>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="assignment">Assignment</Label>
                                        <Select>
                                            <option>Task 1</option>
                                            <option>Task 2</option>
                                            <option>Task 3</option>
                                            <option>Task 4</option>
                                            <option>Task 5</option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="comment">Comment</Label>
                                    <Textarea
                                        className="min-h-[100px] max-h-[200px]"
                                        id="comment"
                                        placeholder="Enter your comment here..."
                                    />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Assign</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Current Assignments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Assignment</TableHead>
                                        <TableHead>Assigned to</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Task 1</TableCell>
                                        <TableCell>John Doe</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Task 2</TableCell>
                                        <TableCell>Anna Smith</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Task 3</TableCell>
                                        <TableCell>Peter Parker</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Task 4</TableCell>
                                        <TableCell>Susan Johnson</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Task 5</TableCell>
                                        <TableCell>Mike Williams</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
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
