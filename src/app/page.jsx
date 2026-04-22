import Baner from "@/components/home/Baner";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-20">

      <section>
        <Baner></Baner>
      </section>

      <section>
        <Products></Products>
      </section>
    </div>
  );
}