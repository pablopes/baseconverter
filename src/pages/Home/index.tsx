/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-lonely-if */
/* eslint-disable no-restricted-properties */
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Body, Container, Header, Input, Title } from './styles';

const Home: React.FC = () => {
  const [decimal, setDecimal] = useState(0);
  const [binary, setBinary] = useState(0);

  function handleChange(e: any) {
    if (e.target.value !== '') {
      if (e.target.id === 'binary') {
        if (e.target.value.match(/^[0-1]+$/g) !== null) {
          const data = e.target.value.split('').map(Number).reverse();
          if (data.length > 8) {
            toast.error('Só é permitido 8 dígitos');
          } else {
            setBinary(e.target.value !== '' ? Number(e.target.value) : 0);

            const soma = data.reduce(
              (acc: number, value: number, index: number) =>
                acc + value * Math.pow(2, index),
            );
            setDecimal(soma);
          }
        } else {
          toast.error('Apenas 0 e 1 é permitido no campo Binário.');
        }
      } else {
        if (e.target.value > 255) {
          toast.error('O maior número possível é o 255.');
        } else {
          setDecimal(Number(e.target.value));
          let value = Number(e.target.value);
          let bin = '';
          while (value > 0) {
            if (value % 2 === 0) bin = `0${bin}`;
            else bin = `1${bin}`;

            value = Math.trunc(value / 2);
          }
          setBinary(Number(bin));
        }
      }
    } else {
      setBinary(0);
      setDecimal(0);
    }
  }

  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <Header>
        <Title>Convert Binary to Decimal</Title>
      </Header>
      <Body>
        <Input
          id="binary"
          placeholder="Binário"
          onChange={handleChange}
          value={binary > 0 ? String(binary) : ''}
          maxLength={8}
        />
        <Input
          id="decimal"
          placeholder="Decimal"
          onChange={handleChange}
          value={decimal > 0 ? String(decimal) : ''}
        />
      </Body>
    </Container>
  );
};

export default Home;
