import { FormControl, Input } from '@mui/material'
import NumberInput from 'components/NumberInput/NumberInput'
import { BookingDto, customerDto } from 'features/booking/model'
import { FieldArray, FieldArrayRenderProps, useFormikContext } from 'formik'
import { FormEvent } from 'react'

type Props = {
  max: number
  value: customerDto[]
  handleValue: (e: FormEvent<HTMLInputElement>) => void
  onIncrement?: () => void
  onDecrement?: () => void
}

export const PeopleController = ({
  max,
  value,
  handleValue,
  onIncrement,
  onDecrement
}: Props) => {
  const formik = useFormikContext<BookingDto>()

  console.log('formik in people controller', formik)

  const selectedPeople = formik.values.passengers

  const incrementPeople = (arrHelp: FieldArrayRenderProps) => {
    if (selectedPeople.length == max) return

    arrHelp.push({
      name: '',
      lastName: '',
      age: null
    })
    onIncrement && onIncrement()
  }
  const decrementPeople = (arrHelp: FieldArrayRenderProps) => {
    if (selectedPeople.length <= 1) return

    arrHelp.remove(selectedPeople.length - 1)
    onDecrement && onDecrement()
  }

  return (
    <>
      <FieldArray
        name="passengers"
        render={(arrayHelpers: FieldArrayRenderProps) => (
          <>
            <h2 className="title text-center my-5">Scegli il numero di persone</h2>
            <FormControl>
              <NumberInput
                id="selectedPeople"
                label="Numero Persone"
                value={value.length}
                onDecrement={() => decrementPeople(arrayHelpers)}
                onIncrement={() => incrementPeople(arrayHelpers)}
              />
            </FormControl>
            <h2 className="title text-center my-5">Compila i dati per ogni passeggero</h2>
            {selectedPeople.map((passenger, i) => (
              <div className="mt-3" key={i}>
                <h3>Passeggero {i + 1}</h3>
                <FormControl>
                  <Input
                    id={`passengers.${i}.name`}
                    name={`passengers.${i}.name`}
                    type="text"
                    placeholder="Nome"
                    onInput={handleValue}
                  />
                  {formik.errors.passengers?.[i]?.name && (
                    <small>{formik.errors.passengers?.[i]?.name}</small>
                  )}
                </FormControl>
                <FormControl>
                  <Input
                    id={`passengers.${i}.lastName`}
                    name={`passengers.${i}.lastName`}
                    type="text"
                    placeholder="Cognome"
                    onInput={handleValue}
                  />
                </FormControl>
                <FormControl>
                  <Input
                    id={`passengers.${i}.age`}
                    name={`passengers.${i}.age`}
                    type="number"
                    placeholder="Eta"
                    onInput={handleValue}
                  />
                </FormControl>
              </div>
            ))}
          </>
        )}
      />
    </>
  )
}
