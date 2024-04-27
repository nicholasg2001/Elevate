import { useGetAllFavoriteWorkoutsQuery } from '../../redux/services/FavoriteWorkoutsService';

const FavoritedWorkoutsTab = () => {
    const { data: favoriteWorkouts, isLoading } = useGetAllFavoriteWorkoutsQuery('favoriteWorkouts');

    if (isLoading) {
        return <p>Favorite Workouts Loading...</p>;
    }

    return (
        <div className="p-6 bg-slate-200 text-medium text-gray-800 rounded-lg w-1/2">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Favorited Workouts</h3>
            {favoriteWorkouts && favoriteWorkouts.length > 0 ? (
                <div className="flex flex-wrap gap-4 overflow-scroll">
                    {favoriteWorkouts.map((workout) => (
                        <div key={workout.workout_id} className="mb-2 bg-slate-700 w-1/3 rounded-xl p-4">
                            <p className="font-semibold text-blue-600 mb-2 dark:text-blue-300">{workout.name}</p>
                            <p className="text-sm text-gray-600 text-white font-semibold">Muscle Group: {workout.muscle}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No favorited workouts found.</p>
            )}
        </div>
    );
};

export default FavoritedWorkoutsTab;
