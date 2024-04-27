const db = require("../database/database");

const getFavoriteWorkouts = async(req,res)=>{
    const userId = req.user.data.user_id;
    try {
        const favoriteWorkouts = await db.any(
            'SELECT * FROM workouts w JOIN favorite_workouts fw ON w.workout_id = fw.workout_id WHERE fw.user_id = $1',
            [userId]
        );
        res.status(200).json(favoriteWorkouts);
    }catch (error) {
        console.error("Error fetching Favorite Workouts",error,);
        res.status(500).json({error:"Internal Server Error"});
    }
};

const addToFavorites = async (req, res) => {
    const userId = req.user.data.user_id;
    const { workout_id } = req.body;

    try {
        const newFavorite = await db.one(
            'INSERT INTO favorite_workouts (user_id, workout_id) VALUES ($1, $2) RETURNING *',
            [userId, workout_id]
        );

        res.status(201).json(newFavorite);
    } catch (error) {
        console.error("Error adding workout to favorites:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const removeFromFavorites = async (req, res) => {
    const userId = req.user.data.user_id;
    const { workout_id } = req.body;

    try {
        await db.none(
            'DELETE FROM favorite_workouts WHERE user_id = $1 AND workout_id = $2',
            [userId, workout_id]
        );

        res.status(200).json({ message: 'Workout removed from favorites successfully' });
    } catch (error) {
        console.error("Error removing workout from favorites:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports={
    getFavoriteWorkouts,
    addToFavorites,
    removeFromFavorites,
};