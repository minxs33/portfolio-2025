import Vibrancy from "../components/public/Vibrancy/Vibrancy";
import { GlowColor } from "../components/public/Vibrancy/Types";

export default function Home() {
    return (
        <section className="flex flex-col items-center justify-center container mx-auto h-screen">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 flex flex-col gap-x-8 gap-y-6">
                <Vibrancy glowColor={GlowColor.Purple}>
                    <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                </Vibrancy>
                <Vibrancy glowColor={GlowColor.Blue}>
                    <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                </Vibrancy>
                <div className="flex justify-between items-center gap-x-1">
                    <Vibrancy glowColor={GlowColor.Teal}>
                        Test
                    </Vibrancy>
                    <Vibrancy glowColor={GlowColor.Yellow}>
                        Test
                    </Vibrancy>
                    <Vibrancy glowColor={GlowColor.Pink}>
                        Test
                    </Vibrancy>
                </div>
            </div>
            <div className="col-span-2 flex flex-col gap-4">
                <Vibrancy glowColor={GlowColor.Red}>
                    <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                </Vibrancy>
                <Vibrancy glowColor={GlowColor.Orange}>
                    <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                </Vibrancy>
            </div>
            <div className="col-span-1 flex flex-col gap-4">
                <Vibrancy glowColor={GlowColor.Green}>
                    <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                </Vibrancy>
                <Vibrancy glowColor={GlowColor.Indigo}>
                    <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                    <p className="text-foreground">This is a test of the vibrancy effect.</p>
                </Vibrancy>
            </div>

            </div>
        </section>
    );
}
