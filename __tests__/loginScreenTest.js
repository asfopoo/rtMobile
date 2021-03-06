import React from 'react';
import Login from '../src/screens/LoginScreen';
import ErrorBoundary from '../components/ErrorBoundary';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(
    <ErrorBoundary>
    <Login />
    </ErrorBoundary>).toJSON();
  expect(tree).toMatchSnapshot();
});
