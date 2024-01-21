import CommonTextField from "./CommonTextField";

const TopBar = () => {
  return (
    <div className="Accounts-FirstRow">
      <p className="Small-Font ">Saved Searches</p>
      <CommonTextField />
      <button>Go</button>
      <button className="Small-Margin">Advanced</button>
    </div>
  );
};
export default TopBar;
