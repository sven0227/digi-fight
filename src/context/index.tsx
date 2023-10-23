'use client'
import React, { FC, createContext, useContext, useEffect, useState } from 'react'

type ContextType = {
  buildingModalId: number
  setBuildingModalId: (buildingModalId: number) => void
}

export const AppContext = createContext<ContextType | undefined>(undefined)

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [buildingModalId, setBuildingModalId] = useState<number>(0)

  return (
    <AppContext.Provider value={{ buildingModalId, setBuildingModalId }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  return appContext
}
