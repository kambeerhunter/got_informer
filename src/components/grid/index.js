import React from 'react';
import { PropTypes } from 'prop-types';

const Grid = ({ data, removeCharacter }) => (
  <div className="row pt-3">
    {data.map((item, index) => (
      <div
        className="col-sm-4 mb-3"
        key={`${item.name}-${index}`}
      >
        <div className="card">
          <div className="card-header">
            <h5>{item.name || '-'}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Описание персонажа</strong>:&nbsp;
              {item.description || '-'}
            </li>
            <li className="list-group-item">
              <strong>Причина смерти</strong>:&nbsp;
              {item.reason || '-'}
            </li>
            <li className="list-group-item">
              <strong>Кем убит</strong>:&nbsp;
              {item.killed_by || '-'}
            </li>
            <li className="list-group-item">
              <strong>Орудие убийства</strong>:&nbsp;
              {item.weapon || '-'}
            </li>
          </ul>
          <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={() => {removeCharacter(item.name)}}
            >
              <i className="fas fa-times" />&nbsp;
              Удалить
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)

Grid.propTypes = {
  removeCharacter: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({}),
  )
}

Grid.defaultProps = {
  data: [],
}

export default Grid;
