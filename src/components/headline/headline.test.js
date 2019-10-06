import React from "react";
import { shallow } from "enzyme";
import Headline from "./Headline";
import findByTestArr from "./../../../Utilities";

const setUp = props => {
  const component = shallow(<Headline {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const component = findByTestArr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render a h1", () => {
      const h1 = findByTestArr(wrapper, "Header");
      expect(h1.length).toBe(1);
    });

    it("Should have a description", () => {
      const description = findByTestArr(wrapper, "desc");
      expect(description.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const component = findByTestArr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });
});
