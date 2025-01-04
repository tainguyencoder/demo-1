'use client';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from 'react-feather';

import { BlogUserData, TagscloudItem } from '../../Data/data';

export default function BlogUserDetail(props) {
  const blogUser = props.blogUser;
  return (
    <div className={props.className}>
      <div className="sticky top-20">
        <h5 className="text-lg font-semibold bg-gray-50 shadow rounded-md p-2 text-center">
          Author
        </h5>
        <div className="text-center mt-8">
          <Image
            src={blogUser.image}
            width={96}
            height={96}
            className="size-24 mx-auto rounded-full shadow mb-4"
            alt=""
          />

          <Link
            href="#"
            className="text-lg font-semibold hover:text-cyan-500 transition-all duration-500 ease-in-out"
          >
            {blogUser.author}
          </Link>
          <p className="text-slate-400">{blogUser.role}</p>
        </div>

        <h5 className="text-lg font-semibold bg-gray-50 shadow rounded-md p-2 text-center mt-8">
          Social sites
        </h5>
        <ul className="list-none text-center mt-8 space-x-1">
          <li className="inline">
            <Link
              href="#"
              className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 rounded-md text-slate-400 hover:border-cyan-500 hover:text-white hover:bg-cyan-500"
            >
              <Icon.Facebook className="size-4"></Icon.Facebook>
            </Link>
          </li>
          <li className="inline">
            <Link
              href="#"
              className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 rounded-md text-slate-400 hover:border-cyan-500 hover:text-white hover:bg-cyan-500"
            >
              <Icon.Twitter className="size-4"></Icon.Twitter>
            </Link>
          </li>
          <li className="inline">
            <Link
              href="#"
              className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 rounded-md text-slate-400 hover:border-cyan-500 hover:text-white hover:bg-cyan-500"
            >
              <Icon.Linkedin className="size-4"></Icon.Linkedin>
            </Link>
          </li>
          <li className="inline">
            <Link
              href="#"
              className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 rounded-md text-slate-400 hover:border-cyan-500 hover:text-white hover:bg-cyan-500"
            >
              <Icon.GitHub className="size-4"></Icon.GitHub>
            </Link>
          </li>
          <li className="inline">
            <Link
              href="#"
              className="size-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border border-gray-100 rounded-md text-slate-400 hover:border-cyan-500 hover:text-white hover:bg-cyan-500"
            >
              <Icon.Youtube className="size-4"></Icon.Youtube>
            </Link>
          </li>
        </ul>

        <h5 className="text-lg font-semibold bg-gray-50 rounded-md p-2 text-center mt-8">
          Tagscloud
        </h5>
        <ul className="list-none text-center mt-8">
          {blogUser.tagClouds.map((data, index) => {
            return (
              <li className="inline-block m-2" key={index}>
                <Link
                  href="#"
                  className="px-3 py-1 text-slate-400 hover:text-white bg-gray-50 text-sm hover:bg-cyan-500 rounded-md shadow transition-all duration-500 ease-in-out"
                >
                  {data}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
