import { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import Abductors from "/src/assets/muscles/Abductors.jpg";
import Adductors from "/src/assets/muscles/Adductors.jpg";
import Abs from "/src/assets/muscles/Abs.jpg";
import Back from "/src/assets/muscles/Back.jpg";
import Biceps from "/src/assets/muscles/Biceps.jpg";
import Calves from "/src/assets/muscles/Calves.jpg";
import Chest from "/src/assets/muscles/Chest.jpg";
import Forearms from "/src/assets/muscles/Forearms.jpg";
import Hamstrings from "/src/assets/muscles/Hamstrings.jpg";
import Traps from "/src/assets/muscles/Traps.jpg";
import Triceps from "/src/assets/muscles/Triceps.jpeg";
import Quadriceps from "/src/assets/muscles/Quadriceps.jpeg";
import Shoulders from "/src/assets/muscles/Shoulders.jpeg";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import WorkoutCard from "./WorkoutCard";
import AddDailyWorkoutModal from "../Modals/AddDailyWorkoutModal";
import { fetchWorkoutPage } from "./workoutScrollUtils";

const WorkoutsContainer = ({ search }) => {
  const [workoutID, setWorkoutID] = useState(0);

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["workouts"],
    queryFn: fetchWorkoutPage,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);
  
  const filterWorkoutImages = (muscle) => {
    let img;
    switch (muscle.toLowerCase()) {
      case "abdominals":
        img = Abs;
        break;
      case "abductors":
        img = Abductors;
        break;
      case "adductors":
        img = Adductors;
        break;
      case "biceps":
        img = Biceps;
        break;
      case "calves":
        img = Calves;
        break;
      case "chest":
        img = Chest;
        break;
      case "forearms":
        img = Forearms;
        break;
      case "glutes":
        img = Abductors; 
        break;
      case "hamstrings":
        img = Hamstrings;
        break;
      case "lats":
        img = Back;
        break;
      case "lower_back":
        img = Back;
        break;
      case "middle_back":
        img = Back;
        break;
      case "neck":
        img = Back;
        break;
      case "traps":
        img = Traps;
        break;
      case "quadriceps":
        img = Quadriceps;
        break;
      case "triceps":
        img = Triceps;
        break;
      case "shoulders":
        img = Shoulders;
        break;
    }
    return img;
  };
  

  return (
    <div className="container mx-auto p-4 lg:p-10 relative">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data?.pages.map((page) =>
          page.data.map((workout) => (
            <WorkoutCard
              key={workout.workout_id}
              onClick={() => setWorkoutID(workout.workout_id)}
              workout={workout}
              img={filterWorkoutImages(workout.muscle)}
            />
          ))
        )}
      </div>
      <div ref={ref}>
        {isFetchingNextPage && (
          <div className="flex justify-center w-screen">
            <Spinner aria-label="Profile loading spinner" size="xl" />
          </div>
        )}
      </div>
      <AddDailyWorkoutModal workout_id={workoutID} />
    </div>
  );
};

export default WorkoutsContainer;
