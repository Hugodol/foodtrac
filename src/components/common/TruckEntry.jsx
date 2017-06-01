import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import propSchema from './PropTypes';
import FollowButton from './FollowButton';
import Upvote from './Upvote';
import './TruckEntry.scss';

const TruckEntry = (props) => {
  let timelineId;
  if (props.path === '/map') timelineId = props.truck.locations.timeline_id;
  return (
    <Col xs={12} sm={12} md={6} lg={6}>
      <Upvote
        timeline_id={timelineId}
        brand_id={props.truck.brand_id}
        mapUpvotes={props.truck.brands.upvotes}
        idx={props.idx}
      />
      <Paper className="truckEntry">
        <p>{props.truck.brands.name}: {props.truck.name !== 'null' ? <em>{props.truck.name}</em> : null}</p>
        <p>Type of food: {props.truck.brands.food_genres.name}</p>
        <p>Current location: {props.truck.locations ? props.truck.locations.address : 'Not currently active'}</p>
        {props.path === '/brand/:brandId/trucks'
      ? null
      : <Link to={`/brand/${props.truck.brand_id}/trucks`}>
        <RaisedButton label="Go to Profile" />
      </Link>}
        <FollowButton brandId={props.truck.brand_id} user={props.user} path={props.path} />
      </Paper>
    </Col>
  );
};

TruckEntry.propTypes = {
  truck: propSchema.truck,
  user: propSchema.user,
  path: propSchema.path,
  idx: propSchema.idx,
};

export default TruckEntry;
