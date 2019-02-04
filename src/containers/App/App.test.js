import React from "react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<App />);

it("should render App component", () => {
  expect(wrapper.length).toBe(1);
});
