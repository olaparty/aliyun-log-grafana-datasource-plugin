import { Card, SeriesTable, SeriesTableRowProps } from '@grafana/ui';
import { version, xColInfoSeries, yColInfoSeries, totalLogsInfoSeries } from 'const';
import React from 'react';

export function SelectTips(props: { type: string }) {
  const isOld =
    version === '' ||
    version.startsWith('8.0') ||
    version.startsWith('8.1') ||
    version.startsWith('8.2') ||
    version.startsWith('8.3') ||
    version.startsWith('7');
  let series = [] as SeriesTableRowProps[]
  switch(props.type) {
    case 'ycol':
      series = yColInfoSeries
      break
    case 'xcol':
      series = xColInfoSeries
      break
    case 'totalLogs':
      series = totalLogsInfoSeries
      break
    default:
      break
  }
  return isOld ? (
    <table>
      {series.map((v, i) => {
        return (
          <tr key={v.color}>
            <td style={{ width: '45px' }}>{`${i + 1}.`}</td>
            <td>{v.label}</td>
            <td>{v.value}</td>
          </tr>
        );
      })}
    </table>
  ) : (
    <Card>
      <Card.Heading>{`${props.type} 简介 Introduction`}</Card.Heading>
      <Card.Description>
        <SeriesTable series={series} />
      </Card.Description>
    </Card>
  );
}
