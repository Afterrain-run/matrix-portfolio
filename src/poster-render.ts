import type {PosterConfig, PaletteId} from './poster-model';

type Palette = {
  name: string
  background: string
  ink: string
  accent: string
  secondary: string
}

export const palettes: Record<PaletteId, Palette> = {
  mint: { name: '薄荷', background: '#f4f4f0', ink: '#1a1a1a', accent: '#70f5d2', secondary: '#317b69' },
  signal: { name: '信号', background: '#1a1a1a', ink: '#f4f4f4', accent: '#ff5c8a', secondary: '#55d6e0' },
  desert: { name: '荒漠', background: '#e9c46a', ink: '#264653', accent: '#2a9d8f', secondary: '#f4f4f4' },
}

function randomGenerator(seed: number) {
  let value = seed >>> 0
  return () => {
    value += 0x6D2B79F5
    let result = value
    result = Math.imul(result ^ (result >>> 15), result | 1)
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61)
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296
  }
}

function drawTitle(
  ctx: CanvasRenderingContext2D,
  title: string,
  color: string,
  top: number,
  maxWidth: number,
  maxHeight: number,
) {
  const lines = (title.trim() || 'UNTITLED').split('\n').slice(0, 4)
  let size = 148
  const setFont = () => {
    ctx.font = `800 ${size}px Arial, "PingFang SC", "Microsoft YaHei", sans-serif`
  }
  setFont()
  const longest = () => Math.max(...lines.map((line) => ctx.measureText(line || ' ').width))
  while ((longest() > maxWidth || lines.length * size * .88 > maxHeight) && size > 42) {
    size -= 4
    setFont()
  }
  if (longest() > maxWidth) size *= maxWidth / longest()
  setFont()
  ctx.fillStyle = color
  ctx.textBaseline = 'top'
  lines.forEach((line, index) => ctx.fillText(line || ' ', 52, top + index * size * .88))
}

function drawGrid(ctx: CanvasRenderingContext2D, config: PosterConfig, palette: Palette) {
  const random = randomGenerator(config.seed)
  const margin = 48
  const cellX = (900 - margin * 2) / 12
  const cellY = (1200 - margin * 2) / 11

  ctx.save()
  ctx.globalAlpha = .14
  ctx.strokeStyle = palette.ink
  ctx.lineWidth = 1
  for (let column = 0; column <= 12; column += 1) {
    ctx.beginPath()
    ctx.moveTo(margin + column * cellX, margin)
    ctx.lineTo(margin + column * cellX, 660)
    ctx.stroke()
  }
  for (let row = 0; row <= 6; row += 1) {
    ctx.beginPath()
    ctx.moveTo(margin, margin + row * cellY)
    ctx.lineTo(900 - margin, margin + row * cellY)
    ctx.stroke()
  }
  ctx.restore()

  const circleColumn = 7 + Math.floor(random() * 3)
  const circleRow = 1 + Math.floor(random() * 2)
  const radius = cellX * (1.5 + random() * 1.4)
  ctx.fillStyle = palette.accent
  ctx.beginPath()
  ctx.arc(margin + circleColumn * cellX, margin + circleRow * cellY, radius, 0, Math.PI * 2)
  ctx.fill()

  for (let index = 0; index < config.density; index += 1) {
    const column = Math.floor(random() * 12)
    const row = Math.floor(random() * 6)
    const x = margin + column * cellX
    const y = margin + row * cellY
    const kind = Math.floor(random() * 4)
    ctx.fillStyle = index % 3 === 0 ? palette.secondary : palette.ink
    ctx.strokeStyle = ctx.fillStyle
    ctx.lineWidth = 3
    if (kind === 0) {
      ctx.fillRect(x, y, cellX * (1 + Math.floor(random() * 2)), cellY * .22)
    } else if (kind === 1) {
      ctx.beginPath()
      ctx.arc(x, y, 7 + random() * 17, 0, Math.PI * 2)
      ctx.fill()
    } else if (kind === 2) {
      ctx.beginPath()
      ctx.moveTo(x, y + cellY * .65)
      ctx.lineTo(x + cellX * .5, y)
      ctx.lineTo(x + cellX, y + cellY * .65)
      ctx.closePath()
      ctx.fill()
    } else {
      ctx.beginPath()
      ctx.arc(x, y, cellX * .36, 0, Math.PI * 2)
      ctx.stroke()
    }
  }
}

