import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import style from './Header.less';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  onCollapse = (collapsed) => {
    this.setState({collapsed})
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className={style.logo} />
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          mode="inline"
        >
          <Menu.Item key="1">
            <Link to="/dashboard">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user">
              <Icon type="desktop" />
              <span>Users</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1"
                   title={
                     <span>
                       <Icon type="user" />
                       <span>Harts</span>
                     </span>
                   }
          >
            <Menu.Item key="3">Echarts</Menu.Item>
            <Menu.Item key="4">HighCharts</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
            <Menu.Item key="33">Tom1</Menu.Item>
            <Menu.Item key="44">Bill1</Menu.Item>
            <Menu.Item key="55">Alex1</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2"
                   title={
                     <span>
                       <Icon type="team" />
                       <span>Team</span>
                     </span>
                   }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="7">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
Header.propTypes = {
};
export default Header;
