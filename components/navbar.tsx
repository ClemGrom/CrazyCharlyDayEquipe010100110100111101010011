import Link from "next/link";
import {createClient} from "@/app/utils/supabase/server";
import {logout} from "@/app/auth/action";
import {Button} from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export default async function NavbarPartial() {
    const supabase = createClient()
    const {data, error} = await supabase.auth.getUser()
    const email = data.user?.email

    return (
        <div className="bg-white border-b border-gray-200 dark:bg-gray-900 shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex justify-between items-center">
                    <a className="flex items-center gap-2 text-xl font-semibold" href="/">
                        <img src="https://asso-ars.fr/images/bac/labac.png" alt="Logo lbac" className={
                            "w-10 h-10 rounded-full"
                        }/>
                        <span
                            className="text-gray-800 dark:text-white transition-colors duration-300">CookingBooking</span>
                    </a>
                    <div className="flex items-center space-x-6">
                        {data.user ? (
                            <>
                                <Link href="/ateliers"
                                      className="text-base font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                                    Ateliers
                                </Link>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            className="rounded-full w-10 h-10 border-2 border-gray-100 bg-white dark:border-gray-950 dark:bg-gray-950"
                                            size="icon"
                                            variant="ghost"
                                        >
                                            <img
                                                alt="@shadcn"
                                                className="rounded-full"
                                                height="32"
                                                src="https://avatars.githubusercontent.com/u/34491371?v=4"
                                                style={{
                                                    aspectRatio: "32/32",
                                                    objectFit: "cover",
                                                }}
                                                width="32"
                                            />
                                            <span className="sr-only">Toggle user menu</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem className="flex flex-col text-left">
                                            <span className="text-sm text-black">{data.user?.user_metadata.display_name}</span>
                                            <span className="text-sm text-gray-500">{email}</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>

                                        <DropdownMenuItem>
                                            <Link href="/profile">Profile</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <button
                                                onClick={logout}
                                                className="px-4 py-2 text-sm font-medium rounded-md text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors duration-300"
                                            >
                                                Se déconnecter
                                            </button>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                        ) : (
                            <>
                                <Link href="/signin"
                                      className="text-base font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300">
                                    Se connecter
                                </Link>
                                <Link href="/signup"
                                      className="px-4 py-2 text-sm font-medium rounded-md bg-black text-white hover:bg-gray-800 transition-colors duration-300">
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
