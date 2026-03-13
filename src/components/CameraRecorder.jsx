import { useRef } from "react"

function CameraRecorder() {

    const videoRef = useRef(null)

    const startCamera = async () => {

        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })

        videoRef.current.srcObject = stream

        const recorder = new MediaRecorder(stream)

        let chunks = []

        recorder.ondataavailable = (e) => {
            chunks.push(e.data)
        }

        recorder.start()

        setTimeout(() => {
            recorder.stop()
        }, 10000)

    }

    return (

        <div className="mt-6">

            <h2 className="text-xl font-bold mb-2">
                Camera Recording
            </h2>

            <video
                ref={videoRef}
                autoPlay
                className="w-96 border"
            />

            <button
                onClick={startCamera}
                className="bg-blue-500 text-white p-2 mt-3"
            >
                Start Recording
            </button>

        </div>

    )

}

export default CameraRecorder