function drawOrbit(ctx: CanvasRenderingContext2D, config: PosterConfig, palette: Palette) {
  const random = randomGenerator(config.seed)
  const centerX = 450 + (random() - .5) * 100
  const centerY = 330 + (random() - .5) * 60

  ctx.fillStyle = palette.accent
  ctx.beginPath()
  ctx.arc(centerX, centerY, 86, 0, Math.PI * 2)
  ctx.fill()

  for (let ring = 1; ring <= 8; ring += 1) {
    ctx.strokeStyle = ring % 3 === 0 ? palette.secondary : palette.ink
    ctx.globalAlpha = .35 + ring * .06
    ctx.lineWidth = ring % 3 === 0 ? 5 : 2
    ctx.beginPath()
    ctx.arc(centerX, centerY, 70 + ring * 34, 0, Math.PI * 2)
    ctx.stroke()
  }
  ctx.globalAlpha = 1

  const count = config.density * 5
  for (let index = 0; index < count; index += 1) {
    const angle = random() * Math.PI * 2
    const radius = 90 + random() * 310
    const size = 3 + random() * 12
    ctx.fillStyle = index % 7 === 0 ? palette.secondary : palette.ink
    ctx.beginPath()
    ctx.arc(centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius * .75, size, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.strokeStyle = palette.ink
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(48, centerY)
  ctx.lineTo(852, centerY)
  ctx.moveTo(centerX, 48)
  ctx.lineTo(centerX, 650)
  ctx.stroke()
}

function drawWave(ctx: CanvasRenderingContext2D, config: PosterConfig, palette: Palette) {
  const random = randomGenerator(config.seed)
  const phase = random() * Math.PI * 2
  const amplitude = 24 + random() * 60
  const frequency = 1 + Math.floor(random() * 4)
  const lines = config.density + 12

  for (let row = 0; row < lines; row += 1) {
    const baseY = 84 + row * (520 / lines)
    ctx.strokeStyle = row % 6 === 0 ? palette.secondary : palette.ink
    ctx.lineWidth = row % 6 === 0 ? 5 : 2
    ctx.beginPath()
    for (let x = 48; x <= 852; x += 6) {
      const progress = (x - 48) / 804
      const y = baseY + Math.sin(progress * Math.PI * 2 * frequency + phase + row * .13) * amplitude * (0.35 + progress)
      if (x === 48) ctx.moveTo(x, y)
      else ctx.lineTo(x, y)
    }
    ctx.stroke()
  }

  ctx.fillStyle = palette.accent
  const barX = 48 + Math.floor(random() * 8) * 67
  ctx.fillRect(barX, 48, 67, 570)
  ctx.globalAlpha = .82
  ctx.strokeStyle = palette.background
  ctx.lineWidth = 2
  for (let y = 62; y < 610; y += 18) {
    ctx.beginPath()
    ctx.moveTo(barX, y)
    ctx.lineTo(barX + 67, y)
    ctx.stroke()
  }
  ctx.globalAlpha = 1
}

export function drawPoster(ctx: CanvasRenderingContext2D, config: PosterConfig, width: number, height: number) {
  const palette = palettes[config.palette]
  ctx.save()
  ctx.scale(width / 900, height / 1200)
  ctx.fillStyle = palette.background
  ctx.fillRect(0, 0, 900, 1200)

  if (config.layout === 'grid') drawGrid(ctx, config, palette)
  if (config.layout === 'orbit') drawOrbit(ctx, config, palette)
  if (config.layout === 'wave') drawWave(ctx, config, palette)

  ctx.fillStyle = palette.background
  ctx.fillRect(36, 674, 828, 324)
  drawTitle(ctx, config.title, palette.ink, 694, 792, 280)

  ctx.fillStyle = palette.ink
  ctx.textBaseline = 'alphabetic'
  ctx.font = '18px "SFMono-Regular", Consolas, monospace'
  ctx.fillText('GENERATIVE POSTER / 03', 48, 1148)
  ctx.textAlign = 'right'
  ctx.fillText(`SEED ${config.seed}`, 852, 1148)
  ctx.textAlign = 'left'

  ctx.font = '22px "SFMono-Regular", Consolas, "PingFang SC", monospace'
  const subtitle = (config.subtitle.trim() || 'MAKE IDEAS REAL').slice(0, 58)
  ctx.fillText(subtitle, 52, 1052, 796)

  ctx.strokeStyle = palette.ink
  ctx.globalAlpha = .35
  ctx.lineWidth = 1
  ctx.strokeRect(24, 24, 852, 1152)
  ctx.restore()
}

