'use client'

import { ThemeProvider } from 'next-themes'
import { Provider } from 'react-redux'
import { store } from './state/store'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
            <Provider store={store}>
                {children}
            </Provider>
        </ThemeProvider>
    )
}