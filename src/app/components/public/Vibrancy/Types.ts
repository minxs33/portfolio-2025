export enum GlowColor {
    Blue = 'blue-500',
    Red = 'red-500',
    Green = 'green-500',
    Purple = 'purple-500',
    Pink = 'pink-500',
    Yellow = 'yellow-500',
    Indigo = 'indigo-500',
    Teal = 'teal-500',
    Orange = 'orange-500',
    Emerald = 'emerald-500',
}

// Move the color mapping here
export const tailwindColors: Record<GlowColor, string> = {
    [GlowColor.Blue]: '59 130 246',
    [GlowColor.Red]: '239 68 68', 
    [GlowColor.Green]: '34 197 94',
    [GlowColor.Purple]: '168 85 247',
    [GlowColor.Pink]: '236 72 153',
    [GlowColor.Yellow]: '234 179 8',
    [GlowColor.Indigo]: '99 102 241',
    [GlowColor.Teal]: '20 184 166',
    [GlowColor.Orange]: '249 115 22',
    [GlowColor.Emerald]: '16 185 129',
}