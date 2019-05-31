import Link from "@/components/Link";
import theme from "@/utils/theme";
import React from "react";
import styled from "styled-components";

const DateTitleColors = [
  "#CD424D",
  "#D17A61",
  "#D5A43E",
  "#25A081",
  "#93ADC3",
  "#625887"
];

const FeaturedDates = ({ dates }) => {
  return (
    <>
      <TitleWrapper>
        <h2>Hoveddatoer</h2>
        <ProgramLink href="/events">Gå til programmet</ProgramLink>
      </TitleWrapper>
      <div>
        {dates.map(
          ({ _key: key, date, title, description, subtitle, link }, index) => (
            <DateWrapper key={key} href={link}>
              <DateTime>{date}</DateTime>
              <div>
                <DateTitle
                  color={DateTitleColors[index % DateTitleColors.length]}
                >
                  {title}
                </DateTitle>
                <DateDescription>{description}</DateDescription>
                <DateSubtitle
                  color={DateTitleColors[index % DateTitleColors.length]}
                >
                  {subtitle}
                </DateSubtitle>
              </div>
            </DateWrapper>
          )
        )}
      </div>
    </>
  );
};

export default FeaturedDates;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgramLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  color: ${theme.blue};

  :before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${theme.blue};
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  :hover:before {
    visibility: visible;
    width: 100%;
  }
`;

const DateWrapper = styled(Link)`
  text-align: center;
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
  }

  @media (min-width: 1025px) {
    display: flex;
    float: left;
    clear: both;
    text-align: left;
    align-items: center;

    :nth-of-type(2n) {
      float: right;
    }
  }
`;

const DateTitle = styled.div`
  font-size: 40px;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${props => props.color};

  @media (min-width: 1025px) {
    display: inline-block;
    font-size: 50px;
  }
`;

const DateTime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const DateDescription = styled.p`
  font-size: 18px;
  margin: 0 auto;
  max-width: 350px;
`;

const DateSubtitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  margin-bottom: 50px;
  text-transform: uppercase;
  color: ${props => props.color};

  @media (min-width: 1025px) {
    margin-bottom: 0;
  }
`;
