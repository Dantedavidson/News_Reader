import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselItem } from "./CarouselItem";

export const CarouselComponent = () => {
  return (
    <Carousel fade controls={false}>
      <Carousel.Item interval={10000}>
        <div>
          <img
            src="https://static01.nyt.com/images/2021/03/21/world/xxVACCINE-IP1/merlin_184877346_b59a5804-ff16-4ce4-b503-5ca2b95ba768-superJumbo.jpg"
            alt=""
          />
        </div>
        <CarouselItem
          title={"Rich Countries Signed Away a Chance to Vaccinate the World"}
          abstract={
            "Despite warnings, American and European officials gave up leverage that could have guaranteed access for billions of people. That risks prolonging the pandemic."
          }
          author={"By Selam Gebrekidan and Matt Apuzzo"}
          date={"12/10/1994"}
        />
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <div>
          <img
            src="https://static01.nyt.com/images/2021/03/22/us/22china-canada-Kovrig/merlin_184915005_989b6703-06e2-49ba-b3b8-c3c4ec7a10a5-superJumbo.jpg"
            alt=""
          />
        </div>
        <CarouselItem
          title={"Second Canadian Is Tried in China on Spying Charges"}
          abstract={
            "Michael Kovrig, a former Canadian diplomat, was tried after Michael Spavor appeared in a Chinese court on Friday, Canadian officials said."
          }
          author={"By Javier C. Hernández"}
          date={"11/12/1988"}
        ></CarouselItem>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <div>
          <img
            src="https://static01.nyt.com/images/2021/03/22/world/22virus-briefing-astrazeneca-2/merlin_185254806_d13024f2-4a6f-4394-ad97-66ddd7ec9a8c-superJumbo.jpg"
            alt=""
          />
        </div>
        <CarouselItem
          title={
            "The AstraZeneca vaccine protects fully against Covid-19’s worst outcomes, new study shows."
          }
          abstract={""}
          author={"By Rebecca Robbins and Benjamin Mueller"}
          date={"11/12/1988"}
        >
          {" "}
        </CarouselItem>
      </Carousel.Item>
    </Carousel>
  );
};
