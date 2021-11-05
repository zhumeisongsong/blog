import { useMemo, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from 'containers/Post/List/store';
import { GridListContainer, GridListItem } from './style';
import UrlImageBlurryLazyLoad from 'react-url-image-blurry-lazy-load';

const GridList = () => {
  const history = useHistory();
  const { state } = useContext(StoreContext);

  const onClick = useCallback(
    (id) => {
      history.push(`/${id}`);
    },
    [history]
  );

  return useMemo(
    () => (
      <GridListContainer>
        {state &&
          state.length > 0 &&
          state.map((item) => (
            <GridListItem onClick={() => onClick(item.id)} key={item.id}>
              {/* {item.thumbnail && <Image src={item.thumbnail} alt={item.title} />} */}
              <UrlImageBlurryLazyLoad
                thumbnailImageUrl={
                  'https://raw.githubusercontent.com/zhumeisongsong/react-url-image-blurry-lazy-load/main/example/images/thumbnail_IMG_4797_5e394d3c6e.jpeg'
                }
                imageUrl={
                  'https://raw.githubusercontent.com/zhumeisongsong/react-url-image-blurry-lazy-load/main/example/images/IMG_4797.jpeg'
                }
                className={''}
                imageHeight={'66.6%'}
                imageAlt={'text lazy load'}
              />
              {item.title}
            </GridListItem>
          ))}
      </GridListContainer>
    ),
    [state, onClick]
  );
};

export default GridList;
