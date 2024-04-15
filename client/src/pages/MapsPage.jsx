import GymMap from "/src/components/Map";

const MapsPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-b from-color7 to-color3">
        <div className="h-5/6 w-5/6 flex justify-center items-center bg-white rounded-2xl">
            <div className="w-full px-3">
                <GymMap />
            </div>
        </div>
    </div>
  )
}

export default MapsPage;