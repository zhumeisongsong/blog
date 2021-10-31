import { useMemo, useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { StoreContext } from 'containers/Post/List/store';
import { GridListContainer, GridListItem } from './style';

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
              {item.title}
            </GridListItem>
          ))}
      </GridListContainer>
    ),
    [state, onClick]
  );
};

export default GridList;
