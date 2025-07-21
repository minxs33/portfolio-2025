'use client'
import Footer from "./footer";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "../../state/store";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="fixed top-0 left-0 w-full min-h-full bg-grid animate-moveGrid -z-10"/>
            <Navigation />
                {children}
            <Footer />
        </>
    )
}