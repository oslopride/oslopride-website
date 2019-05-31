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
      <TopButtonWrapper>
        <ProgramLink href="/events">Se hele festivalprogrammet</ProgramLink>
      </TopButtonWrapper>
      <DatesWrapper>
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
      </DatesWrapper>
      <BottomButtonWrapper>
        <ProgramLink href="/events">Se hele festivalprogrammet</ProgramLink>
      </BottomButtonWrapper>
    </>
  );
};

export default FeaturedDates;

const TopButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  @media (min-width: 1025px) {
    justify-content: flex-end;
  }
`;

const BottomButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1025px) {
    justify-content: flex-end;
  }
`;

const ProgramLink = styled(Link)`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  padding: 10px;
  border: 1px solid ${theme.blue};
  color: ${theme.blue};
  transition: all 0.2s ease-in-out;

  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

const DatesWrapper = styled.div`
  margin-bottom: 50px;
`;

const DateWrapper = styled(Link)`
  display: flex;
  flex-flow: row wrap;
  transition: all 0.2s ease-in-out;
  margin: 30px 10px;

  :hover,
  :focus {
    transform: scale(1.05);
  }

  @media (min-width: 550px) {
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
  font-weight: bolder;
  text-transform: uppercase;
  color: ${props => props.color};
`;

const DateTime = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const DateDescription = styled.p`
  font-size: 18px;
  margin: 0;
  max-width: 350px;
`;

const DateSubtitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
  color: ${props => props.color};
`;
