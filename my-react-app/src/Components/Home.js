import Form from "./Form.js";

export default function Home() {
  
  return (
      <section className="lg:p-10 flex flex-col lg:flex-row justify-center items-center">
        <div>
          <h1 className="lg:text-6xl lg:font-semibold text-2xl mt-4">
            Welcome to my app!
          </h1>
          <h2 className="text-xl lg:text-2xl lg:font-semibold text-[#3730a3] lg:mt-14 mt-4">
            Let's style your own advertisement together!
          </h2>
          <h3 className=" text-lg lg:text-xl text-[#3730a3] lg:mt-4 mt-2">
            Enter a title and select a template to generate a banner:
          </h3>
          <Form/>
        </div>
        <img className=" lg:w-[500px] w-[300px] mt-6" src="/assets/ads-img.png" alt="Imagine ad" />
      </section>
  );
}
