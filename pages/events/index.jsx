import Sheet from "@/components/Sheet";
import { eventsActions, getEvents } from "@/store/events";
import { webResponseInitial } from "@/store/helpers";
import NextSeo from "next-seo";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled(Sheet)`
  width: 100%;
  max-width: 1000px;
`;

const Events = props => {
  const { events } = props;

  if (events.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  return (
    <>
      <Wrapper>
        <h1>Program 2019</h1>
      </Wrapper>

      <NextSeo
        config={{
          title: "Festivalprogram",
          description:
            "Festivalprogram til Norges største feiring av skeiv kjærlighet og mangfold.",
          openGraph: {
            type: "website",
            url: "https://oslopride.no/program",
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
};

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps)(Events);
