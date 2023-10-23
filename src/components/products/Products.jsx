import { useGetAllProductsQuery } from "@/app/redux/features/productsApi";
import ProductCard from "./ProductCard";
// import { useParams } from "react-router-dom";
function Products() {
  const { data: prod, error } = useGetAllProductsQuery();
  // const { id } = useParams();
  console.log(prod);
  // const productFilter = prod?.filter(
  //   (el) => el.category[0]?.toLowerCase() === id
  // );

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {productFilter?.length
        ? productFilter.map((el) => (
            <div key={el.id}>
              <ProductCard
                image={el.image?.secure_url}
                name={el.name}
                amount={el.amount}
                price={el.price}
                description={el.description}
                stock={el.stock}
                nutrition={el.nutrition}
              />
            </div>
          ))
        : console.log(error)}
    </div>
  );
}

export default Products;
