import React, { useState, useEffect } from "react";
import { Spinner } from "flowbite-react";
import Legs from "/src/assets/workouts/legs.png";
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
  
  const filterWorkouts = (workouts) => {
    return workouts.filter((workout) =>
      workout.name
        .toLowerCase()
        .replace(/[^a-zA-Z]+/g, "")
        .includes(search.toLowerCase().replace(/[^a-zA-Z]+/g, ""))
    );
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
              img={Legs}
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
