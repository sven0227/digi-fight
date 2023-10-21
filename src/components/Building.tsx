import BuildingLabel from "./BuildingLabel"

function Building({ building }: { building: Building }) {
	return (
		<>
			<div className="absolute" style={{ top: building.top, left: building.left, width: building.width, height: building.height }}>
				<BuildingLabel building={building} />
				<div>
					<div className="cursor-pointer">
						<img className="Building" src={building.image} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Building