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
        <h2>Gå til programmet</h2>
      </TitleWrapper>
      <div>
        {dates.map(({ _key: key, date, title }, index) => (
          <DateWrapper key={key}>
            <DateTime>{date}</DateTime>
            <div>
              <DateTitle
                color={DateTitleColors[index % DateTitleColors.length]}
              >
                {title}
              </DateTitle>
              <div>Konserter, debatter, utsttillinger og fester!</div>
            </div>
          </DateWrapper>
        ))}
      </div>
    </>
  );
};

export default FeaturedDates;

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DateWrapper = styled.div`
  text-align: center;
  margin-bottom: 50px;

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
  font-weight: bolder;
  text-transform: uppercase;
  color: ${props => props.color};
  
  @media (min-width: 1025px) {
    display: inline-block;
    font-size: 50px;
`;

const DateTime = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;
