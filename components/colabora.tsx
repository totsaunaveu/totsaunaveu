import Link from "next/link";

export default function Colabora() {
  return (
    <section>
      <div className="mx-auto relative flex flex-col items-center justify-center mb-8 md:mb-12">
        <div className="w-full bg-neutral-50 rounded-md p-14">
          <div className="flex flex-col items-center">
            <span className="text-neutral-800 py-px px-2 text-sm">
              Si quieres unirte al equipo de Opinión...
            </span>
            <Link href="/escribenos">
              <h3 className="text-center text-xl text-neutral-800 font-semibold leading-tight">
                Escríbenos, te estamos esperando.
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
