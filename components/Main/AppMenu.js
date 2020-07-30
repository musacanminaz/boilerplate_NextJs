import { Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const AppMenu = () => {
  return (
    <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ marginTop: 50 }}>
      <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
        <Menu.Item key="s1">option1</Menu.Item>
        <Menu.Item key="s2">option2</Menu.Item>
        <Menu.Item key="s3">option3</Menu.Item>
        <Menu.Item key="s4">option4</Menu.Item>
      </SubMenu>
      <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        nav 2
      </Menu.Item>
      <Menu.Item key="3" icon={<UploadOutlined />}>
        nav 3
      </Menu.Item>
      <Menu.Item key="4" icon={<BarChartOutlined />}>
        nav 4
      </Menu.Item>
      <Menu.Item key="5" icon={<CloudOutlined />}>
        nav 5
      </Menu.Item>
      <Menu.Item key="6" icon={<AppstoreOutlined />}>
        nav 6
      </Menu.Item>
      <Menu.Item key="7" icon={<TeamOutlined />}>
        nav 7
      </Menu.Item>
      <Menu.Item key="8" icon={<ShopOutlined />}>
        nav 8
      </Menu.Item>
    </Menu>
  );
};

export default AppMenu;
