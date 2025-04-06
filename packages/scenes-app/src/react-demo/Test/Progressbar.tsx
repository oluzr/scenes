import { css } from '@emotion/css';
import { motion } from 'motion/react';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';
interface Device {
  name: string;
  ip: string;
  progress: number;
  imageUrl?: string; // 실제로 이미지 없으면 대체 이미지 사용
}

const devices: Device[] = [
  { name: 'Router-A', ip: '211.000.000.000', progress: 100 },
  { name: 'Switch-B', ip: '211.000.000.000', progress: 86 },
  { name: 'Firewall-C', ip: '211.000.000.000', progress: 70 },
  { name: 'AP-D', ip: '211.000.000.000', progress: 60 },
  { name: 'Firewall-C', ip: '211.000.000.000', progress: 44 },
  { name: 'AP-D', ip: '211.000.000.000', progress: 30 },
  { name: 'Firewall-C', ip: '211.000.000.000', progress: 20 },
  { name: 'AP-D', ip: '211.000.000.000', progress: 10 },
  { name: 'Firewall-C', ip: '211.000.000.000', progress: 4 },
  { name: 'AP-D', ip: '211.000.000.000', progress: 4 },
];

const getBarColor = (progress: number) => {
  if (progress >= 90) {
    return 'linear-gradient(to right, rgba(242, 73, 92, 0.7),rgba(255, 152, 48, 0.7), rgba(250, 222, 42, 0.7), rgba(115, 191, 105, 0.7))';
  }
  if (progress >= 60) {
    return 'linear-gradient(to right, rgba(242, 73, 92, 0.7),rgba(255, 152, 48, 0.7), rgba(250, 222, 42, 0.7)';
  }
  if (progress >= 30) {
    return 'linear-gradient(to right, rgba(242, 73, 92, 0.7),rgba(255, 152, 48, 0.7))';
  }
  return 'rgba(242, 73, 92, 0.7)';
};

const DevicesProgressPanel = () => {
  const styles = useStyles2(getStyles);
  return (
    <div className={styles.mainWrapper} style={{ borderRadius: 8, color: '#fff' }}>
      <h6 className={styles.mainTitle}>Dashboard Downtime Panel</h6>
      <div className={styles.devicesWrpper}>
        {devices.map((device) => (
          <div key={device.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            {/*  <img
            src={
              device.imageUrl ||
              `https://via.placeholder.com/24?text=${device.name.charAt(0).toUpperCase()}`
            }
            alt={device.name}
            style={{ width: 24, height: 24, marginRight: 10, borderRadius: 4 }}
          /> */}
            <div className={styles.deviceWrapper} style={{ flex: 1 }}>
              <div className={styles.deviceInfoWrap}>
                <div className={styles.deviceName} style={{ fontSize: 12 }}>
                  {device.name}
                </div>
                <div className={styles.deviceIp}>{device.ip}</div>
                <div className={styles.deviceCount} style={{ marginLeft: 10, fontSize: 12 }}>
                  {device.progress}
                </div>
              </div>
              <div className={styles.deviceProgressBar}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${device.progress}%` }}
                  transition={{ duration: 0.8 }}
                  style={{
                    height: '15px',
                    background: getBarColor(device.progress),
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevicesProgressPanel;

const getStyles = (theme: GrafanaTheme2) => {
 /*  const adlFontSize = {
    fontSize: theme.typography.size.sm,
  };
 */
  return {
    mainWrapper: css({
      backgroundColor: '#111',
      paddingBottom: '5px',
      height: '100%',
      padding: '16px',
      // borderRadius:8,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    }),

    mainTitle: css({
      color: '#eee',
    }),
    devicesWrpper: css({
      flex: 1,
      overflow: 'auto',
      height: '100%',
      paddingRight: '8px',
    }),
    deviceWrapper: css({}),
    deviceInfoWrap: css({
      display: 'flex',
      flexDirection: 'row',
      gap: '2px',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '12px',
      color: '#eee',
    }),
    deviceName: css({}),
    deviceCount: css({}),
    deviceIp: css({}),
    deviceProgressBar: css({
      background: '#444',
      overflow: 'hidden',
      height: 15,
    }),
  };
};
