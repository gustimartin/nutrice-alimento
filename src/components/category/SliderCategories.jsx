"use client";
import Slider from "react-slick";
import { useGetCategoriesQuery } from "@/app/redux/features/productsApi";
import SliderCard from "./SliderCard";

function SliderCategories() {
  const { data: categories } = useGetCategoriesQuery();
  console.log(categories);
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };
  return (
    <div className="pt-80 md:pt-0 md:px-6 pb-4 px-6  ">
      <Slider {...settings}>
        {categories?.length
          ? categories.map((category) => (
              <SliderCard
                key={category.id}
                name={category.name}
                image={category.image}
              />
            ))
          : null}
      </Slider>
    </div>
  );
}
export default SliderCategories;
