import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { LuMapPin } from "react-icons/lu";

function Footer() {
  return (
    <footer className="  bg-gray-900 text-gray-300 w-full ">
      <div className="container mx-auto border-t border-gray-600 md:py-4 py-2 flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2  md:w-5/12 lg:w-1/3 md:p-4 p-2">
          <h3 className="text-xl font-semibold mb-2">Contacto</h3>
          <ul className="space-y-2 ">
            <li className=" flex flex-row gap-4 py-1">
              <BsWhatsapp className=" text-2xl text-green-700 flex" />
              <p> 123-456-7890</p>{" "}
            </li>
            <Link href="/contact">
              <li className=" flex flex-row gap-4 py-1">
                <SiGmail className=" text-2xl text-red-700" />{" "}
                <p>nutricealmacen@gmail.com</p>
              </li>
            </Link>
            <Link
              href="https://www.google.com/maps/place/NutriCe+Almac%C3%A9n+Natural/@-34.4538975,-58.7966185,21z/data=!4m6!3m5!1s0x95bc9fad7bb3f279:0xa8bf1b508b1f0156!8m2!3d-34.4539099!4d-58.7966558!16s%2Fg%2F11twg6441z?entry=ttu"
              target="_blank"
            >
              <li className="py-2 flex flex-row gap-4">
                <LuMapPin className=" text-4xl text-white" />{" "}
                <p>
                  Luis Gonnet 6913 Local 1, B1669 Del Viso, Provincia de Buenos
                  Aires
                </p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 md:p-4 p-2">
          <h3 className="text-xl font-semibold mb-2">Redes Sociales</h3>
          <ul className="space-y-2">
            <Link
              href="https://www.instagram.com/nutricealmacen/"
              target="_blank"
            >
              <li className=" flex flex-row gap-4 md:py-4 py-2">
                <BsInstagram size={25} className=" text-[#C13584] text-2xl" />
                <p>Instagram</p>
              </li>
            </Link>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 md:p-4">
          <h3 className="text-xl font-semibold mb-2">Sobre Nosotros</h3>

          <p>
            En Nutrice, Te invitamos a descubrir una experiencia única en
            alimentos naturales. Encuentra en nuestro catálogo los mejores
            productos para mantener un estilo de vida saludable y lleno de
            energía.
          </p>
          {/* <p>Nutrice Almacén Natural: Nuestro compromiso es ofrecerte alimentos naturales y nutritivos que cuiden de tu bienestar. Encuentra opciones saludables y sabrosas para alimentarte de forma consciente.</p> */}
          <Link href="about">
            <span className=" text-blue-500">Saber Mas</span>
          </Link>
        </div>
      </div>
      <div className="container mx-auto text-center py-2">
        <p>&copy; 2023 Nutrice. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
