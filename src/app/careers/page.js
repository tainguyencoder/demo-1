import * as Icon from 'react-feather';
// components
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import JobTab from '../components/JobTab';
import CompanyLogo from '../components/CompanyLogo';
// metadata
export const metadata = {
  title: 'Career',
  description:
    'Join our team at companyName, where we prioritize efficiency and resource optimization to deliver exceptional value to our clients. Explore exciting career opportunities and grow with us!',
}

export default function Page() {
  return (
    <>
      <Navbar />

      <section
        className="relative table w-full py-36 lg:py-64 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/images/career/career-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b to-transparent via-gray-900/50 from-gray-900"></div>
        <div
          className="absolute inset-0 bg-repeat bg-center bg-cover"
          style={{ backgroundImage: "url('/images/career/overlay.png')" }}
        ></div>
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-white">
              Our Work
            </h4>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white">
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

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="relative -top-[132px] shadow py-6 bg-white">
            <CompanyLogo />
          </div>
        </div>
        <div className="container relative">
          <h3 className="font-kaushan mb-6 mt-8 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">
            <span className="font-kaushan after:absolute after:end-0  after:start-0  after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-cyan-500/30 relative text-cyan-500">
              Job Openings
            </span>
          </h3>
          <JobTab />
        </div>
      </section>
      <section className="relative md:pt-11 pt-3 md:pb-24 pb-16 overflow-hidden">
        <div className="container relative">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-10 gap-[30px]">
            <div className="lg:col-span-5 md:order-2 order-1">
              <div className="lg:ms-10 relative">
                <div className="bg-white rounded-md shadow p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Apply for a Position
                  </h3>

                  <form>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="text-start">
                        <label htmlFor="name" className="font-semibold">
                          Your Name:
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.User className="size-4 absolute top-3 start-4"></Icon.User>
                          <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-cyan-500 focus:ring-0"
                            placeholder="Name :"
                          />
                        </div>
                      </div>

                      <div className="text-start">
                        <label htmlFor="email" className="font-semibold">
                          Your Email:
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.Mail className="size-4 absolute top-3 start-4"></Icon.Mail>
                          <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-cyan-500 focus:ring-0"
                            placeholder="Email :"
                          />
                        </div>
                      </div>

                      <div className="text-start">
                        <label htmlFor="comments" className="font-semibold">
                          Your Comment:
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.MessageCircle className="size-4 absolute top-3 start-4"></Icon.MessageCircle>
                          <textarea
                            name="comments"
                            id="comments"
                            className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent rounded outline-none border border-gray-200 focus:border-cyan-500 focus:ring-0"
                            placeholder="Message :"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-white rounded-md justify-center flex items-center mt-3"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <div className="overflow-hidden absolute lg:size-[400px] size-[320px] bg-cyan-500/5 bottom-0 end-0 rotate-45 -z-1 rounded-3xl"></div>
              </div>
            </div>

            <div className="lg:col-span-7 md:order-1 order-2">
              <h4 className="mb-4 text-2xl leading-normal font-medium">
                🌟 Join Our Team! Explore Your Dream Position! 🌟
              </h4>
              <p className="text-slate-400">
                Take the leap! Apply now for your dream job and become a part of
                a vibrant community that empowers you to achieve your fullest
                potential.
                <strong>Your future starts here!</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
