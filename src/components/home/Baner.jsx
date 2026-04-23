import { mayaboti } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Baner = () => {
  return (
    <div className="flex sm:justify-between items-center justify-center sm:flex-row flex-cols flex-col-reverse">
      <div className="flex-1 space-y-5 text-center sm:text-start">
        <h2 className={`${mayaboti.className} text-6xl font-bold leading-20`}>
          আপনার শিশুকে দিন একটি
          <span className="text-primary"> সুন্দর ভবিষ্যৎ</span>
        </h2>
        <p>Buy Every Product with 15% Discount</p>
        <Link href={"/products"}>
          <button className="btn btn-primary btn-outline">
            Explore Product
          </button>
        </Link>
      </div>

      <div className="flex-1">
        <Image
          alt="Buy Every Product with 15% Discount"
          src={"/assets/hero.png"}
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Baner;
