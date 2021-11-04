import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Home from './Home';

describe('<Home />', () => {
  it('it should match snapshot', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

