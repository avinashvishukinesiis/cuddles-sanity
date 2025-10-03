import ActivityZone from "@/components/HomePage/ActivityZone/ActivityZone";
import CuddlesProgram from "@/components/HomePage/CuddlesProgram/CuddlesProgram";
import { EarlyEducationSection } from "@/components/HomePage/Early-education/EarlyEducation";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Include from "@/components/HomePage/Include/Include";
import LetsConnect from "@/components/LetsConnect/letsConnect";
import Testimonial from "@/components/Testimonial/Testimonial";
import { autoFetchHeroSection, autoFetchTestimonials, autoFetchCuddlesProgram, autoFetchAwards, autoFetchActivityZone, autoFetchIncludeSection, autoFetchEarlyEducation } from "@/lib/auto-data-fetcher";

export default async function Home() {
  const [heroData, testimonials, cuddlesData, awardsData, activityData, includeData, earlyEducationData] = await Promise.all([
    autoFetchHeroSection(),
    autoFetchTestimonials(),
    autoFetchCuddlesProgram(),
    autoFetchAwards(),
    autoFetchActivityZone(),
    autoFetchIncludeSection(),
    autoFetchEarlyEducation()
  ]);

  return (
     <div className="flex flex-col gap-[20px] font-ohno">
      <HeroSection heroData={heroData} />
      <EarlyEducationSection earlyEducationData={earlyEducationData} />
      <CuddlesProgram cuddlesData={cuddlesData} awardsData={awardsData} />
      <ActivityZone activityData={activityData} />
      <Include includeData={includeData} />
      <Testimonial testimonials={testimonials} />
      <LetsConnect/>
     </div>
  );
}
