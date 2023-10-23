import { useEffect, useState } from 'react'
import Building from './Building'
import { useAppContext } from 'context'
import { HQModal } from './BuildingModals/index.ts'
import Modal from './common/containers/Modal'

const ORIGIN_MAP_WIDTH = 3840
const ORIGIN_MAP_HEIGHT = 2400
const MAP_RATE = ORIGIN_MAP_WIDTH / ORIGIN_MAP_HEIGHT
const IMAGE_RATE = 60 / 100

const buildings: Array<Building> = [
  {
    name: 'SAFEHOUSE',
    image: '/images/buildings/safehouse.png',
    top: 1020,
    left: 2241,
    width: 658,
    height: 564,
  },
  {
    name: 'GOLDMAN RACKS',
    image: '/images/buildings/goldman_racks.png',
    top: 2180,
    left: 2068,
    width: 1028,
    height: 732,
  },
  {
    name: 'FEDERAL RESERVE',
    image: '/images/buildings/federal_reserve.png',
    top: 2038,
    left: 331,
    width: 812,
    height: 586,
  },
  {
    name: 'CURRENCY EXCHANGE',
    image: '/images/buildings/currency_exchange.png',
    top: 773,
    left: 623,
    width: 452,
    height: 321,
  },
  {
    name: 'MALL',
    image: '/images/buildings/mall.png',
    top: 1700,
    left: 684,
    width: 1382,
    height: 749,
  },
  {
    name: 'WAREHOUSE',
    image: '/images/buildings/warehouse.png',
    top: 1878,
    left: 1324,
    width: 997,
    height: 766,
  },
  {
    name: 'SCRAPYARD',
    image: '/images/buildings/scrapyard.png',
    top: 1611,
    left: 2583,
    width: 1079,
    height: 601,
  },
  {
    name: 'POLICE STATION',
    image: '/images/buildings/police_station.png',
    top: 2042,
    left: 1007,
    width: 731,
    height: 489,
  },
  {
    name: 'CHIMP HQ',
    image: '/images/buildings/chimp_hq.png',
    top: 1012,
    left: 1304,
    width: 1392,
    height: 775,
  },
  {
    name: 'ORANGUTAN HQ',
    image: '/images/buildings/orangutan_hq.png',
    top: 1905,
    left: 3108,
    width: 1320,
    height: 731,
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
              <Building key={index} building={info} onClick={() => setBuildingModalId(index)} />
            )
          })}

          <Modal isShow={buildingModalId > 0} onClose={() => setBuildingModalId(0)}>
            {buildingModalId === 1 && <HQModal />}
            <HQModal />
          </Modal>
        </div>
      </div>
    </>
  )
}

export default Map
