import CategoryForm from "@/components/category/CategoryForm";
import ProductForm from "@/components/products/ProductForm";
import React from "react";

const FormPage = () => {
  return (
    <div className=" grid md:grid-cols-2 gap-3">
      <CategoryForm />
      <ProductForm />{" "}
    </div>
  );
};

export default FormPage;
