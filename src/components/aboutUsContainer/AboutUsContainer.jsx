import { Fragment } from "react";

import { Map } from "./map/Map";
import { ContactForm } from "./contactForm/ContactForm";

// This component includes map and a form for user to send an email to institute.
const AboutUsContainer = () => {
  return (
    <Fragment>
      <p class="w-screen border-t bg-white py-10 text-center text-3xl font-bold md:py-16">
        Share Your Thoughts with Us
      </p>
      <div class="flex w-screen flex-col gap-4 bg-white md:flex-row">
        <ContactForm />
        <Map />
      </div>
    </Fragment>
  );
};

export { AboutUsContainer };
