import React, { useState } from 'react';
import './news.css';

const NewsCard = ({ title, summary, moreContent, imgSrc, altText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={imgSrc} alt={altText} />
      </div>
      <div className="card-content">
        <h1>{title}</h1>
        <p className="summary">{summary}</p>
        {isOpen && <div className="more-content">{moreContent}</div>}
        <button className="read-more-btn" onClick={toggleContent}>
          {isOpen ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

function News() {
  return (
    <div>

      <header className='news-header'>
        <nav>LATEST NEWS :</nav>
      </header>
      
      <main>
        <div className="card-container">
          <NewsCard
            title="E-Waste's Environmental Impact:"
            summary={
              <>
                <h3>Toxic Pollution:</h3>
                <p>E-waste contains hazardous substances like mercury, lead, and brominated flame retardants, which can contaminate soil, air, and water when not disposed of properly.</p>
                <p>Source: "The Shocking Environmental Impacts of E-Waste"</p>
              </>
            }
            moreContent={
              <>
                <h1>The Global E-Waste Crisis</h1>
                <h2>Global Generation</h2>
                <p>In 2021, each person on the planet generated an average of 7.6 kg of e-waste, resulting in a staggering 57.4 million tons worldwide. Only 17.4% of this e-waste was documented as being properly collected, treated, and recycled.</p>
                <h2>Illegal Trade</h2>
                <p>An estimated 60-90% of the world’s e-waste, worth nearly USD 19 billion, is illegally traded or dumped each year, exacerbating the environmental crisis.</p>
                <h2>Climate Change</h2>
                <p>The production of e-waste contributes to greenhouse gas emissions, with the extraction of raw materials accounting for 7% of global energy consumption.</p>
                <h2>Lack of Recycling</h2>
                <p>Despite the urgent need for e-waste recycling, global recycling rates remain low. Even in the EU, which leads the world in e-waste recycling, only 35% of e-waste is officially reported as properly collected and recycled.</p>
                <h3>Key Takeaways</h3>
                <ul>
                  <li>E-waste is a significant environmental concern.</li>
                  <li>The global generation of e-waste is increasing.</li>
                  <li>Illegal trade and dumping of e-waste worsen the environmental impact.</li>
                  <li>Climate change mitigation efforts require circular economy principles.</li>
                  <li>Urgent action is needed to improve e-waste recycling infrastructure.</li>
                </ul>
                <h2>International E-Waste Day</h2>
                <p>International E-Waste Day is celebrated on October 14th to raise awareness about e-waste and encourage responsible recycling.</p>
              </>
            }
            imgSrc="https://imgs.search.brave.com/ZMa5uYOJZDO8zgV1CWm-kB10Ft24S0Sfdh00rKZ9wb8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmd1/aW0uY28udWsvaW1n/L21lZGlhLzRmMThi/NDFjZTM5YzljMDc5/MTE4YjZhZWRmNWQw/ZTAxMDY2YzFiODkv/MF8yNTFfNDc1Ml8y/ODUyL21hc3Rlci80/NzUyLmpwZz93aWR0/aD00NjUmZHByPTEm/cz1ub25l"
            altText="E-Waste"
          />

          <NewsCard
            title="Waste Effect On Animals"
            summary={
              <>
                <h3>Waste's Profound Effect on Animal Populations and Ecosystems</h3>
                <p>Plastic litter is becoming a major killer in the natural world, affecting wildlife and domestic animals.</p>
              </>
            }
            moreContent={
              <>
                <h2>Entanglement and Ingestion</h2>
                <p>Plastic litter alone is responsible for over one million animal deaths annually. Marine animals are especially vulnerable to plastic pollution.</p>
                <h1>Waste's Profound Effect on Animal Populations and Ecosystems</h1>
                <p>Plastic litter, toxins, and sharp objects found in waste have detrimental effects on wildlife and domestic animals.</p>
                <p>Toxin Accumulation</p>
                <p>Animals ingest toxins stored in waste, leading to various ailments.</p>
                <p>Bird Deaths</p>
                <p>Improperly disposed trash attracts birds who ingest poisons from moldy food and other harmful substances, resulting in fatalities.</p>
                <p>Injuries from Sharp Objects</p>
                <p>Broken glass or plastic can cause injuries to animals, even if not swallowed.</p>
                <p>Habitat Disruption</p>
                <p>Waste can disrupt ecosystems and social structures, as seen in the case of bears learning to associate humans with food sources.</p>
                <h2>Key Takeaways</h2>
                <ul>
                  <li>Reduce waste through the Three Rs: Reduce, Reuse, and Recycle.</li>
                  <li>Properly dispose of toxic materials.</li>
                  <li>Implement effective waste management systems.</li>
                  <li>Educate the public about the impact of waste on animal populations.</li>
                </ul>
              </>
            }
            imgSrc="https://imgs.search.brave.com/oh9dX7dPMa3d6LfRKOhc8RzvWdIAaEOy1iCIvh8IcNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3Lm9u/ZWdyZWVucGxhbmV0/Lm9yZy93cC1jb250/ZW50L3VwbG9hZHMv/LzIwMTUvMDgvNTg5/NTg2MTMyOF9iMTBj/MzY1ODdkX2IuanBn/P3Jlc2l6ZT02MTQs/NDYxJnNzbD0x"
            altText="Waste Effect On Animals"
          />

          <NewsCard
            title="Soil Erosion Due to Waste"
            summary={
              <>
                <h3>Accelerated Soil Loss</h3>
                <p>US Croplands are projected to lose an additional 28 billion tons of soil by 2035 and 148 billion tons by 2100, due to unsustainable practices.</p>
              </>
            }
            moreContent={
              <>
                <h1>UN Urges Action</h1>
                <p>The FAO calls for immediate protection of soils to prevent mass starvation caused by unsustainable agriculture and land use changes.</p>
                <h2>Fertile Soil Degradation</h2>
                <p>A study found significant degradation of soil structure, organic matter, and acidity over 50 years.</p>
                <h2>Conservation Efforts</h2>
                <p>Initiatives like conservation agriculture and the use of microbes aim to rejuvenate degraded soils.</p>
              </>
            }
            imgSrc="https://imgs.search.brave.com/YAbga8fjW2ea_ioIhwqiIToqGH2Cd7VHwMJFPHe3i5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c29pbHMub3JnL2Zp/bGVzL2ltYWdlcy9z/c3NhL2Rpc2NvdmVy/LXNvaWxzL2p1bmt5/YXJkLW5lYXItZm9y/ZXN0LWFudG9pbmUt/Z2lyZXQtdmlhLXVu/c3BsYXNoLTgwMHg2/MDAuanBn"
            altText="Soil Erosion"
          />

          <NewsCard
            title="Impact of Plastic Waste on Environmental Sustainability:"
            summary={
              <>
                <h3>Daily Dump</h3>
                <p>Every day, the equivalent of 2,000 garbage trucks full of plastic are dumped into the world’s oceans, rivers, and lakes, polluting aquatic ecosystems.</p>
              </>
            }
            moreContent={
              <>
                <h1>Impact on Ecosystems</h1>
                <p>Plastic pollution alters habitats and natural processes, reducing ecosystems' ability to adapt to climate change.</p>
                <h2>Toxic Legacy</h2>
                <p>Plastic persists in the environment, threatening wildlife and spreading toxins.</p>
                <h2>Climate Connection</h2>
                <p>Plastic production and incineration contribute to global warming.</p>
                <h2>Systemic Transformation</h2>
                <p>Recycling alone is insufficient; a systemic transformation to a circular economy is needed.</p>
                <h3>Recent Developments</h3>
                <ul>
                  <li>The GPML hosted a webinar on sea-based sources of plastic pollution.</li>
                  <li>OEWG-3 session took place to prepare proposals for a science-policy panel.</li>
                </ul>
              </>
            }
            imgSrc="https://imgs.search.brave.com/waNIBV-rEdKiYE006475Gjo17iY1knUA12x68kN9WUI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vODEvMTU1ODgx/LTA1MC0zODgwMUQ4/Ni93YXN0ZS1iZWFj/aC1sYW5kLXBvbGx1/dGlvbi1zb2lsLXdh/dGVyLWhlYWx0aC5q/cGc_dz00MDAmaD0z/MDAmYz1jcm9w"
            altText="Impact of Plastic Waste"
          />
        </div>
      </main>
    </div>
  );
}

export default News;
