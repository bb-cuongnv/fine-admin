import React, {useEffect} from 'react';
import { Switch, ConfigProvider } from 'antd';
import theme from 'antd/es/theme/export';
import { useAppSelector, useAppDispatch } from '@/hooks/public';
import { selectIsDarkMode, setDarkMode } from '@/store/reducer/layoutSlice';
const { darkAlgorithm } = theme;

export function DarkModeSwitch() {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectIsDarkMode);
  return (
    <Switch
      // style={{ verticalAlign: 'unset' }}
      checked={isDarkMode}
      checkedChildren="🌜"
      unCheckedChildren="🌞"
      onChange={(checked) => dispatch(setDarkMode(checked))}
    />
  );
}

export function DarkModeConfigProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = useAppSelector(selectIsDarkMode);
  useEffect(() => {
      document.body.style.backgroundColor = isDarkMode ? "#000" : "#fff";
  }, [isDarkMode]);
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? [darkAlgorithm] : undefined
      }}
    >
      {children}
    </ConfigProvider>
  );
}
