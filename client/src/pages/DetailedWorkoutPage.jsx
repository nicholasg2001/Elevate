import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailedWorkoutPage = () => {

  const { name } = useParams();
  const [ workout, setWorkout ] = useState(null);
  const [ error, setError ] = useState(null);

  console.log(name)

  useEffect(() => {

    const getWorkout = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/workouts/${name}`); 
        setWorkout(response.data);
      } catch (error) {
        setError(error.response.data.error);
      }
    };

    getWorkout();

  }, [name]);

  if(error){
    return <div>Error: {error}</div>
  }

  if(!workout){
    return <div>Loading {name}...</div>
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-color7 to-color3 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 h-96">
          <h2 className="text-2xl font-semibold mb-4">{workout.title}</h2>
          <div className="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              title="Workout Video"
              src={workout.videoUrl}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <p className="mb-4">{workout.instructions}</p>
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
