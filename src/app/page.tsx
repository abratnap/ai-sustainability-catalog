"use client";

import { FlexGrid, Row, Column, Tabs, Tab, TabList, TabPanels, TabPanel, TextInput } from '@carbon/react';
import DataSources from './DataSources';
import AIModels from './AIModels';
import Publications from './Publications';
import AITools from './AITools';
import './globals.css'; // Import the CSS file
import { Dashboard,  Activity, CloudMonitoring, Settings, Search } from '@carbon/icons-react';
import {  DataSet, Model, Book, Tools  } from '@carbon/icons-react';
import { Button, Checkbox } from 'carbon-components-react';


const CataLogHome = () =>  {
  return (
      <FlexGrid style={{ height: '100%' }}>
        {/* Header Row */}
        <Row className="header">
          <Column sm={8} md={8} lg={8}>
            <h1 className="text-2xl font-bold">AI Sustainability Catalog</h1>
          </Column>
          <Column sm={4} md={4} lg={4}>
            <div className="search-container">
              <Search className="text-gray-600 mx-2" />
              <TextInput
                id="search-box"
                placeholder="Search..."
                labelText=""
              />
            </div>
          </Column>
        </Row>

        {/* Tabs and Content Row */}
        <Row style={{ flex: 1 }}>
          <Column sm={3} md={3} lg={3}>
            <Tabs>
              <TabList aria-label="List of tabs">
                <Tab renderIcon={DataSet as any} className="tab-item">Data Sources</Tab>
                <Tab renderIcon={Model as any} className="tab-item">AI Models</Tab>
                <Tab renderIcon={Book as any} className="tab-item">Publications</Tab>
                <Tab renderIcon={DataSet as any} className="tab-item">General AI Tools</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <DataSources />
                </TabPanel>
                <TabPanel>
                  <AIModels />
                </TabPanel>
                <TabPanel>
                  <Publications />
                </TabPanel>
                <TabPanel>
                  <AITools />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Column>
         
        </Row>
        <Row style={{ flex: 1 }}>
          <Column sm={9} md={9} lg={9} className="content-column">
            {/* This column will hold the selected TabPanel */}
          </Column>
        </Row>
      </FlexGrid>
  );
}

export default CataLogHome;
