// each item on list

import React from "react";
import { Row, Col } from "../Grid";
import { Item } from "./Item";


export const ListItem = (props) => {
  return (
    <li className="list-group-item">
      <Row>
        <Col size="12">
          <Item
            content={props.content}
          />
        </Col>
      </Row>
    </li>
  );
}
