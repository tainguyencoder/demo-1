import Image from 'next/image';
// components
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogUserDetail from '../../components/BlogUserDetail';
import BlogComment from '../../components/BlogComment';
// data
import { blogData } from '../../Data/data';

export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}

// Tạo metadata dựa trên bài viết
export async function generateMetadata({ params }) {
  const blog = blogData.find((item) => item.slug === params.slug);

  if (!blog) {
    return {
      title: 'Article not found',
      description: 'The article you are looking for does not exist.',
    };
  }

  return {
    title: blog.title,
    description: blog.description || 'A detailed article on a fascinating topic.',
    openGraph: {
      title: blog.title,
      description: blog.description || 'Explore our latest article.',
      url: `/blog-detail/${blog.slug}`,
      images: [
        {
          url: blog.Image,
          width: 800,
          height: 600,
          alt: blog.title,
        },
      ],
    },
  };
}

export default function Page(props) {
  const blogDatas = blogData.find(
    (blog) => blog?.slug === props?.params?.slug  // Dùng slug thay vì ID
  );
  let moreArticles = blogData
    .filter(({ metadata }) => metadata !== blogDatas)
    .slice(0, 2);

  return (
    <>
      <Navbar />

      <section
        className="relative table w-full py-32 lg:py-36 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${blogDatas.Image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              {blogDatas.title}
            </h3>

            <ul className="list-none mt-6">
              <li className="inline-block font-semibold text-white/50 mx-5">
                {' '}
                <span className="text-white block">Author :</span>{' '}
                <span className="block">{blogDatas.blogUser.author}</span>
              </li>
              <li className="inline-block font-semibold text-white/50 mx-5">
                {' '}
                <span className="text-white block">Date :</span>{' '}
                <span className="block">{blogDatas.date}</span>
              </li>
              <li className="inline-block font-semibold text-white/50 mx-5">
                {' '}
                <span className="text-white block">Time :</span>{' '}
                <span className="block">8 Min Read</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-4 md:col-span-6">
              <BlogUserDetail
                blogUser={blogDatas.blogUser}
              />
            </div>

            <div className="lg:col-span-8 md:col-span-6">
              <div className="p-6 rounded-md shadow">
                <Image
                  src={blogDatas.Image}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="rounded-md"
                  alt=""
                />

                <div className="mt-6">
                  <p className="text-slate-400">{blogDatas.p1}</p>
                  <p className="text-slate-400 italic border-x-4 border-slate-500 rounded-ss-xl rounded-ee-xl mt-3 p-3">
                    {blogDatas.quote}{' '}
                  </p>
                  <p className="text-slate-400 mt-3">{blogDatas.p2}</p>
                </div>
              </div>

              <BlogComment />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
