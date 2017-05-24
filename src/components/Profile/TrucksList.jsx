import React from 'react';
import PropTypes from 'prop-types';
import TruckEntry from '../common/TruckEntry';

const TrucksList = props => (
  <div>
    {props.trucks.map(truck => <TruckEntry key={truck.id} truck={truck} />)}
  </div>
);

TrucksList.propTypes = {
  trucks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TrucksList;
