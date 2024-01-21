const Table = () => {
  const acounts = [
    {
      id: 17,
      name: "CA-PL-DELTA",
      phone: "",
      street: "747 CHESTER RD",
      city: "DELTA",
      region: "British Columbia",
      country: "Canada",
      eMail: "",
      postalCode: "V3M6E7",
    },
    {
      id: 17,
      name: "CA-PL-DELTA",
      phone: "",
      street: "747 CHESTER RD",
      city: "DELTA",
      region: "British Columbia",
      country: "Canada",
      eMail: "",
      postalCode: "V3M6E7",
    },
    {
      id: 17,
      name: "CA-PL-DELTA",
      phone: "",
      street: "747 CHESTER RD",
      city: "DELTA",
      region: "British Columbia",
      country: "Canada",
      eMail: "",
      postalCode: "V3M6E7",
    },
    {
      id: 17,
      name: "CA-PL-DELTA",
      phone: "",
      street: "747 CHESTER RD",
      city: "DELTA",
      region: "British Columbia",
      country: "Canada",
      eMail: "",
      postalCode: "V3M6E7",
    },
    {
      id: 17,
      name: "CA-PL-DELTA",
      phone: "",
      street: "747 CHESTER RD",
      city: "DELTA",
      region: "British Columbia",
      country: "Canada",
      eMail: "",
      postalCode: "V3M6E7",
    },
    {
      id: 17,
      name: "CA-PL-DELTA",
      phone: "",
      street: "747 CHESTER RD",
      city: "DELTA",
      region: "British Columbia",
      country: "Canada",
      eMail: "",
      postalCode: "V3M6E7",
    },
    {
      id: 17,
      name: "CA-PL-DELTA",
      phone: "",
      street: "747 CHESTER RD",
      city: "DELTA",
      region: "British Columbia",
      country: "Canada",
      eMail: "",
      postalCode: "V3M6E7",
    },
  ];
  return (
    <>
      <div className="Table-Subheader">
        <p className="Table-SubheaderText">ID</p>
        <p className="Table-SubheaderText">Name</p>
        <p className="Table-SubheaderText">Phone</p>
        <p className="Table-SubheaderText">Street</p>
        <p className="Table-SubheaderText">City</p>
        <p className="Table-SubheaderText">Region</p>
        <p className="Table-SubheaderText">Country</p>
        <p className="Table-SubheaderText">E-Mail</p>
        <p className="Table-SubheaderText">Postal Code</p>
      </div>

      {acounts.map((item) => (
        <div className="Table-Data">
          <p className="Table-DataText">{item.id}</p>
          <a className="Table-DataText" href="/corporate" > {item.name}</a>
          <p className="Table-DataText"> {item.phone}</p>
          <p className="Table-DataText"> {item.street}</p>
          <p className="Table-DataText"> {item.city}</p>
          <p className="Table-DataText"> {item.region}</p>
          <p className="Table-DataText"> {item.country}</p>
          <p className="Table-DataText"> {item.eMail}</p>
          <p className="Table-DataText"> {item.postalCode}</p>
        </div>
      ))}
    </>
  );
};
export default Table
