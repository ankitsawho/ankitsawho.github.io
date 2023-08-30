import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai"
import LatestPost from "../components/LatestPost";
import RecentProjects from "../components/RecentProjects";
import Link from 'next/link';
import SocialLinks from "@/components/SocialLinks";
import { getHomeProjectMetaData } from "@/utils/GetMetaData";

export default function Home() {
  const projects = getHomeProjectMetaData()
  return (
    <main className="w-screen">
      <div className="w-screen md:flex justify-center items-center">
        <div className="w-full max-w-4xl md:flex items-center justify-center mt-10">
          <div className="space-y-4 p-4">
            <h1 className="text-5xl font-extrabold mb-10">Hi 👋, I'm Ankit!</h1>
            <span className="text-lg font-medium">I don't always stare at a screen 💻 all day, but when I do, I prefer to be coding 🧑‍💻.</span>
            <div className="md:flex items-center justify-between">
              <Link href="/about"><span className='flex items-center md:text-lg text-sm font-semibold hover:underline underline-offset-8 hover:scale-95 transition ease-in-out cursor-pointer space-x-1'><p>more about me</p> <AiOutlineArrowRight size={24} /></span></Link>
            </div>
          </div>
          <div className=" w-44"></div>
        </div>
      </div>
      <LatestPost />
      <RecentProjects projects={projects} />
    </main>
  )
}
