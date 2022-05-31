import {UserType} from '../redux/Types';

export const  updateObjectInArray = (items: Array<UserType>, itemId: number, objPropName: any, newObjProps: any) => {
  return items.map(u => {
    if (u.id === itemId) {
      return {...u, ...newObjProps}
    }
    return u;
  })
}