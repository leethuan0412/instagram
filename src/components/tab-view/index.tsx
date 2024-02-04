import { TabBase, TabProps } from './Tab';
import { TabItem, TabItemProps } from './TabItem';

export const Tab = Object.assign(TabBase, {
  Item: TabItem,
});

export type { TabProps, TabItemProps };
