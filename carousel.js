import React from "react";
import Image from "next/image";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { Uppercase } from "styles/typography";
import { IntegrationsWrapper, IntegrationsSlide, ImageWrapper } from "./integrations.styles";
import { integrationsList } from "./integrations.utils";
import "pure-react-carousel/dist/react-carousel.es.css";
const Integrations = () => {
   return (
      <IntegrationsWrapper>
         <Uppercase center mw="1400">
            Even Smoother Integrations
         </Uppercase>

         <CarouselProvider
            visibleSlides={5}
            totalSlides={8}
            step={2}
            isPlaying={true}
            naturalSlideWidth={400}
            naturalSlideHeight={500}
            infinite
         >
            <Slider>
               {integrationsList.map((item, idx) => (
                  <Slide key={idx} index={idx}>
                     <ImageWrapper>
                        <Image src={item.icon} alt={item.alt} title={item.alt} />
                     </ImageWrapper>
                  </Slide>
               ))}
            </Slider>
         </CarouselProvider>
         {/* <IntegrationsSlide></IntegrationsSlide> */}
      </IntegrationsWrapper>
   );
};

export { Integrations };
