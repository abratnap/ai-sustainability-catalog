// src/components/CataLogHome.tsx
'use client';

import React from 'react';
import { FlexGrid, Row, Column, Tabs, Tab, TabList, TabPanels, TabPanel, TextInput } from '@carbon/react';
import DataSources from './DataSources';
import AIModels from './AIModels';
import Publications from './Publications';
import AITools from './AITools';
import { Search } from '@carbon/icons-react';

const CataLogHome = ({ datasets, models, tools, publications }) => {
  return (
    <FlexGrid style={{ height: '100%' }}>
      <Row className="header">
        <Column sm={4} md={4} lg={4}>
          <div className="search-container">
            <Search className="text-gray-600 mx-2" />
            <TextInput id="search-box" placeholder="Search..." labelText="" />
          </div>
        </Column>
      </Row>
      <Row style={{ flex: 1 }}>
        <Column sm={3} md={3} lg={3}>
          <Tabs>
            <TabList aria-label="List of tabs">
              <Tab className="tab-item">Data Sources</Tab>
              <Tab className="tab-item">AI Models</Tab>
              <Tab className="tab-item">Publications</Tab>
              <Tab className="tab-item">General AI Tools</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <DataSources datasets={datasets} />
              </TabPanel>
              <TabPanel>
                <AIModels models={models} />
              </TabPanel>
             
              <TabPanel>
                <Publications publications={publications} />
              </TabPanel>
              <TabPanel>
                <AITools tools={tools} />
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
};

export default CataLogHome;
