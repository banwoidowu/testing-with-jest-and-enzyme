import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { findByTestArr } from "../../../Utilities";

const setUp = () => {
  const component = shallow(<Header />);
  return component;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestArr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestArr(component, "logoIMG");
    expect(logo.length).toBe(1);
  });
});
