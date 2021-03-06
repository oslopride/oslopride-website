import { imageUrlFor } from "@/store/sanity";
import theme from "@/utils/theme";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Sticky from "react-sticky-el";
import styled from "styled-components";

const EventList = props => {
  const { events } = props;
  const [showFinished, setShowFinished] = useState(false);
  const toggleShowFinished = () => setShowFinished(!showFinished);

  const filteredEvents = events.filter(e => {
    if (showFinished) {
      return true;
    } else {
      return dayjs.utc(e.endingTime).isAfter(dayjs.utc().add(-1, "hour"));
    }
  });

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

  return (
    <>
      <ShowPastEventsContainer>
        <ShowPastEventsButton onClick={toggleShowFinished}>
          {showFinished
            ? "Skjul avsluttede arrangementer"
            : "Vis avsluttede arrangementer"}
        </ShowPastEventsButton>
      </ShowPastEventsContainer>
      {groupEventsByDay(filteredEvents).map(day => {
        const currentDay = dayjs.utc(day[0].startingTime).add(2, "hour");
        return (
          <Event key={currentDay.format("YYYY-MM-DD")}>
            <Sticky style={{ zIndex: 2, position: "relative" }}>
              <EventDay>
                {currentDay.format("dddd")}{" "}
                <span>{currentDay.format("D. MMMM")}</span>
              </EventDay>
            </Sticky>
            <EventDayListWrapper>
              {day.map(event => (
                <Link
                  key={event._id}
                  href={`/event?id=${event._id}`}
                  as={`/events/${event._id}`}
                  passHref
                >
                  <EventLink>
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
                    <EventInfo>
                      <EventTitle>{event.title}</EventTitle>
                      <EventTime>
                        {dayjs
                          .utc(event.startingTime)
                          .add(2, "hour")
                          .format("HH:mm")}
                        -
                        {dayjs
                          .utc(event.endingTime)
                          .add(2, "hour")
                          .format("HH:mm")}
                      </EventTime>
                      <EventPlace>
                        <Descriptor> Hvor: </Descriptor>
                        {displayArena(event)}
                        {event.location.venue
                          ? event.location.venue.name
                          : event.location.name}
                      </EventPlace>
                      <EventType>
                        <Descriptor> Type: </Descriptor>
                        {displayEventType(event)}
                      </EventType>
                    </EventInfo>
                  </EventLink>
                </Link>
              ))}
            </EventDayListWrapper>
          </Event>
        );
      })}
    </>
  );
};

const groupEventsByDay = events => {
  if (events.length === 0) {
    return [];
  }

  const groupedEvents = [[events[0]]];

  events.slice(1).forEach(event => {
    const lastGroup = groupedEvents[groupedEvents.length - 1];
    const lastEvent = lastGroup[lastGroup.length - 1];

    const lastEventStart = dayjs.utc(lastEvent.startingTime).add(2, "hour");
    const currentEventStart = dayjs.utc(event.startingTime).add(2, "hour");

    if (
      lastEventStart.format("YYYY-MM-DD") ===
      currentEventStart.format("YYYY-MM-DD")
    ) {
      lastGroup.push(event);
    } else {
      groupedEvents.push([event]);
    }
  });
  return groupedEvents;
};

export default EventList;

const Event = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
`;

const EventDay = styled.h2`
  background-color: ${theme.purple};
  width: 100%;
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  text-align: center;
  border-radius: 2px;
`;

const EventLink = styled.a`
  cursor: pointer;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease-in-out;

  &:last-child {
    border-bottom: 0;
  }
  
  :hover,
    :focus {
      transform: scale(1.05);
    }
  }
`;

const EventDayListWrapper = styled.div`
  margin-top: 20px;
`;

const EventImageContainer = styled.div`
  width: 90px;
  height: 90px;
  flex-shrink: 0;

  @media (min-width: 500px) {
    width: 120px;
    height: 120px;
  }
`;

const EventImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 2px;
`;

const EventInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  margin-left: 20px;
  width: 100%;
`;

const EventTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;

  @media (min-width: 500px) {
    font-size: 20px;
  }
`;

const EventTime = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${theme.orange};
  margin-right: 10px;
  width: 100%;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`;

const EventPlace = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-right: 10px;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`;

const EventType = styled.div`
  font-size: 15px;
  font-weight: 300;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`;

const Descriptor = styled.span`
  font-size: 15px;
  font-weight: 500;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`;

const ShowPastEventsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const ShowPastEventsButton = styled.button`
  border: 0;
  padding: 0;
  color: ${theme.gray};
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
`;
