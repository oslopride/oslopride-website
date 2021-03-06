import ArticlePreview from "@/components/ArticlePreview";
import Banner from "@/components/Banner";
import FeaturedAction from "@/components/FeaturedAction";
import FeaturedDates from "@/components/FeaturedDates";
import FeaturedPartners from "@/components/FeaturedPartners";
import Hero from "@/components/Hero";
import Link from "@/components/Link";
import { articleActions } from "@/store/articles";
import { frontPageActions, getFrontPage } from "@/store/front-page";
import { webResponseInitial } from "@/store/helpers";
import { getPartners, partnersActions } from "@/store/partners";
import { imageUrlFor } from "@/store/sanity";
import logError from "@/utils/sentry";
import NextSeo from "next-seo";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const FrontPage = props => {
  const { frontPage } = props;

  if (frontPage.status !== "SUCCESS") {
    // TODO: Make a better UX while loading
    return <div>Laster ...</div>;
  }

  return (
    <>
      <HeroWrapper>
        <FrontPageHero
          imageURL={imageUrlFor(frontPage.data.callToActionImage).url()}
          title={frontPage.data.callToActionTitle}
          subtitle={frontPage.data.callToActionBody}
          urlText={frontPage.data.callToActionLink.title}
          url={frontPage.data.callToActionLink.link}
        />
      </HeroWrapper>

      <ContentWrapper>
        <FeaturedAction
          image={imageUrlFor(frontPage.data.featuredAction.image)
            .width(500)
            .url()}
          title={frontPage.data.featuredAction.title}
          description={frontPage.data.featuredAction.description}
          link={frontPage.data.featuredAction.link}
        />
      </ContentWrapper>

      {frontPage.data.featuredDates && frontPage.data.featuredDates.length > 0 && (
        <ContentWrapper>
          <FeaturedDates dates={frontPage.data.featuredDates} />
        </ContentWrapper>
      )}

      {frontPage.data.featuredArticles.length > 0 && (
        <Banner color="#f9e6e9" title="Artikler" textColor={"black"}>
          <FeaturedArticlesWrapper>
            {frontPage.data.featuredArticles.map(article => (
              <FeaturedArticle
                slug={article.slug.current}
                key={article.slug.current}
              />
            ))}
          </FeaturedArticlesWrapper>
        </Banner>
      )}

      <FeaturedPartners />

      <NextSeo
        config={{
          title: "Forside",
          description:
            "Norges største feiring av skeiv kjærlighet og mangfold. En festival der alle har lov til å være akkurat den de er.",
          openGraph: {
            type: "website",
            url: "https://www.oslopride.no/",
            locale: "nb_NO",
            site_name: "Oslo Pride",
            title: "Oslo Pride",
            description:
              "Norges største feiring av skeiv kjærlighet og mangfold. En festival der alle har lov til å være akkurat den de er.",
            images: [
              {
                url: "https://www.oslopride.no/static/logo.jpg",
                alt: "Oslo Pride Logo",
                width: "2110",
                height: "1218"
              },
              {
                url: "https://www.oslopride.no/static/prideheart.jpg",
                alt: "Oslo Pride Hjerte",
                width: "1458",
                height: "1458"
              }
            ]
          }
        }}
      />
    </>
  );
};

FrontPage.getInitialProps = async ctx => {
  const { store, isServer } = ctx;
  if (store.getState().frontPage.status === webResponseInitial().status) {
    store.dispatch(frontPageActions.request());
    if (isServer) {
      try {
        const response = await getFrontPage();
        response.featuredArticles.forEach(article =>
          store.dispatch(articleActions.success(article))
        );
        store.dispatch(frontPageActions.success(response));
      } catch (e) {
        logError(e, ctx);
        store.dispatch(frontPageActions.failure());
      }
    }
  }
  if (store.getState().partners.status === webResponseInitial().status) {
    store.dispatch(partnersActions.request());
    if (isServer) {
      try {
        const response = await getPartners();
        store.dispatch(partnersActions.success(response));
      } catch (e) {
        logError(e, ctx);
        store.dispatch(partnersActions.failure());
      }
    }
  }
};

const mapStateToProps = state => ({
  frontPage: state.frontPage,
  partners: state.partners
});

const mapDispatchToProps = dispatch => ({
  fetchAboutContent: () => dispatch(frontPageActions.request()),
  fetchPartnerContent: () => dispatch(partnersActions.request())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FrontPage);

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

    @media (min-width: 1025px) {
      width: 1000px;
    }
  }
`;

const HeroWrapper = styled.div`
  padding: 0;
  width: 100%;
`;

const FrontPageHero = styled(Hero)`
  width: 100%;
  margin: 0 auto;
`;

const FeaturedDatesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FrontPageFeaturedDates = styled(FeaturedDates)`
  flex-grow: 1;
`;

const FeaturedArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FeaturedArticle = styled(ArticlePreview)`
  margin: 10px;
  width: 100%;

  @media (min-width: 1025px) {
    width: 350px;
  }
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const StoreImage = styled.div`
  max-width: 500px;

  img {
    width: 100%;
  }
`;

const StoreLink = styled(Link)``;
