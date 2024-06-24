import Image from "next/image";
import HeroImg from "@/assets/hero-img.webp";
import BukalapakLogo from "@/assets/bukalapak-logo.png";
import GojekLogo from "@/assets/gojek-logo.png";
import PersonOne from "@/assets/person-1.webp";
import PersonTwo from "@/assets/person-2.webp";

export default function Home() {
  return (
    <main className="max-w-[1200px] w-full mx-auto">
      <div className="min-h-screen px-4 py-6 md:flex md:items-center md:gap-x-6 md:px-0">
        <div className="space-y-6">
          <p className="text-xl">Hi, Riyyan Selamat datang di</p>
          <p className="font-bold text-3xl">Digital Marketing Job Guarantee Bootcamp</p>
          <p className="font-base">&quot;Raih karier impian dengan pelatihan intensif dan ekslusif bersama para high-achievers dengan jaminan 100% uang kembali&quot;</p>
          <p className="font-bold text-base">100% Alumni Job Guarantee Program telah bekerja di:</p>
          <div className="overflow-x-hidden">
            <div className="flex animate-marquee">
              <Image src={BukalapakLogo} className="scale-50" alt="bukalapak logo" />
              <Image src={GojekLogo} className="scale-50" alt="gojek logo" />
            </div>
          </div>
        </div>
        <Image src={HeroImg} className="object-contain h-fit" alt="hero image" />
      </div>
      <div className="min-h-72 mb-32 py-10 md:flex md:gap-x-6 md:mb-0">
        <div className="w-full flex flex-col items-center bg-gradient-to-b from-teal-600 to-teal-900 min-h-72 rounded-t-lg px-4 py-6">
          <h2 className="font-semibold text-white text-xl">Pengalaman Alumni</h2>
          <div className="flex flex-wrap justify-center gap-y-6 mt-10 md:flex-nowrap md:gap-x-6">
            <div className="bg-white w-full px-4 py-6 rounded-md space-y-4 md:w-3/5">
              <div className="flex items-center gap-x-3">
                <Image src={PersonOne} className="w-12 h-12 object-cover rounded-full" alt="person one" />
                <div>
                  <p className="font-semibold">Stephanie Liveran</p>
                  <p className="text-sm text-gray-400">Company One</p>
                </div>
              </div>
              <p>
                While attending the Digital Marketing Bootcamp at Unknown Academy, I gained a lot of experience and knowledge related to digital marketing. For me, who does not have an educational background related to marketing, I feel
                challenged and interested in continuing to expand my knowledge about marketing and business. I’m grateful to Unknown Academy which has become a forum for job seekers, or fresh graduates like me, to be able to learn skills
                and practices that cannot be obtained in lectures.
              </p>
            </div>
            <div className="bg-white w-full px-4 py-6 rounded-md space-y-4 md:w-3/5">
              <div className="flex items-center gap-x-3">
                <Image src={PersonTwo} className="w-12 h-12 object-cover rounded-full" alt="person one" />
                <div>
                  <p className="font-semibold">Craig Mckay</p>
                  <p className="text-sm text-gray-400">Company Two</p>
                </div>
              </div>
              <p>
                While attending the Digital Marketing Bootcamp at Unknown Academy, I gained a lot of experience and knowledge related to digital marketing. For me, who does not have an educational background related to marketing, I feel
                challenged and interested in continuing to expand my knowledge about marketing and business. I’m grateful to Unknown Academy which has become a forum for job seekers, or fresh graduates like me, to be able to learn skills
                and practices that cannot be obtained in lectures.
              </p>
            </div>
          </div>
          <button className="bg-teal-400 text-white px-6 py-2 mt-6 rounded-md hover:bg-teal-500">Lihat lebih banyak testimoni</button>
        </div>
        <aside className="w-full h-fit bg-white fixed bottom-0 flex items-end justify-between px-4 py-6 z-30 shadow-lg md:w-72 md:sticky md:top-0 md:flex-col md:items-start md:justify-start md:gap-y-2">
          <div className="h-full hidden md:block">
            <p className="text-gray-400">Detail</p>
            <ul className="mt-3 space-y-2 pb-20 border-b border-gray-500">
              <li className="hover:text-gray-700">Pengalaman Alumni</li>
              <li className="hover:text-gray-700">FAQ</li>
            </ul>
          </div>
          <div className="space-y-2">
            <p>Online Bootcamp</p>
            <p className="text-gray-400 line-through">Rp 4.499.999</p>
            <div className="flex items-center gap-x-1">
              <span className="bg-red-500 text-white text-sm rounded-lg p-2">22%</span>
              <p className="text-yellow-500">Rp 3.499.999</p>
            </div>
          </div>
          <div className="mt-3">
            <button className="bg-yellow-400 rounded-lg shadow-md px-3 py-1">Daftar Sekarang</button>
          </div>
        </aside>
      </div>
    </main>
  );
}
