import { createTheme } from '@mui/system'

export const MuiTheme = createTheme({
  components: {
    PickersDay: {
      daySelected: {
        backgroundColor: 'red'
      }
    }
  }
})
