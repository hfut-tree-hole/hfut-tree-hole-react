import { RootRoutes } from '@/router'
import './App.css'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'
import { AppLayout } from '@/layouts/AppLayout/AppLayout'

function App() {
  return (
    <>
      <AppLayout>
        <RootRoutes />
      </AppLayout>
    </>
  )
}

export default App
