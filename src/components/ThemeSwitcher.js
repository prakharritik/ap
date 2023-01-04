import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
const MultiThemeCard = () => {
  const [theme, setTheme] = useState(null);
  const [dropdownOpen, setdropdownOpen] = useState(false);
  const reset = () => {
    setTheme(null);
  };
  const themeClass = theme ? theme.toLowerCase() : "secondary";
  return (
    <>
      {/* Name of the theme */}
      <div
        className={`text-capitalize h1 mb-4 w-100 text-center text-${themeClass}`}
      >
        {`${theme || "Default"} Theme`}
      </div>
      <div className="d-flex flex-column align-items-center">
        {/* Button Dropdown: */}
        <UncontrolledDropdown
          isOpen={dropdownOpen}
          toggle={() => setdropdownOpen(!dropdownOpen)}
          group
        >
          <Button color={themeClass} className="text-capitalize">
            {theme || "Default"}
          </Button>
          <DropdownToggle color={themeClass} caret></DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => setTheme("primary")}>
              Primary Theme
            </DropdownItem>
            <DropdownItem onClick={() => setTheme("danger")}>
              Danger Theme
            </DropdownItem>
            <DropdownItem onClick={() => setTheme("success")}>
              Success Theme
            </DropdownItem>
            <DropdownItem onClick={() => setTheme("dark")}>
              Dark Theme
            </DropdownItem>
            <DropdownItem onClick={() => setTheme("info")}>
              Info Theme
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={reset}>Default Theme</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        {/* Card component: */}
        <Card
          className="my-2"
          color={themeClass}
          inverse
          style={{
            width: "18rem",
          }}
        >
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle tag="h5" className="text-capitalize">
              {theme} Card Title
            </CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.{" "}
            </CardText>
          </CardBody>
        </Card>
      </div>
    </>
  );
};
export default MultiThemeCard;
