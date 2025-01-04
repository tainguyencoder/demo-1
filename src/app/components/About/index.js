'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  return (
    <div className="min-h-screen w-screen">
      <div className="relative mb-8 mt-12 flex flex-col items-center gap-5">
        <h3 className="font-kaushan mb-6 mt-8 md:text-4xl text-3xl md:leading-normal leading-normal font-bold">
          <span className="font-kaushan after:absolute after:end-0  after:start-0  after:bottom-1 after:lg:h-3 after:h-2 after:w-auto after:rounded-md after:bg-cyan-500/30 relative text-cyan-500">
            Welcome to companyName
          </span>
        </h3>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/images/about/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
