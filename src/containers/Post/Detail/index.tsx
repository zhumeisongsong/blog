import { useMemo, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArticleContent from 'components/ArticleContent';
import { RootState } from 'models/store';
import { StoreContext } from 'containers/Post/Detail/store';

const PostDetail = () => {
  const { id }: any = useParams();
  const dispatch = useDispatch();
  const { detailData } = useSelector((state: RootState) => state.post);
  const getDataAsync = useCallback(
    (payload) => dispatch.post.getDetailDataAsync(payload),
    [dispatch]
  );

  useEffect(() => {
    getDataAsync(id);
  }, [getDataAsync, id]);

  return useMemo(
    () => (
      <StoreContext.Provider value={{ state: detailData }}>
        <ArticleContent />
      </StoreContext.Provider>
    ),
    [detailData]
  );
};

export default PostDetail;
