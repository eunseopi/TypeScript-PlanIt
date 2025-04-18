import React, { useState } from "react";
import * as styles from "./styles/tabs_style";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, onChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <styles.Container>
      {tabs.map((tab) => (
        <styles.Tab
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </styles.Tab>
      ))}
    </styles.Container>
  );
};

export default Tabs;
