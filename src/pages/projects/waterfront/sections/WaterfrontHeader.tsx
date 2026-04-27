import logo from "../../../../assets/thewaterfront/logo.avif";

export function WaterfrontHeader() {
  return (
    <section className="flex justify-center mb-16 px-6">
      <img
        src={logo}
        alt="The Waterfront Logo"
        className="w-full max-w-[500px] h-auto"
      />
    </section>
  );
}
