import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl text-center leading-none md:text-3xl font-bold uppercase md:pr-8">
        <span className="text-xl">Dels</span> <br />Valencians
      </h1>
      <h4 className="text-center font-lora md:text-left text-lg mt-5 md:pl-8">
        Provincia de València.{" "}
        <a
          href=""
          className="underline hover:text-success duration-200 transition-colors"
        >
          Informació
        </a>{" "}
        i{" "}
        <a
          href=""
          className="underline hover:text-success duration-200 transition-colors"
        >
          opinió
        </a>
        .
      </h4>
    </section>
  );
}
