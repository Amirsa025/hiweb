import Image from "next/image";
import { SiginInPage } from "@/app/(auth)/components/siginIn";
import { getCookies } from "next-client-cookies/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const cookie = getCookies();
  const token = cookie.get("token");
  if (token) {
    redirect("/product");
  }
  return (
    <section className="grid md:grid-cols-1 lg:grid-cols-2 ">
      <SiginInPage />
      <div className="hidden md:flex text-center  flex-col items-center justify-center">
        <Image
          src="./images/user.svg"
          alt=""
          width={800}
          height={0}
          className="object-cover mt-12    rounded-[1.5rem]"
        />
      </div>
    </section>
  );
}
