import NumberInput from 'components/NumberInput/NumberInput'
import { bookingActions } from 'features/booking/reducer'
import { selectSelectedPeople } from 'features/booking/selectors'
import { useDispatch, useSelector } from 'react-redux'

export const PeopleController = () => {
  const dispatch = useDispatch()
  const selectedPeople = useSelector(selectSelectedPeople)

  const incrementPeople = () => {
    dispatch(bookingActions.increaseNumPeople())
  }
  const decrementPeople = () => {
    dispatch(bookingActions.decreaseNumPeople())
  }

  return (
    <NumberInput
      id="selectedPeople"
      label="Numero Persone"
      value={selectedPeople}
      onDecrement={decrementPeople}
      onIncrement={incrementPeople}
    />
  )
}
