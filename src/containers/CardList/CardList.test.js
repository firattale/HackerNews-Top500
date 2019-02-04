import React from "react";
import CardList from "./CardList";
import { shallow } from "enzyme";
import "../../setupTests";

// jest.mock("../../services/apiCalls.js");
const wrapper = shallow(<CardList />);

it("should render CardList component", () => {
  expect(wrapper.length).toBe(1);
});

it("should", () => {
  const FetchArticles = jest.fn();
  const componentDidMount = CardList.prototype.componentDidMount;
  CardList.prototype.componentDidMount = function() {
    spy();
    componentDidMount();
  };
  expect(FetchArticles).toHaveBeenCalled();
});

// it("should fetch the ids and put it on state", done => {
//   expect.assertions(1);
//   const wrapper = shallow(<CardList />);
//   const state = wrapper.instance().state;
//   console.log("state :", state);
//   done();
// });
