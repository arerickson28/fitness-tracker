const router = require("express").Router();
const Workout = require("../models");


router.get("/workouts", async (req, res) => {
    try {
        const data = await Workout.aggregate([
            { $sort: { _id: -1 } },
            { $limit: 1 },
            {
                $addFields: { totalDuration: {$sum: "$exercises.duration"} }
            }
        ]);
        res.json(data);
    } catch {
        console.log(err);
        res.status(400).json(err);
    }
});



router.post("/workouts", async ({ body }, res) => {
    try{
        const data = await Workout.create(body);
        res.json(data);

    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    }
})

router.put("/workouts/:id", async ({ body, params }, res) => {
    try {
        const data = await Workout.updateOne({
            "_id": params.id
        }, {
            $addToSet: { "exercises": [body] }
        })
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(400).json(err)
    }
});

module.exports = router