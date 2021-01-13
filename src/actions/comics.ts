import { v4 as uuid } from 'uuid';
import { Comics } from '../store/types';
import { InitAction } from './initAction';

export enum ComicsActionType {
  Init = 'init',
  Add = 'add',
  Remove = 'remove',
  Update = 'update',
}

export interface ComicsInitAction {
  type: ComicsActionType;
}

export interface ComicsAddAction {
  type: ComicsActionType;
  comics: Comics;
}

export interface ComicsRemoveAction {
  type: ComicsActionType;
  key: string;
}

export interface ComicsUpdateAction {
  type: ComicsActionType;
  key: string;
  update: Comics;
}

export type ComicsActionTypes
  = ComicsInitAction
  | ComicsAddAction
  | ComicsRemoveAction
  | ComicsUpdateAction
  | InitAction;

// Action creators
export const init: () => ComicsActionTypes = () => ({ type: ComicsActionType.Init });

export const add: ({ title, rating, series, cover }: {
  title: string;
  rating?: number;
  series?: string;
  cover?: File;
}) => ComicsActionTypes = ({ title, rating, series, cover }) => ({
  type: ComicsActionType.Add,
  comics: {
    key: uuid(),
    title,
    rating,
    series,
    cover,
  },
});

export const remove: (key: string) => ComicsActionTypes = (key) => ({
  type: ComicsActionType.Remove,
  key,
});

export const update: (key: string, update: {
  title: string;
  rating?: number;
  series?: string;
  cover?: File;
}) => ComicsActionTypes = (key, update) => ({
  type: ComicsActionType.Update,
  key,
  update,
});
