import { InputAdornment, TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const CommonTextField = ({ defaultValue ,width="60px"}) => {
  return (
    <TextField
      defaultValue={defaultValue}
      InputProps={{
        style: { paddingRight: "0px",margin:"5px" },
        inputProps: {
          style: { padding: "0px 5px", width: width, background: "#fff" },
        },
        endAdornment: (
          <InputAdornment position="end" sx={{ marginLeft: 0 }}>
            <ArrowDropDownIcon
              sx={{ background: "#F8F7F9", color: "#363134" }}
            />
          </InputAdornment>
        ),
      }}
    />
  );
};
export default CommonTextField;
