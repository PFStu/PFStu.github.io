declare module 'react-confetti' {
  import * as React from 'react'

  interface ConfettiProps {
    width?: number
    height?: number
    numberOfPieces?: number
    friction?: number
    wind?: number
    gravity?: number
    colors?: string[]
    opacity?: number
    recycle?: boolean
    run?: boolean
    tweenDuration?: number
    tweenFunction?: (currentTime: number, currentValue: number, targetValue: number, duration: number) => number
    drawShape?: (ctx: CanvasRenderingContext2D) => void
    onConfettiComplete?: (confetti: Confetti) => void
  }

  const Confetti: React.FC<ConfettiProps>
  export default Confetti
}
