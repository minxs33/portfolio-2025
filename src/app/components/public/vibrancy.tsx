export default function Vibrancy( {children, wrapperClass} : {children: React.ReactNode, wrapperClass?: string}) {
  return (
    <div className={`vibrancy-wrapper ${wrapperClass}`}>
      <div className="vibrancy-effect" />
      <div className="vibrancy-tint" />
      <div className="vibrancy-shine" />
      <div className="vibrancy-content">
        {children}
      </div>
    </div>
  )
}