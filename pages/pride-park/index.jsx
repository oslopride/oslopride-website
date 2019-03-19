import SanityBlockContent from "@/components/SanityBlockContent";
import Sheet from "@/components/Sheet";
import { webResponseInitial } from "@/store/helpers";
import { getPridePark, prideParkActions } from "@/store/pride-park";
import { imageUrlFor } from "@/store/sanity";
import NextSeo from "next-seo";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled(Sheet)`
  @media (min-width: 1000px) {
    width: 1000px;
  }
`;

const PridePark = props => {
  const { pridePark } = props;

  if (pridePark.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  const { body, preamble, image } = pridePark.data;

  return (
    <Wrapper>
      <h1>Pride Park</h1>
      <article>
        <SanityBlockContent blocks={preamble} />
        <SanityBlockContent blocks={body} />
      </article>

      <NextSeo
        config={{
          title: "Pride Park",
          description: "Kom og feire mangfold, samhold og kjærlighet med oss!",
          openGraph: {
            type: "website",
            url: "https://oslopride.no/pride-house",
            locale: "nb_NO",
            site_name: "Oslo Pride",
            title: "Pride Park",
            description:
              "Kom og feire mangfold, samhold og kjærlighet med oss!",
            images: [{ url: imageUrlFor(image).url() }]
          }
        }}
      />
    </Wrapper>
  );
};

PridePark.getInitialProps = async ({ store, isServer }) => {
  if (store.getState().pridePark.status === webResponseInitial().status) {
    store.dispatch(prideParkActions.request());
    if (isServer) {
      try {
        const response = await getPridePark();
        store.dispatch(prideParkActions.success(response));
      } catch (e) {
        store.dispatch(prideParkActions.failure(`${e}`));
      }
    }
  }
};

const mapStateToProps = state => ({
  pridePark: state.pridePark
});

const mapDispatchToProps = dispatch => ({
  fetchAboutContent: () => dispatch(prideParkActions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PridePark);
