'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import * as Icon from 'react-feather';

import {
  FaRegEnvelope,
  FaDribbble,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaRegFile,
  FaBehance,
} from 'react-icons/fa';
import { PiShoppingCart } from 'react-icons/pi';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Footer() {
  const footerLinks = [
    {
      liClass: '',
      route: '/blog-detail/design-your-apps-in-your-way',
      title: 'Design your apps in your own way',
    },
    {
      liClass: 'mt-[10px]',
      route: '/blog-detail/how-apps-is-changing-the-it-world',
      title: 'How apps is changing the IT world',
    },
    {
      route: '/blog-detail/smartest-applications-for-business',
      title: 'Smartest Applications for Business',
      liClass: 'mt-[10px]',
    },
    {
      route: '/blogs',
      title: 'See All',
      liClass: 'mt-[10px]',
    },
  ];
  const footerCompany = [
    {
      liClass: '',
      route: '/page-aboutus',
      title: 'About us',
    },
    {
      liClass: 'mt-[10px]',
      route: '/services',
      title: 'Services',
    },
    {
      route: '/career',
      title: 'Career',
      liClass: 'mt-[10px]',
    },
    {
      route: '/contact',
      title: 'Contact',
      liClass: 'mt-[10px]',
    },
  ];
  return (
    <div>
      <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
        <div className="container relative">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <Link
                      href="/"
                      className="text-[22px] focus:outline-none"
                      aria-label="Go to the homepage"
                    >
                      <Image
                        src="/images/navbar/logo.png"
                        width={138}
                        height={24}
                        alt=""
                      />
                    </Link>
                    <p className="mt-6 text-gray-300">
                      companyName slogan companyName slogan companyName slogan
                      companyName slogan companyName slogan
                    </p>
                  </div>

                  <div className="lg:col-span-2 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerCompany.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            aria-label={`Navigate to ${data.title} page`}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{' '}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Blogs
                    </h5>
                    <ul className="list-none footer-list mt-6">
                      {footerLinks.map((data, index) => (
                        <li key={index} className={data.liClass}>
                          <Link
                            href={data.route}
                            aria-label={`Read ${data.title}`}
                            className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out flex items-center"
                          >
                            <MdKeyboardArrowRight className="text-xl me-1" />{' '}
                            {data.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-100 font-semibold">
                      Contact Us
                    </h5>
                    <p className="mt-6">
                      <strong>hr@companyName.com</strong>
                    </p>
                    <p className="mt-3">
                      <strong>
                        21 Nguyen Trung Ngan Street, Ben Nghe Ward, District 3,
                        HCMC
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[30px] px-0 border-t border-slate-800">
          <div className="container relative text-center">
            <p className="mb-0">
              © 2024 companyName. Design & Develop with{' '}
              <i className="mdi mdi-heart text-red-600"></i> by companyName
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
