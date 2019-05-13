import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Picker } from 'emoji-mart';

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stage: 'nameForm',
      newPaletteName: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  // TODO need to check eslint
  /*eslint-disable */
  componentDidMount() {
    ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase(),
      ),
    );
  }
  /* eslint-enable */

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  showEmojiPicker() {
    this.setState({ stage: 'emojiForm' });
  }

  savePalette(newEmoji) {
    const { handleSubmit } = this.props;
    const { newPaletteName } = this.state;
    const palette = { emoji: newEmoji.native, newPaletteName };
    handleSubmit(palette);
  }

  render() {
    const { toggleForm } = this.props;
    const { newPaletteName, stage } = this.state;
    return (
      <>
        <Dialog
          open={stage === 'emojiForm'}
          onClose={toggleForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <Picker onSelect={this.savePalette} title="Pick and Emoji!" />
        </Dialog>
        <Dialog
          open={stage === 'nameForm'}
          onClose={toggleForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a new for your new Palette. Make sure it&apos;s unique
              </DialogContentText>

              <TextValidator
                value={newPaletteName}
                name="newPaletteName"
                label="Palette Name"
                fullWidth
                margin="normal"
                validators={['required', 'isPaletteNameUnique']}
                errorMessages={['this field is required', 'name already used']}
                onChange={this.handleChange}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={toggleForm} color="primary">
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </>
    );
  }
}

export default PaletteMetaForm;
