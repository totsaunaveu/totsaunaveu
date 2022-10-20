import React, { useRef, useState } from "react";
import Link from "next/link";

function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    console.log(res);

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      // setMessage(error);
      inputEl.current.value = "";


      setMessage("Ups, algo falla 🙄.");

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage(
      "¡Bienvenido! 👍🏻 Ahora debes confirmar en tu mail la suscripción. Revisa la carpeta de SPAM."
    );
  };

  return (
    <section>
      <div className="mx-auto relative flex flex-col items-center justify-center mb-8 md:mb-12">
        <div className="w-full bg-sky-100 rounded-md p-14">
          <div className="flex flex-col items-center">
            <span className="text-sky-900 py-px px-2 text-sm">
              Cada lunes a las 12:00h.
            </span>
            <h3 className="text-center text-xl text-sky-700 font-semibold leading-tight">
              Recibe la newsletter semanal.
            </h3>
            <form
              onSubmit={subscribe}
              className="mx-auto mt-4 flex w-full max-w-md flex-col gap-2 sm:flex-row"
            >
              {/* <label htmlFor="email-input">{"Email Address"}</label> */}
              <input
                type="email"
                id="email-input"
                name="email"
                placeholder="Correo Electrónico"
                ref={inputEl}
                required
                autoCapitalize="off"
                autoCorrect="off"
                className="grow rounded text-sm py-3 px-3 focus:outline-none focus:border-2 focus:border-sky-600"
              />
              {/* <div>
            {message
              ? message
              : `I'll only send emails when new content is posted. No spam.`}
          </div> */}
              <button
                type="submit"
                value=""
                name="subscribe"
                className="rounded px-3 py-3 bg-sky-700 hover:bg-sky-900 text-white
            "
              >
                Suscríbeme
              </button>
            </form>
          </div>
          <div className="flex flex-col items-center mt-4 text-sky-900 py-px px-2 text-sm">
            {message
              ? message
              : `Será necesario que confirmes la suscripción en tu email.`} <br />
            <span> Si tienes problemas con el formulario, <span className="underline"><Link href="http://eepurl.com/ibgHR1" target="_blank"><a>haz click aquí</a></Link>.</span></span> 
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
