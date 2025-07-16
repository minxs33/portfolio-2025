'use client'
import Footer from "./footer";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "../../state/store";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <Navigation />
                {children}
            <Footer />
        </Provider>
    )
}