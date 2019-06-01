import ArticlePreview from "@/components/ArticlePreview";
import FeaturedDates from "@/components/FeaturedDates";
import FeaturedPartners from "@/components/FeaturedPartners";
import Slideshow from "@/components/Slideshow";
import { articleActions } from "@/store/articles";
import { frontPageActions, getFrontPage } from "@/store/front-page";
import { webResponseInitial } from "@/store/helpers";
import { getPartners, partnersActions } from "@/store/partners";
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
        <Slideshow
          slides={[
            {
              image:
                "https://images.ctfassets.net/r522rjz18n3u/58XT8KdYIwCSeAiQQ24YwO/1757190cacc1c0571a5bf17308e841c3/47744330842_635b05fc0e_o.jpg",
              title: "Paraden",
              body:
                "Paraden er det store høydepunktet under Oslo Pride og er ett av de mest synlige arrangementene i Oslo i løpet av året. I 2018 samlet paraden utrolige 45 000 deltakere og 250 000 tilskuere. Dette er en folkefest og du er invitert!",
              link:
                "https://www.oslopride.no/events/04e1f74c-5e46-4f1a-9ab8-e3420817b7f6"
            },
            {
              image:
                "https://blog.gotocon.com/wp-content/uploads/2018/01/7ee07c93-a7b6-4206-a9f5-c6e13931a136-1.jpg",
              title: "Pride House",
              body:
                "Pride House synliggjør bredden i den skeive kulturen gjennom debatter, foredrag, workshops og ulike kulturuttrykk.",
              link:
                "https://www.oslopride.no/events/04e1f74c-5e46-4f1a-9ab8-e3420817b7f6"
            }
          ]}
        />
      </HeroWrapper>
      <ContentWrapper>
        <FeaturedDates dates={frontPage.data.featuredDates} />
      </ContentWrapper>
      <FeaturedArticlesWrapper>
        {frontPage.data.featuredArticles.map(article => (
          <FeaturedArticle
            slug={article.slug.current}
            key={article.slug.current}
          />
        ))}
      </FeaturedArticlesWrapper>

      <ContentWrapper>
        <FeaturedPartners />
      </ContentWrapper>

      <NextSeo
        config={{
          title: "Forside",
          description:
            "Norges største feiring av skeiv kjærlighet og mangfold. En festival der alle har lov til å være akkurat den de er.",
          openGraph: {
            type: "website",
            url: "https://oslopride.no/",
            locale: "nb_NO",
            site_name: "Oslo Pride",
            title: "Oslo Pride",
            description:
              "Norges største feiring av skeiv kjærlighet og mangfold. En festival der alle har lov til å være akkurat den de er.",
            images: [
              {
                url: "https://oslopride.no/static/logo.jpg",
                alt: "Oslo Pride Logo",
                width: "2110",
                height: "1218"
              },
              {
                url: "https://oslopride.no/static/prideheart.jpg",
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

FrontPage.getInitialProps = async ({ store, isServer }) => {
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
        store.dispatch(frontPageActions.failure(`${e}`));
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
        store.dispatch(partnersActions.failure(`${e}`));
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
  height: 300px;
  width: 100%;
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
  justify-content: space-evenly;

  max-width: 1200px;
`;

const FeaturedArticle = styled(ArticlePreview)`
  margin: 10px;
  width: 100%;

  @media (min-width: 1025px) {
    width: 350px;
  }
`;
