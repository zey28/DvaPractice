
import React from 'react';
import { connect } from 'dva';
import styles from './App.css';
import MainLayout from '../components/MainLayout/MainLayout';
      // <div className={styles.normal}>
      //   <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      //   <div className={styles.welcome} />
      //   <ul className={styles.list}>
      //     <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
      //     <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      //   </ul>
      // </div>
function AppPage({ location, children }) {
  return (
    <MainLayout location={location}   >
        {children}
    </MainLayout>
  );
}

AppPage.propTypes = {
};

function mapStateToProps(state) {
   
  return {
 
  };
}

export default connect(mapStateToProps)(AppPage);