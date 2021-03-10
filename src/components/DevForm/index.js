import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

import { Container, Title } from './styles';

function DevForm({ onSubmit }) {
  const [lat, setLatitude] = useState('');
  const [long, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.error(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []);

  async function handleSubmit({ github_username, techs, latitude, longitude }) {
    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude,
    });
  }

  return (
    <div>
      <Container>
        <Title>Cadastrar</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            name="github_username"
            type="text"
            label="Usuario do Github"
            required
          />
          <Input name="techs" type="text" label="Tecnologias" required />

          <Input
            name="latitude"
            type="text"
            label="Latitude"
            required
            value={lat}
            onChange={(event) => setLatitude(event.target.value)}
          />
          <Input
            name="longitude"
            type="text"
            label="Longitude"
            required
            value={long}
            onChange={(event) => setLongitude(event.target.value)}
          />

          <button type="submit">Salvar</button>
        </Form>
      </Container>
    </div>
  );
}

DevForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DevForm;
