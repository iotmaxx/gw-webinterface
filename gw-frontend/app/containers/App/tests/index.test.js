import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import { Provider } from 'react-redux';
import configureStore from '../../../configureStore';

import App from '../index';

const renderer = new ShallowRenderer();

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    const initialState = {};
    const store = configureStore(initialState, history);
    renderer.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const renderedOutput = renderer.getRenderOutput();
    expect(renderedOutput).toMatchSnapshot();
  });
});
