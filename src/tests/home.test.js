import renderer from 'react-test-renderer';
import Home from '../components/Home';

test('Test Home Component', () => {
  const component = renderer.create(<Home />);
  const home = component.toJSON();
  expect(home).toMatchSnapshot();
});
