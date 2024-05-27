import React, { useState } from "react";

const ScrollableIcon: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const toggleModal = () => {
    setModalIsOpen(false);
  };

  const toggleAccordion = (index: number | null) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <>
      <div
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full cursor-pointer"
        onClick={openModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 5v.01M12 19v.01M12 14v.01M5 10h.01M19 10h.01M5 14h.01M19 14h.01M5 18h.01M19 18h.01"
          />
        </svg>
      </div>
      {modalIsOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <div className="relative bg-white border border-gray-200 rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  About app
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="p-4 md:p-5">
                <div id="accordion-collapse" data-accordion="collapse">
                  <h2 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 ${
                        activeAccordion === 0
                          ? "rounded-t-xl bg-gray-100"
                          : "rounded-t-xl"
                      } focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-300 dark:border-gray-300 dark:text-gray-400 gap-3`}
                      onClick={() => {
                        toggleAccordion(0);
                      }}
                      aria-expanded={activeAccordion === 0}
                      aria-controls="accordion-collapse-body-1"
                    >
                      <span>About me</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 ${
                          activeAccordion === 0 ? "rotate-0" : "rotate-180"
                        } shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    className={`${
                      activeAccordion === 0 ? "block" : "hidden"
                    } p-5 border border-b-0 border-gray-200`}
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
                        Name: Hari Krishna Anem
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200">
                        Mobile: +91 9885699666
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200">
                        Email: anemharikrishna@gmail.com
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200 underline">
                        <a
                          href="https://www.linkedin.com/in/anemharikrishna/"
                          target="_blank"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200 underline">
                        <a
                          href="https://github.com/HariKrishna-9885699666/"
                          target="_blank"
                        >
                          Github
                        </a>
                      </li>
                    </ul>
                  </div>

                  <h2 id="accordion-collapse-heading-2">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 ${
                        activeAccordion === 1 ? "bg-gray-100" : ""
                      } focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-300 dark:border-gray-300 dark:text-gray-400 gap-3`}
                      onClick={() => {
                        toggleAccordion(1);
                      }}
                      aria-expanded={activeAccordion === 1}
                      aria-controls="accordion-collapse-body-2"
                    >
                      <span>Packages used</span>
                      <svg
                        data-accordion-icon
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                        className={`w-3 h-3 ${
                          activeAccordion === 1 ? "rotate-0" : "rotate-180"
                        } shrink-0`}
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-2"
                    className={`${activeAccordion === 1 ? "block" : "hidden"}`}
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <ul className="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
                      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
                        Vite
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
                        Typescript
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
                        Tailwind
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
                        Redux
                      </li>
                      <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
                        React Hook Form
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={toggleModal}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScrollableIcon;
