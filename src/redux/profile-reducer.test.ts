import profileReducer, {addPostActionCreator, deletePostAC} from './profile-reducer';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likeValue: 15},
        {id: 2, message: 'It\'s my first post.', likeValue: 10},
        {id: 3, message: 'Where are you?', likeValue: 10},
        {id: 4, message: 'Hi!', likeValue: 50}
    ],
    profile: null,
    status: '',
}
it('length of posts should be incremented', () => {
    let action = addPostActionCreator('Hello, Elena!');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
})
it('message of new post should be correct', () => {
    let action = addPostActionCreator('Hello, Elena!');
    let newState = profileReducer(state, action);
    expect(newState.posts[4].message).toBe('Hello, Elena!');
})
it('after deleting length of posts should be decrement', () => {
let action = deletePostAC(1);
let newState = profileReducer(state, action);
expect(newState.posts.length).toBe(3);
})
it(`after deleting length of posts shouldn't be decrement if id incorrect`, () => {
    let action = deletePostAC(1000);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
})