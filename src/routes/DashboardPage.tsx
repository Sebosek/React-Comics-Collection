import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { connect, ConnectedProps } from 'react-redux';
import Header from '../components/Header';
import Comics from '../components/Comics';
import ComicsCollection from '../components/ComicsCollection';
import FloatingButton from '../components/FloatingButton';
import { RootState } from '../store';
import Rating from '../components/Rating';
import NoRecords from '../components/NoRecords';

// Map Redux state and dispatch to the component
const mapStateToProps = ({ comics } : RootState) => ({ comics: comics.comics });

// Create connector and derive a type
const connector = connect(mapStateToProps);
type ReduxProps = ConnectedProps<typeof connector>;

// Combined the component props with the Redux props
type DashboardPageProps = ReduxProps & RouteComponentProps;
const DashboardPage: FunctionComponent<DashboardPageProps> = ({ comics,
  history }) => {
  const handleClickAdd = () => history.push('/add');

  return (
    <>
      <Header title="My collection" />
      {/* <Tags> */}
      {/*  <Tag value="Superman" active /> */}
      {/*  <Tag value="Guardians of the galaxy" /> */}
      {/*  <Tag value="Suicide squad" /> */}
      {/* </Tags> */}
      {comics.length === 0 && (<NoRecords />)}
      {comics.length > 0
        && (
        <ComicsCollection>
          {comics.map((c) => (
            <Link key={c.key} to={`/comics/${c.key}`}>
              <Comics
                title={c.title}
                image={URL.createObjectURL(c.cover)}
              >
                <Rating value={c.rating} />
              </Comics>
            </Link>
          ))}
        </ComicsCollection>
        )}

      <FloatingButton onClick={handleClickAdd} />
    </>
  );
};

export default connector(DashboardPage);
