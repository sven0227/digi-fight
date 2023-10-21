import BuildingLabel from './BuildingLabel'
import { useAppContext } from 'context'

function Building({ building }: { building: Building }) {
  const { showBuildingModal } = useAppContext()
  const handleOnClick = () => {
    console.log('object')
  }
  return (
    <>
      <div
        className='absolute'
        style={{
          top: building.top,
          left: building.left,
          width: building.width,
          height: building.height,
        }}
        onClick={handleOnClick}
      >
        <BuildingLabel building={building} />
        <div>
          <div className='cursor-pointer'>
            <img className='Building' src={building.image} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Building
