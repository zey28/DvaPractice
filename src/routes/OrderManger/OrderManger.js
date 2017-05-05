
import React from 'react';
import { connect } from 'dva';
 
function OrderMangerPage({ location }) {
  return (
        <div style={{height:500,width:500,background:"blue"}}></div>
  );
}

OrderMangerPage.propTypes = {
};

function mapStateToProps(state) {
   
  return {
 
  };
}

export default connect(mapStateToProps)(OrderMangerPage);