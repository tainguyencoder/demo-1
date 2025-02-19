'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function LifeAt() {
  const [block, setBlock] = useState(0);
  return (
    <section className="relative pb-16">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h4 className="font-bold lg:leading-normal leading-normal text-3xl lg:text-5xl text-black relative">
            Life at{' '}
            <span className="font-kaushan after:absolute after:end-0 after:start-0 after:bottom-4 after:lg:h-4 after:h-3 after:w-auto after:bg-slate-400/30 relative text-slate-400">
              companyName
            </span>
          </h4>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
          <div className="lg:col-span-4 md:col-span-5">
            <div className="sticky top-20">
              <ul
                className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                id="myTab"
                role="tablist"
              >
                <li role="presentation" onClick={() => setBlock(0)}>
                  <button
                    className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full transition-all duration-500 ease-in-out ${
                      block === 0
                        ? 'text-white bg-slate-900'
                        : ''
                    }`}
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected={block === 0 ? 'true' : 'false'}
                  >
                    <span className="block">Innovative Workspaces</span>
                    <span className="text-xl mt-2 block">
                      Collaborative spaces where ideas and innovation thrive
                    </span>
                  </button>
                </li>
                <li role="presentation" onClick={() => setBlock(1)}>
                  <button
                    className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out ${
                      block === 1
                        ? 'text-white bg-slate-900'
                        : ''
                    }`}
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected={block === 1 ? 'true' : 'false'}
                  >
                    <span className="block">Tech-Driven Culture</span>
                    <span className="text-xl mt-2 block">
                      We embrace the latest tech and foster a growth culture
                    </span>
                  </button>
                </li>
                <li role="presentation" onClick={() => setBlock(2)}>
                  <button
                    className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out ${
                      block === 2
                        ? 'text-white bg-slate-900'
                        : ''
                    }`}
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected={block === 2 ? 'true' : 'false'}
                  >
                    <span className="block">Team Building</span>
                    <span className="text-xl mt-2 block">
                      Team activities to boost collaboration and morale
                    </span>
                  </button>
                </li>
                <li role="presentation" onClick={() => setBlock(3)}>
                  <button
                    className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full mt-6 transition-all duration-500 ease-in-out ${
                      block === 3
                        ? 'text-white bg-slate-900'
                        : ''
                    }`}
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected={block === 3 ? 'true' : 'false'}
                  >
                    <span className="block">Work-Life Balance</span>
                    <span className="text-xl mt-2 block">
                      We prioritize work-life balance
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8 md:col-span-7">
            <div
              id="myTabContent"
              className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
            >
              <div
                role="tabpanel"
                id="profile"
                aria-labelledby="profile-tab"
                hidden={block !== 0}
              >
                <Image
                  src="/images/about/lifeAt/lifeat-1.webp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="shadow rounded-md"
                  alt="Innovative Workspaces"
                />
              </div>
              <div
                role="tabpanel"
                id="dashboard"
                aria-labelledby="dashboard-tab"
                hidden={block !== 1}
              >
                <Image
                  src="/images/about/lifeAt/lifeat-1.webp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="shadow rounded-md"
                  alt="Tech-Driven Culture"
                />
              </div>
              <div
                role="tabpanel"
                id="settings"
                aria-labelledby="settings-tab"
                hidden={block !== 2}
              >
                <Image
                  src="/images/about/lifeAt/lifeat-1.webp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="shadow rounded-md"
                  alt="Team Building"
                />
              </div>
              <div
                role="tabpanel"
                id="settings"
                aria-labelledby="settings-tab"
                hidden={block !== 3}
              >
                <Image
                  src="/images/about/lifeAt/lifeat-1.webp"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="shadow rounded-md"
                  alt="Work-Life Balance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
