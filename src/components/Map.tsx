import { useEffect, useState } from 'react'
import Building from './Building'
import { useAppContext } from 'context'
import { HQModal, MallModal, PoliceModal, SafeHouseModal } from './BuildingModals/index.ts'
import Modal from './common/containers/Modal'
import { BuildingInfo } from 'types.tsx'

const ORIGIN_MAP_WIDTH = 1080
const ORIGIN_MAP_HEIGHT = 720
const MAP_RATE = ORIGIN_MAP_WIDTH / ORIGIN_MAP_HEIGHT
const IMAGE_RATE = 0.27

const buildings: Array<BuildingInfo> = [
  {
    name: 'PALACE',
    image: '/images/buildings/PALACE.png',
    top: 128,
    left: 203.5,
    width: 807,
    height: 651,
    type: 'safeHouse',
  },
  {
    name: 'CLINIC',
    image: '/images/buildings/CLINIC.png',
    top: 129,
    left: 714,
    width: 715.02,
    height: 683.01,
    type: 'safeHouse',
  },
  {
    name: 'THE-CAGE',
    image: '/images/buildings/THE-CAGE.png',
    top: 255,
    left: 882,
    width: 578,
    height: 437,
    type: 'safeHouse',
  },
  {
    name: 'PLAZZO',
    image: '/images/buildings/PLAZZO.png',
    top: 371,
    left: 207,
    width: 900,
    height: 671,
    type: 'safeHouse',
  },
  {
    name: 'SQUARE-GARDEN',
    image: '/images/buildings/SQUARE-GARDEN.png',
    top: 316,
    left: 368,
    width: 953,
    height: 556,
    type: 'safeHouse',
  },
  {
    name: 'GYM',
    image: '/images/buildings/GYM.png',
    top: 369,
    left: 896.5,
    width: 621,
    height: 420,
    type: 'safeHouse',
  },
  {
    name: 'THEATRE',
    image: '/images/buildings/THEATRE.png',
    top: 503.5,
    left: 285.3,
    width: 539,
    height: 408,
    type: 'safeHouse',
  },
  {
    name: 'DOCKS',
    image: '/images/buildings/DOCKS.png',
    top: 617,
    left: 417,
    width: 1160,
    height: 527.5,
    type: 'safeHouse',
  },
  {
    name: 'COLLOSEUM',
    image: '/images/buildings/COLLOSEUM.png',
    top: 501,
    left: 605,
    width: 803,
    height: 520,
    type: 'safeHouse',
  },
  {
    name: 'LE-FORUM',
    image: '/images/buildings/LE-FORUM.png',
    top: 542.5,
    left: 957,
    width: 844,
    height: 644,
    type: 'safeHouse',
  },
]

function Map() {
  const { buildingModalId, setBuildingModalId } = useAppContext()
  let _width = 0
  let _height = 0

  const [scale, setScale] = useState(0)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  let isDragging = false
  let initialX = 0
  let initialY = 0
  let _offsetX = 0
  let _offsetY = 0

  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(0)

  const handleWindowSize = () => {
    if (window.innerWidth / window.innerHeight < MAP_RATE) {
      _height = window.innerHeight
      _width = _height * MAP_RATE
      setScale(_height / ORIGIN_MAP_HEIGHT)
      setWidth(_height * MAP_RATE)
      setHeight(_height)
    } else {
      _width = window.innerWidth
      _height = _width / MAP_RATE
      setScale(_width / ORIGIN_MAP_WIDTH)
      setWidth(_width)
      setHeight(_width / MAP_RATE)
    }
  }

  const handleMouseDown = (e: any) => {
    isDragging = true

    e.preventDefault()
    const { clientX, clientY } = e
    initialX = clientX - _offsetX
    initialY = clientY - _offsetY
  }

  const handleMouseMove = (e: any) => {
    if (isDragging) {
      e.preventDefault()
      const { clientX, clientY } = e
      _offsetX = clientX - initialX
      _offsetY = clientY - initialY

      if (_offsetX >= window.innerWidth - _width && _offsetX <= 0) {
        setOffsetX(_offsetX)
      }

      if (_offsetY >= window.innerHeight - _height && _offsetY < 0) {
        setOffsetY(_offsetY)
      }
    }
  }

  const handleMouseUp = () => {
    isDragging = false
  }

  useEffect(() => {
    handleWindowSize()
  }, [scale, width, height])

  useEffect(() => {
    window.addEventListener('resize', handleWindowSize)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      window.removeEventListener('resize', handleWindowSize)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      <div className='fixed overflow-hidden max-w-full max-h-full'>
        <div
          className='flex flex-wrap'
          style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
        >
          <div>
            <video
              className='object-contain overflow-clip max-w-none max-h-none'
              src='/videos/map.mp4'
              loop={true}
              autoPlay={true}
              playsInline={true}
              width={width}
              height={height}
              muted={true}
            />
          </div>
          {buildings.map((building, index) => {
            const info = {
              ...building,
            }
            info.width *= scale * IMAGE_RATE
            info.height *= scale * IMAGE_RATE
            info.top = info.top * scale - info.height / 2
            info.left = info.left * scale - info.width / 2
            return (
              <Building
                key={index}
                building={info}
                onClick={() => {
                  setBuildingModalId(building.type)
                  console.log('building.type :>> ', building.type)
                  console.log('scale :>> ', scale)
                }}
              />
            )
          })}

          <Modal
            isShow={buildingModalId != null}
            onClose={() => {
              setBuildingModalId(null)
            }}
          >
            {buildingModalId === 'safeHouse' && <SafeHouseModal />}
            {buildingModalId === 'chimpHQ' && <HQModal />}
            {buildingModalId === 'mall' && <MallModal />}
            {buildingModalId === 'police' && <PoliceModal />}
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Map
