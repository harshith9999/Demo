import ForwardRoundedIcon from "@mui/icons-material/ForwardRounded";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const HeadingContent = ({ text }) => {
  return (
    <div className="HeadingContainer">
      <p className="HeadingText">{text}</p>
      <div className="HeadingSubContainer">
        <ForwardRoundedIcon
          sx={{
            transform: "rotate(180deg)",
            color: "#fff",
            background: "#2CADE9",
          }}
        />
        <p className="Small-Font">Back</p>
        <ArrowDropDownIcon />
        <ForwardRoundedIcon sx={{ color: "#fff", background: "#2CADE9" }} />
        <ArrowDropDownIcon />
      </div>
    </div>
  );
};
export default HeadingContent;
