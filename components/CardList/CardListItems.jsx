import React from "react";
import { Link } from "react-router-dom";
import { Card, CardList, FooterCard, HeaderCard, MainCard } from "./styled";

const CardListItems = ({ cards = [] }) => {
  return (
    <CardList>
      {cards.map((card) => (
        <Link key={card.id}>
          <a>
            <Card>
              <HeaderCard>
                <span>icon</span>
                <span>icon@@</span>
              </HeaderCard>
              <MainCard>
                <img src={card.image} />
              </MainCard>
              <FooterCard>
                <span>{card.parice}</span>
                <span>{card.rating.rate}</span>
                <span>{card.category}</span>
              </FooterCard>
            </Card>
          </a>
        </Link>
      ))}
    </CardList>
  );
};

export default CardListItems;
