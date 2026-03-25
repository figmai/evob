import { forwardRef } from 'react'
import { format } from 'date-fns'
import CollapsibleRow from './CollapsibleRow'

const COLUMNS = Array.from({ length: 9 }, (_, i) => `Label ${i + 1}`)

const titleCase = (str) =>
  str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())

const MOCK_PRODUCTS = [
  { name: 'Product A', data: [120, 85, 43, 67, 92, 31, 78, 56, 104] },
  { name: 'Product B', data: [45, 112, 89, 23, 67, 145, 34, 91, 58] },
  { name: 'Product C', data: [78, 34, 156, 45, 88, 12, 99, 63, 41] },
]

const DayTable = forwardRef(function DayTable({ date, selectedDay }, ref) {
  const dayName = titleCase(format(date, 'EEEE'))
  const formattedDate = titleCase(format(date, 'MMM d'))
  const selectedDayFormatted = selectedDay ? format(selectedDay, 'dd/MM/yyyy') : ''

  return (
    <div className="day-table" ref={ref}>
      <table className="day-table__table">
        <thead>
          <tr>
            <th className="day-table__date-col">
              <span className="day-table__day-name">{dayName}</span> <span className="day-table__date">{formattedDate}</span>
            </th>
            {COLUMNS.map((label) => (
              <th key={label}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MOCK_PRODUCTS.map((product) => (
            <CollapsibleRow key={product.name} product={product} selectedDayFormatted={selectedDayFormatted} />
          ))}
        </tbody>
      </table>
    </div>
  )
})

export default DayTable
