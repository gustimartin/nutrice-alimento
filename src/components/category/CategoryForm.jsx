"use client";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "@/app/redux/features/productsApi";

function CategoryForm() {
  const [createCategory] = useCreateCategoryMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image[0]);
    // console.log(data);
    createCategory(formData);
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
            Agregar Categoria
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
        <div className="relative z-0 my-10">
          <input
            type="file"
            name="image"
            {...register("image", { required: true })}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-800 peer"
            placeholder=" "
          />
          {/* {errors.username && (
            <p className=" text-red-500">password es requerido</p>
          )} */}
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

export default CategoryForm;
