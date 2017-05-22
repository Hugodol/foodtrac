const Trucks = require('../../../db/trucks.model');

module.exports = {
  post(req, res) {
    req.body.start = req.body.start.toISOString();
    Trucks.query()
      .findById(req.params.truckId)
      // TODO: Filter by valid start/end time
      .then(truck => truck.$relatedQuery('location_timeline').insert(req.body))
      .then(() => res.send(`Inserted new location timeline entry for truck #${req.params.truckId}`))
      .catch(e => res.status(400).send(e.message));
  },
};
