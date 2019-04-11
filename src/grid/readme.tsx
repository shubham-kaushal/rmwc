import React from 'react';

import { Docs, DocsExample, DocProps } from '@doc-utils';
import propsSrc from './generated-props.json';
import examples from './generated-examples.json';

import { Grid, GridCell, GridInner } from '.';

export default function() {
  return (
    <Docs
      title="Layout Grid"
      lead="Material design’s responsive UI is based on a column-variate grid layout. It has 12 columns on desktop, 8 columns on tablet and 4 columns on phone."
      module="@rmwc/grid"
      styles={['@material/layout-grid/dist/mdc.layout-grid.css']}
      docsLink="https://material.io/develop/web/components/layout-grid/"
      examples={examples}
    >
      <DocsExample label="Standard Grid">
        <Grid>
          <GridCell span={4}>1</GridCell>
          <GridCell span={4}>2</GridCell>
          <GridCell span={4}>3</GridCell>
        </Grid>
      </DocsExample>
      <DocsExample label="Sub Grids">
        <Grid>
          {/* If you need additional control over height of your grid, or need to add SubGrids, you can add your own GridInner components. */}
          <GridInner>
            <GridCell span={6}>1</GridCell>
            <GridCell span={6}>
              <GridInner>
                <GridCell span={6}>a</GridCell>
                <GridCell span={6}>b</GridCell>
              </GridInner>
            </GridCell>
          </GridInner>
        </Grid>
      </DocsExample>

      <DocProps src={propsSrc} components={[Grid, GridCell, GridInner]} />
    </Docs>
  );
}