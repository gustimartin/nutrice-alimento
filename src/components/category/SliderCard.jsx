import Link from "next/link";

function SliderCard({ image, name }) {
  return (
    <div className="flex flex-col items-center bg-gray-200 border-2 border-gray-300 rounded-sm  max-h-sm  md:flex-row  md:max-w-lg md:max-h-72   ">
      <img
        className="object-cover w-full rounded-t-sm  md:h-auto md:w-48 md:rounded-sm md:rounded-l-sm h-48 "
        src={image}
        alt=""
      />
      <div className="flex flex-col md:p-14 leading-normal p-4 w-full">
        <h5 className="mb-2 md:text-3xl text-2xl font-bold tracking-wide text-znc-800 ">
          {name}
        </h5>
        <Link href={`/categories/${name.toLowerCase()}`}>
          <button className=" py-1.5 px-4 ">Ver Mas</button>
        </Link>
      </div>
    </div>
  );
}

export default SliderCard;
