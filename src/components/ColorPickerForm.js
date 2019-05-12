import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: 'teal',
      newColorName: '',
    };
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // TODO need to check eslint

  /*eslint-disable */
  componentDidMount() {
    console.log(this.props);
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase()),
    );
    ValidatorForm.addValidationRule('isColorUnique', () =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor),
    );
  }
  /* eslint-enable */

  updateCurrentColor(newColor) {
    const currentColor = newColor.hex;
    this.setState({ currentColor });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    const { addNewColor } = this.props;
    const { currentColor, newColorName } = this.state;
    addNewColor(currentColor, newColorName);
    this.setState({ newColorName: '' });
  }

  render() {
    const { paletteIsFull } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <>
        <ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name="newColorName"
            onChange={this.handleChange}
            validators={['required', 'isColorNameUnique', 'isColorUnique']}
            errorMessages={[
              'this field is required',
              'color name must be unique',
              'color must be unique',
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={paletteIsFull}
            style={{ backgroundColor: currentColor }}
          >
            Add Color
          </Button>
        </ValidatorForm>
      </>
    );
  }
}

export default ColorPickerForm;
