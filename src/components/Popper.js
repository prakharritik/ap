import React from "react";
import Popper from "@material-ui/core/Popper";

const PopperComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  return (
    <div>
      <h3 style={{ textAlign: "center" }} //(the children stay within their parent DOM hierarchy)
      
      >Use of Popper in React</h3>
      <button
        type="button"
        onClick={(event) => {
          setAnchorEl(anchorEl ? null : event.currentTarget);
        }}
        style={{ display: "block", margin: "auto" }}
      >
        Toggle Popper
      </button>
      <Popper
        id={open ? "simple-popper" : undefined}
        open={open}
        anchorEl={anchorEl}
      >
        <div
          style={{
            padding: 5,
            border: "1px solid",
            backgroundColor: "#ADD8E6",
          }}
        >
          Hello User
        </div>
      </Popper>
      {/*  */}
    </div>
  );
};

export default PopperComponent;
