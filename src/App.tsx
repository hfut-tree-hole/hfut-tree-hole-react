import { RootRoutes } from '@/route'
import './App.css'
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
