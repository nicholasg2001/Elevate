import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetWorkoutByNameQuery } from "../redux/services/WorkoutService";
import { useGetVideoQuery } from "../redux/services/VideoService";


const DetailedWorkoutPage = () => {

  const { name: name } = useParams();
  const [ showFullInstructions, setShowFullInstructions ] = useState(false);
  const { data: videoData, isLoading: isVideoLoading } = useGetVideoQuery({ name: name });
  const { data: workoutData, isLoading: isWorkoutLoading, error} = useGetWorkoutByNameQuery({ name: name });
  const [ workout, setWorkout ] = useState(workoutData);
  const [ videoURL, setVideoURL ] = useState(videoData);

  useEffect(() => {
    if (!isWorkoutLoading && workoutData) {
      setWorkout(workoutData);
    }
  }, [name, workoutData, isWorkoutLoading]); 

  useEffect(() => {
    if(!isVideoLoading && videoData) {
      setVideoURL(`https://youtube.com/embed/${videoData.id.videoId}`)
    }
  }, [name, videoData, isVideoLoading]);

  console.log(videoURL);

  if(error){
    return <div>Error: {error.data.error}</div>
  }

  if(!workout && !error){
    return <div>Loading {name}...</div>
  }

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    const lastSpace = text.lastIndexOf(" ", maxLength);
    return text.substring(0, lastSpace) + "...";
  };

  const truncatedInstructions = truncateText(workout.instructions, 100);
  
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-color7 to-color3 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 h-auto">
          <h2 className="text-2xl font-semibold mb-4">{workout.name}</h2>
          <div className="h-64 w-full mb-4">
            <iframe
              title="Tutorial Video"
              src={videoURL}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-xl font-semibold mb-4">Instructions:</h3>
          <p className="mb-4">
            {showFullInstructions ? workout.instructions : truncatedInstructions}
              <button
                className="text-blue-600 hover:underline focus:outline-none"
                onClick={() => setShowFullInstructions(!showFullInstructions)}
              >
                {showFullInstructions ? " See less" : " See more"}
              </button>
          </p>
          <div className="flex flex-wrap mb-4">
            <div className="mr-4 mb-2">
              <strong>Type:</strong> {workout.type}
            </div>
            <div className="mr-4 mb-2">
              <strong>Muscle:</strong> {workout.muscle}
            </div>
            <div className="mr-4 mb-2">
              <strong>Difficulty:</strong> {workout.difficulty}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedWorkoutPage;
