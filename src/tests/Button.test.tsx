
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import { ButtonProps } from '../services/types';
import Button from '../components/Button/Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme';

afterEach(cleanup);

describe('testing Button', () => {

  const defaultProps: ButtonProps = {
    text: 'Test Button',
    onClick: jest.fn(),
  };

  it('snapshot renders button text correctly', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Button {...defaultProps} />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('snapshot renders correctly, falsy values', () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <Button />
        </ThemeProvider>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('calls onClick prop when button is clicked', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button {...defaultProps} />
      </ThemeProvider>
    );
    fireEvent.click(screen.getByText('Test Button'));
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  // it('disables button when disabled prop is true', () => {
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <Button {...defaultProps} disabled />
  //     </ThemeProvider>
  //   );
  //   expect(screen.getByText('Test Button')).toBeDisabled();
  // });
})
