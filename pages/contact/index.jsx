import Sheet from "@/components/Sheet";
import { contactActions } from "@/store/contact";
import blocksToHtml from "@sanity/block-content-to-html";
import React, { useEffect } from "react";
import { connect } from "react-redux";

const Contact = props => {
  const { contact } = props;
  useEffect(() => {
    props.fetchContactContent();
  }, []);
  if (contact.status !== "SUCCESS"){
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }
  // TODO: Investigate if it's posible to use a react version of this using
  // react hyperscript: https://github.com/mlmorg/react-hyperscript instead of
  // the regular hyperscript used here
  const content = blocksToHtml({ blocks: contact.data.body });
  // eslint-disable-next-line react/no-danger
  return (
    <Sheet>
      <h1>Kontakt oss</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </Sheet>
  );
  };

  const mapStateToProps = state => ({
  contact: state.contact
  });

  const mapDispatchToProps = dispatch => ({
  fetchContactContent: () => dispatch(contactActions.request())
  });

  export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
