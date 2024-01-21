import CommonTextField from "./CommonTextField";
import HeadingContent from "./HeadingContent";
import LeftBar from "./LeftBar";
import Table from "./Table";
import TopBar from "./TopBar";
const Accounts = () => {

  return (
    <div>
      <TopBar />
      <div className="Body">
        <LeftBar />
        <div className="RightContent">
          <HeadingContent text="Search: Accounts" />
          <div className="Accounts-Body">
            <div>
              <CommonTextField defaultValue="Account ID" width="150px" />
              <CommonTextField defaultValue="is" width="150px" />
            </div>
            <div className="Body">
              <p>Maximum Number of Results :</p>
              <input type="text" value={25} style={{ width: "25px" }} />
            </div>
            <div className="Accounts-Buttons">
              <button>Search</button>
              <button className="Small-Margin">Clear</button>
              <button>Reset</button>
              <div className="Body Small-Margin">
                <p className="Small-Font">Save Search As:</p>
                <input type="text" style={{ width: "100px" }} />
              </div>
              <div className="Body Small-Margin">
                <input type="checkbox" />
                <p className="Small-Font">Include View</p>
              </div>
              <button>Save</button>
            </div>
            <b className="Small-Font">Result List : More than 25 items Found</b>
            <div className="Table-header">
              <p>Corporate Account</p>
              <p>Individual Account</p>
              <p>Group</p>
              <p>Merge Accounts</p>
              <p>Employee Responsible</p>
              <p>Marketing Attribute</p>
              <div
                className="Small-Margin"
                style={{ alignItems: "baseline", display: "flex" }}
              >
                <p>Filter</p>
                <input type="text" />
              </div>
            </div>
            <Table/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Accounts;
