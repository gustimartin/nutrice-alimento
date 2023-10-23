"use client";
import { useGetAllProductsQuery } from "@/app/redux/features/productsApi";
import ProductCard from "@/components/products/ProductsCard";
function Products({ params }) {
  const { data: prod, error } = useGetAllProductsQuery();
  const productFilter = prod?.filter(
    (el) => el.category?.toLowerCase() === params.id
  );

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
