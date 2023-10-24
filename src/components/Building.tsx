import BuildingLabel from './BuildingLabel'
import { BuildingInfo } from 'types.tsx'

function Building({ building, onClick }: { building: BuildingInfo; onClick: () => void }) {
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
        onClick={onClick}
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
