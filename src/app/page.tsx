"use client";

import { FlexGrid, Row, Column, Tabs, Tab, TabList, TabPanels, TabPanel, TextInput } from '@carbon/react';
import { Search } from '@carbon/icons-react';
import DataSources from './DataSources';
import AIModels from './AIModels';
import Publications from './Publications';
import AITools from './AITools';
import './globals.css'; // Import the CSS file
import OpenSource from './OpenSource';

export default function TabsLayout() {
  return (
    <div className="h-screen flex flex-col">
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
                className="search-input"
                labelText=""
              />
            </div>
          </Column>
        </Row>

        {/* Tabs and Content Row */}
        <Row style={{ flex: 1 }}>
          <Column sm={3} md={3} lg={3} className="tabs-column">
            <Tabs>
              <TabList aria-label="List of tabs">
                <Tab className="tab-item">Data Sources</Tab>
                <Tab className="tab-item">AI Models</Tab>
                <Tab className="tab-item">Publications</Tab>
                <Tab className="tab-item">General AI Tools</Tab>
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
          <Column sm={9} md={9} lg={9} className="content-column">
            {/* This column will hold the selected TabPanel */}
          </Column>
        </Row>
      </FlexGrid>
    </div>
  );
}
