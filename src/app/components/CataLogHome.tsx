// src/components/CataLogHome.tsx
'use client';

import React from 'react';
import { FlexGrid, Row, Column, Tabs, Tab, TabList, TabPanels, TabPanel } from '@carbon/react';
import DataSources from './DataSources';
import AIModels from './AIModels';
import Publications from './Publications';
import AITools from './AITools';
import styles from './CataLogHome.module.css';

const CataLogHome = ({ datasets, models, tools, publications }) => {
  return (
    <FlexGrid className={styles.flexGrid}>
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
