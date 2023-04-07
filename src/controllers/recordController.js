const Record = require("../services/recordService");

const getRecordForWorkout = (req, res) => {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }
  try {
    const records = Record.getRecordForWorkout(workoutId);
    res.send({status: "OK", data: records});
  } catch (error) {
    res.status(error?.status || 500).send({ status: 'FAILED', message: error?.message || error});
  }
};

// TODO: CRUD operation to be implemented
module.exports = { getRecordForWorkout };
