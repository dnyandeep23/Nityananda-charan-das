"use client";

import Image from "next/image";
import im from "../Assets/img.png";
import profile from "../Assets/profile.jpg";
import { Poppins } from "next/font/google";
import jsondata from "../Assets/data.json";
import { MdOndemandVideo } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const pop = Poppins({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  // useClient();

  const data = jsondata;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.testimonial.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextItem, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <>
      <div>
        <div className="relative h-96">
          <Image
            src={im}
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute  bg-black bg-opacity-50 w-full h-full ">
            <div className="absolute bottom-0 left-0 p-5 w-full pb-10 xl:pb-5 xl:w-[65%] md:w-full sm:w-full">
              <div className="">
                <h2 className="text-xl md:text-2xl xl:text-3xl  text-white font-medium uppercase font-sans pb-4">
                  {data.instructor.name}
                </h2>
                <p className="xl:text-4xl md:text-3xl text-2xl text-white font-medium uppercase font-serif tracking-wide">
                  {data.course.title}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex flex-row md:flex-col-reverse sm:flex-col-reverse ">
          <div className="lpt xl:w-[65%] md:w-full sm:w-full mt-96 md:mt-96 sm:mt-96 xs:mt-96 xl:mt-0 p-10 md:p-6 sm:p-2">
            <div className="flex xl:px-10 md:px-10 px-2 justify-between">
              <ul className="font-sans text-lg font-semibold border-b-4 border-purple-600">
                About
              </ul>
              <ul className="font-sans text-lg font-semibold  ">Instructor</ul>
              <ul className="font-sans text-lg font-semibold ">Review</ul>
            </div>
            <h1 className="px-0 md:px-10 xl:px-10 pt-14 text-2xl font-bold ">
              About the Course
            </h1>
            <p className="xl:px-12 px-2  pt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit beatae necessitatibus ratione provident saepe?
              Incidunt libero blanditiis perspiciatis repellat consectetur?
              Deserunt quod facilis ipsam ducimus vitae magnam error illo
              dolorum, blanditiis architecto minima earum maxime repellat
              aliquam expedita. Perferendis officia vel illum incidunt sunt
              consequatur numquam aut pariatur similique nesciunt. Qui eum
              voluptates accusantium.
            </p>
            <p className="xl:px-12 px-2 pt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit beatae necessitatibus ratione provident saepe?
              Incidunt libero blanditiis perspiciatis repellat consectetur?
              Deserunt quod facilis ipsam ducimus vitae magnam error illo
              dolorum, blanditiis architecto minima earum maxime repellat
              aliquam expedita. Perferendis officia vel illum incidunt sunt
              consequatur numquam aut pariatur similique nesciunt. Qui eum
              voluptates accusantium.
            </p>
          </div>
          <div children="relative w-screen">
            <div className="absolute -top-12 xl:right-4 md:right-4 right-0 w-screen rpt  flex flex-row  justify-center xl:justify-end md:justify-self-center">
              <div className="m-4 bg-purple-100 p-10 w-96 rounded-md ">
                <div>
                  <p className="font-semibold text-lg">Course fees</p>
                  <p className="text-4xl font-bold font-serif ">
                    ₹ {data.course.fee.amount}
                  </p>
                </div>
                <div className="pt-5">
                  <p className="font-semibold text-lg">What's included:</p>
                  <div className="px-4 pb-5 ">
                    <div className="flex items-center gap-3 pb-2 pt-2">
                      {" "}
                      <MdOndemandVideo />{" "}
                      {data.course.inclusions.on_demand_videos} on-demand videos
                    </div>
                    <div className="flex items-center gap-3 pb-2">
                      {data.course.inclusions.whatsapp_community ? (
                        <>
                          <FaWhatsapp />
                          <p>WhatsApp Community</p>
                        </>
                      ) : null}
                    </div>
                    <div className="flex items-center gap-3">
                      {data.course.inclusions.live_qa_sessions ? (
                        <>
                          <LuMessagesSquare size={25} />
                          <p>Live Q&A Sessions with Nityanand Charan Das</p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="bg-purple-700 text-center text-white text-lg font-semibold rounded-full hover:bg-purple-400 px-4 py-2">
                  Register Today
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10">
          <p className="font-bold text-2xl xl:px-12 px-2">
            What to expect from the course
          </p>

          <div className="  text-xl xl:px-12 px-4">
            {data.course.what_to_expect.html_content.map((item, index) => {
              return (
                <li className="my-2 flex flex-col text-start " key={index}>
                  <div className="flex flex-row items-center">
                    <FaCheck />

                    <span className=" pl-5 text-start ">{item}</span>
                  </div>
                </li>
              );
            })}
          </div>
          {}
        </div>
        <div className="flex flex-col items-start w-full md:w-[65%] px-4 md:px-10">
          <h2 className="text-2xl font-bold mx-4 md:mx-10 my-3">
            Key topics covered
          </h2>
          <p className="mx-4 mb-10 md:mx-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            blanditiis aut tenetur amet natus dolorum numquam quam a
            exercitationem? Ex numquam vel a eligendi non unde laborum ipsa.
            Porro cumque nulla aut, doloremque qui tempore consequuntur itaque
            magnam repellendus neque, est laborum consectetur odio excepturi
            exercitationem dolorem possimus, delectus odit soluta? Deserunt,
            numquam necessitatibus.
          </p>
          <ul className="flex flex-col mx-4 md:mx-10 mb-4">
            {data.course.key_topics.html_content.map((item, index) => (
              <li className="mb-4 flex items-start" key={index}>
                <div>
                  <FaCheck size={20} />
                </div>
                <p className="pl-5">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-10">
          <p className="text-2xl font-bold xl:mx-10 ">About the Instructor</p>
          <div className="relative xl:h-96  m-10 overflow-y-hidden flex items-center mx-auto justify-center flex-col md:flex-row sm:flex-row">
            <div className="w-60 mb-4 md:mb-0">
              <div className="relative rounded-full overflow-hidden w-44 h-44">
                <Image
                  src={profile}
                  width={300}
                  height={250}
                  alt="titleImage"
                  content=".jpg"
                  objectFit="true"
                />
              </div>
            </div>

            <div className="w-full md:w-[70%] flex flex-col md:flex-row sm:flex-row m-10 flex-wrap">
              <div className="w-full md:w-1/2 sm:w-full mb-6 md:mb-0 overflow-hidden">
                <h2 className="text-black text-md md:text-xl font-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam tempore ad architecto obcaecati, quas sequi natus,
                  facere perspiciatis, harum autem beatae expedita accusamus
                  odio pariatur veritatis blanditiis laboriosam. Accusamus
                  dignissimos saepe aperiam consectetur reprehenderit voluptates
                  excepturi obcaecati libero, maiores eos.
                </h2>
              </div>
              <div className="w-full md:w-1/2 sm:w-full md:pl-10 overflow-hidden">
                <h2 className="text-black text-md md:text-xl font-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ullam tempore ad architecto obcaecati, quas sequi natus,
                  facere perspiciatis, harum autem beatae expedita accusamus
                  odio pariatur veritatis blanditiis laboriosam. Accusamus
                  dignissimos saepe aperiam consectetur reprehenderit voluptates
                  excepturi obcaecati libero, maiores eos.
                </h2>
              </div>
            </div>
            <div className="relative md:absolute xl:absolute  flex flex-col md:flex-row xl:flex-row gap-10 bottom-0">
              {data.instructor.social_media.facebook && (
                <div className="flex items-center gap-2">
                  <FaFacebook className="text-blue-500" size={25} />
                  <p className="text-md font-medium text-black">Facebook</p>
                </div>
              )}
              {data.instructor.social_media.twitter && (
                <div className="flex items-center gap-2">
                  <FaSquareXTwitter className="text-gray-800" size={25} />
                  <p className="text-md font-medium text-black">Twitter</p>
                </div>
              )}
              {data.instructor.social_media.youtube && (
                <div className="flex items-center gap-2">
                  <FaYoutube className="text-red-500" size={25} />
                  <p className="text-md font-medium text-black">Youtube</p>
                </div>
              )}
              {data.instructor.social_media.instagram && (
                <div className="flex items-center gap-2">
                  <FaInstagramSquare className="text-pink-600" size={25} />
                  <p className="text-md font-medium text-black">Instagram</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="h-[30rem] w-full bg-slate-100 overflow-hidden relative p-10 ">
          <div className="mx-auto mt-10 xl:px-32  ">
            <p className="text-2xl md:text-3xl xl:text-4xl  font-bold font-sans text-center">
              " {data.testimonial.text} "
            </p>

            <div className="flex justify-center items-center mt-16">
              <div className="relative rounded-full overflow-hidden w-12 h-12">
                <Image
                  src={profile}
                  width={250}
                  height={250}
                  alt="titleImage"
                  content=".jpg"
                  objectFit="true"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center ml-4 xl:ml-10">
                <p className="text-lg font-bold">
                  {data.testimonial.reviewer_name}
                </p>
                <p className="text-md xl:text-xl  font-medium">
                  {data.testimonial.reviewer_designation}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer">
            <button className="text-black opacity-40 hover:opacity-100 text-xl focus:outline-none">
              <GrFormPrevious size={35} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer">
            <button className="text-black opacity-40 hover:opacity-100 text-xl focus:outline-none">
              <MdOutlineNavigateNext size={35} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
