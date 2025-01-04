import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { blogData } from '../../Data/data';

export default function Blog({ className }) {
  return (
    <div className={className}>
      <div className="grid md:grid-cols-12 grid-cols-1 items-center">
        <div className="md:col-span-6">
          <h4 className="text-cyan-500 text-sm font-bold uppercase mb-2">
            Blogs
          </h4>
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Reads Our Latest <br /> News & Blog
          </h3>
        </div>

        <div className="md:col-span-6">
          <p className="text-slate-400 max-w-xl">
            Start working with Techwind that can provide everything you need to
            generate awareness, drive traffic, connect.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
        {blogData.slice(0, 3).map((data, index) => {
          return (
            <div
              className="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden"
              key={index}
            >
              <Image
                src={data.Image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
                alt={data.title} // Alt text for image
              />

              <div className="content p-6">
                <Link
                  href={`/blog-detail/${data.slug}`}
                  className="title h5 text-lg font-medium hover:text-cyan-500 duration-500 ease-in-out"
                  aria-label={`Read more about ${data.title}`}
                >
                  {data.title}
                </Link>
                <p className="text-slate-400 mt-3">{data.desc}</p>

                <div className="mt-4">
                  <Link
                    href={`/blog-detail/${data.slug}`}
                    className="relative inline-flex items-center font-normal tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 hover:text-cyan-500 after:bg-cyan-500 duration-500"
                    aria-label={`Read more about ${data.title}`}
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
  );
}
