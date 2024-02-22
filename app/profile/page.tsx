import {createClient} from "@/app/utils/supabase/server";
import {redirect} from "next/navigation";
import {ImageIcon, PlayIcon} from "lucide-react";
import {Button} from "@/components/ui/button";

export default async function Page() {

    const supabase = createClient()

    const {data, error} = await supabase.auth.getUser()

    if (!data.user) {
        redirect('/signin')
    }

    return (
        <div className="container mx-auto py-4">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{data.user.user_metadata.display_name}</h1>
                        <p className="text-base text-gray-500 dark:text-gray-400">{data.user.email}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="grid gap-4 md:gap-8 lg:gap-12">
                    <div className="grid gap-2">
                        <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">Ateliers</h3>
                        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:gap-4 lg:grid-cols-3 xl:gap-6">
                            <div className="relative group rounded-lg overflow-hidden aspect-square">
                                <img
                                    alt="Photo"
                                    className="object-cover pointer-events-none"
                                    height="400"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/400",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <ImageIcon className="w-6 h-6 fill-gray-50" />
                                    <span className="text-xs font-medium text-gray-50">View</span>
                                </div>
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-square">
                                <img
                                    alt="Photo"
                                    className="object-cover pointer-events-none"
                                    height="400"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/400",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <ImageIcon className="w-6 h-6 fill-gray-50" />
                                    <span className="text-xs font-medium text-gray-50">View</span>
                                </div>
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-square">
                                <img
                                    alt="Photo"
                                    className="object-cover pointer-events-none"
                                    height="400"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/400",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <ImageIcon className="w-6 h-6 fill-gray-50" />
                                    <span className="text-xs font-medium text-gray-50">View</span>
                                </div>
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-square">
                                <img
                                    alt="Photo"
                                    className="object-cover pointer-events-none"
                                    height="400"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/400",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <ImageIcon className="w-6 h-6 fill-gray-50" />
                                    <span className="text-xs font-medium text-gray-50">View</span>
                                </div>
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-square">
                                <img
                                    alt="Photo"
                                    className="object-cover pointer-events-none"
                                    height="400"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "400/400",
                                        objectFit: "cover",
                                    }}
                                    width="400"
                                />
                                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                                    <ImageIcon className="w-6 h-6 fill-gray-50" />
                                    <span className="text-xs font-medium text-gray-50">View</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">Videos</h3>
                        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:gap-4 lg:grid-cols-3 xl:gap-6">
                            <div className="relative group rounded-lg overflow-hidden aspect-video">
                                <img
                                    alt="Video thumbnail"
                                    className="object-cover pointer-events-none"
                                    height="338"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/338",
                                        objectFit: "cover",
                                    }}
                                    width="600"
                                />
                                <PlayIcon className="absolute inset-0 w-10 h-10 m-auto fill-gray-900 opacity-50 transition-opacity group-hover:opacity-100" />
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-video">
                                <img
                                    alt="Video thumbnail"
                                    className="object-cover pointer-events-none"
                                    height="338"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/338",
                                        objectFit: "cover",
                                    }}
                                    width="600"
                                />
                                <PlayIcon className="absolute inset-0 w-10 h-10 m-auto fill-gray-900 opacity-50 transition-opacity group-hover:opacity-100" />
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-video">
                                <img
                                    alt="Video thumbnail"
                                    className="object-cover pointer-events-none"
                                    height="338"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/338",
                                        objectFit: "cover",
                                    }}
                                    width="600"
                                />
                                <PlayIcon className="absolute inset-0 w-10 h-10 m-auto fill-gray-900 opacity-50 transition-opacity group-hover:opacity-100" />
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-video">
                                <img
                                    alt="Video thumbnail"
                                    className="object-cover pointer-events-none"
                                    height="338"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/338",
                                        objectFit: "cover",
                                    }}
                                    width="600"
                                />
                                <PlayIcon className="absolute inset-0 w-10 h-10 m-auto fill-gray-900 opacity-50 transition-opacity group-hover:opacity-100" />
                            </div>
                            <div className="relative group rounded-lg overflow-hidden aspect-video">
                                <img
                                    alt="Video thumbnail"
                                    className="object-cover pointer-events-none"
                                    height="338"
                                    src="/placeholder.svg"
                                    style={{
                                        aspectRatio: "600/338",
                                        objectFit: "cover",
                                    }}
                                    width="600"
                                />
                                <PlayIcon className="absolute inset-0 w-10 h-10 m-auto fill-gray-900 opacity-50 transition-opacity group-hover:opacity-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="grid gap-4 md:gap-8 lg:gap-12">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-bold tracking-tighter sm:text-2xl">Posts</h3>
                        <p className="text-sm text-gray-500 md:text-base lg:text/400 xl:text-base dark:text-gray-400">
                            Product Designer at Acme Corp. Passionate about creating beautiful and user-friendly interfaces. Love
                            coffee, books, and exploring new places.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:gap-4 lg:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-bold tracking-tighter line-clamp-2">Introducing the New M1 Chip</h4>
                            <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                                The M1 chip represents a major milestone for Apple and the future of Macs. Its powerful performance and
                                energy efficiency are truly game-changing.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-bold tracking-tighter line-clamp-2">The Magic of Augmented Reality</h4>
                            <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                                Augmented Reality (AR) has the potential to transform the way we interact with the world around us. With
                                AR, digital information can be overlaid on the...
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-bold tracking-tighter line-clamp-2">
                                The New iPhone: Innovation at Your Fingertips
                            </h4>
                            <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                                The latest iPhone is packed with features designed to make your life easier, more productive, and more
                                fun. From the stunning Super Retina XDR display to the powerful A15 Bionic chip, every aspect of the
                                iPhone...
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-xl font-bold tracking-tighter line-clamp-2">Unboxing the Apple Watch Series 7</h4>
                            <p className="text-sm text-gray-500 line-clamp-3 dark:text-gray-400">
                                The Apple Watch Series 7 is here, and it's better than ever. With a larger, more advanced display, new
                                watch faces, faster charging, and...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
