import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { useEffect, useState } from "react"

function MapView() {

    const [position, setPosition] = useState([13.35, 74.79])

    useEffect(() => {

        navigator.geolocation.getCurrentPosition((pos) => {

            setPosition([
                pos.coords.latitude,
                pos.coords.longitude
            ])

        })

    }, [])

    return (

        <div className="mt-6">

            <h2 className="text-xl font-bold mb-2">
                Your Location
            </h2>

            <MapContainer
                center={position}
                zoom={13}
                style={{ height: "300px" }}
            >

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={position} />

            </MapContainer>

        </div>

    )

}

export default MapView