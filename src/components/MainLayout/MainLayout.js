import React from 'react';
 
// import Header from './Header';

import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
 import { Link } from 'dva/router';
import  styles from './MainLayout.css'
import { Breadcrumb } from 'antd';
// function MainLayout({ children, location }) {
//   return (
//     <div className={styles.normal}>
//       <Header location={location} />
//       <div className={styles.content}>
//         <div className={styles.main}>
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

function MainLayout({ children, location }) {

   let breadList = location.pathname.split('/');
   breadList = breadList.filter(function(item){
        return item != "";
    });
    let breadView;
    if(breadList.length==0){
        breadView=  (
                    <Breadcrumb.Item>
                    <Link to={"/"} key={1}>首页</Link>
                    </Breadcrumb.Item>
          )
      }else{
      breadView = (
        
         [ 
          <Breadcrumb.Item key={-1}>
                    <Link to={"/"} >首页</Link>
          </Breadcrumb.Item>,
         ...breadList.map(function(value,index,arr1 ) {
              return  (      
                    <Breadcrumb.Item  key={index}> 
 
                   {arr1.length-1==index? value : <Link to={"/"+value}>{ value }</Link>}
                    </Breadcrumb.Item>
                )
          })]
         )
    }
        
 

  return (
<Layout style={{ height: '100vh' }}>
  <Sider id={styles.componentsLayoutDemoFixedSider }  style={{ overflow: 'auto' }}   >
    <div  className={styles.logo } >asdfsdf</div>   
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>


      <Menu.Item key="1">
        <Link to="/allDevice">        <Icon type="user" /><span className="nav-text">所有设备</span></Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/orderManger">        <Icon type="video-camera" /><span className="nav-text">订单管理</span></Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="upload" />
        <span className="nav-text">工人管理</span>
      </Menu.Item>
      <Menu.Item key="4">
        <Icon type="bar-chart" />
        <span className="nav-text">用户管理</span>
      </Menu.Item>
      <Menu.Item key="5">
        <Icon type="cloud-o" />
        <span className="nav-text">财务管理</span>
      </Menu.Item>
      <Menu.Item key="6">
        <Icon type="appstore-o" />
        <span className="nav-text">系统管理</span>
      </Menu.Item>
      <Menu.Item key="7">
        <Icon type="team" />
        <span className="nav-text">集团管理</span>
      </Menu.Item>
 
    </Menu>
  </Sider>
  <Layout>
    <Header style={{ background: '#fff', padding: 0 }} >
      <Breadcrumb>
          {breadView}

      </Breadcrumb>
    </Header>
    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
      <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>

          {children}
        ...
        <br />
        Really
        <br />...<br />...<br />...<br />
        long
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />...
        <br />...<br />...<br />...<br />...<br />...<br />
        content
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED
    </Footer>
  </Layout>
</Layout>
  );
}

export default MainLayout;





          

