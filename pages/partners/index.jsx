import SanityBlockContent from "@/components/SanityBlockContent";
import Sheet from "@/components/Sheet";
import { webResponseInitial } from "@/store/helpers";
import { getPartners, partnersActions } from "@/store/partners";
import { imageUrlFor } from "@/store/sanity";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 20px;
  max-width: 1088px;
  margin-left: auto;
  margin-right: auto;
`;

const List = styled.ul``;

const ListItem = styled(Sheet)`
  margin: 20px 0;
`;

const Title = styled.h2``;

const Description = styled(SanityBlockContent)``;

const Image = styled.img`
  max-width: 200px;
`;

const Partners = props => {
  const { partners } = props;

  if (partners.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  const PartnerList = ({ partnerType }) => {
    const partnerItems = partners.data
      .filter(partnerItem => partnerItem.type === partnerType)
      .map(partnerItem => (
        <ListItem>
          <Image
            src={imageUrlFor(partnerItem.image)
              .maxWidth(200)
              .url()}
            alt={partnerItem.name}
          />
          <Title>{partnerItem.name}</Title>
          <Description blocks={partnerItem.description} />
        </ListItem>
      ));

    return <List>{partnerItems}</List>;
  };

  return (
    <Wrapper>
      <h1>Partnere</h1>
      <h2>Hovedpartnere</h2>
      <PartnerList partnerType="mainpartner" />
      <h2>Partnere</h2>
      <PartnerList partnerType="partner" />
    </Wrapper>
  );
};

Partners.getInitialProps = async ({ store, isServer }) => {
  if (store.getState().partners.status === webResponseInitial().status) {
    store.dispatch(partnersActions.request());
    if (isServer) {
      try {
        const response = await getPartners();
        store.dispatch(partnersActions.success(response));
      } catch (e) {
        store.dispatch(partnersActions.failure(`${e}`));
      }
    }
  }
};

const mapStateToProps = state => ({
  partners: state.partners
});

const mapDispatchToProps = dispatch => ({
  fetchAboutContent: () => dispatch(partnersActions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Partners);
