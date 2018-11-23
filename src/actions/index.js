import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonplaceholder';
import { FETCH_POSTS, FETCH_USER } from './types';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //this function needs to be dispatched, you cannot just call fetchPosts()
    //before proceeding we need to wait for this function to finish execution
    await dispatch(fetchPosts());
    
    // const userIds = _.uniq(_.map(getState().posts, 'userId'));
    // // await can be omitted here because we have no logic after
    // userIds.forEach(id => dispatch(fetchUser(id)));

    //shorthand version of the above thx to lodash chain
    //value() executes the chained functions
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value()
}

export const fetchPosts = () => async dispatch => {
    
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: FETCH_POSTS,
        payload: response.data
    })
    
};

export const fetchUser = (userId) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);

    dispatch({
        type: FETCH_USER,
        payload: response.data
    })
};


// MEMOIZATION SOLUTION 
// export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch);

// //but this only allows fetching each user once
// //this is bad if user changes his data
// const _fetchUser = _.memoize(async (userId, dispatch) => {
    
//     const response = await jsonPlaceholder.get(`/users/${userId}`);

//     dispatch({
//         type: FETCH_USER,
//         payload: response.data
//     })
// });