'use client'
import {useState, useEffect} from 'react'
import styles from './Vibrancy.module.css'

export default function Vibrancy({children, wrapperClass}:{children: React.ReactNode, wrapperClass?: string}){
  const [seed, setSeed] = useState<number | null>(null)
  const [freq, setFreq] = useState<number | null>(null)

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 10000))
    setFreq(0.01 + Math.random() * (0.02 - 0.01))
  }, [])

  if (seed === null) return null
  return (
    <div className={`${styles.wrapper} ${wrapperClass || ''}`}>
      <svg style={{ display: 'none' }}>
        <filter
          id={`vibrancyFilter-${seed}`}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          filterUnits="objectBoundingBox"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency={`${freq} ${freq}`}
            numOctaves="1"
            seed={seed}
            result="turbulence"
          />
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
            lightingColor="white"
            result="specLight"
          >
            <fePointLight x="-200" y="-200" z="300" />
          </feSpecularLighting>
          <feComposite
            in="specLight"
            operator="arithmetic"
            k1="0"
            k2="1"
            k3="1"
            k4="0"
            result="litImage"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="90"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div
        className={styles.effect}
        style={{
          filter: `url(#vibrancyFilter-${seed})`,
          pointerEvents: 'none',
        }}
      />
      <div className={styles.tint} />
      <div className={styles.shine} />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
