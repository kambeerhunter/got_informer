import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import AddingCharacterForm from '../adding-character';
import { FilterForm, filterSelector } from '../filter';
import * as actions from '../../actions/characters';

class FormWrapper extends React.Component {
  static propTypes = {
    addCharacter: PropTypes.func.isRequired,
    getCharacters: PropTypes.func.isRequired,
    filterCharacterList: PropTypes.func.isRequired,
    resetForm: PropTypes.func.isRequired,
  }

  addNewCharacter = values => {
    const { addCharacter, resetForm } = this.props;
    addCharacter(values);
    resetForm('addingForm');
  }

  filterList = () => {
    const {
      searchKey,
      searchText,
      filterCharacterList,
    } = this.props;
    filterCharacterList(searchText, searchKey);
  }

  render() {
    const { getCharacters } = this.props;

    return (
      <div className="row">
        <div className="col-sm-6">
          <AddingCharacterForm
            onSubmit={this.addNewCharacter}
          />
        </div>
        <div className="col-sm-6">
          <FilterForm
            onSubmit={this.filterList}
            getCharacters={getCharacters}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  searchKey: filterSelector(state, 'searchKey'),
  searchText: filterSelector(state, 'searchText')
});
const mapDispatchToProps = {
  addCharacter: actions.addCharacter,
  getCharacters: actions.getCharacters,
  filterCharacterList: actions.filterCharacterList,
  resetForm: reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
