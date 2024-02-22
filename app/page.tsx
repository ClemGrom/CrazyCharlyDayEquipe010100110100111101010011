import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ContainerScroll } from "@/components/ui/scroll";
import Link from "next/link";

const ateliers = [
  {
    titre: "Atelier Cuisine du Monde",
    description:
      "Découvrez les saveurs d'ailleurs en préparant des plats typiques de différents pays.",
    image: "https://picsum.photos/id/101/300/300",
  },
  {
    titre: "Atelier Pâtisserie",
    description: "Apprenez à réaliser des desserts gourmands et raffinés.",
    image: "https://picsum.photos/id/102/300/300",
  },
  {
    titre: "Témoignage de Sarah",
    description:
      "Grâce à La Boîte à Cuisine, j'ai découvert une passion pour la cuisine et j'ai rencontré des gens formidables.",
    image: "https://picsum.photos/id/103/300/300",
  },
  {
    titre: "Atelier Cuisine Végétarienne",
    description:
      "Explorez l'univers de la cuisine végétarienne pour des repas sains et savoureux.",
    image: "https://picsum.photos/id/104/300/300",
  },
  {
    titre: "Atelier Cuisine Zéro Déchet",
    description:
      "Apprenez à cuisiner de manière responsable en réduisant le gaspillage alimentaire.",
    image: "https://picsum.photos/id/114/300/300",
  },
  {
    titre: "Atelier Fermentation",
    description:
      "Découvrez les techniques de fermentation pour préparer des aliments probiotiques maison.",
    image: "https://picsum.photos/id/106/300/300",
  },
  {
    titre: "Atelier Cuisine Saisonnière",
    description:
      "Cuisinez en harmonie avec les saisons en utilisant des produits frais et locaux.",
    image: "https://picsum.photos/id/107/300/300",
  },
  {
    titre: "Atelier Cuisine pour Enfants",
    description:
      "Initiez les plus jeunes à la cuisine avec des recettes simples et amusantes.",
    image: "https://picsum.photos/id/108/300/300",
  },
  {
    titre: "Atelier Repas Rapides et Sains",
    description:
      "Apprenez à préparer des repas rapides, sains et équilibrés pour le quotidien.",
    image: "https://picsum.photos/id/109/300/300",
  },
  {
    titre: "Atelier Boissons et Cocktails Sans Alcool",
    description:
      "Créez des boissons rafraîchissantes et originales sans une goutte d'alcool.",
    image: "https://picsum.photos/id/110/300/300",
  },
];

export default function Home() {
  return (
    <>
      <ContainerScroll
        ateliers={ateliers}
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              La boîte à Pizza <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Association Accueil & Réinsertion Sociale
              </span>
            </h1>
          </>
        }
      />
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            Nos Ateliers
          </h2>
          <p className="mt-4 text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Découvrez nos ateliers à thème et inscrivez-vous pour participer.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                className="w-full h-56 object-cover object-center"
                src="/placeholder.svg"
                alt="Atelier 1"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">
                  Atelier 1
                </h3>
                <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                  Description courte de l'atelier pour donner envie de
                  participer.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5">
            <Button asChild>
                <Link href="/registration">Inscrivez-vous</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">
            Inscrivez-vous
          </h2>
          <p className="mt-4 text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Remplissez le formulaire ci-dessous pour vous inscrire à nos
            ateliers.
          </p>
          <div className="mt-12 max-w-lg mx-auto">
            <form>
              <div className="grid grid-cols-1 gap-6">
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">
                    Nom complet
                  </span>
                  <Input
                    className="mt-1 block w-full"
                    placeholder="Jean Dupont"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">
                    Adresse e-mail
                  </span>
                  <Input
                    className="mt-1 block w-full"
                    placeholder="jean.dupont@example.com"
                    type="email"
                  />
                </label>
                <label className="block">
                  <span className="text-gray-700 dark:text-gray-300">
                    Message
                  </span>
                  <Textarea
                    className="mt-1 block w-full"
                    rows={4}
                    placeholder="Votre message"
                  ></Textarea>
                </label>
                <Button
                  type="submit"
                  className="w-full py-3 px-6 text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm"
                >
                  Envoyer
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
