import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';

import Leg from './Leg';
import STYLES from './Trip.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';
const Trip = props => (
  <div className={getClassName('Trip__main')}>
    {props.legs && props.trip.legs
      ? props.trip.legs.map(legId => {
          const leg = props.legs.find(l => l.id === legId);
          return <Leg key={legId} leg={leg} />;
        })
      : ''}
    <Container className={getClassName('Trip__priceContainer')}>
      <Row>
        <Col sm={9} xs={8}>
          <div><BpkText bold={true} className={getClassName('Trip__priceText')}>{props.trip.price}</BpkText></div>
          <div className={getClassName('Trip__agentText')}>{props.trip.agent}</div>
        </Col>
        <Col sm={3} xs={4}>
          <BpkButton large >Select</BpkButton>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Trip;
