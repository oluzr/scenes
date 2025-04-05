import { SceneContextProvider, CustomVariable } from '@grafana/scenes-react';
import React from 'react';
import DevicesProgressPanel from './Test/Progressbar';

export function TestPage() {
  return (
    <SceneContextProvider timeRange={{ from: 'now-1h', to: 'now' }} withQueryController>
      <CustomVariable name="env" query="dev, test, prod" initialValue="dev">
        <h4>Test page</h4>
        <DevicesProgressPanel />
      </CustomVariable>
    </SceneContextProvider>
  );
}
