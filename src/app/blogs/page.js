import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// data
import { blogData } from '../Data/data';
// metadata
export const metadata = {
  title: 'Blog',
  description:
    'In companyName, we stay up-to-date with the latest industry news as our marketing teams finds new ways to re-purpose old CSS tricks articles.',
}

export default function Page() {
  return (
    <>
      <Navbar />

      <section
        className="relative table w-full py-32 lg:py-36 bg-center bg-no-repeat bg-cover background-effect overflow-hidden"
        style={{ backgroundImage: "url('/images/blogs/section/blogs.webp')" }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">
              Articles & News
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 bg-indigo-600/5"></div>
        <ul className="circles p-0 mb-0">
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/b.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/l.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/o.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/g.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/b.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/l.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/o.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
          <li className="brand-img">
            <Image
              width={48}
              height={48}
              src="/images/blogs/section/g.webp"
              className="w-9 h-9"
              alt=""
            />
          </li>
        </ul>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {blogData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="blog relative rounded-md shadow overflow-hidden"
                >
                  <Image
                    src={item.Image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    alt=""
                  />

                  <div className="content p-6">
                    <Link
href={`/blog-detail/${item.slug}`}
                      className="title h5 text-lg font-medium hover:text-cyan-500 duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 mt-3">{item.desc}</p>

                    <div className="mt-4">
                      <Link
href={`/blog-detail/${item.slug}`}
                        className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-cyan-500 after:bg-cyan-500 duration-500"
                      >
                        Read More <FaArrowRight className="ms-2 text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="md:flex justify-center">
            <div className="lg:w-2/3 text-center">
              <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold mb-6">
                Subscribe our weekly subscription
              </h3>

              <p className="text-slate-400 max-w-xl mx-auto">
                We will send you the best of our blog just once a weekly.
              </p>

              <div className="mt-8">
                <div className="text-center subcribe-form">
                  <form className="relative mx-auto max-w-xl">
                    <input
                      type="email"
                      id="subemail"
                      name="name"
                      className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black rounded-full bg-white/70 border border-gray-100"
                      placeholder="Enter your email id.."
                    />
                    <button
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide align-middle transition duration-500 ease-in-out text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-cyan-500 hover:bg-cyan-700 border border-cyan-500 hover:border-cyan-700 text-white rounded-full"
                    >
                      Subcribe Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
