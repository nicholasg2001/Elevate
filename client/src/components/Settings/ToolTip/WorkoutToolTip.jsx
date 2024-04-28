const WorkoutToolTip = ({ requirement }) => {

  return (
    <div className="flex justify-center">
      <div className="font-bold text-lg">
       Attempt over {requirement} types of workouts!
      </div>
    </div>
  )
}

export default WorkoutToolTip;