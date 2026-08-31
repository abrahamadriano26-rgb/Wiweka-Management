import Navbar from "@/components/navbar";
import HomeTitle from "@/components/home-title";
import HomeImg from "@/components/home-img";
import HomeAbout from "@/components/home-about";
import HomeService from "@/components/home-service";
import HomeReview from "@/components/home-review";
import Copyright from "@/components/copyright";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeTitle />
      <HomeImg />
      <HomeAbout />
      <HomeService />
      <HomeReview />
      <Copyright />

    </>
  );
}