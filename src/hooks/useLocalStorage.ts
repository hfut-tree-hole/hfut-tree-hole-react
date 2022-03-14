import { useEffect, useState } from 'react'
import storage from 'good-storage'

export default function useLocalStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key)
    return storedValue === null ? defaultValue : JSON.parse(storedValue)
  })

  useEffect(() => {
    const listener = (e: any) => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue))
      }
    }
    window.addEventListener('storage', listener)

    return () => {
      window.removeEventListener('storage', listener)
    }
  }, [key, defaultValue])

  const setValueInLocalStorage = (newValue: any) => {
    setValue((currentValue: any) => {
      const result = typeof newValue === 'function' ? newValue(currentValue) : newValue
      localStorage.setItem(key, JSON.stringify(result))
      return result
    })
  }

  return [value, setValueInLocalStorage]
}

export function getStore(key: string, defaultVal?: any) {
  return storage.get(key, defaultVal)
}

export function setStore(key: string, val: any) {
  storage.set(key, val)
}
