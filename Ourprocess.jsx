import React from 'react';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ourproces.css'


const OurProcess = () => {
  const cards = [
    {
      id: 1,
      title: 'PROJECT SELECTION',
      description: "The student selects a project topic that is of interest to them and that aligns with their academic or professional goals.",
    },
    {
      id: 2,
      title: "PROJECT PLANNING",
      description: "Our engineer develops a project plan that outlines the goals, scope, timeline, and budget for the project.",
    },
    {
      id: 3,
      title: "PROJECT RESEARCH",
      description: "Our engineer conducts research on the project topic and gathers data to support their findings.",
    },
    {
      id: 4,
      title: "PROJECT DEVELOPMENT",
      description: "Our engineer develops the project, which may involve writing code, building a prototype, or conducting experiments.",
    },
    {
      id: 5,
      title: "PROJECT DOCUMENTATION",
      description: "Our engineer documents the project, which may include writing a report, creating a presentation, or developing a website.",
    },
    {
      id: 6,
      title: " PROJECT PRESENTATION",
      description: "Our engineer executes and presents the project to the students.",
    }
  ];

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };

  return (
    <div className='container carousel-inner carousel text-dark'>
      <div className='px-5'>
          <h2 className='text-center' >Our <span style={{ color: '#1bbd36' }}>Process</span></h2>
          <Slider {...settings} className="slider">
           {cards.map(each =>(
            <div className="list-proces">
              <p><h4 className='text-dark'>#{each.id}</h4></p>
                    <h3 className='text-dark'>{each.title}</h3>
                     <p className='text-dark'>{each.description}</p> 
            </div>
           ))}
          </Slider>
      </div>
    </div>
  );
};

export default OurProcess;
