import Navigation from "./navigation";
import Footer from "./footer";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>  
            <Navigation />
            {children}
            <Footer />
        </>
    )
}