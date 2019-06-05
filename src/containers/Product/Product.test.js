import React from "react";
import { mount } from "enzyme";

import Product from "./Product";

describe("Product container", () => {
  it("Should render properly", () => {
    const component = <Product />;
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
