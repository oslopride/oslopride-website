import { partnersActions } from "@/store/partners";
import { imageUrlFor } from "@/store/sanity";
import theme from "@/utils/theme";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const partnerSortList = [
  "fb98b2e7-2bac-4988-bd80-2198b7c28b53", // Fri OA
  "72b687e1-cb56-4ea4-90d0-aa1834ebce4d", // Nordea
  "cb159d7a-a3a2-4f95-a0b0-38e7482c5c5c", // Choice
  "0f8dceef-d133-4595-87b7-747317caa8a5", // Helseutvalget
  "3bf94e3d-28f4-4767-bafb-999ab3c16ad9", // Eplehuset
  "252e4076-48e5-4ea7-9afb-60e1a513500d", // Oslo Kommune
  "c0ffb572-fbc9-4893-b47d-9e8f2ab28105", // Ob Wiik
  "10e5b7f8-ae1c-46fe-a136-9b33ed9d2c46" // Flytoget
];

const FeaturedPartners = props => {
  const { partners } = props;

  const PartnerList = ({ partnerType, partnerSubtitle }) => {
    const partnerItems = partners.data
      .filter(partnerItem => partnerItem.type === partnerType)
      .sort(
        (p1, p2) =>
          (partnerSortList.indexOf(p1._id) === -1
            ? 9999
            : partnerSortList.indexOf(p1._id)) -
          (partnerSortList.indexOf(p2._id) === -1
            ? 9999
            : partnerSortList.indexOf(p2._id))
      )
      .map(({ _id, partnerUrl, image, name }) => (
        <PartnerItem id={_id} key={_id}>
          <PartnerImage href={partnerUrl}>
            <img
              src={imageUrlFor(image)
                .maxWidth(200)
                .url()}
              alt={name}
            />
          </PartnerImage>
        </PartnerItem>
      ));
    if (partnerItems.length > 0) {
      return (
        <>
          <PartnerType>{partnerSubtitle}</PartnerType>
          <List>{partnerItems}</List>
        </>
      );
    }
    return null;
  };

  if (partners.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }
  if (!partners.data.length) {
    return null;
  }
  return (
    <Wrapper>
      <ListWrapper>
        <PartnerList partnerSubtitle="Eier og arrangør" partnerType="owner" />
        <PartnerList
          partnerSubtitle="Hovedpartnere"
          partnerType="mainpartner"
        />
        <PartnerList partnerSubtitle="Partnere" partnerType="partner" />
      </ListWrapper>
    </Wrapper>
  );
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
)(FeaturedPartners);

const Wrapper = styled.div`
  width: 100%;
`;

const List = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`;

const PartnerType = styled.p`
  color: black;
  text-transform: uppercase;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;

const PartnerItem = styled.div`
  list-style: none;
  width: 200px;
  height: auto;
  margin: 10px;
`;

const PartnerImage = styled.a`
  img {
    border: 1px solid ${theme.lightGray};
    background-color: white;
    object-fit: contain;
    width: 100%;
    height: 200px;
    display: block;

    :hover,
    :focus {
      border: 1px solid ${theme.blue};
    }
  }
`;
