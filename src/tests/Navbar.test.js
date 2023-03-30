import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

test('Test Navbar Component', () => {
  const navbarComponent = renderer.create(<Navbar />);
  const navbar = navbarComponent.toJSON();
  expect(navbar).toMatchSnapshot();
});
