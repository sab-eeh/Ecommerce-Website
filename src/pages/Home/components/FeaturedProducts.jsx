import React from "react";
import product1 from "../../../assets/Images/Product-1.png";
import product2 from "../../../assets/Images/Product-2.png";
import product3 from "../../../assets/Images/Product-3.png";

export const products = [
  {
    id: 1,
    title: "Black Hoodie",
    description:
      "Stylish all-black hoodie made with premium cotton blend for maximum comfort.",
    price: 49.99,
    image: product1,
    color: "Black",
  },
  {
    id: 2,
    title: "Cream & Black Sweatshirt",
    description:
      "Modern cream and black color-block sweatshirt perfect for casual wear.",
    price: 54.99,
    image: product2,
    color: "Cream & Black",
  },
  {
    id: 3,
    title: "Cream Pullover",
    description:
      "Minimalist cream pullover with a relaxed fit and soft fleece interior.",
    price: 44.99,
    image: product3,
    color: "Cream",
  },
];

const FeaturedProducts = () => {
  return (
    <>
      <div className="pb-6 pt-16 px-15">
        <div className="max-w-2xl space-y-3">
          <h1 className="font-extrabold text-4xl">NEW DROPS</h1>
          <p className="font-medium">
            Check out our latest arrivals in the New Drops section — fresh
            styles, trending picks, and must-haves just landed. Stay ahead with
            the newest in fashion, tech, and more.
          </p>
        </div>
        <div className="flex items-center gap-4 py-10">
          {products.map((product) => (
            <div className="space-y-4 hover:cursor-pointer rounded-3xl" key={product.id}>
              <img
                className="rounded-3xl"
                src={product.image}
                alt={product.title}
              />
              <div className="px-2 space-y-2">
                <h3 className="font-bold text-2xl">{product.title}</h3>
                <p className="font-medium">{product.description}</p>
                <span className="font-bold">${product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
