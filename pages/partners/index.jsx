import Sheet from "@/components/Sheet";
import { webResponseInitial } from "@/store/helpers";
import { getPartners, partnersActions } from "@/store/partners";
import sanity from "@/store/sanity";
import React from "react";
import { connect } from "react-redux";

const Partners = props => {
  const { partners } = props;

  if (partners.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  const query = '*[_type == "partner" && type == "partner"] {name, type}';

  sanity.fetch(query).then(items => {
    items.forEach(partner => {
      console.log(`${partner.name}: ${partner.type}`);
    });
  });

  return (
    <div>
      <h1>Partnere</h1>
      <h2>Hovedpartnere</h2>
      <Sheet />
      <Sheet />
      <h2>Partnere</h2>
      <Sheet />
    </div>
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
