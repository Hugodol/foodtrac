import React from 'react';
import propSchema from '../common/PropTypes';
import MapView from '../common/MapView';
import TrucksList from '../common/TrucksList';

const Trucks = props => (
  <div>
    <div>{props.brandName}&#39;s Food Truck(s)</div>
    <MapView trucks={props.trucks} path={props.path} />
    <TrucksList trucks={props.trucks} path={props.path} />
  </div>
);

Trucks.propTypes = {
  brandName: propSchema.brandName,
  trucks: propSchema.trucks,
  path: propSchema.path,
};

export default Trucks;
