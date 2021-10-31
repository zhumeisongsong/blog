import { createModel } from '@rematch/core';
import { RootModel } from '.';
import { getPosts, getPost, Post } from '../api';

export type PostModel = { listData: Post[] | null; detailData: Post | null };

const initState: PostModel = {
  listData: null,
  detailData: null,
};

export default createModel<RootModel>()({
  state: initState,
  reducers: {
    setState: (state, payload) => ({
      ...state,
      ...payload,
    }),
  },
  effects: (dispatch) => ({
    async getListDataAsync(payload, rootState) {
      const res = await getPosts();

      this.setState({ listData: res.data.posts });
    },
    async getDetailDataAsync(payload, state) {
      this.setState({ detailData: null });

      const res = await getPost(payload);

      this.setState({ detailData: res.data.post });
    },
  }),
});
