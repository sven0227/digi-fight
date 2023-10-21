'use client'
import React, { FC, createContext, useContext, useEffect, useState } from 'react'

type ContextType = {
  showBuildingModal: boolean
  setShowBuildingModal: (isShow: boolean) => void
}

export const AppContext = createContext<ContextType | undefined>(undefined)

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [showBuildingModal, setShowBuildingModal] = useState<boolean>(false)

  return (
    <AppContext.Provider value={{ showBuildingModal, setShowBuildingModal }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const appContext = useContext(AppContext)
  return appContext
}
