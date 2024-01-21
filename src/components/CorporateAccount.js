import HeadingContent from "./HeadingContent";
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
const CorporateAccounts = () => {
  return (
    <div>
      <TopBar />
      <div className="Body">
        <LeftBar />
        <div className="RightContent">
          <HeadingContent text="Corporate Accounts: CA-PL-DELTA-BC-PBCCAN DELTA BC V3M6E7" />
          <div className="Accounts-Body">
            <div className="Body">
              <div className="Corporate-FirstContainer">
                <div className="Corporate-DetailsContainer">
                  <div className="Corporate-LeftDetails">
                    <p className="Corporate-Text">Name 2:</p>
                    <p className="Corporate-Text">Search Term:</p>
                    <p className="Corporate-Text">Rating:</p>
                  </div>
                  <div className="Corporate-RightDetails">
                    <p className="Corporate-Text">PRODUCTION PLANT</p>
                    <p className="Corporate-Text">PL1008</p>
                  </div>
                </div>
                <p className="Corporate-FirstSubContainer">
                  Employee Responsible
                </p>
              </div>
              <div className="Corporate-SecondContainer">
                <div className="Corporate-LeftDetails">
                  <p className="Corporate-Text">State/ZIP Code:</p>
                  <p className="Corporate-Text">Country:</p>
                  <p className="Corporate-Text">Language:</p>
                  <p className="Corporate-Text">National Version(s):</p>
                  <p className="Corporate-Text">Tax Jurisdication Code:</p>
                  <p className="Corporate-Text">PO Box/ZIP Code:</p>
                  <p className="Corporate-Text">Phone:</p>
                  <p className="Corporate-Text">Fax:</p>
                  <p className="Corporate-Text">E-Mail:</p>
                  <p className="Corporate-Text">Website:</p>
                  <p className="Corporate-Text">Communication Method:</p>
                </div>
                <div
                  style={{
                    marginLeft: "20px",
                  }}
                >
                  <p className="Corporate-Text">BC</p>
                  <p className="Corporate-Text">CA</p>
                  <p className="Corporate-Text">EN</p>
                  <input style={{ marginTop: "8px" }} type="checkbox" />
                </div>
              </div>
              <div
                style={{ width: "20%" }}
                className="Corporate-ThirdContainer"
              >
                <p className="Corporate-Text">VRM6E7</p>
                <p className="Corporate-Text">Canada</p>
                <p className="Corporate-Text">English</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CorporateAccounts;
