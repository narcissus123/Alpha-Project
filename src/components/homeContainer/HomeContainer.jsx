import { LandingSection } from "./landingSection/LandingSection";
import { EnrollmentSection } from "./enrollmentSection/EnrollmentSection";
import { CoursesIntroSection } from "./coursesIntroSection/CoursesIntroSection";
import { NewsSection } from "./newsSection/NewsSection";
import { ChatWithUs } from "./chatWithUs/ChatWithUs";

import { useAuth } from "../../context/AuthContext";

// This component renders different sections of a home page.
const HomeContainer = () => {
  const user = useAuth();

  return (
    <div class="grid-col relative z-0 grid overflow-hidden">
      <LandingSection />
      <EnrollmentSection />
      <CoursesIntroSection />
      <NewsSection />
      <div
        class={`${
          user.isAdmin || user.isStudent ? "fixed" : "hidden"
        }  top-0 left-0 right-0 z-50`}
      >
        <ChatWithUs />
      </div>
    </div>
  );
};

export { HomeContainer };
