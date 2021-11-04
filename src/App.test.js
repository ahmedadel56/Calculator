import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('APP(main component)', () => {
  test('App exists', () => {
    render(<App />);
    const app = screen.getByTestId('App');
    expect(app).toBeInTheDocument();
  });
  it('it should match snapshot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
