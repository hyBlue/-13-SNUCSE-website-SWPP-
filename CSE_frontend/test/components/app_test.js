import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/MainPage';
import 'babel-polyfill';


describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
