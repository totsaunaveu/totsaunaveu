import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between mt-4 mb-4 md:mb-3">
      <h1 className="text-3xl text-center leading-none md:text-3xl font-bold uppercase">
        <span className="text-xl">Dels</span> <br />
        Valencians
      </h1>
      <h4 className="text-center font-lora md:text-center text-lg mt-5">
      La veu dels valencians. Diari de la província de València.
      </h4>

      <div className="justify-between items-center text-center w-full lg:flex lg:w-auto">
        <ul className="flex flex-row flex-wrap justify-center	font-serif mt-6 mb-6 lg:space-x-8 lg:mt-12">
          <li>
            <a href="#" className="uppercase hover:underline mr-4 mb-4">
              Valencia
            </a>
          </li>
          <li>
            <a href="#" className="uppercase hover:underline mr-4 mb-4">
              Comarcas
            </a>
          </li>
          <li>
            <a href="#" className="uppercase hover:underline mr-4 mb-4">
              Opinión
            </a>
          </li>
          <li>
            <a href="#" className="uppercase hover:underline mr-4 mb-4">
              Colabora
            </a>
          </li>
          <li>
            <a href="#" className="uppercase hover:underline mr-4 mb-4">
              Escríbenos
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}