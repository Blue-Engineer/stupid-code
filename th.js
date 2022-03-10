 const renderCampaignsHeader = () => {
    let header = Object.keys(students[0]);
    header = [
      "campaign name",
      "commission",
      "status",
      "date created",
      "actions",
      "",
      "",
    ];
    return header.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };