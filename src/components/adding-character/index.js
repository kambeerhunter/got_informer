import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { PropTypes } from 'prop-types';
import FormField from '../form-field';

const required = value => (value || typeof value === 'string' ? undefined : 'Это поле обязательно для заполнения');

const AddingCharacter = ({ handleSubmit }) => (
  <React.Fragment>
    <h4>
      Добавить персонажа
    </h4>
    <form
      onSubmit={handleSubmit}
    >
      <Field
        name="name"
        type="text"
        label="Имя"
        component={FormField}
        validate={[required]}
      />

      <Field
        name="description"
        type="text"
        label="Описание"
        component={FormField}
        validate={[required]}
      />

      <Field
        name="reason"
        type="text"
        label="Причина смерти"
        component={FormField}
        validate={[required]}
      />

      <Field
        name="killed_by"
        type="text"
        label="Кем убит"
        component={FormField}
        validate={[required]}
      />

      <Field
        name="weapon"
        type="text"
        label="Орудие убийства"
        component={FormField}
        validate={[required]}
      />
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-success"
        >
          Добавить
        </button>
      </div>
    </form>
  </React.Fragment>
)

AddingCharacter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

const AddingCharacterForm = reduxForm({
  form: 'addingForm'
})(AddingCharacter)

export default AddingCharacterForm;
