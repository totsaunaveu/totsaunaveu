import Container from "./container";
import cn from "classnames";
export default function Ticker({ preview }) {
  return (
    <section>
      <div
        className={cn("border-b bg-red-400", {
          "bg-accent-7 border-accent-7 text-white": preview,
          "bg-accent-1 border-accent-2": !preview,
        })}
      >
        <Container>
          <div className="hwrap text-sm font-semibold">
            <div className="hmove">
              <div className="hitem">
                <span className="">ÚLTIMA HORA: </span>
                Ramón Calvo nuevo Presidente del Real Madrid.
              </div>
              <div className="hitem">
                Aliquam consequat varius consequat.
              </div>
              <div className="hitem">
                Pellentesque auctor molestie orci ut blandit.
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
