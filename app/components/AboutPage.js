import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="  p-0">
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold sm:text-4xl">
                I’m Mitchel Sultan. I live in Nairobi, where I develop beautiful
                functional websites.{" "}
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden bg-black rotate-2 rounded-md sm:h-80 lg:h-full">
                <img
                  alt=""
                  src="/Mitchtop.png"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="lg:py-16">
                <article className="space-y-4 text-gray-600">
                  <p>
                    My expertise lies in HTML, CSS, JavaScript, and popular
                    frameworks such as React, Angular, and Vue.js. I have a
                    strong understanding of web standards, cross-browser
                    compatibility, and accessibility guidelines to ensure a
                    seamless experience for all users.
                  </p>

                  <p>
                    Throughout my career, I have successfully collaborated with
                    clients from various industries, understanding their unique
                    requirements and delivering high-quality, customized
                    solutions tailored to their needs. I pride myself on my
                    attention to detail, problem-solving abilities, and
                    commitment to delivering projects on time and within budget.
                  </p>

                  <p>
                    In addition to web development, I have extensive knowledge
                    of content management systems like WordPress, Drupal, and
                    Joomla, allowing me to create dynamic and easily manageable
                    websites. I am also proficient in search engine optimization
                    (SEO) techniques, ensuring that websites I develop have a
                    strong online presence and visibility.
                  </p>
                  <div className=" flex flex-col gap-3">
                    <span>
                      <img src="/git.svg" width={20} height={20}></img> Follow
                      Me on Github
                    </span>
                    <span>
                      <img src="/insta.svg" width={20} height={20}></img> Follow
                      me on Instagram
                    </span>
                    <span>
                      <img src="/link.svg" width={20} height={20}></img> Follow
                      me on Linkdin
                    </span>
                    <span>
                      <img src="/twit.svg" width={20} height={20}></img> Follow
                      me on Twitter
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
