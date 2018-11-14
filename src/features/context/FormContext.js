import * as React from 'react';
const {Provider, Consumer} = React.createContext({});

class FormProvider extends React.Component<*, *> {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.initialValues,
      errors: {},
    };
  }

  render() {
    return;
  }
}

export {FormProvider, Consumer as FormConsumer};
