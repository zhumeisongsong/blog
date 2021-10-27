import { Models } from '@rematch/core';
import post from './post';

export interface RootModel extends Models<RootModel> {
  post: typeof post;
}

export const models: RootModel = {
  post,
};
