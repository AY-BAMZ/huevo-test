import React, { createContext, useContext } from "react";
import User from "@/assets/user.png";
import Offer1 from "@/assets/offer1.png";
import Offer2 from "@/assets/offer2.png";
import Offer3 from "@/assets/offer3.png";
import Offer4 from "@/assets/offer4.png";
import Offer5 from "@/assets/offer5.png";
import Offer6 from "@/assets/offer6.png";

export const GeneralContext = createContext({});

const GeneralProvider = (props: any) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const reviews = [
    {
      name: "Joan Jacob",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
    {
      name: "Michael Jordan",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
    {
      name: "Lebron james",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
    {
      name: "Anthony joshua",
      job: "Software & E-commerce Startups",
      image: User,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  These are usually used when a text is required purely to fill a space.",
    },
  ];

  const offerList = [
    {
      image: Offer1,
      text: "Continuous delivery with dedicated UX/UI designers and exceptional software developers",
    },
    {
      image: Offer2,
      text: "Free consultation with our CTO",
    },
    {
      image: Offer3,
      text: "Result-driven attitude",
    },
    {
      image: Offer4,
      text: "Investing in Your Startup's Success",
    },
    {
      image: Offer5,
      text: "Solid Infrastructure & Robust Backend",
    },
    {
      image: Offer6,
      text: "Dedicated new technologies like Generative AI, Machine Learning, and Blockchain",
    },
  ];
  return (
    <GeneralContext.Provider
      value={{
        scrollToBottom,
        reviews,
        offerList,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  return context;
};
export default GeneralProvider;
