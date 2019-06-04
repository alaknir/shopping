import xhr from "./xhr";

export const getProducts = () =>
  xhr({
    url: "https://api.jsonbin.io/b/5cae9a54fb42337645ebcad3"
  });
