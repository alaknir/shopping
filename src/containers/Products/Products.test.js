import React from "react";
import { mount } from "enzyme";

import Products from "./Products";

describe("Products container", () => {
  it("Should render properly", () => {
    const component = <Products />;
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
