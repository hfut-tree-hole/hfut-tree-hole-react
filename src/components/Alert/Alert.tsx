import { Snackbar } from '@mui/material'
import useAlertModel from '@/components/Alert/store/alert.model'

export function Alert() {
  const store = useAlertModel()
  return <>
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={store.open}
      onClose={() => store.toggleAlert(false)}
    >

    </Snackbar>
  </>
}
