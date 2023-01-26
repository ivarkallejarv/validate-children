import React from "react";
import { validateChildren } from "../validateChildren";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

export interface CardProps {
  children?: React.ReactNode;
}

const Card = (props: CardProps) => {
  const { children } = props;

  return <div>{children}</div>;
};

Card.displayName = "Card";

Card.propTypes = {
  children: (props) =>
    validateChildren("Card", props, {
      custom: [CardHeader.name, CardContent.name],
      fragment: true,
    }),
};

export default Card;
