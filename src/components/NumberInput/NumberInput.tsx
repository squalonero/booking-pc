import { TextField } from '@mui/material'

type Props = {
  id: string
  label: string
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

const NumberInput = ({ id, label, value, onIncrement, onDecrement }: Props) => {
  return (
    <div className="flex items-center">
      <label className="flex-1" htmlFor={id}>
        {label}
      </label>
      <div className="flex-grow-0">
        <button className="btn rounded-full btn-blue" onClick={onDecrement}>
          -
        </button>
        <TextField
          className="w-fit"
          id={id}
          type="number"
          value={value}
          onChange={() => {}}
        />
        <button className="btn rounded-full btn-blue" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  )
}

export default NumberInput
