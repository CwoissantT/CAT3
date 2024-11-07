import React from 'react';

const AboutMission = () => {
  return (
    <section className="flex justify-center py-16 px-4 bg-background">
      <div className="relative w-full max-w-4xl">
        {/* Shadow Layer */}
        <div className="absolute top-4 left-4 bg-teal-700 rounded-lg w-[100%] h-[100%] z-0"></div>

        {/* Main Card */}
        <div className="relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10 text-center">
          <p className="text-black font-dmSans text-lg mb-8">
            With more than 10 years of experience as a Mental Health Counselor, I have dedicated myself to
            guiding people of all ages on their path to emotional well-being with an integrative approach,
            adapting the techniques to the needs of each client. I am a licensed Mental Health Counselor
            and have worked with adolescents, adults, couples, and families. My mission is to provide you
            with the tools you need to effectively manage your mental health.
          </p>
          <p className="text-black font-dmSans text-lg mb-8">
            Take charge of your life and schedule your first appointment.
          </p>
          <button className="bg-green-800 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 transition">
            REQUEST FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>

  );
};


// {/* <div className="relative mx-auto mt-8 md:mt-0 px-10" style={{ maxWidth: '400px' }}>
//       {/* Shadow Layer */}
//       <div className="absolute top-3 left-10 bg-teal-700 rounded-lg w-[82%] h-[100%] z-0"></div>

//       {/* Main Card */}
//       <div className="relative bg-lightTurquoise rounded-lg p-8 shadow-lg border border-darkGreen z-10">
//         <h2 className="text-2xl font-lato font-bold text-black mb-4">{headerText}</h2>
//         <p className="text-black font-dmSans">{paragraphText}</p>

//       </div>
//     </div> */}

export default AboutMission;
