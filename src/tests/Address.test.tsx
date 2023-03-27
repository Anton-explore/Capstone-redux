import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

import Address from '../components/Address';



describe('Address component', () => {
  it('renders contact information', async () => {
      render(
            <ThemeProvider theme={theme}>
                <Address id="test-id" />
            </ThemeProvider>
        );
    
    expect(screen.getByText('Contacts')).toBeInTheDocument();
    expect(screen.getByText('500 342 242')).toBeInTheDocument();
    // expect(await screen.findByText('famtripuae19@gmail.com')).toHaveAttribute('href', 'mailto:famtripuae19@gmail.com');
    // expect(screen.getByText('Twitter')).toHaveAttribute('href', 'https://twitter.com/wordpress');
    // expect(screen.getByText('Facebook')).toHaveAttribute('href', 'https://www.facebook.com/facebook');
    // expect(screen.getByText('Skype')).toHaveAttribute('href', 'skype:kamsolutions.pl');
  });
});