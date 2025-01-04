'use client';
import React from 'react';
import * as Icon from 'react-feather';

export default function BlogComment() {
  return (
    <div className="p-6 rounded-md shadow mt-8">
      <h5 className="text-lg font-semibold">Leave A Comment:</h5>

      <form className="mt-8">
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
                  className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent  rounded outline-none border border-gray-200 focus:border-cyan-500 focus:ring-0"
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
          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700 text-white rounded-md w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
