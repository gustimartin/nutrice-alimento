import Link from "next/link";

function CategoryCard({ name, id, image }) {
  return (
    <div className="md:relative  rounded-sm  h-56 md:h-48  transition-all duration-200 cursor-pointer md:filter md:grayscale md:hover:grayscale-0 md:block hover:scale-105 ease-in ">
      <Link href={`/categories/${name.toLowerCase()}`}>
        <img
          src={image}
          alt="image"
          className=" hidden md:block object-cover object-center h-full w-full rounded-sm md:absolute md:mix-blend-overlay  md:opacity-90    "
        />
      </Link>
      <h1 className=" hidden md:block text-5xl text-center font-bold text-zinc-900 md:p-14">
        {name}
      </h1>
      <Link href={`/categories/${name.toLowerCase()}`}>
        <div className="flex flex-col md:hidden items-center bg-gray-200 border-2 border-gray-300 rounded-sm  max-h-sm  md:flex-row  md:max-w-lg md:max-h-72   ">
          <img
            className="object-cover w-full rounded-t-sm   h-40 "
            src={image}
            alt=""
          />
          <div className="flex flex-col leading-normal  p-4 w-full">
            <h5 className="mb-2  md:text-4xl text-2xl font-bold tracking-wide text-znc-800 ">
              {name}
            </h5>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
