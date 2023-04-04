import { useState } from 'react';

export default function useTabs(defaultValues: any) {
  const [currentTab, setCurrentTab] = useState(defaultValues || '');

  return {
    currentTab,
    onChangeTab: (event: any, newValue: any) => {
      setCurrentTab(newValue);
    },
    setCurrentTab,
  };
}
