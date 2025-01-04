import Link from 'next/link';
import Image from 'next/image';
import { FiHexagon } from 'react-icons/fi';
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// data
import { featuresData, servicesData } from '../Data/data';
// metadata
export const metadata = {
  title: 'Services',
  description:
    'At companyName, we believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Page() {
  return (
    <>
      <Navbar />
      <section
        className="relative table w-full py-36 lg:py-52  bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/images/service/service-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
              Our Services
            </h3>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 justify-center">
            <div className="relative z-2 transition-all duration-500 ease-in-out sm:-mt-[200px] -mt-[140px] m-0">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-[24px]">
                {featuresData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden p-6 rounded-lg shadow-gray-800 shadow-md hover:shadow-gray-700 bg-slate-900 text-center transition-all duration-500 ease-in-out border-t-8 border-indigo-600/50"
                    >
                      <Image
                        src={item.iconImage}
                        width={64}
                        height={64}
                        className="w-16 h-16 mx-auto"
                        alt=""
                      />

                      <div className="content mt-7">
                        <h2 className="title text-xl font-semibold">
                          {item.title}
                        </h2>
                        <p className="text-slate-400 mt-3">{item.desc}</p>
                      </div>

                      <div className="hidden group-hover:block">
                        <div className="absolute inset-0">
                          <Image
                            src={item.image}
                            alt=""
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                        </div>

                        <div className="absolute bottom-0 start-0 end-0 mb-6">
                          <Link
                            href="#"
                            className="text-white text-xl font-bold"
                          >
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
              Services of Programmer
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            {servicesData.map((item, index) => {
              let Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 shadow hover:shadow-md hover:bg-cyan-500 duration-500 rounded-xl bg-white overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <FiHexagon className="size-24 fill-cyan-500/5 group-hover:fill-white/10 mx-auto"></FiHexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-cyan-500 rounded-xl group-hover:text-white duration-500 text-3xl flex align-middle justify-center items-center">
                      <Icon className="" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-lg font-medium group-hover:text-white duration-500"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 group-hover:text-white/50 duration-500 mt-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
