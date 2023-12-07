import React, { useState } from "react";
import MyNotebook from "./MyNotebook.jpeg";
import ScoNews from "./ScoNews.jpeg";

const MajorProjects = () => {
  const [gitOpt, setGitOpt] = useState(false);
  const GitOpt = () => {
    setTimeout(() => {
      if (gitOpt) {
        setGitOpt(false);
      } else {
        setGitOpt(true);
      }
    }, 200);
  };
  return (
    <section name="projects" className="section bg-white border-b py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Some Projects I've Built
        </h2>
        <div className="w-full mb-4">
          <div
            style={{
              background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)",
            }}
            className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
          ></div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              MyNotebook -{" "}
              <span className="text-2xl text-gray-400">
                "Organize Inspire Create"
              </span>
            </h3>

            <div className="text-gray-600 mb-8">
              {/* hover:scale-105           thisclass toadd hover zoom effect 
            hover:bg-gradient-to-br from-rose-500 to-yellow-500
            */}
              <div className=" text-gray-700">
                MyNotebook showcases my MERN skills, secure authentication,
                dynamic functionalities, responsive design with Tailwind CSS,
                and seamless MongoDB interactions through Mongoose.
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transition-shadow  duration-300 hover:bg-gray-100 hover:scale-103  hover:shadow-xl hover:transition-duration-1000 ease-in-out ">
                <ul className="list-disc list-inside text-gray-700">
                  <li>
                    <strong>Tech Stack:</strong> MERN (MongoDB, Express, React,
                    Node.js)
                  </li>
                  <li>
                    <strong>Features:</strong> Secure authentication-bcrypt and
                    JWT tokens
                  </li>
                  <li>
                    <strong>Functionalities:</strong> Dynamic note-taking,
                    login, signup
                  </li>
                  {/* <li><strong>Specialties:</strong> Blending tech for robust experiences.</li> */}
                  <li>
                    <strong>Responsive Design:</strong> Diverse device seamless
                    design.
                  </li>
                  <li>
                    <strong>Tailwind CSS:</strong> For a modern and visually
                    appealing UI.
                  </li>
                  <li>
                    <strong>Loading Bar:</strong> Elevating UX with visual
                    loaders.
                  </li>
                  <li>
                    <strong>Alerts:</strong> Informative, user-friendly
                    notifications implemented.
                  </li>
                  <li>
                    <strong>RESTful API-based Login and Signup:</strong> Secure
                    authentication using API endpoints.
                  </li>
                  <li>
                    <strong>Mongoose:</strong> Managing MongoDB interactions for
                    DB.
                  </li>
                </ul>
              </div>
              <br />

              <div className="flex items-center justify-between">
                <a
                  className=" inline-block"
                  target="_blank"
                  href="https://uadeshay-saini.github.io/MyNotebook/"
                >
                  <button className=" flex bg-white hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="11"
                        width="18"
                        height="11"
                        rx="2"
                        ry="2"
                      ></rect>
                      <polyline points="3 7 12 2 21 7"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                    <span>Visit This Web App</span>
                  </button>
                </a>

                <div
                  onClick={() => GitOpt()}
                  className=" lg:mb-0 mb-6 px-20 flex items-center"
                >
                  <div className="fab-container">
                    <a target="_blank" title="GitHub">
                      <div
                        className="fab   hover:bg-gray-300 rounded-full font-normal"
                        role="button"
                      >
                        <svg viewBox="0 0 64 64" width="38px" height="38px">
                          <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {gitOpt ? (
                <div className="flex  inline-block items-center justify-end">
                  <div className="flex rounded-md hover:bg-gray-300 inline-block items-center ">
                    <div className=" lg:mb-0 mb-6 pr-20 pl-5  inline-block flex items-center">
                      <div className="fab-container">
                        <a
                          target="_blank"
                          href="https://www.github.com/uadeshay-saini/MyNotebook"
                          title="GitHub Frontend"
                        >
                          <div
                            className="fab   hover:bg-gray-300 rounded-full font-normal"
                            role="button"
                          >
                            <svg viewBox="0 0 64 64" width="38px" height="38px">
                              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
                            </svg>
                          </div>
                        </a>
                        Frontend
                      </div>
                    </div>
                    <div className=" lg:mb-0 mb-6 px-4 flex items-center">
                      <div className="fab-container">
                        <a
                          target="_blank"
                          href="https://www.github.com/uadeshay-saini/MyNotebook-Backend"
                          title="GitHub Backend"
                        >
                          <div
                            className="fab   hover:bg-gray-300 rounded-full font-normal"
                            role="button"
                          >
                            <svg viewBox="0 0 64 64" width="38px" height="38px">
                              <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
                            </svg>
                          </div>
                        </a>
                        Backend
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <img alt="" src={MyNotebook}></img>
            {/* <svg className="w-full sm:h-64 mx-auto" */}
          </div>
        </div>

        <div className="flex mt-40 flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-6 mt-6">
            {/* <svg className="w-5/6 sm:h-64 mx-auto" viewBox="0 0 1176.60617 873.97852" xmlns="http://www.w3.org/2000/svg"> */}
            <img alt="" src={ScoNews}></img>
          </div>
          <div className="w-full sm:w-1/2 p-6 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                SCo. News -{" "}
                <span className="text-2xl text-gray-400">"Stay Ahead"</span>
              </h3>
              <div className="text-gray-600 mb-8">
                <div className=" text-gray-700">
                  {" "}
                  Sco.News showcases my skills in React, API integration, and
                  UI/UX design, providing an engaging news exploration
                  experience.
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transition-shadow  duration-300 hover:bg-gray-100 hover:scale-103  hover:shadow-xl hover:transition-duration-1000 ease-in-out ">
                  <ul className="list-disc list-inside text-gray-700">
                    <li>
                      Explore diverse news effortlessly with{" "}
                      <strong>Sco.News</strong>.
                    </li>
                    <li>
                      Crafted with <strong>React</strong> for an interactive UI.
                    </li>
                    <li>
                      Utilized <strong>RESTful API</strong> for real-time
                      updates.
                    </li>
                    <li>
                      <strong>Tailwind CSS</strong> ensures an appealing design.
                    </li>
                    <li>
                      Enjoy a loading <strong>GIF</strong> for seamless
                      transitions.
                    </li>
                    <li>Navigate through categories for targeted updates.</li>
                  </ul>
                </div>
                <br />
                <div className="flex items-center justify-between">
                  <a
                    className=" inline-block"
                    target="_blank"
                    href="https://uadeshay-saini.github.io/ScoNews/"
                  >
                    <button className=" flex bg-white hover:bg-gray-100 px-4 py-2 rounded-md transition duration-300 ease-in-out flex items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="11"
                          width="18"
                          height="11"
                          rx="2"
                          ry="2"
                        ></rect>
                        <polyline points="3 7 12 2 21 7"></polyline>
                        <line x1="12" y1="2" x2="12" y2="15"></line>
                      </svg>
                      <span>Visit This Web App</span>
                    </button>
                  </a>

                  <div className=" lg:mb-0 mb-6 px-20 flex items-center">
                    <div className="fab-container">
                      <a
                        target="_blank"
                        href="https://www.github.com/uadeshay-saini/ScoNews"
                        title="GitHub"
                      >
                        <div
                          className="fab   hover:bg-gray-300 rounded-full font-normal"
                          role="button"
                        >
                          <svg viewBox="0 0 64 64" width="38px" height="38px">
                            <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorProjects;

// <ul className="list-disc list-inside text-gray-700">
// <li className="mb-2"><strong>Tech Stack:</strong> MERN (MongoDB, Express, React, Node.js)</li>
// <li className="mb-2"><strong>Features:</strong> Secure authentication-bcrypt and JWT tokens</li>
// <li className="mb-2"><strong>Functionalities:</strong> Dynamic note-taking, login, signup</li>
// {/* <li className="mb-2"><strong>Specialties:</strong> Blending tech for robust experiences.</li> */}
// <li className="mb-2"><strong>Responsive Design:</strong> Diverse device seamless design.</li>
// <li className="mb-2"><strong>Tailwind CSS:</strong> For a modern and visually appealing UI.</li>
// <li className="mb-2"><strong>Loading Bar:</strong>  Elevating UX with visual loaders.</li>
// <li className="mb-2"><strong>Alerts:</strong> Informative, user-friendly notifications implemented.</li>
// <li className="mb-2"><strong>RESTful API-based Login and Signup:</strong> Secure authentication using API endpoints.</li>
// <li><strong>Mongoose:</strong> Managing MongoDB interactions for DB.</li>
// </ul>
