import React, { useState } from "react";

const QnA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAnswers = [
    {
      question: "What is the purpose of this website?",
      answer:
        "The purpose of this website is to provide users with valuable information and tools to enhance their digital experiences.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact support by navigating to our Contact Us page and filling out the form, or by emailing us directly at support@tools.com.",
    },
    {
      question: "Can I create an account on this website?",
      answer:
        "Yes, you can create an account by clicking on the Sign-Up button and following the registration process.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Currently, we do not have a mobile app. However, our website is fully responsive and can be accessed on mobile devices.",
    },
  ];

  return (
    <div className="max-w-full sm:max-w-3xl mx-auto my-10 p-4 sm:p-6 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-semibold text-black text-center mb-4 sm:mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2 sm:space-y-4">
        {questionsAnswers.map((item, index) => (
          <div key={index} className="border-b pb-3 sm:pb-4">
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left text-base sm:text-lg font-medium text-gray-800 flex justify-between items-center"
            >
              {item.question}
              <span
                className={`transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                &#9660;
              </span>
            </button>
            <div
              className={`mt-1 sm:mt-2 text-gray-800 transition-max-height duration-300 ease-in-out overflow-hidden ${
                activeIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="mt-1 sm:mt-2">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QnA;
