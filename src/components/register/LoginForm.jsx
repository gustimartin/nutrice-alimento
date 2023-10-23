function Contact() {
  return (
    <div className="h-full md:h-screen w-full  ">
      <img
        src="./bg.jpg"
        alt=""
        className=" w-full h-40   md:h-60 object-cover md:pt-6 pt-2 object-center"
      />
      <div className=" grid md:grid-cols-2  justify-center items-center  p-4  md:p-8 ">
        <div className="md:px-2">
          <h1 className=" first-letter:text-purple-800  text-zinc-800 px-4">
            Nutrice
          </h1>
          <h3 className=" text-lg md:text-2xl text-zinc-800 px-10 py-2 first-letter:text-3xl first-letter:text-green-800 ">
            Alimentos Naturales
          </h3>

          <p className=" first-letter:text-2xl text-xl text-zinc-800">
            Estamos aquí para responder tus preguntas, brindarte información
            adicional y ayudarte en lo que necesites. Si tienes alguna consulta
            sobre nuestros productos, sugerencias o simplemente deseas compartir
            tus experiencias con Nutrice, no dudes en contactarnos.
          </p>
        </div>

        <div
          className="justify-items-center
 justify-self-stretch place-content-center 
"
        >
          <form className="justify-center block p-4  rounded-lg  shadow-lg  max-w-xl     shadow-zinc-400   ">
            <div className="form-group mb-6 ">
              <input
                // {...register("user_name", {
                //   required: "Username is required",
                //   minLength: {
                //     value: 3,
                //     message: "Username must be atleast 3 charracters long",
                //   },
                // })}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base  bg-clip-padding rounded-sm hover:scale-105 duration-500 "
                placeholder="Nombre"
                name="user_name"
              />
              {/* <p className=" text-red-700"> 
          {errors.user_name?.message}</p> */}
            </div>
            <div className="form-group mb-6">
              <input
                // {...register("user_email", {
                //   required: "Email is required",
                //   pattern: {
                //     value:
                //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     message: "Email must be valid",
                //   },
                // })}
                name="user_email"
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base  border border-solid rounded-sm  ease-in-out m-0 hover:scale-105 duration-500"
                placeholder="Email"
              />
              {/* <p className=" text-red-700">{errors.user_email?.message}</p> */}
            </div>
            <div className="form-group mb-6">
              <textarea
                // {...register("Message", {
                //   required: "Message is required",
                //   minLength: {
                //     value: 15,
                //     message: "Message must be atleast 15 charracters long",
                //   },
                //   maxLength: {
                //     value: 150,
                //     message: "Message must be less than 150 charracters",
                //   },
                // })}
                name="Message"
                className="form-control block w-full px-3 py-1.5  bg-white bg-clip-padding border border-solid rounded-sm ease-in hover:scale-105 duration-500"
                rows="3"
                placeholder="Mensaje"
              ></textarea>
              {/* <p className=" text-red-700"> {errors.Message?.message}</p> */}
            </div>
            <div className="form-group  text-center mb-6"></div>
            <button
              type="submit"
              value="send"
              className=" text-white cursor-pointer p-2 flex justify-center rounded-sm shadow-lg ease-in hover:scale-105 duration-300 shadow-zinc-700 w-full bg-purple-800 hover:bg-purple-900  mt-1 "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
