import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const LeftBar = () => {
  const data = [
    "Master Data",
    "Customer Planning",
    "Promotion Planning",
    "Execution & Claims",
    "Sales Funding & Budget",
  ];
  return (
    <div className="LeftBar-Container">
      <div className="Left-Items">WorkList</div>
      {data.map((item) => (
        <div className="Left-Items">
          <div>{item}</div>
          <ArrowRightIcon />
        </div>
      ))}
    </div>
  );
};
export default LeftBar;
