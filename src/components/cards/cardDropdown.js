import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import DataReference from "../../api/reference.js";
import { sortData } from "../../utils";

const CardDropdown = ({ currency, handler }) => {
  const dropdownItems = sortData(DataReference).map(currency => (
    <Dropdown.Item key={currency.id} eventKey={currency.code}>
      <img src={currency.flag} alt={currency.code} /> &nbsp; {currency.name}
    </Dropdown.Item>
  ));

  const dropdownTitle = currency => (
    <span>
      <img src={currency.flag} alt={currency.code} width="24" />
      &nbsp; {currency.name}
    </span>
  );

  return (
    <Dropdown onSelect={handler}>
      <Dropdown.Toggle
        className="dropdownToggle"
        size="lg"
        variant="info"
        defaultValue={currency.code}
      >
        {dropdownTitle(currency)}
      </Dropdown.Toggle>
      <Dropdown.Menu>{dropdownItems}</Dropdown.Menu>
    </Dropdown>
  );
};

export default CardDropdown;
