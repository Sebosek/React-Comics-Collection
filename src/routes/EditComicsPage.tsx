import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../components/Header';
import ComicsForm from '../components/ComicsForm';
import Back from '../components/Back';
import { ComicsData } from '../store/types';
import { RootState } from '../store';
import { update as updateComics, ComicsActionTypes } from '../actions/comics';

interface EditComicsPageParams {
  id: string;
}

// Map Redux state and dispatch to the component
const mapStateToProps = (
  { comics }: RootState,
  { match }: RouteComponentProps<EditComicsPageParams>,
) => ({ comics: comics.comics.find((c) => c.key === match.params.id) });

const mapDispatchToProps = (dispatch: (action: ComicsActionTypes) => void) => ({ update: (key: string, data: ComicsData) => dispatch(updateComics(key, data)) });

// Create connector and derive a type
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;

// Combined the component props with the Redux props
type EditComicsPageProps = ReduxProps & RouteComponentProps<EditComicsPageParams>;
const EditComicsPage: FunctionComponent<EditComicsPageProps> = ({ history,
  match,
  comics,
  update }) => {
  const handleClickBack = () => history.push('/');
  const handleSave = (data: ComicsData) => {
    const key = match.params.id;
    update(key, data);

    history.push('/');
  };

  return (
    <>
      <Header
        title="Edit comics"
        icon={<Back onClick={handleClickBack} />}
      />
      <ComicsForm
        comics={comics}
        onSave={handleSave}
      />
    </>
  );
};

export default connector(EditComicsPage);
