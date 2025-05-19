import Nav from "@/components/custom/NavbarNew";
import Call from "./Call";

export default function Contact() {
  return (
    <div>
      <Nav />
      <section className="bg-[#0d0d0d] mt-16 py-16 px-6 md:px-12 text-theme">
        {/* <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="mt-2 text-theme">
            Got an idea? Let’s build it together.
          </p>
        </div> */}
        <div className=" mb-8">
          <h2 className="text-4xl font-bold text-center">Say Hello!</h2>
          <p className="text-center text-white/50 mt-2">
            From concept to launch — we’re all ears.
          </p>
        </div>
        <Call />
      </section>
    </div>
  );
}
