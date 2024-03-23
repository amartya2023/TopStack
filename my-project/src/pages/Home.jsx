import React from "react";
import Hero from "../assets/Heros.svg";
import PCparts from "../assets/subHero/pcparts.png";
import NetEuip from "../assets/subHero/netequip.png";
import Cctv from "../assets/subHero/cctv.png";
import PlaceIcon from "@mui/icons-material/Place";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import EastIcon from "@mui/icons-material/East";
import Rating from "@mui/material/Rating";

const Home = () => {
  const subHeroData = [
    {
      img: PCparts,
      title: "High Quality PC Parts",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      img: NetEuip,
      title: "Network Equipments",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      img: Cctv,
      title: "High Definition CCTV Cameras",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  const serviceData = [
    {
      title: "CCTV Maintenance (IP Camera & Normal Camera)",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Network Configuration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Router Configuration",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Desktop Repairing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Laptop Repairing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Printer Repairing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      title: "Server Maintenance",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];
  const contactDetails = [
    {
      icon: PlaceIcon,
      title: "561,Street,City,Disctrict,State, Pin-000000",
    },
    {
      icon: PhoneIcon,
      title: "+91 0000000000",
    },
    {
      icon: WhatsAppIcon,
      title: "+91 0000000000",
    },
  ];

  const review = [
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      rateVal: 3,
      customer: "John Doe",
      date: "20 march 2024",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      rateVal: 3,
      customer: "John Doe",
      date: "20 march 2024",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      rateVal: 3,
      customer: "John Doe",
      date: "20 march 2024",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      rateVal: 2,
      customer: "John Doe",
      date: "20 march 2024",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      rateVal: 4,
      customer: "John Doe",
      date: "20 march 2024",
    },
    {
      title:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
      rateVal: 3,
      customer: "John Doe",
      date: "20 march 2024",
    },
  ];

  return (
    <>
      {/* Heroes section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-center h-screen px-5 md:px-10 lg:px-20 gap-10 md:gap-0 mt-14 md:mt-0"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-10">
          <h1 className="text-3xl lg:text-6xl font-medium">
            Techtester Infotech
          </h1>
          <p>
            Welcome to <strong>Techtester Infotech</strong>, your IT heroes! We
            specialize in CCTV maintenance (IP & normal cameras), network and
            router configuration, desktop and laptop repairs, printer servicing,
            and server maintenance. Count on us for swift, reliable solutions to
            keep your technology running seamlessly.
          </p>
          <a
            className="bg-black w-max text-[#F9C869] rounded-xl font-medium px-12 py-2"
            href="#home"
          >
            Contact Us
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center md:items-baseline md:justify-end">
          <img src={Hero} className="w-[80%] mt-32" alt="" />
        </div>
      </section>

      {/* Sales section */}
      <section
        id="sales"
        className="max-h-max min-h-screen bg-black px-5 md:px-10 lg:px-20 py-10 flex flex-col gap-10 justify-center"
      >
        <h2 className="text-xl md:text-2xl text-[#F9C869] font-medium">
          What we sell ?
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full gap-5 md:gap-10">
          {subHeroData.map((data, index) => {
            return (
              <div
                key={index}
                className="w-full h-full flex flex-col justify-around p-5 bg-black custom-shadow rounded-xl gap-2"
              >
                <img src={data.img} className="w-full object-contain" />
                <h2 className="text-xl md:text-2xl text-[#F9C869] font-medium">
                  {data.title}
                </h2>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae expedita fugit modi quos ea omnis illum quod
                  explicabo vel dolores possimus, delectus a nam sapiente
                  incidunt tempora unde facilis autem?
                </p>
                <a
                  href="#contact"
                  className="w-max flex items-center justify-around gap-2 px-10 py-2 rounded-lg outline outline-2 outline-[#F9C869] text-[#F9C869] hover:text-black hover:outline-black hover:bg-[#F9C869] transition-all ease-in-out duration-300"
                >
                  <div className="text-xl font-medium w-max">Contact Us</div>

                  <EastIcon />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Service section */}
      <section
        id="services"
        className="flex flex-col gap-10 items-center justify-center px-5 md:px-10 lg:px-20 py-10 min-h-screen max-h-max"
      >
        <h2 className="text-xl md:text-2xl font-medium text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {serviceData.map((data, index) => {
            return (
              <div
                key={index}
                className="service-shadow rounded-xl w-full p-10"
              >
                <h4 className="font-medium text-xl mb-2 md:mb-5">
                  {data.title}
                </h4>
                <p className="text-sm md:text-base">{data.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* review section */}
      <section
        id="review"
        className="px-5 md:px-10 lg:px-20 py-10 flex flex-col gap-10 min-h-screen items-center justify-center"
      >
        <h2 className="text-xl md:text-2xl font-medium text-black text-left w-full">
          Hear from others
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {review.map((data, index) => {
            return (
              <div key={index} className="service-shadow p-5 rounded-xl w-full">
                <h4 className="font-medium">{data.title}</h4>
                <Rating
                  name="read only"
                  value={data.rateVal}
                  readOnly
                  className="pt-6"
                />
                <div className="flex justify-between text-slate-400 mt-5">
                  <p className="text-left">{data.customer}</p>
                  <p className="text-right">{data.date}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto text-center mt-6  w-[30rem] font-semibold">
          <p>
            "Lorem Ipsum is simply summy text of the printing and typetesting
            industry."
          </p>
          <hr className="w-48 mt-2 mx-auto bg-gray-400" />
          <p className="text-gray-400 mb-5">John Deo,CEO</p>
        </div>
      </section>

      {/* contact section */}
      <section
        id="contact"
        className="bg-black px-8 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-center md:justify-between h-screen"
      >
        <div className="flex flex-col gap-10 w-full lg:w-[20%]">
          <h2 className="text-lg md:text-2xl font-medium text-white">
            Contact Us
          </h2>

          <div className="flex flex-col gap-2 md:gap-5">
            {contactDetails?.map((data, index) => {
              return (
                <div key={index} className="flex items-center gap-2 md:gap-5">
                  <data.icon fontSize="large" className="text-white" />
                  <p className="text-white text-lg">{data.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* contact form */}
        <form className="flex flex-col gap-2 w-[30%]">
          <p className="text-white text-lg mb-5">
            Submit your contact number our team will contact you soon
          </p>

          <input
            className="outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg"
            type="text"
            placeholder="Name"
          />

          <input
            className="outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg"
            type="email"
            placeholder="Email"
          />

          <input
            className="outline-none border-none px-4 py-3 bg-[#D9D9D9] font-medium rounded-xl text-lg"
            type="text"
            pattern="^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$"
            placeholder="Contact No."
          />

          <button className="bg-[#F9C869] text-black text-lg rounded-xl font-medium w-[40%] py-2">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default Home;
