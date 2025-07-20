'use client'
import Footer from "./footer";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "../../state/store";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="absolute inset-0 bg-grid animate-moveGrid z-0" />
            <Provider store={store}>
                <Navigation />
                    {children}
                <Footer />
            </Provider>
            
        </>
    )
}