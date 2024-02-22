import Link from "next/link";

export default async function FooterPartial() {
    return (<footer className="bg-gray-900 py-12 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
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
        </footer>);
}