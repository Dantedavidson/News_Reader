import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

export const DropDown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Title</Dropdown.Item>
        <Dropdown.Item>Tag</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
