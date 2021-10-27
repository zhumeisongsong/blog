import React, { useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import List from 'components/List';
import { RootState } from 'models/store';
import { StoreContext } from 'containers/PostList/store';

const PostList = () => {
  const dispatch = useDispatch();
  const { listData } = useSelector((state: RootState) => state.post);
  const getDataAsync = useCallback(
    () => dispatch.post.getListDataAsync(),
    [dispatch]
  );

  useEffect(() => {
    getDataAsync();
  }, [getDataAsync]);

  return useMemo(
    () => (
      <StoreContext.Provider value={listData}>
        <List />
      </StoreContext.Provider>
    ),
    [listData]
  );
};

export default PostList;
