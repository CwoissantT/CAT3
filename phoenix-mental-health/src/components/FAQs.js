import NormalCard from "./NormalCard";

const FAQs = () => {
    return (
      <section className="flex flex-col items-center py-16 bg-background">
        <h2 className="text-3xl font-lato font-bold text-center mb-12">FAQs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 max-w-7xl">
          {/* <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
            <h2 className="text-xl font-lato font-bold text-black mb-4">Are the sessions remote only?</h2>
            <p className="text-black font-dmSans">Yes.</p>
          </div>
          <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
            <h2 className="text-xl font-lato font-bold text-black mb-4">What age patients do you receive?</h2>
            <p className="text-black font-dmSans">We primarily serve adults and teenagers.</p>
          </div>
          <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
            <h2 className="text-xl font-lato font-bold text-black mb-4">Commodo dis litora potenti sit?</h2>
            <p className="text-black font-dmSans">Lorem ipsum odor amet, consectetur adipiscing elit.</p>
          </div> */}

          <NormalCard
          headerText="Are the sessions remote only?"
          paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. "
          />

          <NormalCard
          headerText="What age patients do you receive?"
          paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. "
          />

          <NormalCard
          headerText="Commodo dis litora potenti sit?"
          paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. "
          />
        </div>
      </section>
    );
  };
  
  export default FAQs;
  