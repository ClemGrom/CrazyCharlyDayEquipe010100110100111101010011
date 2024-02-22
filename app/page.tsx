import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";

export default function Home() {
    return (<>
        <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
            <div
                className="container flex flex-col items-center justify-center space-y-4 text-center md:space-y-10">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">La Boîte à
                        Cuisine</h1>
                    <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Bienvenue sur la plateforme d'inscription aux ateliers de La Boîte à Cuisine. Découvrez nos
                        ateliers et
                        inscrivez-vous pour apprendre à cuisiner en toute convivialité.
                    </p>
                </div>
            </div>
        </section>
        <section className="py-12 lg:py-24">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nos Ateliers</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Découvrez nos ateliers à thème et inscrivez-vous pour participer.
                    </p>
                </div>
                <div
                    className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                        <img
                            alt="Atelier 1"
                            className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                            height="310"
                            src="/placeholder.svg"
                            width="550"
                        />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                        <img
                            alt="Atelier 2"
                            className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                            height="310"
                            src="/placeholder.svg"
                            width="550"
                        />
                    </div>
                    <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                        <img
                            alt="Atelier 3"
                            className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                            height="310"
                            src="/placeholder.svg"
                            width="550"
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Inscrivez-vous</h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Remplissez le formulaire ci-dessous pour vous inscrire à nos ateliers.
                    </p>
                </div>
                <div className="mx-auto max-w-[550px] space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="nom">
                                Nom complet
                            </Label>
                            <Input id="nom" placeholder="Nom complet"/>
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm" htmlFor="email">
                                Adresse e-mail
                            </Label>
                            <Input id="email" placeholder="Adresse e-mail" type="email"/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm" htmlFor="message">
                            Message
                        </Label>
                        <Textarea className="min-h-[100px] resize-none" id="message" placeholder="Votre message"/>
                    </div>
                    <Button className="w-full" type="submit">
                        Envoyer
                    </Button>
                </div>
            </div>
        </section>
    </>)
}
