/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Gw4dL9HaiIP
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Index() {
  return (
    <>
      <div className="bg-white border-b border-gray-100 dark:bg-gray-950">
        <div className="container px-4 py-6 md:py-8">
          <div className="grid items-center gap-4 md:gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Link className="flex items-center gap-2 text-xl font-medium" href="#">
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
            <nav className="hidden space-x-4 md:flex md:items-center md:justify-center lg:col-start-2 lg:justify-end xl:col-start-3 xl:justify-end">
              <Link
                className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Mission
              </Link>
              <Link
                className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Ateliers
              </Link>
              <Link
                className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Inscription
              </Link>
              <Link
                className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md hover:text-gray-900 dark:hover:text-gray-50"
                href="#"
              >
                Contact
              </Link>
            </nav>
            <div className="ml-auto space-x-4 md:hidden">
              <Link
                className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 dark:active:bg-gray-50/90"
                href="#"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 lg:py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container flex flex-col items-center justify-center space-y-4 text-center md:space-y-10">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">La Boîte à Cuisine</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Bienvenue sur la plateforme d'inscription aux ateliers de La Boîte à Cuisine. Découvrez nos ateliers et
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
          <div className="grid w-full grid-cols-1 items-stretch justify-center md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <Input id="nom" placeholder="Nom complet" />
              </div>
              <div className="space-y-2">
                <Label className="text-sm" htmlFor="email">
                  Adresse e-mail
                </Label>
                <Input id="email" placeholder="Adresse e-mail" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm" htmlFor="message">
                Message
              </Label>
              <Textarea className="min-h-[100px] resize-none" id="message" placeholder="Votre message" />
            </div>
            <Button className="w-full" type="submit">
              Envoyer
            </Button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 py-12 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
        <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-2">
            <p className="text-sm/relaxed">© 2023 La Boîte à Cuisine - Tous droits réservés</p>
          </div>
          <div
            className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
            style={{
              color: "black",
            }}
          >
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Mentions légales
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
