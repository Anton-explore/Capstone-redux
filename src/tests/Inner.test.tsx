import configureStore from 'redux-mock-store';
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import { theme } from "../assets/styles/theme"
import Inner from "../pages/Inner"
import { RootState } from "../store/store"

const mockStore = configureStore([]);

describe('Inner page component', () => {

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

    it('should render component', async () => {
        render(
            // <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Inner />,
                </ThemeProvider>
            // </Provider>
        );
        
        const innerComponent = await screen.findByTestId('inner-page');
        expect(innerComponent).toBeInTheDocument();
    })  
})

