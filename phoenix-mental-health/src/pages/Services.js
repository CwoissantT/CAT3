import React from 'react';
import ServiceCard from '../components/ServiceCard';
import TherapyOptions from '../components/TherapyOptions';
import MeetingOptions from '../components/MeetingOptions';
import AppointmentCTA from '../components/AppointmentCTA';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer'; // Assuming footer is already implemented
import RightCard from '../components/RightCard';
import LeftCard from '../components/LeftCard';

const Services = () => {
  return (
    <div className="font-sans bg-lightTeal text-deepTeal min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="flex-grow">
        <h1 className="text-4xl font-lato font-bold text-center py-16">Services</h1>

        {/* Service Cards */}
        {/* <ServiceCard
          title="Depression"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
        /> */}
        <section className="flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background">
          {/* Right Card - Adjusted to the Right */}
          <div className="w-full md:w-1/2 md:mr-auto">
            <LeftCard
              headerText="Bipolar"
              paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center justify-between py-8 px-4 bg-background">
          {/* Right Card - Adjusted to the Right */}
          <div className="w-full md:w-1/2 md:ml-auto">
            <RightCard
              headerText="Bipolar"
              paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
            />
          </div>
        </section>
        
        <section className="flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background">
          {/* Right Card - Adjusted to the Right */}
          <div className="w-full md:w-1/2 md:mr-auto">
            <LeftCard
              headerText="Anxiety"
              paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center justify-between py-8 px-4 bg-background">
          {/* Right Card - Adjusted to the Right */}
          <div className="w-full md:w-1/2 md:ml-auto">
            <RightCard
              headerText="Anger"
              paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background">
          {/* Right Card - Adjusted to the Right */}
          <div className="w-full md:w-1/2 md:mr-auto">
            <LeftCard
              headerText="Personality Disorders"
              paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse items-center justify-between py-8 px-4 bg-background">
          {/* Right Card - Adjusted to the Right */}
          <div className="w-full md:w-1/2 md:ml-auto">
            <RightCard
              headerText="PTSD"
              paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background">
          {/* Right Card - Adjusted to the Right */}
          <div className="w-full md:w-1/2 md:mr-auto">
            <LeftCard
              headerText="Self-Stem"
              paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
            />
          </div>
        </section>

        {/* Additional Sections */}
        {/* You can add more content like therapy options and meeting options here */}

        <h1 className="text-4xl font-lato font-bold text-center py-16">Services</h1>

        {/* Therapy Options */}
        <TherapyOptions />

        {/* Meeting Options */}
        <MeetingOptions />

        {/* Call to Action Button */}
        <AppointmentCTA />

        {/* FAQs Section */}
        <FAQs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Services;
