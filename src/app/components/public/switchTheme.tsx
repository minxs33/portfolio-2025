'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function SwitchThemes() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <motion.button
            whileHover={{ scale: 1.05, rotate: 45 }}
            whileTap={{ scale: 0.90 }}
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center justify-center z-10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            {theme === 'dark' ? (
                <SunIcon className="w-6 h-6 text-foreground" aria-hidden="true" />
            ) : (
                <MoonIcon className="w-6 h-6 text-foreground" aria-hidden="true" />
            )}
        </motion.button>
    )
}