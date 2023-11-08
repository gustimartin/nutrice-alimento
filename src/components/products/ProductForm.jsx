"use client";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  useGetCategoriesQuery,
  useCreateProductMutation,
} from "@/app/redux/features/productsApi";

function ProductForm() {
  const { data: categories, error } = useGetCategoriesQuery();
  const [createProduct] = useCreateProductMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // const { errors: err } = useSelector((state) => state.user);

  const onSubmit = handleSubmit((data) => {
    const price = Number(data.price);
    const stock = Number(data.stock);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("brand", data.brand);
    formData.append("price", price);
    formData.append("category", data.category);
    formData.append("amount", data.amount);
    formData.append("stock", stock);
    formData.append("nutrition", data.nutrition);
    formData.append("image", data.image[0]);
    // console.log(data);
    createProduct(formData);
    reset();
  });

  return (
    <div className=" ">
      <form
        onSubmit={onSubmit}
        className=" rounded-sm p-10 shadow-lg   w-full   h-full"
      >
        {/* {err?.map((el) => (
          <div
            className="my-2 bg-red-500 text-white p-2 rounded-sm"
            key={el.id}
          >
            {el}
          </div>
        ))} */}
        <div>
          <h1 className=" text-zinc-800 text-3xl font-bold ">
            Agregar Producto
          </h1>
        </div>
        <div className="relative z-0 my-10">
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
          />
          {errors.name && <p className=" text-red-500">Nombre es requerido</p>}
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Nombre
          </label>
        </div>
        <select
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-purple-800 peer"
          {...register("category", { required: true })}
          name="category"
        >
          <option selected>Selecciona una Categoria</option>
          {categories
            ? categories.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))
            : console.log(error)}
        </select>
        <div className="relative z-0 my-10">
          <input
            type="text"
            {...register("brand", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
            name="brand"
          />
          {errors.email && <p className=" text-red-500">email es requerido</p>}
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Marca
          </label>
        </div>
        <div className="relative z-0 my-10">
          <input
            type="number"
            {...register("stock", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
            name="stock"
          />
          {errors.username && (
            <p className=" text-red-500">password es requerido</p>
          )}
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Stock
          </label>
        </div>
        <div className="relative z-0 my-10">
          <input
            name="price"
            type="number"
            {...register("price", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
          />
          {errors.email && <p className=" text-red-500">email es requerido</p>}
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Precio
          </label>
        </div>
        <div className="relative z-0 my-10">
          <input
            type="text"
            {...register("amount", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
            name="amount"
          />
          {errors.username && (
            <p className=" text-red-500">password es requerido</p>
          )}
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Presentacion
          </label>
        </div>
        <textarea
          name="nutrition"
          {...register("description", { required: true })}
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm border-0 border-b-2 text-gray-900 bg-transparent  rounded-sm  border-gray-300 focus:ring-purple-800 focus:border-purple-800 "
          placeholder="Descripcion..."
        ></textarea>
        <textarea
          {...register("nutrition", { required: true })}
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm border-0 border-b-2 text-gray-900 bg-transparent  rounded-sm  border-gray-300 focus:ring-purple-800 focus:border-purple-800 "
          placeholder="Valor Nutricional..."
        ></textarea>{" "}
        <div className="relative z-0 my-10">
          <input
            type="file"
            name="image"
            {...register("image", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
          />
          {errors.username && (
            <p className=" text-red-500">password es requerido</p>
          )}
          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-800  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Imagen
          </label>
        </div>
        <div>
          <button
            className=" lg:my-10 my-6  w-full p-1.5  rounded-sm bg-purple-800 text-zinc-200 ease-in hover:duration-300 hover:scale-105 active:text-white active:border active:border-white"
            type="submit"
          >
            Crear
          </button>
        </div>{" "}
      </form>
    </div>
  );
}

export default ProductForm;
