import Map from "../components/Map"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

function Game() {
	return (
		<>
			<div className="relative w-full h-full">
				<Map />
				<div className="HeaderShadow" />
				<Header />
				<Footer />
			</div>
		</>
	)
}

export default Game