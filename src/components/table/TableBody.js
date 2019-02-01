import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DeleteButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
`;

const TableBody = ({data, removeCharacter}) => (
  <tbody>
    {data.map((character, index) => {
      return (
        <tr
          key={`${character.name}-${index}`}
        >
          <td>
            {character.name || '-'}
          </td>
          <td>
            {character.description || '-'}
          </td>
          <td>
            {character.reason || '-'}
          </td>
          <td>
            {character.killed_by || '-'}
          </td>
          <td>
            {character.weapon || '-'}
          </td>
          <td>
            <DeleteButton
              onClick={() => {removeCharacter(character.name)}}
            >
              <i className="fas fa-times text-danger"></i>
            </DeleteButton>
          </td>
        </tr>
      )
    })}
  </tbody>
)

TableBody.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
  removeCharacter: PropTypes.func.isRequired,
}

TableBody.defaultProps = {
  data: [],
}

export { TableBody };