import { TextField } from '@mui/material'

type Props = {
  id: string
  label?: string
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

const NumberInput = ({ id, label, value, onIncrement, onDecrement }: Props) => {
  return (
    <div className="flex items-center w-full">
      {label && (
        <label className="flex-auto" htmlFor={id}>
          {label}
        </label>
      )}
      <div className="flex items-center">
        <button
          className={`btn-circle relative ${label && 'ml-auto'}`}
          onClick={onDecrement}
          type="button"
        >
          <span className="absolute absolute-center">-</span>
        </button>
        <TextField
          className="flex-shrink-1 max-w-[33%] text-center"
          id={id}
          type="number"
          value={value}
          onChange={() => {}}
          sx={{
            input: {
              textAlign: 'center'
            },
            fieldset: {
              border: 'unset',
              outline: 'unset'
            }
          }}
        />
        <button type="button" className="btn-circle relative" onClick={onIncrement}>
          <span className="absolute absolute-center">+</span>
        </button>
      </div>
    </div>
  )
}

export default NumberInput
