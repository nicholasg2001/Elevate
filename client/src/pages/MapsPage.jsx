import GymMap from "/src/components/Map";

const MapsPage = () => {
  return (
    <div className="flex justify-center items-start h-screen w-screen bg-gradient-to-b dark:bg-gradient-to-br from-color7 to-color3 dark:from-darkColor2 dark:to-darkColor1">
        <div className="mt-10 h-5/6 w-5/6 flex justify-center items-center bg-white dark:bg-slate-800 rounded-2xl">
            <div className="w-full px-3">
                <div className="text-center text-3xl font-poppins text-black dark:text-white">
                  Find a gym near you!
                </div>
                <GymMap />
            </div>
        </div>
    </div>
  )
}

export default MapsPage;