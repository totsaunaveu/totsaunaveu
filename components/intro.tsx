import { CMS_NAME, CMS_URL } from "../lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function Intro() {
  return (
    <section className="flex-col md:flex-col flex items-center md:justify-between mt-4 mb-4 md:mb-3">
      <Link href="/">
        <h1 className="text-3xl text-center leading-none md:text-3xl font-bold uppercase">
          <span className="text-xl">Dels</span> <br />
          Valencians
        </h1>
      </Link>
      <h4 className="text-center font-lora md:text-center text-md mt-5">
        La veu dels valencians. Diari de la província de València.
      </h4>

      <div className="justify-between items-center text-center w-full lg:flex lg:w-auto">
        <ul className="flex flex-row flex-wrap justify-center text-xs md:text-sm font-serif font-semibold mt-3 mb-3 lg:space-x-8 lg:mt-6">
          <li>
            <Link href="/valencia">
              <p className="uppercase hover:underline mr-4 mb-4">València</p>
            </Link>
          </li>
          <li>
            <Link href="/horta">
              <p className="uppercase hover:underline mr-4 mb-4">l'Horta</p>
            </Link>
          </li>
          <li>
            <Link href="/camp-de-turia">
              <p className="uppercase hover:underline mr-4 mb-4">
                Camp de Túria
              </p>
            </Link>
          </li>
          <li>
            <Link href="/camp-de-morvedre">
              <p className="uppercase hover:underline mr-4 mb-4">
                Camp de Morvedre
              </p>
            </Link>
          </li>
          <li>
            <Link href="/opinion">
              <p className="uppercase hover:underline mr-4 mb-4">Opinión</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
