import { useState } from 'react'

function CollapsibleRow({ product, selectedDayFormatted }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <tr
        className={`collapsible-row__toggle${expanded ? ' collapsible-row__toggle--expanded' : ''}`}
        onClick={() => setExpanded((prev) => !prev)}
        role="button"
        tabIndex={0}
        aria-expanded={expanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setExpanded((prev) => !prev)
          }
        }}
      >
        <td colSpan={10}>
          <span className="collapsible-row__icon">{expanded ? '▾' : '▸'}</span>
          {product.name}
        </td>
      </tr>
      {expanded && (
        <tr className="collapsible-row__data">
          <td className="day-table__date-col">{selectedDayFormatted}</td>
          {product.data.map((value, i) => (
            <td key={i}>{value}</td>
          ))}
        </tr>
      )}
    </>
  )
}

export default CollapsibleRow
