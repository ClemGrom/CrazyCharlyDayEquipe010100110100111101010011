import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {HomeIcon, MoreHorizontalIcon} from "lucide-react"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import Link from "next/link";

interface AtelierCardProps {
    id: string
    theme: string
    nb: number
    className?: string
}

export default function AtelierCard({id, theme, nb, className}: AtelierCardProps) {
    return (<Link href={`/ateliers/${id}`}>
            <Card className={`shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}>
                <CardHeader className="flex flex-row items-center gap-4 p-4">
                    <HomeIcon className="w-8 h-8 text-gray-500"/>
                    <div className="grid gap-1">
                        <CardTitle>{theme}</CardTitle>
                        <CardDescription className="text-gray-500">{nb} participants inscrits</CardDescription>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button className="ml-auto" size="icon" variant="ghost">
                                <MoreHorizontalIcon className="w-4 h-4 text-gray-500"/>
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Voir le projet</DropdownMenuItem>
                            <DropdownMenuItem>Paramètres</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardHeader>
                <CardContent className="p-4">
                    <div className="text-sm text-gray-500">Description de l'atelier</div>
                </CardContent>
            </Card>
        </Link>)
}