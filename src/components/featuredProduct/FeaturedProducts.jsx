import React from "react";

const FeaturedProducts = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pixels.com/photos/1972115/pixels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pixels.com/photos/1163194 /pixels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pixels.com/photos/1759622/pixels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",

      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pixels.com/photos/1457983/pixels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",

      title: "Skirt",

      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pixels.com/photos/2065200/pixels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",

      title: "Hat",

      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>Featured products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {/* {error
            ? "Something went wrong!"
            : loading
            ? "loading"
            : data?.map((item) => <Card item={item} key={item.id} />)} */}
      </div>
    </div>
  );
};

export default FeaturedProducts;
