import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import Expertise from '../components/Expertise';


describe('Expertise', () => {
  test('renders the correct number of experience blocks', async () => {
    const data = [
      {
        date: 'January 2022 - Present',
        info: {
          company: 'Test Company 1',
          job: 'Test Job 1',
          description: 'Test Description 1',
        },
      },
      {
        date: 'January 2021 - December 2021',
        info: {
          company: 'Test Company 2',
          job: 'Test Job 2',
          description: 'Test Description 2',
        },
      },
    ];
      render(
          <ThemeProvider theme={theme}>
            <Expertise data={data} />
        </ThemeProvider>
      );

    expect(screen.getByText(/Experience/i)).toBeInTheDocument();
    
    const boxBlocks = await screen.findAllByTestId('job');
    expect(boxBlocks).toHaveLength(data.length);
  });
});