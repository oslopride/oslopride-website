import EventList from "@/components/EventList";
import Sheet from "@/components/Sheet";
import { eventsActions, getEvents } from "@/store/events";
import { webResponseInitial } from "@/store/helpers";
import { getVenues, venuesActions } from "@/store/venues";
import theme from "@/utils/theme";
import NextSeo from "next-seo";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Events = props => {
  const { events, venues } = props;

  if (events.status !== "SUCCESS" || venues.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  return (
    <>
      <Sheet>
        <PageTitle>Program 2019</PageTitle>

        {!events.data.length ? <p>Kommer snart!</p> : null}

        <EventList events={events} venues={venues} />
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

const PageTitle = styled.h1`
  color: ${theme.purple};
  text-transform: uppercase;
  text-align: center;
`;
