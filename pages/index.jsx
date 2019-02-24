import Hero from "@/components/Hero";
import { frontPageActions, getFrontPage } from "@/store/front-page";
import { webResponseInitial } from "@/store/helpers";
import { imageUrlFor } from "@/store/sanity";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const ContentWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  background-color: white;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;

    @media (min-width: 1030px) {
      width: 1000px;
    }
  }
`;

const FrontPageHero = styled(Hero)`
  padding: 0 20px;
  margin-bottom: 30px;
`;

const FrontPage = props => {
  const { frontPage } = props;

  if (frontPage.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  return (
    <>
      <FrontPageHero
        imageURL={imageUrlFor(frontPage.data.callToActionImage).url()}
        title={frontPage.data.callToActionTitle}
        subtitle={frontPage.data.callToActionBody}
      />
      <ContentWrapper />
    </>
  );
};

FrontPage.getInitialProps = async ({ store, isServer }) => {
  if (store.getState().frontPage.status === webResponseInitial().status) {
    store.dispatch(frontPageActions.request());
    if (isServer) {
      try {
        const response = await getFrontPage();
        store.dispatch(frontPageActions.success(response));
      } catch (e) {
        store.dispatch(frontPageActions.failure(`${e}`));
      }
    }
  }
};

const mapStateToProps = state => ({
  frontPage: state.frontPage
});

const mapDispatchToProps = dispatch => ({
  fetchAboutContent: () => dispatch(frontPageActions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);
