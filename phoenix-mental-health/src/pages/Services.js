import React from 'react';
import ServiceCard from '../components/ServiceCard';
import TherapyOptions from '../components/TherapyOptions';
import MeetingOptions from '../components/MeetingOptions';
import AppointmentCTA from '../components/AppointmentCTA';
import FAQs from '../components/FAQs';
import Footer from '../components/Footer'; // Assuming footer is already implemented
import RightCard from '../components/RightCard';
import LeftCard from '../components/LeftCard';
import Depression from '../images/Depression.png';
import Bipolar from '../images/Bipolar.png';
import Anxiety from '../images/Anxiety.png';
import Anger from '../images/Anger.png';
import Personality from '../images/PersonalityDisorders.png';
import PTSD from '../images/PTSD.png';
import SelfStem from '../images/Self-Stem.png';


const Services = () => {
  return (
    <div className="font-sans bg-lightTeal text-deepTeal min-h-screen flex flex-col">
      {/* Main Section */}
      <div className="bg-background flex-grow">
        <h1 className="text-4xl font-lato font-bold text-center py-16">Services</h1>

        {/* Service Cards */}
        {/* <ServiceCard
          title="Depression"
          content="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent. Tempus efficitur aptent justo natoque orci tincidunt dictum. Malesuada arcu platea fames etiam eu adipiscing arcu. Nam tellus quam; commodo dis litora potenti sit? Aliquet eros consequat platea iaculis per, bibendum urna."
        /> */}
        {/* First Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background ">
          <div className="relative z-10 w-full md:w-1/2">
            <LeftCard
              headerText="Depression"
              paragraphText="Depression is a serious mental health condition that involves a persistent feeling of sadness and loss of interest in activities."
            />
          </div>

          {/* Image with White Background */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:-ml-16">
            <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src={Depression}
                alt="Depression"
                className="w-[250px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background ">
          {/* Image with White Background */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:-mr-16 order-last md:order-first">
            <div className="bg-[#e9e3da] rounded-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src={Bipolar}
                alt="Bipolar"
                className="w-[300px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="relative z-10 w-full md:w-1/2">
            <RightCard
              headerText="Bipolar"
              paragraphText="Bipolar disorder is a mental illness that causes extreme mood swings, shifts in energy, and changes in activity levels."
            />
          </div>
        </section>






        <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background ">
          <div className="relative z-10 w-full md:w-1/2">
            <LeftCard
              headerText="Anxiety"
              paragraphText="Anxiety is a feeling of fear, dread, and uneasiness that can be a normal reaction to stress. It can also be a symptom of an anxiety disorder, which is a condition where anxiety is excessive and interferes with daily life."
            />
          </div>

          {/* Image with White Background */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:-ml-16">
            <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src={Anxiety}
                alt="Anxiety"
                className="w-[250px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background ">
          {/* Image with White Background */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:-mr-16 order-last md:order-first">
            <div className="bg-[#e5e1e5] rounded-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src={Anger}
                alt="Anger"
                className="w-[300px] h-[550px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="relative z-10 w-full md:w-1/2">
            <RightCard
              headerText="Anger"
              paragraphText="Anger is an essential emotion, but if it seems out of control or is affecting relationships, it could be a sign of an underlying mental health condition."
            />
          </div>
        </section>












        <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background ">
          <div className="relative z-10 w-full md:w-1/2">
            <LeftCard
              headerText="Personality Disorders"
              paragraphText="A personality disorder is a mental health condition that involves a long-term pattern of thoughts and behaviors that are different from what is considered normal in a person's culture."
            />
          </div>

          {/* Image with White Background */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:-ml-16">
            <div className="bg-white rounded-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src={Personality}
                alt="Personality Disorders"
                className="w-[350px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background ">
          {/* Image with White Background */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:-mr-16 order-last md:order-first">
            <div className="bg-[#4b4a59] rounded-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src={PTSD}
                alt="PTSD"
                className="w-[400px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="relative z-10 w-full md:w-1/2">
            <RightCard
              headerText="PTSD"
              paragraphText="Post-traumatic stress disorder (PTSD) is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event."
            />
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row items-center justify-between py-8 px-4 bg-background ">
          <div className="relative z-10 w-full md:w-1/2">
            <LeftCard
              headerText="Self-Stem"
              paragraphText="Low self-esteem is a lack of confidence in one's abilities and self-worth, and it's not a mental health disorder in itself. However, low self-esteem can be a sign of a mental health problem if it persists or affects daily life."
            />
          </div>

          {/* Image with White Background */}
          <div className="relative w-full md:w-1/2 mt-8 md:mt-0 md:-ml-16">
            <div className="bg-[#e9e8e6] rounded-lg overflow-hidden flex items-center justify-center p-4">
              <img
                src={SelfStem}
                alt="Self-Stem"
                className="w-[350px] h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>



        
        

        

        {/* Additional Sections */}
        {/* You can add more content like therapy options and meeting options here */}

        {/* <h1 className="text-4xl font-lato font-bold text-center py-16">Services</h1> */}

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
