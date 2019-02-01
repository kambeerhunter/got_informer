import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from '../table';
import Grid from '../grid';

import { Preloader } from '../preloader';
import * as actions from '../../actions/characters';


class Content extends React.Component {
  state = {
    isTable: false,
  }

  static propTypes = {
    getCharacters: PropTypes.func.isRequired,
    removeCharacter: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    characters: PropTypes.arrayOf(
      PropTypes.shape({}),
    )
  }

  static defaultProps = {
    characters: [],
    isLoading: false,
  }

  componentDidMount() {
    const { getCharacters } = this.props;
    getCharacters();
  }

  toggleContent = () => {
    const { isTable } =this.state;
    this.setState({ isTable: !isTable });
  }

  render() {
    const { isTable  } = this.state;
    const { characters, isLoading, removeCharacter } = this.props;

    return (
      <React.Fragment>
        {isLoading && (
          <Preloader />
        )}

        {!isLoading && (
          <React.Fragment>
            <div className="pt-2 pb-2">
              <button
                className="btn btn-primary"
                onClick={this.toggleContent}
              >
                Изменить отображение
              </button>
            </div>

            {isTable && (
              <Table
                data={characters}
                removeCharacter={removeCharacter}
              />
            )}
            {!isTable && (
              <Grid
                data={characters}
                removeCharacter={removeCharacter}
              />
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  characters: state.characters.elements,
  isLoading: state.characters.isLoading,
});

const mapDispatchToProps = {
  getCharacters: actions.getCharacters,
  removeCharacter: actions.removeCharacter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
