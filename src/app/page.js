import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CounterTwo from './components/CounterTwo';
import Hero from './components/Hero';
import About from './components/About';
import Blog from './components/Blog';
// metadata
export const metadata = {
  description:
    'We are a development working at the intersection of design and technology.',
};

export default function Page() {
  return (
    <section className="min-h-screen w-screen overflow-x-hidden">
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
      <section className="relative">
        <About />
      </section>

      <section className="relative md:py-8 py-6">
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just do not do at all with
                          companyName. Suspicious but I cannot say I do not love
                          it.
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about companyName is every time I pay my
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU, and with
                          companyName, I somehow do not have to do that anymore.
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about companyName is every time I pay my
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about companyName is every time I pay my
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          I used to have to remit tax to the EU, and with
                          companyName, I somehow do not have to do that anymore.
                          I am nervous to travel there now, though.
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Barbara McIntosh
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          There are so many things I had to do with my old
                          software that I just do not do at all with
                          companyName. Suspicious, but I cannot say I do not
                          love it.
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
                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
                          >
                            Carl Oliver
                          </Link>
                          <p className="text-slate-400">User</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <p className="text-slate-400">
                          The best part about companyName is every time I pay my
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

                    <li className="rounded-lg shadow p-6 border-b-4 border-slate-900">
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
                            className="text-lg hover:text-slate-900 duration-500 ease-in-out"
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
        <Blog className="container relative md:mt-24 mt-16" />
      </section>
      <Footer />
    </section>
  );
}
