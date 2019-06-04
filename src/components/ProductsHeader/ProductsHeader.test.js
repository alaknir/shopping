import React from "react";
import { mount } from "enzyme";

import ProductsHeader from "./ProductsHeader";

describe("ProductsHeader ", () => {
  it("Should render properly", () => {
    const component = <ProductsHeader heading="heading" />;
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render properly with children", () => {
    const component = (
      <ProductsHeader heading="heading">
        <div>this is test</div>
      </ProductsHeader>
    );
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
