import React from 'react';
import { PropTypes } from 'prop-types';
import { TableHead } from './TableHead';
import { TableBody } from './TableBody';

const Table = ({ data, removeCharacter }) => (
  <table
    className="table table-striped"
  >
    <TableHead />
    <TableBody
      data={data}
      removeCharacter={removeCharacter}
    />
  </table>
)

Table.propTypes = {
  removeCharacter: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  )
}

Table.defaultProps = {
  data: [],
}

export default Table;
