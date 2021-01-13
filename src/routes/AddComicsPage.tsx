import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../components/Header';
import ComicsForm from '../components/ComicsForm';
import Back from '../components/Back';
import { add as addComics, ComicsActionTypes } from '../actions/comics';
import { ComicsData } from '../store/types';

// Map Redux state and dispatch to the component
const mapDispatchToProps = (dispatch: (action: ComicsActionTypes) => void) => ({ add: (data: ComicsData) => dispatch(addComics(data)) });

// Create connector and derive a type
const connector = connect(undefined, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

// Combined the component props with the Redux props
type AddComicsPageProps = ReduxProps & RouteComponentProps;
const AddComicsPage: FunctionComponent<AddComicsPageProps> = ({ history,
  add }) => {
  const handleClickBack = () => history.push('/');

  const handleSave = (data: ComicsData) => {
    add(data);
    history.push('/');
  };

  return (
    <>
      <Header
        title="Add comics"
        icon={<Back onClick={handleClickBack} />}
      />
      <ComicsForm onSave={handleSave} />
    </>
  );
};

export default connector(AddComicsPage);
