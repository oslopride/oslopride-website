import SanityBlockContent from "@/components/SanityBlockContent";
import Sheet from "@/components/Sheet";
import { webResponseInitial } from "@/store/helpers";
import { getPartners, partnersActions } from "@/store/partners";
import { imageUrlFor } from "@/store/sanity";
import theme from "@/utils/theme";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

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
        <Partner>
          <PartnerImage
            src={imageUrlFor(partnerItem.image)
              .maxWidth(200)
              .url()}
            alt={partnerItem.name}
          />
          <PartnerText>
            <PartnerName>
              <a href={partnerItem.partnerUrl}>{partnerItem.name}</a>
            </PartnerName>
            <SanityBlockContent blocks={partnerItem.description} />
          </PartnerText>
        </Partner>
      ));
    return <List>{partnerItems}</List>;
  };

  return (
    <Wrapper>
      <PageTitle>Partnere</PageTitle>
      <PageSubtitle>Hovedpartnere</PageSubtitle>
      <PartnerList partnerType="mainpartner" />
      <PageSubtitle>Partnere</PageSubtitle>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  color: ${theme.purple};
  text-transform: uppercase;
  font-size: 40px;
`;

const PageSubtitle = styled.h2`
  color: ${theme.darkgray};
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
`;

const List = styled.ul`
  padding: 0;
`;

const Partner = styled(Sheet)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1088px;
  margin: 20px 0;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const PartnerImage = styled.img`
  max-width: 150px;
  margin: 20px;
`;

const PartnerText = styled.div`
  max-width: 700px;
`;

const PartnerName = styled.h3`
  a {
    text-decoration: none;
    color: ${theme.purple};
  }
`;
