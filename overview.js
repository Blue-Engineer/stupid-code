import React, { useState } from "react";
import { Create, Reports } from "../../icons";
import CampaignsTable from "../../tables/campaigns";
import Cash from "../../../assets/icons/cash.png";
import { stats } from "../../../utils/MockData";
import {
  Section,
  Top,
  TopDescription,
  TopTitle,
  OverviewActions,
  Action,
  ActionText,
  Board,
  CampaignsBox,
  GridBox,
  SearchBar,
  SearchBox,
  MapView,
  MapBox,
  Graph,
} from "./styles";
import NoData from "../../../assets/icons/nodata.png";
import Map from "../../../assets/images/map.png";

const Overview = () => {
  const noData = false;
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setInput(e.target.value.toLowerCase());
  };
  return (
    <Section>
      <Top>
        <TopTitle>Overview</TopTitle>
        <TopDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
          ultricies tortor, pellentesque fermentum velit, turpis. Phasellus
          tellus sed neque, enim neque, turpis ac. Augue interdum quam lobortis
          elementum a.
        </TopDescription>
      </Top>

      <OverviewActions>
        <Action>
          <Create />
          <ActionText>Create new Campaign</ActionText>
        </Action>
        <Action>
          <Reports />
          <ActionText>Reports</ActionText>
        </Action>
      </OverviewActions>

      {noData ? (
        <Board>
          <img src={NoData} alt="Data Unavailable" height={300} />
        </Board>
      ) : (
        <>
          <CampaignsBox>
            <CampaignsTable />
          </CampaignsBox>

          <SearchBar>
            <SearchBox
              type="text"
              name="query"
              autoComplete="off"
              value={input}
              id="search"
              placeholder="Search by affiliates"
              onChange={handleInputChange}
            />
          </SearchBar>

          <GridBox>
            {stats
              .filter((res) => res.affiliate.toLowerCase().includes(input))
              .map((stat, index) => (
                <div key={index}>
                  <img src={Cash} alt="cash" height={60} />
                  <div style={{ alignSelf: "center" }}>
                    <small style={{ fontSize: "12px" }}>
                      {stat.title} <br />
                      <span style={{ fontSize: "1rem", fontWeight: 600 }}>
                        {stat.amount}
                      </span>
                    </small>
                  </div>
                </div>
              ))}
          </GridBox>

          <MapView>
            <MapBox>
              <img
                src={Map}
                alt="map"
                style={{
                  width: "100%",
                }}
              />
            </MapBox>
          </MapView>

          <Graph></Graph>
        </>
      )}
    </Section>
  );
};

export default Overview;
