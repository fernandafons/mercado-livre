import React from 'react';
import SearchBar from '../SearchBar';
import Card from '../Card';
import theme from '../../styles/theme';
import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { StateProvider } from '../../hooks/Context';
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

describe('SearchBar component', () => {
  test('renders search bar input', () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <StateProvider>
            <SearchBar />
          </StateProvider>
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(screen.getByPlaceholderText('Nunca dejes de buscar')).toBeInTheDocument();
  });
  
  test('renders image in card', () => {
    const item = {
      id: 1,
      title: 'teste',
      price: {
        currency: 'ARG',
        price: 10099,
        amount: Math.trunc(10099),
        decimals: Number((10099 - Math.trunc(10099)).toFixed(2))
      },
      picture: 'http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg',
      condition: 'nuevo',
      free_shipping: true,
      state_name: 'Buenos Aires'
    }
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <StateProvider>
            <Card item={item} />
          </StateProvider>
        </BrowserRouter>
      </ThemeProvider>
    );
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
