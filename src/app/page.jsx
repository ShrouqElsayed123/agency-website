import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-8 md:py-16">
      {/* النص */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-gradient-to-b from-mainColor to-gray-600 bg-clip-text text-transparent">
          Better design
          <br />
          for your digital products.
        </h1>

        <p className="text-gray-700 mt-3">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>

        <button className="bg-mainColor text-white px-5 py-2 mt-5 rounded-sm cursor-pointer hover:bg-mainColorDark font-medium transition-colors">
          See Our Work
        </button>
      </div>

      {/* الصورة */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/hero.png"
          width={400}
          height={400}
          alt="Hero illustration"
          className="w-[250px] md:w-[400px] h-auto"
        />
      </div>
    </section>
  );
}
