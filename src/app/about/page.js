import Link from 'next/link';
import Image from 'next/image';
import { FiThumbsUp, FiUserCheck } from 'react-icons/fi';
import { TiLocationArrow } from 'react-icons/ti';
// components
import Footer from '../components/Footer';
import Counter from '../components/Counter';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import LifeAt from '../components/LifeAt';
// data
import { mainFeatureData, faqData } from '../Data/data';
// metadata
export const metadata = {
  title: 'About Us',
  description:
    'companyName believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
};

export default function Page() {
  return (
    <section className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />

      <section
        className="relative table w-full lg:py-40 md:py-36 pt-36 pb-24 overflow-hidden bg-slate-800"
        style={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundImage: `url('/images/home/home-1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-slate-900"></div>
        <div className="container relative z-1">
          <div className="grid md:grid-cols-2 items-center gap-[30px]">
            <div className="">
              <h4 className="font-kaushan font-bold lg:leading-normal leading-normal text-4xl lg:text-6xl mb-5 text-white relative">
                Hello! <br /> We Are A{' '}
                <span className="after:absolute after:end-0 after:start-0 after:bottom-4 after:lg:h-4 after:h-3 after:w-auto after:bg-rose-500/30 relative text-rose-600">
                  Talented
                </span>
                <br /> Programmer
              </h4>
              <p className="text-white text-lg max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>

              <div className="relative mt-8">
                <Link href="contact">
                  <Button
                    id="contact"
                    title="contact us"
                    leftIcon={<TiLocationArrow />}
                    containerClass="flex-center gap-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-3/4 md:w-full relative -mt-16">
              <div className="p-6 bg-white rounded-3xl shadow">
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </section>

            <section className="relative md:pb-24 pb-16 overflow-hidden">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="relative">
              <Image
                src="/images/home/home-2.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt=""
              />
            </div>

            <div className="lg:ms-8">
              <div className="grid grid-cols-1 gap-[30px]">
                {mainFeatureData.map((item, index) => {
                  let Icons = item.icon;
                  return (
                    <div
                      key={index}
                      className="group flex items-center relative overflow-hidden p-6 rounded-md shadow bg-gray-50 hover:bg-cyan-500 transition-all duration-500 ease-in-out"
                    >
                      <span className="text-cyan-500 group-hover:text-white text-5xl font-semibold transition-all duration-500 ease-in-out">
                        <Icons className="w-8 h-8" />
                      </span>
                      <div className="flex-1 ms-3">
                        <h5 className="group-hover:text-white text-xl font-semibold transition-all duration-500 ease-in-out">
                          {item.title}
                        </h5>
                        <p className="text-slate-400 group-hover:text-white/50 transition-all duration-500 ease-in-out mt-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="absolute start-1 top-5 text-dark/[0.03] text-8xl group-hover:text-white/[0.04] transition-all duration-500 ease-in-out">
                        <Icons className="w-20 h-20" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

            <section
        className="py-20 w-full table relative bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('/images/home/home-4.jpg')` }}
      >
        <div className="absolute inset-0"></div>
        <div className="absolute inset-0 bg-gradient-to-tl to-indigo-600/75 from-teal-600/75"></div>

        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <h3 className="font-kaushan mb-4 md:text-7xl text-5xl text-white font-semibold">
              We Have Talented Developers
            </h3>
          </div>
        </div>
      </section>

      <section className="relative md:pb-24 pb-16">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 mt-8 gap-[30px] items-center">
            <div className="lg:col-span-4 md:col-span-6 lg:order-1 order-2">
              <div className="grid grid-cols-1 gap-[30px]">
                <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                  <Image
                    src="/images/about/coding.png"
                    width={64}
                    height={64}
                    className="size-16 md:ms-auto p-3 rounded-full shadow-md bg-white"
                    alt=""
                  />
                  <div className="mt-2 md:order-1 order-2">
                    <Link
                      href="#"
                      className="text-xl font-semibold font-eb_garamond hover:text-cyan-500"
                    >
                      High Quality
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin.
                    </p>
                  </div>
                </div>

                <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                  <Image
                    src="/images/about/icons/pot.svg"
                    width={64}
                    height={64}
                    className="size-16 md:ms-auto p-3 rounded-full shadow-md bg-white"
                    alt=""
                  />
                  <div className="mt-2 md:order-1 order-2">
                    <Link
                      href="#"
                      className="text-xl font-semibold font-eb_garamond hover:text-cyan-500"
                    >
                      Pure Grades
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin.
                    </p>
                  </div>
                </div>

                <div className="group transition-all duration-500 ease-in-out md:text-end text-start">
                  <Image
                    src="/images/about/icons/coffee-beans.svg"
                    width={64}
                    height={64}
                    className="size-16 md:ms-auto p-3 rounded-full shadow-md bg-white"
                    alt=""
                  />
                  <div className="mt-2 md:order-1 order-2">
                    <Link
                      href="#"
                      className="text-xl font-semibold font-eb_garamond hover:text-cyan-500"
                    >
                      Proper Roasting
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 md:col-span-12 lg:order-2 order-1">
              <Image
                src="/images/about/coding.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                className="lg:w-auto md:w-80 mx-auto"
                alt=""
              />
            </div>

            <div className="lg:col-span-4 md:col-span-6 order-3">
              <div className="grid grid-cols-1 gap-[30px]">
                <div className="group transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/about/icons/coffee.svg"
                    width={64}
                    height={64}
                    className="size-16 p-3 rounded-full shadow-md bg-white"
                    alt=""
                  />
                  <div className="mt-2">
                    <Link
                      href="#"
                      className="text-xl font-semibold font-eb_garamond hover:text-cyan-500"
                    >
                      The Perfect Cup
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin.
                    </p>
                  </div>
                </div>

                <div className="group transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/about/icons/drip-glass.svg"
                    width={64}
                    height={64}
                    className="size-16 p-3 rounded-full shadow-md bg-white"
                    alt=""
                  />
                  <div className="mt-2">
                    <Link
                      href="#"
                      className="text-xl font-semibold font-eb_garamond hover:text-cyan-500"
                    >
                      Coffee Machine
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin.
                    </p>
                  </div>
                </div>

                <div className="group transition-all duration-500 ease-in-out">
                  <Image
                    src="/images/about/icons/coffee-cup.svg"
                    width={64}
                    height={64}
                    className="size-16 p-3 rounded-full shadow-md bg-white"
                    alt=""
                  />
                  <div className="mt-2">
                    <Link
                      href="#"
                      className="text-xl font-semibold font-eb_garamond hover:text-cyan-500"
                    >
                      Coffee to Go
                    </Link>
                    <p className="text-slate-400 mt-3">
                      Composed in a pseudo-Latin language which more or less
                      pseudo-Latin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative md:pt-0 pt-48 bg-center bg-no-repeat bg-cover jarallax bg-fixed"
        style={{ backgroundImage: "url('/images/about/happy/1.jpg')" }}
      >
        <div className="container relative">
          <div className="md:flex justify-end">
            <div className="md:w-1/2 md:py-36 py-10 lg:px-16 md:px-10 px-6 bg-white text-center">
              <Image
                src="/images/about/icons/coffee.svg"
                width={64}
                height={64}
                className="size-16 p-3 rounded-full shadow-md bg-white mx-auto"
                alt=""
              />

              <h4 className="font-eb_garamond text-3xl font-medium mt-4">
                Happy Hours
              </h4>

              <p className="text-cyan-500 font-eb_garamond text-lg font-medium mt-2">
                Starts at 3pm
              </p>

              <p className="text-slate-400 mt-4">
                The restaurant will open at 3pm for happy hour and dinner
                service starting at 5pm. We will continue to offer brunch on
                weekends from 10am-3pm with bottomless mimosas. We will also
                continue with our late night lounge on Friday and Saturdays
                until 2am.
              </p>

              <div className="mt-4">
                <Link
                  href="/tel:+152534-468-854"
                  className="relative inline-block font-semibold tracking-wide align-middle text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-cyan-500 hover:text-cyan-500 after:bg-cyan-500 duration-500 font-eb_garamond text-lg"
                >
                  +152 534-468-854
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative pb-10">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-5 md:col-span-6">
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/images/about/deliver/1.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '400px', height: 'auto' }}
                    className="lg:w-[400px] w-[280px] rounded-md"
                    alt=""
                  />
                </div>
                <div className="absolute -end-5 -bottom-16 rounded-md">
                  <Image
                    src="/images/about/deliver/2.png"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '280px', height: 'auto' }}
                    className="lg:w-[280px] w-[200px] border-8 border-white rounded-md"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 mt-8 md:mt-0">
              <div className="lg:ms-6">
                <h3 className="mb-4 md:text-4xl md:leading-normal text-3xl leading-normal font-semibold">
                  We Deliver Optimal <br /> IT Solutions
                </h3>
                <p className="text-slate-400 max-w-xl">
                  You can combine all our services and products into a
                  comprehensive solution, from server infrastructure to
                  application development.
                </p>

                <div className="grid lg:grid-cols-2 gap-6 mt-6">
                  <div className="group flex duration-500 xl:p-3">
                    <div className="flex align-middle justify-center items-center size-14 mt-1 bg-cyan-500/5 group-hover:bg-cyan-500 group-hover:text-white border-2 border-cyan-500/20 text-cyan-500 rounded-lg text-2xl shadow-sm duration-500">
                      <FiUserCheck className="size-5" />
                    </div>
                    <div className="flex-1 ms-4">
                      <h4 className="mb-0 text-lg font-medium">
                        Customer Service
                      </h4>
                      <p className="text-slate-400 mt-3">
                        We ensure 24/7 customer support for maximum
                        satisfaction.
                      </p>
                    </div>
                  </div>

                  <div className="group flex duration-500 xl:p-3">
                    <div className="flex align-middle justify-center items-center size-14 mt-1 bg-cyan-500/5 group-hover:bg-cyan-500 group-hover:text-white border-2 border-cyan-500/20 text-cyan-500 rounded-lg text-2xl shadow-sm duration-500">
                      <FiThumbsUp className="size-5" />
                    </div>
                    <div className="flex-1 ms-4">
                      <h4 className="mb-0 text-lg font-medium">
                        Quality Solutions
                      </h4>
                      <p className="text-slate-400 mt-3">
                        We deliver top-notch quality in everything, from
                        software development to data management.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative mt-4">
                  <div className="relative p-6 border-2 border-cyan-500 rounded-[30px] before:content-[''] before:absolute before:w-28 before:border-[6px] before:border-white before:-bottom-1 before:start-16 before:z-2 after:content-[''] after:absolute after:border-2 after:border-cyan-500 after:rounded-none after:rounded-e-[50px] after:w-20 after:h-20 after:-bottom-[80px] after:start-[60px] after:z-3 after:border-s-0 after:border-b-0">
                    <span className="font-semibold text-2xl leading-normal">
                      Technology is the core of sustainable growth, helping your
                      business overcome challenges.
                    </span>

                    <div className="absolute text-8xl -top-0 start-4 text-cyan-500/10 -z-1">
                      <i className="mdi mdi-format-quote-open"></i>
                    </div>
                  </div>

                  <div className="text-lg font-semibold mt-6 ms-44">
                    - Your Company Name
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LifeAt />

      <Footer />

    </section>
  );
}
