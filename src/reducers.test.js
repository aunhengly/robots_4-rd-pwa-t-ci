import {
   CHANGE_SEARCH_FIELD,
   REQUEST_ROBOTS_PENDING,
   REQUEST_ROBOTS_SUCCESS,
   REQUEST_ROBOTS_FAILED
} from "./constants";

import * as reducers from "./reducer";

describe('searchRobots :', () => {
   const initialStateSearch = {
      searchField: ''
   }
   it('should return the initial state', () => {
      expect(reducers.searchRobots(undefined,{})).toEqual({ searchField: ''})
   })

   it('should handle CHANGE_SEARCH_FIELD', () => {
      expect(reducers.searchRobots(initialStateSearch, {
         type: CHANGE_SEARCH_FIELD,
         payload: 'abc'
      })).toEqual({ searchField:'abc'})
   })
})

describe('requestRobots :', () => {
   const initialStateRobots = {
      isPending: false,
      robots: [],
      error: ''
   }
   it('should return the initial state', () => {
      expect(reducers.requestRobots(undefined,{})).toEqual(initialStateRobots)
   })

   it('should handle REQUEST_ROBOTS_PENDING action', () => {
      expect(reducers.requestRobots(initialStateRobots, {
         type: REQUEST_ROBOTS_PENDING
      })).toEqual({
         isPending: true,
         robots: [],
         error: ''
      })
   })

   it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
      expect(reducers.requestRobots(initialStateRobots, {
         type: REQUEST_ROBOTS_SUCCESS,
         payload: [{
            id: '123',
            name: 'test',
            email: 'test@example.com'
         }]
      })).toEqual({
         isPending: false,
         robots: [{
            id: '123',
            name: 'test',
            email: 'test@example.com'
         }],
         error: ''
      })
   })

   it('should handle REQUEST_ROBOTS_FAILED action', () => {
      expect(reducers.requestRobots(initialStateRobots, {
         type: REQUEST_ROBOTS_FAILED,
         payload: 'NOOOO!!!!!'
      })).toEqual({
         isPending: false,
         error: 'NOOOO!!!!!',
         robots: []
      })
   })

})