import { imageUrlFor } from "@/store/sanity";
import theme from "@/utils/theme";
import NextLink from "next/link";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import dayjs from "dayjs";
import LazyLoad from "react-lazyload";

const displayArena = event => {
  switch (event.category) {
    case "0":
      return "";
      break;
    case "1":
      return "Pride Parade, ";
      break;
    case "2":
      return "Pride Park, ";
      break;
    case "3":
      return "Pride House, ";
      break;
    case "4":
      return "Pride Art, ";
      break;
  }
};


const displayEventType = event => {
  switch (event.eventType) {
    case "0":
      return "Annet";
      break;
    case "1":
      return "Konsert";
      break;
    case "2":
      return "Debatt";
      break;
    case "3":
      return "Utstilling";
      break;
    case "4":
      return "Fest";
      break;
  }
};


const EventPreview = props => {
  const event = props.event;
  const { title, image } = props.event;
  const slug = "";
  const className = "";
  const preamble = "";
  const start = dayjs.utc(event.startingTime).add(2, "hour");
  const end = dayjs.utc(event.endingTime).add(2, "hour");

  return (
    <Link
      key={event._id}
      href={`/event?id=${event._id}`}
      as={`/events/${event._id}`}
      passHref
    >
      <Wrapper>

        <LazyLoad
          height={120}
          scroll
          once
          offset={100}
          placeholder={
            <EventImageContainer>
              <EventImage
                src="/static/event-placeholder.png"
                alt="arrangementsbilde"
              />
            </EventImageContainer>
          }
        >
          {event.image ? (
            <EventImageContainer>
              <EventImage
                src={imageUrlFor(event.image)
                  .height(250)
                  .url()}
                alt="arrangementsbilde"
              />
            </EventImageContainer>
          ) : (
            <EventImageContainer>
              <EventImage
                src="/static/event-placeholder.png"
                alt="arrangementsbilde"
              />
            </EventImageContainer>
          )}
        </LazyLoad>
        <EventTitle id="title">{title}</EventTitle>
        <EventTimeDay>
          <OrangeColor>{start.format("dddd")} </OrangeColor>
          {start.format("D. MMMM YYYY")}
        </EventTimeDay>
        <EventTimeFromTo>
          {start.format("HH:mm")} - {end.format("HH:mm")} - {displayEventType(event)}
        </EventTimeFromTo>

      </Wrapper>
    </Link>
  );
};

export default EventPreview;

const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  margin: 10px;
  color: initial;
  text-decoration: initial;
  border-radius: 2px;
  transition: transform 0.2s ease-in-out;
  width: 220px;

  :hover,
  :focus {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const EventImageContainer = styled.div`
  width: 200px;
  height: 112px;
  flex-shrink: 0;
  margin-bottom: 5px;

  @media (min-width: 500px) {
    width: 200px;
    height: 112px;
  }
`;

const EventImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

const EventTimeDay = styled.div`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
`;

const EventTimeFromTo = styled.div`
  font-size: 1rem;
`;

const OrangeColor = styled.span`
  color: ${theme.orange};
`;

const EventTitle = styled.div`
  width: 100%;
  font-size: 16px;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`;

const EventTime = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.orange};
  margin-right: 10px;
  width: 100%;

  @media (min-width: 500px) {
    font-size: 16px;
  }
`;

const EventType = styled.div`
  font-size: 16px;
  font-weight: 300;

  @media (min-width: 500px) {
    font-size: 16px;
  }
`;
