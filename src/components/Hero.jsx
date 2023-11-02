"use client";
import { useEffect, useState } from "react";
import SliderCategories from "./category/SliderCategories";

function Hero() {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  useEffect(() => {
    setAnimateLeft(true);
    setAnimateRight(true);
  }, []);

  return (
    <div className="grid md:grid-cols-2 pt-2 md:pt-4">
      <div className={`hidden md:flex ${animateLeft ? "slide-in-left" : ""}`}>
        <img
          src="./banner.jpg"
          alt=""
          className="w-full md:h-[100%] lg:h-[90%] xl:h-[80%] object-cover md:pl-2 object-center"
        />
      </div>
      <div
        className={`hidden md:block ${animateRight ? "slide-in-right" : ""}`}
      >
        <div className="flex flex-col justify-center md:h-[90%]">
          <h1 className="p-4  px-10 first-letter:text-purple-800 md:text-zinc-700">
            Nutrice
          </h1>
          <h2 className="text-center text-gray-800 md:text-zinc-700 text-5xl p-1">
            Almacen Natural
          </h2>
          <p className="pt-6 px-6 text-xl first-letter:text-4xl text-zinc-600">
            Tu destino saludable de alimentos naturales y frescos. Descubre
            nuestra amplia selección de productos orgánicos, desde
            superalimentos hasta productos sin gluten. ¡Cuida tu cuerpo de
            manera consciente y deliciosa con Nutrice! Explora nuestro catálogo
            en línea y encuentra los alimentos que te ayudarán a mantener un
            estilo de vida saludable. ¡Bienvenido a Nutrice, donde la naturaleza
            se encuentra con el sabor!
          </p>
        </div>
      </div>

      <div className="relative h-24 md:hidden z-[-1]">
        <div
          className="absolute  inset-0 bg-center bg-cover"
          style={{
            backgroundImage: "url('./banner.jpg')",
            opacity: 0.6,
            zIndex: -1,
          }}
        ></div>
        <div className="relative inset-0 flex flex-col justify-center ">
          <h1 className="p-1 first-letter:text-purple-800">Nutrice</h1>
          <h2 className="text-center text-gray-800">Almacen Natural</h2>
        </div>
        <p className="  pt-6 px-6 text-xl first-letter:text-4xl text-zinc-600">
          Tu destino saludable de alimentos naturales y frescos. Descubre
          nuestra amplia selección de productos orgánicos, desde superalimentos
          hasta productos sin gluten. ¡Cuida tu cuerpo de manera consciente y
          deliciosa con Nutrice! Explora nuestro catálogo en línea y encuentra
          los alimentos que te ayudarán a mantener un estilo de vida saludable.
          ¡Bienvenido a Nutrice, donde la naturaleza se encuentra con el sabor!
        </p>
      </div>
      {/* <SliderCategories /> */}
    </div>
  );
}

export default Hero;
