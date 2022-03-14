import { useContext } from 'react'
import { SettingsContext } from '@/shared/context/SettingsContext'

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext)

export default useSettings
