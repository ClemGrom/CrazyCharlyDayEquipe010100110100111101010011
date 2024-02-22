import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login, signup } from "@/app/signin/action";

export function Form() {
  return (
    <div className="flex items-center min-h-screen px-4">
      <form className="w-full max-w-sm mx-auto space-y-4">
        <h2 className="text-2xl font-bold">Formulaire d'inscription</h2>
        <div className="space-y-2">
          <div className="space-y-2">
            <Label htmlFor="first-name">Prénom</Label>
            <Input id="first-name" placeholder="Entrez votre prénom" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Nom</Label>
            <Input id="last-name" placeholder="Entrez votre nom" required />
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
            <Input id="password" placeholder="Entrez votre mot de passe" required type="password" />
          </div>
        </div>
        <Button className="w-full" formAction={login}>
          Se connecter
        </Button>
        <Button className="w-full" formAction={signup}>
          S'inscrire
        </Button>
      </form>
    </div>
  );
}
