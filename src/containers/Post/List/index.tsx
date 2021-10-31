import { useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GridList from 'components/GridList';
import { RootState } from 'models/store';
import { StoreContext } from 'containers/Post/List/store';

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
      <StoreContext.Provider value={{state: listData}}>
        <GridList />
      </StoreContext.Provider>
    ),
    [listData]
  );
};

export default PostList;
