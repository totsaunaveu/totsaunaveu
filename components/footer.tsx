import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <Container>
        <div className="mx-auto max-w-screen-xl text-center">
          <h2 className="text-3xl md:text-3xl font-bold text-center uppercase tracking-tight md:tracking-tighter leading-none mb-4 mt-4">
            <Link href="/">
              <a>
                <span className="text-lg">Dels</span> <br />
                Valencians
              </a>
            </Link>
          </h2>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            La veu dels valencians. Diari de la província de València.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <Link href="/valencia">
              <a className="mr-4 hover:underline md:mr-6 ">
                València
              </a>
            </Link>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Comarcas
              </a>
            </li>
            <li>
            <Link href="/opinion">
              <a className="mr-4 hover:underline md:mr-6 ">
                Opinión
              </a>
            </Link>
            </li>
            <li>
            <Link href="/escribenos">
              <a className="mr-4 hover:underline md:mr-6 ">
                Colabora
              </a>
            </Link>
            </li>
            <li>
              <Link href="/escribenos">
              <a className="mr-4 hover:underline md:mr-6">
                Escríbenos
              </a>
            </Link>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022{" "}
            <a href="#" className="hover:underline">
              Dels Valencians
            </a>
            . Tots els drets reservats.
          </span>
        </div>
      </Container>
    </footer>
  );
}
