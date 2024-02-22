import Link from "next/link";
import {HomeIcon} from "lucide-react";

export default async function NavbarPartial() {
    return (<div className="bg-white border-b border-gray-100 dark:bg-gray-950">
        <div className="container px-4 py-6 md:py-8">
            <nav
                className="grid items-center gap-4 md:gap-6 lg:gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Link className="flex items-center gap-2 text-xl font-medium" href="/">
                    <HomeIcon className="w-5 h-5"/>
                    Home
                </Link>
                <div
                    className="hidden space-x-4 md:flex md:items-center md:justify-center lg:col-start-2 lg:justify-end xl:col-start-3 xl:justify-end">
                    <Link
                        className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md hover:text-gray-900 dark:hover:text-gray-50"
                        href="/ateliers"
                    >
                        Ateliers
                    </Link>
                    <Link
                        className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md hover:text-gray-900 border border-gray-300 dark:hover:text-gray-50 dark:border-gray-700"
                        href="/signin"
                    >
                        Se connecter
                    </Link>
                    <Link
                        className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600"
                        href="/signup"
                    >
                        S'inscrire
                    </Link>
                </div>
            </nav>
        </div>
    </div>);
}