import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";
import {ContainerScroll} from "@/components/ui/scroll";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";

const ateliers = [
    {
        titre: "Atelier Cuisine du Monde",
        description: "Découvrez les saveurs d'ailleurs en préparant des plats typiques de différents pays.",
        image: "https://picsum.photos/id/101/300/300",
    },
    {
        titre: "Atelier Pâtisserie",
        description: "Apprenez à réaliser des desserts gourmands et raffinés.",
        image: "https://picsum.photos/id/102/300/300",
    },
    {
        titre: "Témoignage de Sarah",
        description: "Grâce à La Boîte à Cuisine, j'ai découvert une passion pour la cuisine et j'ai rencontré des gens formidables.",
        image: "https://picsum.photos/id/103/300/300",
    },
    {
        titre: "Atelier Cuisine Végétarienne",
        description: "Explorez l'univers de la cuisine végétarienne pour des repas sains et savoureux.",
        image: "https://picsum.photos/id/104/300/300",
    },
    {
        titre: "Atelier Cuisine Zéro Déchet",
        description: "Apprenez à cuisiner de manière responsable en réduisant le gaspillage alimentaire.",
        image: "https://picsum.photos/id/114/300/300",
    },
    {
        titre: "Atelier Fermentation",
        description: "Découvrez les techniques de fermentation pour préparer des aliments probiotiques maison.",
        image: "https://picsum.photos/id/106/300/300",
    },
    {
        titre: "Atelier Cuisine Saisonnière",
        description: "Cuisinez en harmonie avec les saisons en utilisant des produits frais et locaux.",
        image: "https://picsum.photos/id/107/300/300",
    },
    {
        titre: "Atelier Cuisine pour Enfants",
        description: "Initiez les plus jeunes à la cuisine avec des recettes simples et amusantes.",
        image: "https://picsum.photos/id/108/300/300",
    },
    {
        titre: "Atelier Repas Rapides et Sains",
        description: "Apprenez à préparer des repas rapides, sains et équilibrés pour le quotidien.",
        image: "https://picsum.photos/id/109/300/300",
    },
    {
        titre: "Atelier Boissons et Cocktails Sans Alcool",
        description: "Créez des boissons rafraîchissantes et originales sans une goutte d'alcool.",
        image: "https://picsum.photos/id/110/300/300",
    },
];



export default function Home() {
    return (<>
        <ContainerScroll
            ateliers={ateliers}
            titleComponent={
                <>
                    <h1 className="text-xl font-semibold text-gray-600">
                        Association Accueil
                        & Réinsertion Sociale <br />
                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
                La Boîte à Cuisine
                        </span>
                    </h1>
                </>
            }
        />
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <img src="https://www.asso-ars.fr/images/elements/logo_aars.png" alt="Association AARS" className="mx-auto" />
                <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">À propos de nous</h2>
                <p className="mt-4 text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    La Boîte à Cuisine est fondée par l'Association Accueil & Réinsertion Sociale (AARS) pour favoriser l'insertion sociale et professionnelle des personnes en difficulté. Nous proposons des ateliers de cuisine pour apprendre à cuisiner, partager des recettes et des savoir-faire, et créer du lien social.
                </p>

            </div>
        </section>

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">Actualités et événements</h2>
                <Carousel className="w-full max-w-xs mx-auto mt-12">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src={`https://picsum.photos/id/${index + 200}/300/300`} alt="" className="w-full h-full object-cover" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>
        </section>

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">Inscrivez-vous à la newsletter</h2>
                <p className="mt-4 text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Recevez les dernières actualités et les prochaines dates d'ateliers directement dans votre boîte e-mail.
                </p>
                <div className="mt-12 max-w-lg mx-auto">
                    <form>
                        <div className="grid grid-cols-1 gap-6">
                            <label className="block">
                                <span className="text-gray-700 dark:text-gray-300">Nom complet</span>
                                <Input className="mt-1 block w-full" placeholder="Jean Dupont"/>
                            </label>
                            <label className="block">
                                <span className="text-gray-700 dark:text-gray-300">Adresse e-mail</span>
                                <Input className="mt-1 block w-full" placeholder="jean.dupont@example.com" type="email"/>
                            </label>
                            <Button type="submit" className="w-full py-3 px-6 text-center text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm">
                                Souscrire
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>);
}
