import styles from "./landing.module.scss";
import Head from "next/head";
const Landing = (props) => {
  return (
    <>
      <section
        className={`${styles.landing} h-screen bg-black flex flex-col items-center justify-center`}
      >
        <div
          className={`${styles.landingLato} flex flex-col items-center justify-center`}
        >
          <h1
            className={`text-3xl sm:text-4xl text-center ${styles.landingHero} md:text-5xl lg:text-6xl`}
          >
            Mint Condition Tattoo & Piercing
          </h1>
          <span className="text-base md:text-lg">WALK-INS WELCOME</span>

          <div className="mt-2 flex flex-col items-center justify-center">
            <a
              className="text-base mt-2  md:text-lg"
              target="_blank"
              href="http://maps.google.com/?q=560 N Mountain Ave, Upland, California, 91786"
            >
              560 N Mountain Ave. Suite E
            </a>
            <a
              className="text-base mb-2  md:text-lg"
              target="_blank"
              href="http://maps.google.com/?q=560 N Mountain Ave. Suite E Upland, California, 91786"
            >
              Upland, CA 91786
            </a>
            <a className="text-base mt-4  md:text-lg" href="tel:9099825347">
              (909) 982-5347
            </a>
            <span className="text-base  md:text-lg">Mon-Sun 12pm- 9pm</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
