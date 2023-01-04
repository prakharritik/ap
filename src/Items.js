import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

const Item = ({ data }) => (
  <Card className="m-2">
    <CardImg alt="Card image cap" src={data.thumbnail} top height={300} />
    <CardBody>
      <CardTitle tag="h5">{data.title}</CardTitle>

      <CardText>{data.description} </CardText>
      <Button>$ {data.price}</Button>
    </CardBody>
  </Card>
);

const Items = ({ items }) => {
  console.log(items);
  return (
    <CardGroup>
      {items.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </CardGroup>
  );
};

export default Items;
