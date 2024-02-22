"use client";
import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import AtelierCard from './AtelierCard'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

interface AtelierListProps {
    ateliers: any[]
    isLoading?: boolean
    error?: string
}

export default function AtelierList({ ateliers, isLoading, error }: AtelierListProps) {
    const [searchTerm, setSearchTerm] = useState('')
    const [themeFilter, setThemeFilter] = useState('all')

    useEffect(() => {
        if (themeFilter === 'all') setThemeFilter('')
    }, [themeFilter])

    const filteredAteliers = ateliers.filter((atelier) => {
        const matchesSearch = atelier.theme.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesTheme = themeFilter ? atelier.theme === themeFilter : true

        return matchesSearch && matchesTheme
    })

    const uniqueThemes = ['all', ...new Set(ateliers.map((atelier) => atelier.theme))]

    if (isLoading) return <div>Loading ateliers...</div>
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
                    <SelectTrigger className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md">
                        <SelectValue placeholder="Filtrer par thème" />
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
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredAteliers.map((atelier) => (
                        <AtelierCard
                            key={atelier.id}
                            theme={atelier.theme}
                            nb={atelier.nb}
                        />
                    ))}
                </div>
            ) : (
                <div>Aucun atelier trouvé.</div>
            )}
        </div>
    )
}
