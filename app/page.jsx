import dynamic from "next/dynamic";
import Hero from "@/src/components/Hero"
import About from "@/src/components/About"
const Reviews = dynamic(() => import("@/src/components/Review"));
const Category = dynamic(() => import("@/src/components/Category"));
const BlogResources = dynamic(() => import("@/src/components/BlogResources"));
const Footer = dynamic(() => import("@/src/components/Footer"));
export default  function Page() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Reviews></Reviews>
      <Category></Category>
      <BlogResources></BlogResources>
      <Footer></Footer> 
    </> 
  );
}