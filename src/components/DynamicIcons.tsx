import {
  HomeOutlined,
  SettingOutlined,
  UnorderedListOutlined,
  UserOutlined,
  BlockOutlined,
  LinkOutlined
} from '@ant-design/icons';

export type DynamicIconKeys = keyof typeof icons;

const icons = {
  HomeOutlined: <HomeOutlined />,
  SettingOutlined: <SettingOutlined />,
  UnorderedListOutlined: <UnorderedListOutlined />,
  UserOutlined: <UserOutlined />,
  BlockOutlined: <BlockOutlined />,
  LinkOutlined: <LinkOutlined />
};

export default function DynamicIcons({ icon }: { icon?: DynamicIconKeys }) {
  if (!icon || !icons[icon]) {
    return null;
  }
  return icons[icon];
}