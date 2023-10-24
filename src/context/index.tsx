'use client'
import React, { FC, createContext, useContext, useEffect, useState } from 'react'
import { BuildingType } from 'types'

type ContextType = {
  buildingModalId: BuildingType | null
  setBuildingModalId: (buildingModalId: BuildingType | null) => void
}

export const AppContext = createContext<ContextType | undefined>(undefined)

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [buildingModalId, setBuildingModalId] = useState<BuildingType | null>(null)

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
