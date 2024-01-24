import Link from "next/link";

const HomeOneColumnCenter = () => {
  return (
    <section className={`w-full max-w-page bg-ravenci-light-gray`}>
      <article
        className={`relative py-36 mx-auto flex justify-center w-full max-w-lg h-full`}
      >
        <div
          className={`relative flex flex-col items-center w-full max-w-sm h-full text-center`}
        >
          <h3
            className={`mb-7 font-poppins font-medium text-sm tracking-wide text-ravenci-dark-gray uppercase`}
          >
            But why Ravenci?
          </h3>
          <h2 className={`font-poppins font-semibold text-4xl tracking-tight`}>
            Developing creative digital solutions
          </h2>
          <p className={`mt-8 mb-12 text-xs text-ravenci-dark-gray leading-6`}>
            With so many tools out there making website building much easier
            than ever before, you might be wondering what an expert developer
            can do for you and your business.
          </p>
          <Link
            href={`/about`}
            className={`py-3 px-8 bg-ravenci hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-ravenci-dark-gray font-poppins text-xs text-ravenci-light-gray uppercase transition-all duration-[0.4s]`}
          >
            About Ravenci
          </Link>
        </div>
        <div
          className={`absolute bottom-0 w-full h-1.5 bg-ravenci-primary`}
        ></div>
      </article>
    </section>
  );
};

export default HomeOneColumnCenter;