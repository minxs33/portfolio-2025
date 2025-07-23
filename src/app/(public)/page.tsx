import Vibrancy from "../components/public/Vibrancy/Vibrancy";

export default function Home() {
  return (
      <section className="flex flex-col items-center justify-center container mx-auto h-screen">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 flex flex-col gap-x-8 gap-y-6">
              <Vibrancy wrapperClass="p-4">
                  <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
              </Vibrancy>
              <Vibrancy wrapperClass="p-4">
                  <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
              </Vibrancy>
              <div className="flex justify-between items-center gap-x-1">
                  <Vibrancy wrapperClass="p-4">
                      Test
                  </Vibrancy>
                  <Vibrancy wrapperClass="p-4">
                      Test
                  </Vibrancy>
                  <Vibrancy wrapperClass="p-4">
                      Test
                  </Vibrancy>
              </div>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
              <Vibrancy wrapperClass="p-4">
                  <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
              </Vibrancy>
              <Vibrancy wrapperClass="p-4">
                  <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
              </Vibrancy>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
              <Vibrancy wrapperClass="p-4">
                  <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
              </Vibrancy>
              <Vibrancy wrapperClass="p-4">
                  <h1 className="text-2xl font-bold text-foreground">Vibrancy Effect</h1>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
                  <p className="text-foreground">This is a test of the vibrancy effect.</p>
              </Vibrancy>
          </div>

        </div>
      </section>
  );
}
