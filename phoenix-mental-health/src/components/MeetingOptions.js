import NormalCard from "./NormalCard";

const MeetingOptions = () => {
    return (
      <section className="flex flex-col items-center py-16 bg-background">
        <h2 className="text-3xl font-lato font-bold text-center mb-12">Meeting Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 max-w-7xl">
          {/* <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
            <h2 className="text-xl font-lato font-bold text-black mb-4">Telehealth</h2>
            <p className="text-black font-dmSans">
              Lorem ipsum odor amet, consectetur adipiscing elit. Volutpat eget habitasse...
            </p>
          </div>
          <div className="bg-lightTurquoise rounded-lg p-6 shadow-lg border border-darkGreen">
            <h2 className="text-xl font-lato font-bold text-black mb-4">Face-to-Face</h2>
            <p className="text-black font-dmSans">
              Lorem ipsum odor amet, consectetur adipiscing elit. Volutpat eget habitasse...
            </p>
          </div> */}
          <NormalCard
          headerText="Telehealth"
          paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent."
          />

          <NormalCard
          headerText="Face-to-Face"
          paragraphText="Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat eget habitasse ex donec conubia ad aptent."
          />
        </div>
      </section>
    );
  };
  
  export default MeetingOptions;
  