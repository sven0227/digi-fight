import BuildingLabel from './BuildingLabel'
import { useAppContext } from 'context'
import Modal from './common/containers/Modal'
import { HQModal } from './BuildingModals.tsx'

function Building({ building }: { building: Building }) {
  const { buildingModalId, setBuildingModalId } = useAppContext()
  const handleOnClick = () => {
    setBuildingModalId(1)
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
      <Modal isShow={buildingModalId > 0} onClose={() => setBuildingModalId(0)}>
        {buildingModalId === 1 && <HQModal />}
      </Modal>
    </>
  )
}

export default Building
