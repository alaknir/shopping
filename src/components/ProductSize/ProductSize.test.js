import React from "react";
import { mount } from "enzyme";

import ProductSize from "./ProductSize";

describe("ProductSize ", () => {
  it("Should render properly", () => {
    const component = (
      <ProductSize productId="1234" size={["XS", "S", "M", "L", "XL"]} />
    );
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
