import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

import DevItem from '../DevItem';

function DevList({ devs }) {
  return (
    <Container>
      {devs.map((dev) => (
        <DevItem key={dev._id} dev={dev} />
      ))}
    </Container>
  );
}

DevList.propTypes = {
  devs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DevList;
