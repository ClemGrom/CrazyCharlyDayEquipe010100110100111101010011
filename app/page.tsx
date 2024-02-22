import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";

export default function Home() {
    return (<>
        <section className="py-20 lg:py-32">
            <div className="h-[30rem] w-full bg-dot-black/[0.2] relative flex items-center justify-center text-center">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
                <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                    <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-black py-8">La Boîte à Cuisine</h1>
                    <p className="mt-4 max-w-xl text-lg text-gray-500 mx-auto">
                        Découvrez nos ateliers et inscrivez-vous pour apprendre à cuisiner en toute convivialité.
                    </p>
                </p>
            </div>
        </section>

        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">Nos Ateliers</h2>
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
                            <h3 className="mb-2 text-xl font-semibold tracking-tight text-gray-800 dark:text-white">Atelier 1</h3>
                            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                                Description courte de l'atelier pour donner envie de participer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white">Inscrivez-vous</h2>
                <p className="mt-4 text-center max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                    Remplissez le formulaire ci-dessous pour vous inscrire à nos ateliers.
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
                            <label className="block">
                                <span className="text-gray-700 dark:text-gray-300">Message</span>
                                <Textarea className="mt-1 block w-full" rows={4} placeholder="Votre message"></Textarea>
                            </label>
                            <Button type="submit" className="w-full py-3 px-6 text-center text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm">
                                Envoyer
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>);
}
