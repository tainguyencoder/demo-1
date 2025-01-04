import Link from 'next/link';
import * as Icon from 'react-feather';
// metadata
export const metadata = {
  title: 'Contact',
  description:
    'Contact companyName to receive support and detailed information about our services. We are always ready to listen to your feedback and needs!',
}

export default function Page() {
  return (
    <>
      <section className="md:h-screen w-full">
        <div className="container-fluid relative">
          <div className="grid grid-cols-1">
            <div className="grayscale border-0 w-full">
              <iframe
                title="google"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.369785375489!2d106.70223387655795!3d10.782964189366265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f75b66ff9cb%3A0x7caed71dcba3d06!2zMjEgTmd1eeG7hW4gVHJ1bmcgTmfhuqFuLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDMsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1728093440670!5m2!1sen!2s"
                style={{ border: '0' }}
                className="h-screen w-full"
                allowFullScreen
              ></iframe>
            </div>

            <div className="md:flex justify-center fixed top-2/4 -translate-y-2/4 ltr:md:-translate-x-2/4 rtl:md:translate-x-2/4 md:start-2/4 start-3 md:end-auto end-3 m-auto">
              <div className="max-w-[400px] w-full bg-white rounded-md shadow-xl px-6 py-8">
                <h3 className="my-6 text-2xl leading-normal font-medium text-center">
                  CONTACT US
                </h3>

                <form>
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
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
                    </div>

                    <div className="lg:col-span-6 mb-5">
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
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <div className="text-start">
                        <label htmlFor="subject" className="font-semibold">
                          Your Question:
                        </label>
                        <div className="form-icon relative mt-2">
                          <Icon.Book className="size-4 absolute top-3 start-4"></Icon.Book>
                          <input
                            name="subject"
                            id="subject"
                            className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent rounded outline-none border border-gray-200 focus:border-cyan-500 focus:ring-0"
                            placeholder="Subject :"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-5">
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
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-white rounded-md w-full justify-center flex items-center"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed top-3 end-3">
        <Link
          href="/"
          className="back-button size-9 inline-flex items-center justify-center tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-white rounded-full"
        >
          <Icon.ArrowLeft className="size-4"></Icon.ArrowLeft>
        </Link>
      </div>
    </>
  );
}
