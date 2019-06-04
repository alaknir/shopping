import React from "react";
import { mount } from "enzyme";

import ProductSpeciality from "./ProductSpeciality";

describe("ProductSpeciality ", () => {
  it("Should render properly isExclusive", () => {
    const component = <ProductSpeciality isExclusive />;
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render properly isSale", () => {
    const component = <ProductSpeciality isSale />;
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
