import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../../Store/store';
import { fetchData } from '../../Services/service';
import { ArrowButton } from '../ArrowButton';
import { LIMIT } from '../../Constants/constants';

const PaginationButtons = () => {
  const store: any = useContext(StoreContext);

  const getPosts = (data: any) => {
    const { posts, after, before } = data;
    store.addPosts(posts);
    store.setPagination(after, before);
    store.selectPost(posts[0]);
  }

  const clickNextPage = () => {
    fetchData(`${process.env.REACT_APP_API_URL}count=${store.count}&after=${store.after}`, getPosts, (error: Error) => { console.log(error)});
    store.setCount(LIMIT);
  }

  const clickPreviousPage = () => {
    fetchData(`${process.env.REACT_APP_API_URL}count=${store.count}&before=${store.before}`, getPosts, (error: Error) => { console.log(error)});
    store.setCount(-LIMIT);
  }

  return useObserver(() => (
    <React.Fragment>
      {store.before &&
        <ArrowButton title="Previous" direction="left" handleClick={clickPreviousPage} />
      }
      <ArrowButton title="Next" direction="right" handleClick={clickNextPage} style={{ width: '130px' }} />
    </React.Fragment>
  ));
};

export default PaginationButtons;
