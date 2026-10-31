import type { Links } from '../data'

const buttons = [
  { key: 'demo', label: 'Live Demo', icon: '↗', primary: true },
  { key: 'video', label: 'Watch Video', icon: '▶', primary: false },
  { key: 'code', label: 'View Code', icon: '</>', primary: false },
] as const

/** Renders a button for each link that has a URL; renders nothing if none do. */
function LinkButtons({ links }: { links?: Links }) {
  const available = buttons.filter((b) => links?.[b.key])
  if (available.length === 0) return null

  return (
    <div className="link-buttons">
      {available.map((b) => (
        <a
          key={b.key}
          href={links![b.key]}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-sm ${b.primary ? 'btn-primary' : 'btn-ghost'}`}
        >
          <span aria-hidden="true">{b.icon}</span> {b.label}
        </a>
      ))}
    </div>
  )
}

export default LinkButtons
