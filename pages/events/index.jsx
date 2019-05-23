import Button from "@/components/Button";
import EventFilter from "@/components/EventFilter";
import EventList from "@/components/EventList";
import Sheet from "@/components/Sheet";
import { eventsActions, getEvents } from "@/store/events";
import { webResponseInitial } from "@/store/helpers";
import { getVenues, venuesActions } from "@/store/venues";
import theme from "@/utils/theme";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NextSeo from "next-seo";
import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const handleFilter = events => {};

const Events = props => {
  const { events, venues } = props;
  const [visible, setVisible] = useState(false);

  const toggleFilter = () => setVisible(!visible);

  if (events.status !== "SUCCESS" || venues.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  return (
    <>
      <Sheet>
        <Header>
          <PageTitle>Program 2019</PageTitle>

          <FilterButton onClick={toggleFilter} visible={visible}>
            Filter{" "}
            <RotatingChevron
              rotate={visible ? "true" : undefined}
              icon={faChevronDown}
            />
          </FilterButton>

          <Filters visible={visible} />
        </Header>
        {events.data.length ? (
          <EventList events={events} venues={venues} />
        ) : (
          <p>Kommer snart!</p>
        )}
      </Sheet>

      <NextSeo
        config={{
          title: "Festivalprogram",
          description:
            "Festivalprogram til Norges største feiring av skeiv kjærlighet og mangfold.",
          openGraph: {
            type: "website",
            url: "https://oslopride.no/events",
            locale: "nb_NO",
            site_name: "Oslo Pride",
            title: "Oslo Pride Festivalprogram",
            description:
              "Festivalprogram til Norges største feiring av skeiv kjærlighet og mangfold.",
            images: [
              { url: "https://oslopride.no/static/logo.jpg" },
              { url: "https://oslopride.no/static/prideheart.jpg" }
            ]
          }
        }}
      />
    </>
  );
};

Events.getInitialProps = async ({ store, isServer }) => {
  if (store.getState().events.status === webResponseInitial().status) {
    store.dispatch(eventsActions.request());
    if (isServer) {
      try {
        const response = await getEvents();
        store.dispatch(eventsActions.success(response));
      } catch (e) {
        store.dispatch(eventsActions.failure(`${e}`));
      }
    }
  }
  if (store.getState().venues.status === webResponseInitial().status) {
    store.dispatch(venuesActions.request());
    if (isServer) {
      try {
        const response = await getVenues();
        store.dispatch(venuesActions.success(response));
      } catch (e) {
        store.dispatch(venuesActions.failure(`${e}`));
      }
    }
  }
};

const mapStateToProps = state => ({
  events: state.events,
  venues: state.venues
});

export default connect(mapStateToProps)(Events);

const Header = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const PageTitle = styled.h1`
  width: 100%;
  color: ${theme.purple};
  text-transform: uppercase;
  text-align: center;
`;

const FilterButton = styled(Button)`
  width: 100%;
  background-color: ${props => (props.visible ? theme.lightPurple : "white")};
  border: ${props => (props.visible ? "none" : null)};
`;

const RotatingChevron = styled(FontAwesomeIcon)`
  transform: ${props => (props.rotate ? "rotate(180deg)" : "0")};
  transition: transform 0.2s ease;
`;

const Filters = styled(EventFilter)``;
