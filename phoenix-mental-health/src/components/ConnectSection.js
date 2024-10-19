import React, { useEffect } from 'react';

const ConnectSection = () => {

  // Load Instagram Embed script after component renders
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const instagramPost1 = `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C_lDP6FAjNL" data-instgrm-version="13"></blockquote>
  `;
  const instagramPost2 = `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C2xtnwjOqqy" data-instgrm-version="13"></blockquote>
  `;
  const instagramPost3 = `
    <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DBRPAFoM5vh" data-instgrm-version="13"></blockquote>
  `;

  return (
    <section className="bg-background py-16">
      <h2 className="text-center text-2xl font-lato font-bold text-black mb-8">Connect with me</h2>
      
      {/* Instagram Posts Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
        
        {/* Card 1 */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen max-w-xs">
          <div className="instagram-embed-wrapper">
            <div dangerouslySetInnerHTML={{ __html: instagramPost1 }}></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen max-w-xs">
          <div className="instagram-embed-wrapper">
            <div dangerouslySetInnerHTML={{ __html: instagramPost1 }}></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen max-w-xs">
          <div className="instagram-embed-wrapper">
            <div dangerouslySetInnerHTML={{ __html: instagramPost2 }}></div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen max-w-xs">
          <div className="instagram-embed-wrapper">
            <div dangerouslySetInnerHTML={{ __html: instagramPost2 }}></div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen max-w-xs">
          <div className="instagram-embed-wrapper">
            <div dangerouslySetInnerHTML={{ __html: instagramPost3 }}></div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-lightTurquoise rounded-lg p-8 shadow-lg flex items-center justify-center border border-darkGreen max-w-xs">
          <div className="instagram-embed-wrapper">
            <div dangerouslySetInnerHTML={{ __html: instagramPost3 }}></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConnectSection;


