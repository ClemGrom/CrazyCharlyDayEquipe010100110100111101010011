import Link from "next/link";
import {HomeIcon} from "lucide-react";
import {createClient} from "@/app/utils/supabase/server";
import {logout} from "@/app/signin/action";

export default async function NavbarPartial() {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()

    const email = data.user?.email;

    return (
        <div className="bg-white border-b border-gray-100 dark:bg-gray-950 w-full">
            <div className="container px-4 py-6 md:py-8">
                <nav
                    className="flex justify-between items-center space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16">
                    <a className="flex items-center gap-2 text-xl font-medium" href="/">
                        <HomeIcon className="w-5 h-5"/>
                        Home
                    </a>
                    {data.user ? (
                        <form className="flex items-center space-x-4 justify-self-end">
                            <Link href={'ateliers'}>
                                Ateliers
                            </Link>
                            <span>{email}</span>
                            <button
                                formAction={logout}
                                className="px-2.5 py-1.5 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600"
                            >
                                Se déconnecter
                            </button>
                        </form>
                    ) : (
                        <div
                            className="hidden space-x-4 md:flex md:items-center md:justify-center lg:col-start-2 lg:justify-end xl:col-start-3 xl:justify-end">
                            <a
                                className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md hover:text-gray-900 dark:hover:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 ease-in-out"
                                href="/signin"
                            >
                                Se connecter
                            </a>
                            <a
                                className="flex items-center px-2.5 py-1.5 text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600"

                            >
                                S'inscrire
                            </a>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}
