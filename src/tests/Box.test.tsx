import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import Box from '../components/Box';


describe('Box', () => {
  test('renders the title, content and heading', () => {
    const title = 'Test title';
    const content = 'Test content';

      render(
        <ThemeProvider theme={theme}>
          <Box title={title} content={content} />
        </ThemeProvider>
      );

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

    const contentElement = screen.getByText(content);
    expect(contentElement).toBeInTheDocument();

  });
});