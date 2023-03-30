import renderer from "react-test-renderer";
import Footer from "../components/Footer";

test("Test Footer Component", () => {
  const component = renderer.create(<Footer />);
  const footer = component.toJSON();
  expect(footer).toMatchSnapshot();
});
