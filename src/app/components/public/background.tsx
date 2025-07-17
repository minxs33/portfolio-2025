export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="absolute bg-primary inset-0 bg-grid animate-moveGrid z-0" />
      <div className="relative z-10">{children}</div>
    </>
  )
}
