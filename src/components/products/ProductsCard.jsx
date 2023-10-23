export default function ProductCard({
  image,
  id,
  stock,
  name,
  price,
  amount,
  description,
  nutrition,
}) {
  return (
    <div>
      <div className=" max-w-sm hover:bg-white rounded-sm shadow-lg shadow-zinc-700  group   hover:scale-x-125  ease-in  duration-200 hover:shadow-purple-800   ">
        <img
          className="hover:scale-105 p-2 ease-in duration-500 rounded-t-sm h-48 object-cover w-full"
          src={image}
          alt="image"
        />

        <div className="p-5 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {amount}
          </p>
          <p className="mb-3 font-normal  hidden group-hover:block text-gray-700 dark:text-gray-400">
            stock: {stock}
          </p>

          <p className=" hidden group-hover:block mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
            {/* <p className=" text-purple-500">mas info</p> */}
          </p>
          <p className="mb-3 font-normal  hidden group-hover:block text-gray-700 dark:text-gray-400">
            nutricion: {nutrition}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
}
