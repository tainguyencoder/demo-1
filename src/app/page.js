import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CounterTwo from './components/CounterTwo';
import LifeAt from './components/LifeAt';
import Counter from './components/Counter';
import Hero from './components/Hero';
// data
import { mainFeatureData, faqData } from './Data/data';
// metadata
export const metadata = {
  description:
    'We are a development working at the intersection of design and technology.',
};

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="relative">
        <div className="container relative lg:pt-24 pt-16">
          <div
            className="absolute inset-0 opacity-25 bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: "url('/images/home/home-3.png')" }}
          ></div>
          <div className="relative grid grid-cols-1 pb-8 text-center z-1">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-black">
              We have Built This Site With Content Management In Mind.
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <CounterTwo />
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

      <section className="relative md:py-24 py-16">
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              What Our Users Say
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>
        </div>

        <div className="container-fluid relative overflow-hidden">
          <div className="grid grid-cols-1 mt-8">
            <div className="slider relative overflow-hidden m-auto mb-4 before:content-[''] before:absolute before:top-0 before:start-0 before:z-2 after:content-[''] after:absolute after:top-0 after:end-0 after:z-2">
              <div className="slide-track flex items-center">
                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I did not know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just do not do at all with Techwind.
                          Suspicious but I cannot say I do not love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about Techwind is every time I pay my
                          employees, my bank balance does not go down like it
                          used to. Looking forward to spending this extra cash
                          when I figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/03.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I am trying to get a hold of someone in support. I am
                          in a lot of trouble right now, and they are saying it
                          has something to do with my books. Please get back to
                          me right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/04.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU, and with
                          Techwind, I somehow do not have to do that anymore.
                          Nervous to travel there now, though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/05.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth email I have sent to your support
                          team. I am literally being held in jail for tax fraud.
                          Please answer your emails; this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/08.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about Techwind is every time I pay my
                          employees, my bank balance does not go down like it
                          used to. I am looking forward to spending this extra
                          cash when I figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I am trying to get a hold of someone in support. I am
                          in a lot of trouble right now, and they are saying it
                          has something to do with my books. Please get back to
                          me right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/08.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about Techwind is every time I pay my
                          employees, my bank balance does not go down like it
                          used to. I am looking forward to spending this extra
                          cash when I figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/01.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I am trying to get a hold of someone in support. I am
                          in a lot of trouble right now, and they are saying it
                          has something to do with my books. Please get back to
                          me right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/02.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU, and with
                          Techwind, I somehow do not have to do that anymore. I
                          am nervous to travel there now, though.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/03.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Janisha Doll
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          This is the fourth email I’ve sent to your support
                          team. I am literally being held in jail for tax fraud.
                          Please answer your emails; this is important.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/04.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Thomas Israel
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I did not know a thing about icon design until I read
                          this book. Now I can create any icon I need in no
                          time. Great resource!
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/05.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just do not do at all with Techwind.
                          Suspicious, but I cannot say I do not love it.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="slide h-auto md:w-[360px] w-72 m-2">
                  <ul className="space-y-4">
                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/06.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about Techwind is every time I pay my
                          employees, my bank balance doesnt go down like it used
                          to. Looking forward to spending this extra cash when I
                          figure out why my card is being declined.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="rounded-lg shadow p-6 border-b-4 border-cyan-500">
                      <div className="flex items-center pb-6 border-b border-gray-200">
                        <Image
                          src="/images/home/client/07.jpg"
                          width={64}
                          height={64}
                          className="size-16 rounded-full shadow"
                          alt=""
                        />

                        <div className="ps-4">
                          <Link
                            href="#"
                            className="text-lg hover:text-cyan-500 duration-500 ease-in-out"
                          >
                            Jill Webb
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          Im trying to get a hold of someone in support, Im in a
                          lot of trouble right now and they are saying it has
                          something to do with my books. Please get back to me
                          right away.
                        </p>
                        <ul className="list-none mb-0 text-amber-400 mt-2">
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                          <li className="inline">
                            <i className="mdi mdi-star"></i>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LifeAt />

      <Footer />
    </>
  );
}