// STYLES
import {
  CountdownContent,
  CountdownContainer,
  CountDay,
  CountFlip,
  CountOne
} from './coutdown-style'

// COMPONENTS
import CountdownLabel from '../countdownLabel/countdownLabel-components'

import { useState, useEffect, useRef } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const STORAGE_KEY = 'countdown_start_date' // data_de_início_da_contagem_regressiva
const DURATION_DAYS = 30
const DURATION_MS = DURATION_DAYS * 24 * 60 * 60 * 1000

const getOrCreateStartDate = (): Date => {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored) {
    const parsed = new Date(stored)
    if (!isNaN(parsed.getTime())) return parsed
  }
  const now = new Date()
  localStorage.setItem(STORAGE_KEY, now.toISOString())
  return now
}

const calcTimeLeft = (startDate: Date): TimeLeft | null => {
  const elapsed = Date.now() - startDate.getTime()
  const remaining = DURATION_MS - elapsed
  if (remaining <= 0) return null

  const totalSeconds = Math.floor(remaining / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds }
}

const pad = (n: number): string => {
  return String(n).padStart(2, '0')
}

interface DigitProps {
  value: number
  label: string
}

function DigitBlock({ value, label }: DigitProps) {
  const prevRef = useRef(value)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (prevRef.current !== value) {
      setFlip(true)
      const t = setTimeout(() => setFlip(false), 400)
      prevRef.current = value
      return () => clearTimeout(t)
    }
  }, [value])

  return (
    <CountFlip>
      <CountOne $flip={flip}>
        <span className={`digit-card ${flip ? 'flip' : ''}`}></span>
      </CountOne>
      <CountDay>{pad(value)}</CountDay>
      <CountdownLabel>{label}</CountdownLabel>
    </CountFlip>
  )
}

const Countdown = () => {
  const startDateRef = useRef<Date>(getOrCreateStartDate())
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(() =>
    calcTimeLeft(startDateRef.current)
  )

  useEffect(() => {
    const tick = () => {
      const result = calcTimeLeft(startDateRef.current)
      setTimeLeft(result)
    }
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  const isExpired = timeLeft === null

  return (
    <>
      <div className='countdown-root'>
        <div className='card'>
          {isExpired ? (
            <div className='expired-state'>
              <h1 className='expired-title'>Tempo Esgotado</h1>
              <p className='expired-sub'>O período de 30 dias chegou ao fim.</p>
            </div>
          ) : (
            <>
              <CountdownContainer>
                <CountdownContent>
                  <DigitBlock value={timeLeft!.days} label='DIAS' />
                  <DigitBlock value={timeLeft!.hours} label='HORAS' />
                  <DigitBlock value={timeLeft!.minutes} label='MIN' />
                  <DigitBlock value={timeLeft!.seconds} label='SEG' />
                </CountdownContent>
              </CountdownContainer>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Countdown
