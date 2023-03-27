import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import Info from '../components/Info';


describe('Info', () => {
  test('renders the info text', () => {
    const text = 'Test info text';
      render(
        <ThemeProvider theme={theme}>
            <Info text={text} />
        </ThemeProvider>
        );
    const infoElement = screen.getByText(text);
    expect(infoElement).toBeInTheDocument();
  });
});