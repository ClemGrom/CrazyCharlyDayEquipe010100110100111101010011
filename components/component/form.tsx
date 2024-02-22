import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Form({ onClick }: { onClick: () => void }) {
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="w-full max-w-sm mx-auto space-y-4">
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
              type="email"
            />
          </div>
        </div>
        <Button className="w-full" onClick={onClick}>
          Soumettre
        </Button>
      </div>
    </div>
  );
}
