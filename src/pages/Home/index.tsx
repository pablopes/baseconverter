import React from 'react';

import { Body, Container, Header, Input, Title } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Convert Binary to Decimal</Title>
      </Header>
      <Body>
        <Input placeholder="Binário" />
        <Input placeholder="Decimal" />
      </Body>
    </Container>
  );
};

export default Home;
