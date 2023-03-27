import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';
import SkillsForm from '../components/SkillsList/SkillsForm';
import { RootState } from '../store/store';


const mockStore = configureStore([]);

describe('SkillsForm', () => {
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

  it('should render the form', () => {
    render(
      <Provider store={store}>
        <SkillsForm />
      </Provider>
    );
    expect(screen.getByText('Skill Name')).toBeInTheDocument();
    expect(screen.getByText('Skill Range')).toBeInTheDocument();
    expect(screen.getByText('Add skill')).toBeInTheDocument();
  });

//   it('should add a new skill when form is submitted', async () => {
//     render(
//       <Provider store={store}>
//         <SkillsForm />
//       </Provider>
//     );
//     const skillNameInput = screen.getByLabelText('Skill Name');
//     const skillRangeInput = screen.getByLabelText('Skill Range');
//     const addButton = screen.getByText('Add skill');

//     // set form input values
//     userEvent.type(skillNameInput, 'React');
//     userEvent.type(skillRangeInput, '90');
   

//     // submit the form
//      fireEvent.click(addButton);


//     // verify that the skill was added to the store
//     expect(await store.getActions()).toEqual([
//       {
//         type: 'skills/addSkill',
//         payload: { id: expect.any(String), skillName: 'React', skillRange: '90' },
//       },
//     ]);
//   });

  it('should display validation error messages when input values are invalid', () => {
    render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <SkillsForm />
            </ThemeProvider>
      </Provider>
    );
    const skillNameInput = screen.getByLabelText('Skill Name');
    const skillRangeInput = screen.getByLabelText('Skill Range');
    const addButton = screen.getByText('Add skill');

    // set form input values to invalid values

    userEvent.type(skillNameInput, 'React#');
    userEvent.type(skillRangeInput, '5');


    // submit the form
    fireEvent.click(addButton);

    // verify that error messages are displayed
    expect(screen.getByText('Must be only letters or numbers!')).toBeInTheDocument();
    expect(screen.getByText('Skill range must be greater than or equal to 10')).toBeInTheDocument();
  });
});