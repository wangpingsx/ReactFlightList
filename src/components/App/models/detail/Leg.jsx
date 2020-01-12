import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import STYLES from './Leg.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const timeConvert = num => {
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}`;
};

console.log(timeConvert(200));
const Leg = props => (
  <div>
    <Container>
      <Row className={getClassName('Leg__row')}>
        <Col sm={1} xs={1}>
          <img
            className={`mr-3 ${getClassName('Leg__image')}`}
            src={`https://logos.skyscnr.com/images/airlines/favicon/${props.leg.airline_id}.png`}
            alt="{props.leg.airline_id}"
          />
        </Col>
        <Col sm={2} xs={2}>
          <div>
            {new Date(props.leg.departure_time).toUTCString().slice(-12, -7)}
          </div>
          <div className={getClassName('Leg__greyText')}>
            {props.leg.departure_airport}
          </div>
        </Col>
        <Col sm={1} xs={1}>
          <img
            className={`mr-3 ${getClassName('Leg__arrowImage')}`}
            src="./arrow.png"
            alt="{props.leg.airline_id}"
          />
        </Col>
        <Col sm={2} xs={2}>
          <div>
            {new Date(props.leg.arrival_time).toUTCString().slice(-12, -7)}
          </div>
          <div className={getClassName('Leg__greyText')}>
            {props.leg.arrival_airport}
          </div>
        </Col>
        <Col sm={4} xs={3} />
        <Col sm={2} xs={2} className={getClassName('Leg__smallTextBox')}>
          <div>
            <div
              className={`${getClassName('Leg__greyText')} ${getClassName(
                'Leg__smallText',
              )}`}
            >
              {timeConvert(props.leg.duration_mins)}
            </div>
            <div
              className={(props.leg.stops > 0 ? getClassName('Leg__redText') : getClassName('Leg__blueText')) + " "  + getClassName('Leg__smallText')}
            >
              {props.leg.stops > 0 ? (props.leg.stops > 1 ?`${props.leg.stops} Stops`:`${props.leg.stops} Stop`) : 'Direct'}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Leg;
