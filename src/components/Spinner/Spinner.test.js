import React from "react";
import Spinner from "./Spinner";
import { shallow } from "enzyme";

it("should render Spinner component", () => {
  const wrapper = shallow(<Spinner />);
  expect(wrapper.length).toBe(1);
});
