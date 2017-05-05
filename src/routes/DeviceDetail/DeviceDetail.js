
import React from 'react';
import { connect } from 'dva';

import { Table, Icon ,Tabs} from 'antd';
const TabPane = Tabs.TabPane;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];
function DeviceDetailPage({ location }) {
  return (
        <div>
     		<div>
     			<img     style={{width:100,height:100, background:'red'}} />
				 {"ads"}
     		</div>
		  	<Tabs   type="card">
			    <TabPane tab="详情" key="1">Content of Tab Pane 1</TabPane>
			    <TabPane tab="钥匙" key="2">
					 <Table columns={columns} dataSource={data} />
			    </TabPane>
			    <TabPane tab="记录" key="3">Content of Tab Pane 3</TabPane>
		  </Tabs>
        </div>
  );
}

DeviceDetailPage.propTypes = {
};

function mapStateToProps(state) {
   
  return {

 
  };
}

export default connect(mapStateToProps)(DeviceDetailPage);