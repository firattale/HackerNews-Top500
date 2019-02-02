import React from "react";
import Spinner from "./Spinner";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const wrapper = shallow(<Spinner />);

it("should render Spinner component", () => {
  expect(wrapper.length).toBe(1);
});
