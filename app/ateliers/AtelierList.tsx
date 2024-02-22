"use client"
import React, {useEffect, useState} from 'react'
import {Input} from '@/components/ui/input'
import AtelierCard from './AtelierCard'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from '@/components/ui/select'
import {Skeleton} from '@/components/ui/skeleton'
import {Button} from "@/components/ui/button";

interface AtelierListProps {
    ateliers: any[]
    isLoading?: boolean
    error?: string
}

const itemsPerPage = 5

export default function AtelierList({ateliers, isLoading, error}: AtelierListProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [themeFilter, setThemeFilter] = useState('all')
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        if (themeFilter === 'all') setThemeFilter('')
    }, [themeFilter])

    const filteredAteliers = ateliers.filter((atelier) => {
        const matchesSearch = atelier.theme.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesTheme = themeFilter ? atelier.theme === themeFilter : true
        return matchesSearch && matchesTheme
    })

    const uniqueThemes = ['all', ...new Set(ateliers.map((atelier) => atelier.theme))]

    const totalItems = filteredAteliers.length
    const totalPages = Math.ceil(totalItems / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentAteliers = filteredAteliers.slice(startIndex, endIndex)

    if (isLoading) {
        return (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Skeleton className="h-64"/>
                <Skeleton className="h-64"/>
                <Skeleton className="h-64"/>
            </div>
        )
    }

    if (error) return <div>Error loading ateliers: {error}</div>

    return (
        <div className="p-4">
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <Input
                    className="flex-grow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md"
                    placeholder="Rechercher un atelier"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Select
                    value={themeFilter}
                    onValueChange={setThemeFilter}
                    className="min-w-[200px]"
                >
                    <SelectTrigger
                        className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
                        <SelectValue placeholder="Filtrer par thème"/>
                    </SelectTrigger>
                    <SelectContent>
                        {uniqueThemes.map((theme) => (
                            <SelectItem key={theme} value={theme}>
                                {theme === 'all' ? 'Tous les thèmes' : theme}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            {filteredAteliers.length > 0 ? (
                <div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {currentAteliers.map((atelier) => (
                            <AtelierCard
                                key={atelier.id}
                                theme={atelier.theme}
                                nb={atelier.nb}
                                className="hover:shadow-lg transition-shadow duration-300"
                            />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <nav aria-label="Pagination">
                            <ul className="flex gap-2">
                                <li>
                                    <Button
                                        className={`px-3 py-2 rounded-md ${
                                            currentPage === 1
                                                ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'
                                                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                                        }`}
                                        onClick={() => setCurrentPage(1)}
                                        disabled={currentPage === 1}
                                    >
                                        &laquo;
                                    </Button>
                                </li>
                                {Array.from({length: totalPages}, (_, index) => index + 1).map((page) => (
                                    <li key={page}>
                                        <Button
                                            className={`px-3 py-2 rounded-md ${
                                                currentPage === page
                                                    ? ''
                                                    : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                                            }`}
                                            onClick={() => setCurrentPage(page)}
                                        >
                                            {page}
                                        </Button>
                                    </li>
                                ))}
                                <li>
                                    <Button
                                        className={`px-3 py-2 rounded-md ${
                                            currentPage === totalPages
                                                ? 'bg-gray-200 dark:bg-gray-700 cursor-not-allowed'
                                                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300'
                                        }`}
                                        onClick={() => setCurrentPage(totalPages)}
                                        disabled={currentPage === totalPages}
                                    >
                                        &raquo;
                                    </Button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            ) : (
                <div>Aucun atelier trouvé.</div>
            )}
        </div>
    )
}