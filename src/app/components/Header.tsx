// src/app/components/Header.tsx
'use client';
import React from 'react';
import { TextInput } from '@carbon/react';
import { Search } from '@carbon/icons-react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className={styles.headerTitle}>AI Sustainability Catalog</h1>
        <p className={styles.headerDescription}>
          Your go-to resource for AI models, data sources, tools, and publications for sustainability
        </p>
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <Search className={styles.searchIcon} />
            <TextInput id="search-box" placeholder="Search..." labelText="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
