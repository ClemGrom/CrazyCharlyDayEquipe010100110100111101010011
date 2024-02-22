import Link from "next/link";
import Image from "next/image";
import {createClient} from "@/app/utils/supabase/server";
import {logout} from "@/app/auth/action";

export default async function NavbarPartial() {
    const supabase = createClient()
    const {data, error} = await supabase.auth.getUser()
    const email = data.user?.email;

    return (
        <div className="bg-white border-b border-gray-200 dark:bg-gray-900 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <a className="flex items-center gap-2 text-xl font-semibold" href="/">
                        <img src="https://asso-ars.fr/images/bac/labac.png" alt="Logo lbac" className={
                            "w-10 h-10 rounded-full"
                        }/>
                        <span className="text-gray-800 dark:text-white transition-colors duration-300">CookingBooking</span>
                    </a>
                    <div className="flex items-center space-x-6">
                        {data.user ? (
                            <>
                                <Link href="/ateliers" className="text-base font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                                    Ateliers
                                </Link>
                                {data.user?.user_metadata.admin && (
                                    <Link href="/admin" className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300">
                                        Panel admin
                                    </Link>
                                )}
                                <span className="text-sm text-gray-500">{email}</span>
                                <button
                                    onClick={logout}
                                    className="px-4 py-2 text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 transition-colors duration-300"
                                >
                                    Se déconnecter
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/signin" className="text-base font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                                    Se connecter
                                </Link>
                                <Link href="/signup" className="px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-300">
                                    S'inscrire
                                </Link>
                            </>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}
