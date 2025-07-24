'use client'
import { useState, useEffect, useRef } from 'react'
import styles from './Vibrancy.module.css'
import { GlowColor, tailwindColors } from './Types'

export default function Vibrancy({children, wrapperClass, glowColor}: {children?: React.ReactNode, wrapperClass?: string, glowColor?: GlowColor}) {
  const [seed, setSeed] = useState<number | null>(null)
  const [freq, setFreq] = useState<number | null>(null)
  const [transform, setTransform] = useState<string>('perspective(800px) rotateX(0deg) rotateY(0deg)')
  const color = tailwindColors[glowColor as GlowColor] ?? '255 255 255'

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000))
    setFreq(0.01 + Math.random() * (0.02 - 0.01))
  }, [])

  if (seed === null || freq === null) return null

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = wrapperRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rawOffsetX = x - centerX
    const rawOffsetY = y - centerY

    const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(n, max))

    const maxTiltAngle = 8;
    const sensitivityFactor = 0.7;

    const scaledOffsetX = rawOffsetX / (centerX * sensitivityFactor);
    const scaledOffsetY = rawOffsetY / (centerY * sensitivityFactor);

    const rotateX = clamp(scaledOffsetY * maxTiltAngle, -maxTiltAngle, maxTiltAngle)
    const rotateY = clamp(-scaledOffsetX * maxTiltAngle, -maxTiltAngle, maxTiltAngle)
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg)')
  }

  return (
    <>
      <svg style={{ display: 'none' }}>
        <filter
          id={`vibrancyFilter-${seed}`}
          x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={`${freq} ${freq}`}
            numOctaves="1"
            seed={seed}
            result="turbulence"
          />
          <feFlood floodColor="white" result="whiteFlood" />
          <feImage
            xlinkHref={`data:image/svg+xml;utf8,${encodeURIComponent(`
              <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
                <radialGradient id='grad' cx='50%' cy='50%' r='75%'>
                  <stop offset='85%' stop-color='white' stop-opacity='0' />
                  <stop offset='100%' stop-color='white' stop-opacity='1' />
                </radialGradient>
                <rect width='100%' height='100%' fill='url(%23grad)' />
              </svg>
            `)}`}
            result="edgeHighlight"
          />
          <feBlend in="turbulence" in2="edgeHighlight" mode="lighten" result="highlightedEdges" />
          <feComponentTransfer in="turbulence" result="mapped">
            <feFuncR type="gamma" amplitude="1" exponent="10" offset="0.5" />
            <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
            <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
          </feComponentTransfer>
          <feGaussianBlur in="turbulence" stdDeviation="3" result="softMap" />
          <feSpecularLighting
            in="softMap"
            surfaceScale="5"
            specularConstant="1"
            specularExponent="100"
            lightingColor="#aabbff"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feBlend 
            in="highlightedEdges" 
            in2="specLight" 
            mode="overlay" 
            result="litImage" 
          />
          <feFlood floodColor="#00aaff" floodOpacity="0.4" result="glowColor" />
          <feOffset in="softMap" dx="5" dy="5" result="offsetMap" />
          <feComposite
            in="softMap"
            in2="offsetMap"
            operator="arithmetic"
            k2="0.7"
            k3="0.3"
            result="bentMap"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="bentMap"
            scale="90"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: 'transform 0.2s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className={`${styles.wrapper} ${wrapperClass || ''} rounded-xl p-8`}
      >
        <div
          className={styles.effect}
          style={{
            filter: `url(#vibrancyFilter-${seed})`,
            pointerEvents: 'none',
          }}
        />
        <div className={styles.tint} />
        <div 
          className={styles.shine} 
          style={{
            boxShadow: `
              inset 4px 2px 3px 0 rgb(${color} / 0.1),
              inset 1px -2px 5px 1px rgb(${color} / 0.1)
            `
          }}
        />
        <div 
          className={styles.bottomGlow} 
          style={{
            boxShadow: `
              inset 0 -20px 20px -20px rgb(${color} / 0.5),
              inset 0 0px 0px 1px rgb(${color} / 0.2)
            `
          }} />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}