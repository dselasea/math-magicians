import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("Test Navbar Component", () => {
  const navbarComponent = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const navbar = navbarComponent.toJSON();
  expect(navbar).toMatchSnapshot();
});
