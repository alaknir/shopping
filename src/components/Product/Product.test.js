import React from "react";
import { mount } from "enzyme";

import Product from "./Product";

describe("Product container", () => {
  it("Should render properly", () => {
    const component = (
      <Product
        {...{
          id: "12_34",
          imgSrc: "",
          productName: "test1",
          isSale: true,
          isExclusive: true,
          price: "$15.00",
          size: ["XS", "S", "M", "L", "XL"]
        }}
      />
    );
    const wrapper = mount(component);
    expect(wrapper).toMatchSnapshot();
  });
});
