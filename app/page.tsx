import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";

import { SignupFormDemo } from "@/components/ui/ContactForm";

import { FloatingNav } from "@/components/ui/FloatingNav";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import { navItems } from "@/data";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export default function Home() {
  return (
    <main className="relative h-full bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
    <div className="max-w-8xl w-full ">
      <h1 className="text-white-200">Hello, Portfolio</h1>
      <FloatingNav navItems={navItems}/>
      <Hero/>
      <Grid/>
      <RecentProjects/>
      <SignupFormDemo/>
      <Footer/>
    </div>
   </main>
  );
}
