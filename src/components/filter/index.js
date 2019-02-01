import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { PropTypes } from 'prop-types';

const searchOptions = {
  all: 'Всем полям',
  name: 'Имени',
  description: 'Описанию',
  reason: 'Причина смерти',
  killed_by: 'Убийце',
  weapon: 'Орудию убийства',
}

class Filter extends React.PureComponent {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    getCharacters: PropTypes.func.isRequired,
  }

  resetFilter = () => {
    const { reset, getCharacters } = this.props;
    reset();
    getCharacters();
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <React.Fragment>
        <h4>
          Найти персонажей
        </h4>
        <form
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <Field
              name="searchText"
              component="input"
              type="text"
              className="form-control"
              placeholder="Поиск"
            />
          </div>
          <div className="form-group">
            <Field
              name="searchKey"
              component="select"
              placeholder="Искать по"
              className="form-control"
            >
              <option>-----</option>
              {Object.keys(searchOptions).map((key, index) =>  (
                <option
                  key={`${key}-${index}`}
                  value={key}
                >
                  {searchOptions[key]}
                </option>
              ))}
            </Field>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-success mr-5"
            >
              Найти
            </button>

            <button
              type="button"
              className="btn btn-success"
              onClick={this.resetFilter}
            >
              Сбросить
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const FilterForm = reduxForm({
  form: 'filterForm',
})(Filter)

const filterSelector = formValueSelector('filterForm');

export { FilterForm, filterSelector };
