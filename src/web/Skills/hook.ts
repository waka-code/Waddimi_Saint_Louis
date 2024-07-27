
import { useCallback, useState } from 'react'
import { ucIconsGrid } from '../../designs/hook';
import { ucTranslation } from '../../Translation/resources';
import { ucTestData } from '../mockup/mockup';

export function ucSkill() {
    const { skilsGrid } = ucIconsGrid({ ochange: () => {} });
    const [gridTemplateColumns, setGridTemplateColumns] =
      useState<string>(skilsGrid);
    const { resources } = ucTranslation();
    const handleGrid = useCallback(
      (n: string) => {
        setGridTemplateColumns(n);
      },
      [setGridTemplateColumns]
    );
  
    const { SkillSetOverview } = ucTestData();
  
   
  return {
    gridTemplateColumns,
    handleGrid,
    resources,
    SkillSetOverview
  }
}

