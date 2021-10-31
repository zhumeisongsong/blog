import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import selectorsPlugin from '@rematch/select';
import immerPlugin from '@rematch/immer';
import persistPlugin from '@rematch/persist';
import storage from 'redux-persist/lib/storage';
import updatedPlugin, { ExtraModelsFromUpdated } from '@rematch/updated';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';

import { models, RootModel } from 'models/';

type FullModel = ExtraModelsFromLoading<RootModel> &
  ExtraModelsFromUpdated<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [
    selectorsPlugin(),
    immerPlugin(),
    updatedPlugin(),
    loadingPlugin(),
    persistPlugin({
      key: 'root',
      storage,
    }),
  ],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
