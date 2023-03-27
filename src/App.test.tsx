import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from './App';
// import axios from "axios";
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/styles/theme';
import configureStore from 'redux-mock-store';
import { RootState } from './store/store';


const mockStore = configureStore([]);

jest.mock('axios');

describe('App', () => {

  let store: ReturnType<typeof mockStore>;
  let initialState: RootState;
  beforeEach(() => {
    initialState = {
      skills: {
        skills: [],
      },
    };
    store = mockStore(initialState);
  });

  const response = {};

  test('renders nav links', () => {
    // axios.get.mockReturnValue(response)

    render(
      // <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={['/details']}>
            <App />
        </MemoryRouter>
      </ThemeProvider>
      // </Provider>
    );

    const aboutLink = screen.getByRole('link', { name: 'About me' });
    expect(aboutLink).toBeInTheDocument();

    const educationLink = screen.getByRole('link', { name: 'Education' });
    expect(educationLink).toBeInTheDocument();
  });

  // test('renders Home component on home page', () => {
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <MemoryRouter initialEntries={['/']}>
  //         <App />
  //       </MemoryRouter>
  //     </ThemeProvider>
  //   );

  //   const homeComponent = screen.getByTestId('home-page');
  //   expect(homeComponent).toBeInTheDocument();
  // });

  // test('renders Inner component on /details page', async () => {
  //   render(
  //     // <Provider store={store}>
  //     <ThemeProvider theme={theme}>
  //       <MemoryRouter initialEntries={['/details']}>
  //         <App />
  //       </MemoryRouter>
  //     </ThemeProvider>
  //     // </Provider>
  //   );

  //   expect(await screen.findByTestId('inner-page')).toBeInTheDocument();
  // });

  // test('renders CommunityCard component on /community/:id page', () => {
  //   const communityId = '1';
  //   render(
  //     <MemoryRouter initialEntries={[`/community/${communityId}`]}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   const communityCardComponent = screen.getByTestId('community-card-component');
  //   expect(communityCardComponent).toBeInTheDocument();
  // });

  // test('renders NotFound component on /not-found page', () => {
  //   render(
  //     <MemoryRouter initialEntries={['/not-found']}>
  //       <App />
  //     </MemoryRouter>
  //   );

  //   const notFoundComponent = screen.getByTestId('not-found-page');
  //   expect(notFoundComponent).toBeInTheDocument();
  // });
});