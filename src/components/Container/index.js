import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import DevForm from '../DevForm';
import DevList from '../DevList';

import { Wrapper } from './styles';

function Container() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleSubmit(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
  }
  return (
    <Wrapper>
      <DevForm onSubmit={handleSubmit} />
      <DevList devs={devs} />
    </Wrapper>
  );
}

export default Container;
