const Record = require('../database/Record');

const getRecordForWorkout = (workoutId) => {
    try {
        const records = Record.getRecordForWorkout(workoutId);
        return records;
    } catch(error) {
        throw error;
    }
};

module.exports = { getRecordForWorkout }