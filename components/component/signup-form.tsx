import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {signup} from "@/app/auth/action";

export function SignupForm() {
    return (<div className="flex items-center min-h-screen px-4">
            <form className="w-full max-w-sm mx-auto space-y-4">
                <h2 className="text-2xl font-bold">Formulaire d'inscription</h2>
                <div className="space-y-2">
                    <div className="space-y-2">
                        <Label htmlFor="first-name">Prénom</Label>
                        <Input id="first-name" name="first-name" placeholder="Entrez votre prénom" required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="last-name">Nom</Label>
                        <Input id="last-name" name="last-name" placeholder="Entrez votre nom" required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Adresse mail</Label>
                        <Input
                            id="email"
                            placeholder="Entrez votre adresse mail"
                            required
                            name="email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Mot de passe</Label>
                        <Input id="password" name="password" placeholder="Entrez votre mot de passe" required
                               type="password"/>
                    </div>
                </div>
                <div className="flex flex-col space-y-3">
                    <Button className="w-full" formAction={signup}>
                        S'inscrire
                    </Button>
                    <Link href="signin" className="font-medium text-center text-gray-600 hover:text-gray-500">
                        Déjà inscrit ? Se connecter
                    </Link>
                </div>
            </form>
        </div>);
}
