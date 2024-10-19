import React from 'react';
import ServiceCard from '../components/ServiceCard';
import TherapyOptions from '../components/TherapyOptions';
import MeetingOptions from '../components/MeetingOptions';
import AppointmentCTA from '../components/AppointmentCTA';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer'; // Assuming footer is already implemented

const Services = () => {
  return (
    <div className="font-sans bg-lightTeal text-deepTeal min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="flex-grow">
        <h1 className="text-4xl font-lato font-bold text-center py-16">Services</h1>

        {/* Service Cards */}
        <ServiceCard
          title="Depression"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget habitasse..."
        />
        <ServiceCard
          title="Bipolar"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget habitasse..."
          alignRight={true}
        />
        <ServiceCard
          title="Anxiety"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget habitasse..."
        />
        <ServiceCard
          title="Anger"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget habitasse..."
          alignRight={true}
        />
        <ServiceCard
          title="Personality Disorders"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget habitasse..."
        />
        <ServiceCard
          title="PTSD"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget habitasse..."
          alignRight={true}
        />
        <ServiceCard
          title="Self-Stem"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat eget habitasse..."
        />

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
