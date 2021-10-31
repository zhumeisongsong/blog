import { useMemo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from 'containers/Post/store';

const GridList = () => {
  const data = useContext(StoreContext);

  return useMemo(
    () => (
      <div>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <Link to={`/${item.id}`} key={item.id}>
              {item.title}
            </Link>
          ))}
      </div>
    ),
    [data]
  );
};

export default GridList;
