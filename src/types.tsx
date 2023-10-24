export type Message = {
  user_id: number
  user_name: string
  profile_image: string
  message: string
  timestamp: number
}

export type BuildingInfo = {
  name: string
  image: string
  top: number
  left: number
  width: number
  height: number
  type: BuildingType
}

export type BuildingType = 'chimpHQ' | 'safeHouse' | 'mall' | 'police'
