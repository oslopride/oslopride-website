import Sheet from "@/components/Sheet";
import { webResponseInitial } from "@/store/helpers";
import { getPrideArt, prideArtActions } from "@/store/pride-art";
import { imageUrlFor } from "@/store/sanity";
import blocksToHtml from "@sanity/block-content-to-html";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PrideArtImage = styled.img`
  max-width: 100%;
`;

const PrideArt = props => {
  const { prideArt } = props;

  if (prideArt.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  const content = blocksToHtml({ blocks: prideArt.data.body });
  const preamble = blocksToHtml({ blocks: prideArt.data.preamble });
  const image = imageUrlFor(prideArt.data.image);

  return (
    <Sheet>
      <h1>Pride Art</h1>
      <article>
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: preamble }} />
        <PrideArtImage src={image.url()} alt="pride art illustrasjon" />
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Sheet>
  );
};

PrideArt.getInitialProps = async ({ store, isServer }) => {
  if (store.getState().prideArt.status === webResponseInitial().status) {
    store.dispatch(prideArtActions.request());
    if (isServer) {
      try {
        const response = await getPrideArt();
        store.dispatch(prideArtActions.success(response));
      } catch (e) {
        store.dispatch(prideArtActions.failure(`${e}`));
      }
    }
  }
};

const mapStateToProps = state => ({
  prideArt: state.prideArt
});

const mapDispatchToProps = dispatch => ({
  fetchAboutContent: () => dispatch(prideArtActions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrideArt);
