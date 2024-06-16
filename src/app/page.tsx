import Hero from "@/components/layouts/Hero";
import Head from "next/head"


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
      <div className="container mx-auto max-w-7xl my-8">
        <h1 className="text-2xl font-bold">Program Unggulan</h1>
        <div className="grid grid-cols-4 gap-4 my-4">
          <div className="bg-white shadow rounded-md p-4 hover:bg-[#0057b8] hover:text-white transition-all">
            <div className="flex flex-col mx-auto justify-center items-center text-center">
              <h5 className="text-2xl font-semibold">Programming</h5>
              <p className="mt-2 text-sm ">Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-4">
            <div className="flex flex-col mx-auto justify-center items-center text-center">
              <h5 className="text-2xl font-semibold">IT Support</h5>
              <p className="mt-2 text-sm ">Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-4">
            <div className="flex flex-col mx-auto justify-center items-center text-center">
              <h5 className="text-2xl font-semibold">Robotika</h5>
              <p className="mt-2 text-sm ">Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-4">
            <div className="flex flex-col mx-auto justify-center items-center text-center">
              <h5 className="text-2xl font-semibold">Al-Quran</h5>
              <p className="mt-2 text-sm ">Lorem ipsum dolor sit amet consectetur dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
