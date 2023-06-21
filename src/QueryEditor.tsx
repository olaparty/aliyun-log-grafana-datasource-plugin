import { defaults } from 'lodash';

import React, { ChangeEvent, PureComponent } from 'react';
import { InlineFormLabel, Icon, Input, Tooltip, InlineField, Card, SeriesTable } from '@grafana/ui';
import { QueryEditorProps } from '@grafana/data';
// import { css } from '@emotion/css';

import { SLSDataSource } from './datasource';
import { defaultQuery, SLSDataSourceOptions, SLSQuery } from './types';
import { xColInfoSeries, yColInfoSeries } from 'const';

// const { FormField } = LegacyForms;

type Props = QueryEditorProps<SLSDataSource, SLSQuery, SLSDataSourceOptions>;

export class SLSQueryEditor extends PureComponent<Props> {
  onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, query: event.target.value });
  };

  onXChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, xcol: event.target.value });
    // executes the query
    onRunQuery();
  };

  onYChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query, onRunQuery } = this.props;
    onChange({ ...query, ycol: event.target.value });
    // executes the query
    onRunQuery();
  };

  render() {
    const dq = defaults(this.props.query, defaultQuery);
    const { query, xcol, ycol } = dq;

    return (
      <>
        <div className="gf-form gf-form--grow flex-shrink-1 min-width-15">
          <InlineFormLabel width={6} className="query-keyword">
            Query
          </InlineFormLabel>
          <input
            className="gf-form-input"
            value={query}
            onChange={this.onQueryTextChange}
            onBlur={this.onQueryTextChange}
            style={{ fontFamily: 'Menlo, monospace' }}
          ></input>
        </div>
        <div className="gf-form-inline" style={{ lineHeight: '32px', verticalAlign: 'center' }}>
          <InlineField label={'ycol'} labelWidth={12}>
            <Input
              width={60}
              prefix={<Icon name="text-fields" />}
              value={ycol}
              onChange={this.onYChange}
              label="ycol"
              suffix={
                <Tooltip
                  content={
                    <Card>
                      <Card.Heading>ycol 简介 Introduction</Card.Heading>
                      <Card.Description>
                        <SeriesTable series={yColInfoSeries} />
                      </Card.Description>
                    </Card>
                  }
                  interactive
                  theme="info-alt"
                >
                  <Icon name="question-circle" />
                </Tooltip>
              }
            />
          </InlineField>
          <InlineField label={'xcol(time)'} labelWidth={12}>
            <Input
              style={{ fontFamily: 'Menlo, monospace' }}
              width={40}
              prefix={<Icon name="x" />}
              value={xcol}
              onChange={this.onXChange}
              label="xcol(time)"
              suffix={
                <Tooltip
                  content={
                    <Card>
                      <Card.Heading>xcol 简介 Introduction</Card.Heading>
                      <Card.Description>
                        <SeriesTable series={xColInfoSeries} />
                      </Card.Description>
                    </Card>
                  }
                  interactive
                  theme="info-alt"
                >
                  <Icon name="question-circle" />
                </Tooltip>
              }
            />
          </InlineField>
        </div>
      </>
    );
  }
}
