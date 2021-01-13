import { ComicsState } from '../store/types';
import {
  ComicsActionType,
  ComicsActionTypes,
  ComicsAddAction,
  ComicsRemoveAction,
  ComicsUpdateAction,
} from '../actions/comics';

type ComicsReducer = (state: ComicsState | undefined, action: ComicsActionTypes) => ComicsState;

export const initComicsState: ComicsState = { comics: [] };
export const comicsReducer: ComicsReducer = (
  state: ComicsState = initComicsState,
  action: ComicsActionTypes,
) => {
  const { type } = action;

  switch (type) {
    case ComicsActionType.Init:
      return initComicsState;

    case ComicsActionType.Add: {
      const { comics } = action as ComicsAddAction;
      return {
        ...state,
        comics: [...state.comics, comics],
      };
    }

    case ComicsActionType.Remove: {
      const { key } = action as ComicsRemoveAction;
      const comics = state.comics.filter((c) => c.key !== key);
      return { ...state, comics };
    }

    case ComicsActionType.Update: {
      const { key, update } = action as ComicsUpdateAction;
      const comics = state.comics.map((c) => {
        if (c.key !== key) return c;

        return { ...c, ...update };
      });

      return { ...state, comics };
    }

    default:
      return state;
  }
};
