import React from "react";

const Services = () => {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg hover:rotate-2 sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src="https://i.pinimg.com/236x/d7/c9/51/d7c951b1dc5bc980942508e3f9328923.jpg"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">About Mitch</h2>

              <p className="mt-4 text-gray-600">
                I am a skilled and experienced freelance web developer with a
                passion for creating innovative and user-friendly digital
                solutions. With 2 years of experience in the field, I
                specialize in designing and developing responsive websites,
                e-commerce platforms, and web applications using the latest
                technologies and industry best practices
              </p>

              <a
                href="/about"
                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                know more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
