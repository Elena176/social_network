import {create} from 'react-test-renderer';
import {Paginator} from './Paginator';

describe('Paginator component tests', () => {
  test('page count is 11 but should be showed only 10' , () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} onPageChanged={() => {}} currentPage={2}  /> )
    const root = component.root;
    let spans = root.findAllByType('span')
    expect(spans.length).toBe(10)
  })
  test('if pages count is more than 10 button NEXT should be present', () => {
    const component = create(<Paginator totalItemsCount={11} pageSize={1} onPageChanged={() => {}} currentPage={2}  /> )
    const root = component.root;
    let button = root.findAllByType('button')
    expect(button.length).toBe(1)
  })
})