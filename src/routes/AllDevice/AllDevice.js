
import React from 'react';
import { connect } from 'dva';
import { Tabs } from 'antd';
import { Row, Col } from 'antd';
import { Link } from 'dva/router';
const TabPane = Tabs.TabPane;
const DemoBox = props => <p style={{background:"gray",height:200}} className={`height-${props.value}`}>{props.children}</p>;


function callback(key) {
  console.log(key);
}
function AllDevicePage({ location }) {
  return (
          <Tabs onChange={callback} type="card">
            <TabPane tab="Tab 1" key="1">
                       <Row type="flex" justify="space-between" align="bottom"  gutter={10}> 
                          <Col span={6}><DemoBox value={100}>
                             <Link to="/alldevice/devicedetail">        <span className="nav-text">订单管理</span></Link>
                          </DemoBox></Col>
                          <Col span={6}><DemoBox value={50}>col-8</DemoBox></Col>
                          <Col span={6}><DemoBox value={120}>col-8</DemoBox></Col>
                          <Col span={6}><DemoBox value={80}>col-8</DemoBox></Col>
    </Row>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                   <div style={{height:500,width:500,background:"yellow"}}></div>
            </TabPane>
            <TabPane tab="Tab 3" key="3" disabled >Content of Tab Pane 3</TabPane>
         </Tabs>
  );
}

AllDevicePage.propTypes = {
};

function mapStateToProps(state) {
   
  return {
 
  };
}

export default connect(mapStateToProps)(AllDevicePage);