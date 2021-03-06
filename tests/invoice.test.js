/* globals describe, it */
const assert = require('assert');
const request = require('supertest');
const app = require('../app')

describe('Unit testing the /invoice/{id} route', function() {

    it('should return No Content status', function() {
      return request(app)
        .get('/invoice/1')
        .then(function(response){
            assert.equal(response.status, 204)
        })
    });

    it('ensures the count is properly incremented', async () => {
        await request(app)
          .post('/invoice').send({"date": "January 1, 2021", "due_date": "February 1, 2021", "items":["bananas", "oranges", "guava fruit"]});
        request(app)
          .get('/count')
          .then(function(response){
              assert.equal(response.text, '1')
          })

        await request(app)
          .post('/invoice').send({"date": "January 2, 2021", "due_date": "February 2, 2021", "items":["blueberries", "apples", "pears"]});
        request(app)
          .get('/count')
          .then(function(response){
              assert.equal(response.text, '2')
          })

        await request(app)
          .post('/invoice').send({"date": "January 3, 2021", "due_date": "February 3, 2021", "items":["grapes", "watermellon", "grapefruit"]});
        
        return request(app)
          .get('/count')
          .then(function(response){
              assert.equal(response.text, '3')
          })
      });

});