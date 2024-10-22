"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import spaceImage from "../assets/space-image.jpg";

export default function Home() {
  
  const router = useRouter();

  return (
    <>
      <div className="w-[100vw] h-[100vh] flex flex-row justify-end font-mono">
        <Image
          src={spaceImage}
          fill
          alt="space image"
          sizes="(max-width: 1200px) 100vw, (max-height: 768px) 40vh, 33vw"
          className="z-1"
        />
        <div className="w-[100%] h-[100vh] flex justify-end p-10 z-50">
          <button
            // style={{ backgroundColor: "red" }}
            className="rounded-3xl w-[10%] h-[7%] bg-white py-2 px-4 border border-transparent font-mono
              text-center text-sm text-slate-800 transition-all shadow-md hover:shadow-sm hover:h-[7.5%]
              hover:bg-gray-300 font-bold ml-2 hover:w-[10.5%]"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </button>
        </div>
      </div>
    </>
  );
}
