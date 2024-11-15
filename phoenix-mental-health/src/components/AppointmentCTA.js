import { Link } from "react-router-dom";

const AppointmentCTA = () => {
    return (
      <section className="flex justify-center py-16 bg-background">
        <Link to="/Portal">
          <button className="bg-green-800 text-white text-xl font-bold py-5 px-16 rounded-lg shadow-md hover:bg-green-700 transition">
            REQUEST APPOINTMENT NOW
          </button>
        </Link>
      </section>
    );
  };
  
  export default AppointmentCTA;
  