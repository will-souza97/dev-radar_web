import React from 'react';
import PropTypes from 'prop-types';

import { Container, Info } from './styles';

function DevItem({ dev }) {
  const { techs } = dev;

  return (
    <Container>
      <header>
        <img
          src={dev.avatar_url}
          alt={dev.name ? dev.name : dev.github_username}
        />
        <Info className="user-info">
          <strong>{dev.github_username}</strong>
          <span>{techs.join(', ')}</span>
        </Info>
      </header>
      <p>{dev.bio}</p>
      <a href={`https://github.com/${dev.github_username}`}>
        Acessar perfil no Github
      </a>
    </Container>
  );
}

DevItem.propTypes = {
  dev: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    github_username: PropTypes.string,
    bio: PropTypes.string,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,

    join: PropTypes.func,
  }).isRequired,
};

export default DevItem;
