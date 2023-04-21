import { LandingSection } from "./landingSection/LandingSection";
import { EnrollmentSection } from "./enrollmentSection/EnrollmentSection";
import { CoursesIntroSection } from "./coursesIntroSection/CoursesIntroSection";
import { NewsSection } from "./newsSection/NewsSection";

// This component renders different sections of a home page.
const HomeContainer = () => {
  return (
    <div class="grid-col z-0 grid overflow-hidden">
      <LandingSection />
      <EnrollmentSection />
      <CoursesIntroSection />
      <NewsSection />
    </div>
  );
};

export { HomeContainer };
