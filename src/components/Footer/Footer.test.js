import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

it("should render Footer component", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.length).toBe(1);
});
