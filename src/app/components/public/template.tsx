'use client'
import Footer from "./footer";
import Navigation from "./navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full h-min-full inset-0 fixed top-0 left-0 bg-grid animate-moveGrid" />
            <Navigation />
                {children}
            <Footer />
        </>
    )
}