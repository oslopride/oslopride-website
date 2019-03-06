import { articleActions } from "@/store/articles";
import {
  webResponseFailure,
  webResponseInitial,
  webResponseRequest,
  webResponseSuccess
} from "@/store/helpers";
import { imageUrlFor } from "@/store/sanity";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useFetchArticleIfNotPresent } from "./hooks";

const ArticlePreview = ({ article, fetchArticle }) => {
  const articlePresent =
    article !== undefined && article.status === webResponseSuccess().status;

  useFetchArticleIfNotPresent(articlePresent, fetchArticle);

  if (
    article === undefined ||
    article.status === webResponseInitial().status ||
    article.status === webResponseRequest().status
  ) {
    return <div>Laster...</div>;
  }

  if (article.status === webResponseFailure().status) {
    return <div>Noe gikk galt :(</div>;
  }

  const {
    data: { image, title, preamble }
  } = article;

  return (
    <Wrapper>
      <Image src={imageUrlFor(image).url()} alt="artikkelbilde" />
      <Title>{title}</Title>
      <div>{preamble}</div>
    </Wrapper>
  );
};

const mapStateToProps = (state, { slug }) => ({
  article: state.articles[slug]
});

const mapDispatchToProps = (dispatch, { slug }) => ({
  fetchArticle: () => dispatch(articleActions.request(slug))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePreview);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 15px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.div`
  font-size: 25px;
  margin: 5px 0;
`;
