(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Event
 * @header lbServices.Event
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Event` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Event",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/events/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Event#create
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/events",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#createMany
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/events",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#upsert
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/events",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#exists
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/events/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#findById
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/events/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#find
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/events",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#findOne
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/events/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#updateAll
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/events/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#deleteById
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/events/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#count
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/events/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#prototype$updateAttributes
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/events/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Event#createChangeStream
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/events/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Event#updateOrCreate
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Event` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Event#update
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Event#destroyById
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Event#removeById
         * @methodOf lbServices.Event
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Event#modelName
    * @propertyOf lbServices.Event
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Event`.
    */
    R.modelName = "Event";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Group
 * @header lbServices.Group
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Group` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Group",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/groups/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Group.players.findById() instead.
        "prototype$__findById__players": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/players/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.players.destroyById() instead.
        "prototype$__destroyById__players": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/players/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.players.updateById() instead.
        "prototype$__updateById__players": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/players/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.messages.findById() instead.
        "prototype$__findById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.messages.destroyById() instead.
        "prototype$__destroyById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.messages.updateById() instead.
        "prototype$__updateById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.players() instead.
        "prototype$__get__players": {
          isArray: true,
          url: urlBase + "/groups/:id/players",
          method: "GET"
        },

        // INTERNAL. Use Group.players.create() instead.
        "prototype$__create__players": {
          url: urlBase + "/groups/:id/players",
          method: "POST"
        },

        // INTERNAL. Use Group.players.destroyAll() instead.
        "prototype$__delete__players": {
          url: urlBase + "/groups/:id/players",
          method: "DELETE"
        },

        // INTERNAL. Use Group.players.count() instead.
        "prototype$__count__players": {
          url: urlBase + "/groups/:id/players/count",
          method: "GET"
        },

        // INTERNAL. Use Group.messages() instead.
        "prototype$__get__messages": {
          isArray: true,
          url: urlBase + "/groups/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Group.messages.create() instead.
        "prototype$__create__messages": {
          url: urlBase + "/groups/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Group.messages.destroyAll() instead.
        "prototype$__delete__messages": {
          url: urlBase + "/groups/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Group.messages.count() instead.
        "prototype$__count__messages": {
          url: urlBase + "/groups/:id/messages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#create
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createMany
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/groups",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#upsert
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/groups",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#exists
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/groups/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/groups/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#find
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/groups",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#findOne
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/groups/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#updateAll
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/groups/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#deleteById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/groups/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#count
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/groups/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#prototype$updateAttributes
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/groups/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Group#createChangeStream
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/groups/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Message.group() instead.
        "::get::message::group": {
          url: urlBase + "/messages/:id/group",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Group#updateOrCreate
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Group#update
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Group#destroyById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Group#removeById
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Group#modelName
    * @propertyOf lbServices.Group
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Group`.
    */
    R.modelName = "Group";

    /**
     * @ngdoc object
     * @name lbServices.Group.players
     * @header lbServices.Group.players
     * @object
     * @description
     *
     * The object `Group.players` groups methods
     * manipulating `Player` instances related to `Group`.
     *
     * Call {@link lbServices.Group#players Group.players()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Group#players
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Queries players of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::group::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.players#count
         * @methodOf lbServices.Group.players
         *
         * @description
         *
         * Counts players of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.players.count = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::count::group::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.players#create
         * @methodOf lbServices.Group.players
         *
         * @description
         *
         * Creates a new instance in players of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.create = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::create::group::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.players#createMany
         * @methodOf lbServices.Group.players
         *
         * @description
         *
         * Creates a new instance in players of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.createMany = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::createMany::group::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.players#destroyAll
         * @methodOf lbServices.Group.players
         *
         * @description
         *
         * Deletes all players of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.players.destroyAll = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::delete::group::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.players#destroyById
         * @methodOf lbServices.Group.players
         *
         * @description
         *
         * Delete a related item by id for players.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.players.destroyById = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::destroyById::group::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.players#findById
         * @methodOf lbServices.Group.players
         *
         * @description
         *
         * Find a related item by id for players.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.findById = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::findById::group::players"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.players#updateById
         * @methodOf lbServices.Group.players
         *
         * @description
         *
         * Update a related item by id for players.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for players
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.players.updateById = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::updateById::group::players"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Group.messages
     * @header lbServices.Group.messages
     * @object
     * @description
     *
     * The object `Group.messages` groups methods
     * manipulating `Message` instances related to `Group`.
     *
     * Call {@link lbServices.Group#messages Group.messages()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Group#messages
         * @methodOf lbServices.Group
         *
         * @description
         *
         * Queries messages of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::get::group::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.messages#count
         * @methodOf lbServices.Group.messages
         *
         * @description
         *
         * Counts messages of group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.messages.count = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::count::group::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.messages#create
         * @methodOf lbServices.Group.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.create = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::create::group::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.messages#createMany
         * @methodOf lbServices.Group.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::createMany::group::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.messages#destroyAll
         * @methodOf lbServices.Group.messages
         *
         * @description
         *
         * Deletes all messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::delete::group::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.messages#destroyById
         * @methodOf lbServices.Group.messages
         *
         * @description
         *
         * Delete a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::destroyById::group::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.messages#findById
         * @methodOf lbServices.Group.messages
         *
         * @description
         *
         * Find a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.findById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::findById::group::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Group.messages#updateById
         * @methodOf lbServices.Group.messages
         *
         * @description
         *
         * Update a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::updateById::group::messages"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Player
 * @header lbServices.Player
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Player` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Player",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/players/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$__findById__accessTokens
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$__updateById__accessTokens
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.messages.findById() instead.
        "prototype$__findById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.messages.destroyById() instead.
        "prototype$__destroyById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.messages.updateById() instead.
        "prototype$__updateById__messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.avatar() instead.
        "prototype$__get__avatar": {
          url: urlBase + "/players/:id/avatar",
          method: "GET"
        },

        // INTERNAL. Use Player.chroniques.findById() instead.
        "prototype$__findById__chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chroniques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.chroniques.destroyById() instead.
        "prototype$__destroyById__chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chroniques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chroniques.updateById() instead.
        "prototype$__updateById__chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chroniques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.chapters.findById() instead.
        "prototype$__findById__chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chapters/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.chapters.destroyById() instead.
        "prototype$__destroyById__chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chapters/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chapters.updateById() instead.
        "prototype$__updateById__chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chapters/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.characters.findById() instead.
        "prototype$__findById__characters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/characters/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.characters.destroyById() instead.
        "prototype$__destroyById__characters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/characters/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.characters.updateById() instead.
        "prototype$__updateById__characters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/characters/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$__get__accessTokens
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Queries accessTokens of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/players/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$__create__accessTokens
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/players/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$__delete__accessTokens
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/players/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$__count__accessTokens
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Counts accessTokens of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/players/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Player.messages() instead.
        "prototype$__get__messages": {
          isArray: true,
          url: urlBase + "/players/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Player.messages.create() instead.
        "prototype$__create__messages": {
          url: urlBase + "/players/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Player.messages.destroyAll() instead.
        "prototype$__delete__messages": {
          url: urlBase + "/players/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Player.messages.count() instead.
        "prototype$__count__messages": {
          url: urlBase + "/players/:id/messages/count",
          method: "GET"
        },

        // INTERNAL. Use Player.chroniques() instead.
        "prototype$__get__chroniques": {
          isArray: true,
          url: urlBase + "/players/:id/chroniques",
          method: "GET"
        },

        // INTERNAL. Use Player.chroniques.create() instead.
        "prototype$__create__chroniques": {
          url: urlBase + "/players/:id/chroniques",
          method: "POST"
        },

        // INTERNAL. Use Player.chroniques.destroyAll() instead.
        "prototype$__delete__chroniques": {
          url: urlBase + "/players/:id/chroniques",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chroniques.count() instead.
        "prototype$__count__chroniques": {
          url: urlBase + "/players/:id/chroniques/count",
          method: "GET"
        },

        // INTERNAL. Use Player.chapters() instead.
        "prototype$__get__chapters": {
          isArray: true,
          url: urlBase + "/players/:id/chapters",
          method: "GET"
        },

        // INTERNAL. Use Player.chapters.create() instead.
        "prototype$__create__chapters": {
          url: urlBase + "/players/:id/chapters",
          method: "POST"
        },

        // INTERNAL. Use Player.chapters.destroyAll() instead.
        "prototype$__delete__chapters": {
          url: urlBase + "/players/:id/chapters",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chapters.count() instead.
        "prototype$__count__chapters": {
          url: urlBase + "/players/:id/chapters/count",
          method: "GET"
        },

        // INTERNAL. Use Player.characters() instead.
        "prototype$__get__characters": {
          isArray: true,
          url: urlBase + "/players/:id/characters",
          method: "GET"
        },

        // INTERNAL. Use Player.characters.create() instead.
        "prototype$__create__characters": {
          url: urlBase + "/players/:id/characters",
          method: "POST"
        },

        // INTERNAL. Use Player.characters.destroyAll() instead.
        "prototype$__delete__characters": {
          url: urlBase + "/players/:id/characters",
          method: "DELETE"
        },

        // INTERNAL. Use Player.characters.count() instead.
        "prototype$__count__characters": {
          url: urlBase + "/players/:id/characters/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#create
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/players",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#createMany
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/players",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#upsert
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/players",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#exists
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/players/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#findById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/players/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#find
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/players",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#findOne
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/players/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#updateAll
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/players/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#deleteById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/players/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#count
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/players/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$updateAttributes
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/players/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#createChangeStream
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/players/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#login
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/players/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#logout
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/players/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#confirm
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/players/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#resetPassword
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/players/reset",
          method: "POST"
        },

        // INTERNAL. Use Group.players.findById() instead.
        "::findById::group::players": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/players/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.players.destroyById() instead.
        "::destroyById::group::players": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/players/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.players.updateById() instead.
        "::updateById::group::players": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/players/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.players() instead.
        "::get::group::players": {
          isArray: true,
          url: urlBase + "/groups/:id/players",
          method: "GET"
        },

        // INTERNAL. Use Group.players.create() instead.
        "::create::group::players": {
          url: urlBase + "/groups/:id/players",
          method: "POST"
        },

        // INTERNAL. Use Group.players.createMany() instead.
        "::createMany::group::players": {
          isArray: true,
          url: urlBase + "/groups/:id/players",
          method: "POST"
        },

        // INTERNAL. Use Group.players.destroyAll() instead.
        "::delete::group::players": {
          url: urlBase + "/groups/:id/players",
          method: "DELETE"
        },

        // INTERNAL. Use Group.players.count() instead.
        "::count::group::players": {
          url: urlBase + "/groups/:id/players/count",
          method: "GET"
        },

        // INTERNAL. Use Message.player() instead.
        "::get::message::player": {
          url: urlBase + "/messages/:id/player",
          method: "GET"
        },

        // INTERNAL. Use Chronique.player() instead.
        "::get::Chronique::player": {
          url: urlBase + "/Chroniques/:id/player",
          method: "GET"
        },

        // INTERNAL. Use Chapter.player() instead.
        "::get::Chapter::player": {
          url: urlBase + "/Chapters/:id/player",
          method: "GET"
        },

        // INTERNAL. Use Character.player() instead.
        "::get::Character::player": {
          url: urlBase + "/Characters/:id/player",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Player#getCurrent
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/players" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Player#updateOrCreate
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Player#update
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Player#destroyById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Player#removeById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Player#getCachedCurrent
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Player#login} or
         * {@link lbServices.Player#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Player instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Player#isAuthenticated
         * @methodOf lbServices.Player
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Player#getCurrentId
         * @methodOf lbServices.Player
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Player#modelName
    * @propertyOf lbServices.Player
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Player`.
    */
    R.modelName = "Player";

    /**
     * @ngdoc object
     * @name lbServices.Player.messages
     * @header lbServices.Player.messages
     * @object
     * @description
     *
     * The object `Player.messages` groups methods
     * manipulating `Message` instances related to `Player`.
     *
     * Call {@link lbServices.Player#messages Player.messages()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Player#messages
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Queries messages of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::get::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.messages#count
         * @methodOf lbServices.Player.messages
         *
         * @description
         *
         * Counts messages of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.messages.count = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::count::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.messages#create
         * @methodOf lbServices.Player.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.create = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::create::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.messages#createMany
         * @methodOf lbServices.Player.messages
         *
         * @description
         *
         * Creates a new instance in messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.createMany = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::createMany::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.messages#destroyAll
         * @methodOf lbServices.Player.messages
         *
         * @description
         *
         * Deletes all messages of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyAll = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::delete::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.messages#destroyById
         * @methodOf lbServices.Player.messages
         *
         * @description
         *
         * Delete a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.messages.destroyById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::destroyById::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.messages#findById
         * @methodOf lbServices.Player.messages
         *
         * @description
         *
         * Find a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.findById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::findById::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.messages#updateById
         * @methodOf lbServices.Player.messages
         *
         * @description
         *
         * Update a related item by id for messages.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for messages
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R.messages.updateById = function() {
          var TargetResource = $injector.get("Message");
          var action = TargetResource["::updateById::player::messages"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player#avatar
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Fetches belongsTo relation avatar.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        R.avatar = function() {
          var TargetResource = $injector.get("File");
          var action = TargetResource["::get::player::avatar"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Player.chroniques
     * @header lbServices.Player.chroniques
     * @object
     * @description
     *
     * The object `Player.chroniques` groups methods
     * manipulating `Chronique` instances related to `Player`.
     *
     * Call {@link lbServices.Player#chroniques Player.chroniques()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Player#chroniques
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Queries chroniques of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::get::player::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chroniques#count
         * @methodOf lbServices.Player.chroniques
         *
         * @description
         *
         * Counts chroniques of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.chroniques.count = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::count::player::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chroniques#create
         * @methodOf lbServices.Player.chroniques
         *
         * @description
         *
         * Creates a new instance in chroniques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.create = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::create::player::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chroniques#createMany
         * @methodOf lbServices.Player.chroniques
         *
         * @description
         *
         * Creates a new instance in chroniques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.createMany = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::createMany::player::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chroniques#destroyAll
         * @methodOf lbServices.Player.chroniques
         *
         * @description
         *
         * Deletes all chroniques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chroniques.destroyAll = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::delete::player::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chroniques#destroyById
         * @methodOf lbServices.Player.chroniques
         *
         * @description
         *
         * Delete a related item by id for chroniques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chroniques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chroniques.destroyById = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::destroyById::player::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chroniques#findById
         * @methodOf lbServices.Player.chroniques
         *
         * @description
         *
         * Find a related item by id for chroniques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chroniques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.findById = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::findById::player::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chroniques#updateById
         * @methodOf lbServices.Player.chroniques
         *
         * @description
         *
         * Update a related item by id for chroniques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chroniques
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.updateById = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::updateById::player::chroniques"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Player.chapters
     * @header lbServices.Player.chapters
     * @object
     * @description
     *
     * The object `Player.chapters` groups methods
     * manipulating `Chapter` instances related to `Player`.
     *
     * Call {@link lbServices.Player#chapters Player.chapters()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Player#chapters
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Queries chapters of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::get::player::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chapters#count
         * @methodOf lbServices.Player.chapters
         *
         * @description
         *
         * Counts chapters of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.chapters.count = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::count::player::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chapters#create
         * @methodOf lbServices.Player.chapters
         *
         * @description
         *
         * Creates a new instance in chapters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.create = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::create::player::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chapters#createMany
         * @methodOf lbServices.Player.chapters
         *
         * @description
         *
         * Creates a new instance in chapters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.createMany = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::createMany::player::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chapters#destroyAll
         * @methodOf lbServices.Player.chapters
         *
         * @description
         *
         * Deletes all chapters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chapters.destroyAll = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::delete::player::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chapters#destroyById
         * @methodOf lbServices.Player.chapters
         *
         * @description
         *
         * Delete a related item by id for chapters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chapters
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chapters.destroyById = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::destroyById::player::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chapters#findById
         * @methodOf lbServices.Player.chapters
         *
         * @description
         *
         * Find a related item by id for chapters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chapters
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.findById = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::findById::player::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.chapters#updateById
         * @methodOf lbServices.Player.chapters
         *
         * @description
         *
         * Update a related item by id for chapters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for chapters
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.updateById = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::updateById::player::chapters"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Player.characters
     * @header lbServices.Player.characters
     * @object
     * @description
     *
     * The object `Player.characters` groups methods
     * manipulating `Character` instances related to `Player`.
     *
     * Call {@link lbServices.Player#characters Player.characters()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Player#characters
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Queries characters of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        R.characters = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::get::player::characters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.characters#count
         * @methodOf lbServices.Player.characters
         *
         * @description
         *
         * Counts characters of player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.characters.count = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::count::player::characters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.characters#create
         * @methodOf lbServices.Player.characters
         *
         * @description
         *
         * Creates a new instance in characters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        R.characters.create = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::create::player::characters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.characters#createMany
         * @methodOf lbServices.Player.characters
         *
         * @description
         *
         * Creates a new instance in characters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        R.characters.createMany = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::createMany::player::characters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.characters#destroyAll
         * @methodOf lbServices.Player.characters
         *
         * @description
         *
         * Deletes all characters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.characters.destroyAll = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::delete::player::characters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.characters#destroyById
         * @methodOf lbServices.Player.characters
         *
         * @description
         *
         * Delete a related item by id for characters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for characters
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.characters.destroyById = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::destroyById::player::characters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.characters#findById
         * @methodOf lbServices.Player.characters
         *
         * @description
         *
         * Find a related item by id for characters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for characters
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        R.characters.findById = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::findById::player::characters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Player.characters#updateById
         * @methodOf lbServices.Player.characters
         *
         * @description
         *
         * Update a related item by id for characters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for characters
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        R.characters.updateById = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::updateById::player::characters"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Message
 * @header lbServices.Message
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Message` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Message",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/messages/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Message.group() instead.
        "prototype$__get__group": {
          url: urlBase + "/messages/:id/group",
          method: "GET"
        },

        // INTERNAL. Use Message.player() instead.
        "prototype$__get__player": {
          url: urlBase + "/messages/:id/player",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#create
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/messages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#createMany
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/messages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#upsert
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/messages",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#exists
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/messages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#findById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/messages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#find
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/messages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#findOne
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/messages/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#updateAll
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/messages/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#deleteById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/messages/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#count
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/messages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#prototype$updateAttributes
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/messages/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Message#createChangeStream
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/messages/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Group.messages.findById() instead.
        "::findById::group::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Group.messages.destroyById() instead.
        "::destroyById::group::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Group.messages.updateById() instead.
        "::updateById::group::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/groups/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Group.messages() instead.
        "::get::group::messages": {
          isArray: true,
          url: urlBase + "/groups/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Group.messages.create() instead.
        "::create::group::messages": {
          url: urlBase + "/groups/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Group.messages.createMany() instead.
        "::createMany::group::messages": {
          isArray: true,
          url: urlBase + "/groups/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Group.messages.destroyAll() instead.
        "::delete::group::messages": {
          url: urlBase + "/groups/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Group.messages.count() instead.
        "::count::group::messages": {
          url: urlBase + "/groups/:id/messages/count",
          method: "GET"
        },

        // INTERNAL. Use Player.messages.findById() instead.
        "::findById::player::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/messages/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.messages.destroyById() instead.
        "::destroyById::player::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/messages/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.messages.updateById() instead.
        "::updateById::player::messages": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/messages/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.messages() instead.
        "::get::player::messages": {
          isArray: true,
          url: urlBase + "/players/:id/messages",
          method: "GET"
        },

        // INTERNAL. Use Player.messages.create() instead.
        "::create::player::messages": {
          url: urlBase + "/players/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Player.messages.createMany() instead.
        "::createMany::player::messages": {
          isArray: true,
          url: urlBase + "/players/:id/messages",
          method: "POST"
        },

        // INTERNAL. Use Player.messages.destroyAll() instead.
        "::delete::player::messages": {
          url: urlBase + "/players/:id/messages",
          method: "DELETE"
        },

        // INTERNAL. Use Player.messages.count() instead.
        "::count::player::messages": {
          url: urlBase + "/players/:id/messages/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Message#updateOrCreate
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Message` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Message#update
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Message#destroyById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Message#removeById
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Message#modelName
    * @propertyOf lbServices.Message
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Message`.
    */
    R.modelName = "Message";


        /**
         * @ngdoc method
         * @name lbServices.Message#group
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Fetches belongsTo relation group.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Group` object.)
         * </em>
         */
        R.group = function() {
          var TargetResource = $injector.get("Group");
          var action = TargetResource["::get::message::group"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Message#player
         * @methodOf lbServices.Message
         *
         * @description
         *
         * Fetches belongsTo relation player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.player = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::message::player"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.File
 * @header lbServices.File
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `File` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "File",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/files/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.File#create
         * @methodOf lbServices.File
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/files",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#createMany
         * @methodOf lbServices.File
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/files",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#upsert
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/files",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#exists
         * @methodOf lbServices.File
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/files/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#findById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/files/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#find
         * @methodOf lbServices.File
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#findOne
         * @methodOf lbServices.File
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/files/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#updateAll
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/files/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#deleteById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/files/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#count
         * @methodOf lbServices.File
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/files/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#prototype$updateAttributes
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/files/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#createChangeStream
         * @methodOf lbServices.File
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/files/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#upload
         * @methodOf lbServices.File
         *
         * @description
         *
         * Uploads a file
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {Object} postData Request data.
         *
         *  - `ctx` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        "upload": {
          url: urlBase + "/files/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.File#download
         * @methodOf lbServices.File
         *
         * @description
         *
         * download a file
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `ctx` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         *  - `width` – `{Number=}` - 
         *
         *  - `height` – `{Number=}` - 
         *
         *  - `file` – `{String}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "download": {
          url: urlBase + "/files/download/:file",
          method: "GET"
        },

        // INTERNAL. Use Player.avatar() instead.
        "::get::player::avatar": {
          url: urlBase + "/players/:id/avatar",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.File#updateOrCreate
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `File` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.File#update
         * @methodOf lbServices.File
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.File#destroyById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.File#removeById
         * @methodOf lbServices.File
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.File#modelName
    * @propertyOf lbServices.File
    * @description
    * The name of the model represented by this $resource,
    * i.e. `File`.
    */
    R.modelName = "File";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "destroyContainer": {
          url: urlBase + "/containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        "removeFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` - 
         */
        "upload": {
          url: urlBase + "/containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` - 
         *
         *  - `file` – `{string=}` - 
         *
         *  - `res` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Chronique
 * @header lbServices.Chronique
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Chronique` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Chronique",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Chroniques/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Chronique.player() instead.
        "prototype$__get__player": {
          url: urlBase + "/Chroniques/:id/player",
          method: "GET"
        },

        // INTERNAL. Use Chronique.chapters.findById() instead.
        "prototype$__findById__chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chroniques/:id/chapters/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chronique.chapters.destroyById() instead.
        "prototype$__destroyById__chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chroniques/:id/chapters/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chronique.chapters.updateById() instead.
        "prototype$__updateById__chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chroniques/:id/chapters/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chronique.character() instead.
        "prototype$__get__character": {
          url: urlBase + "/Chroniques/:id/character",
          method: "GET"
        },

        // INTERNAL. Use Chronique.chapters() instead.
        "prototype$__get__chapters": {
          isArray: true,
          url: urlBase + "/Chroniques/:id/chapters",
          method: "GET"
        },

        // INTERNAL. Use Chronique.chapters.create() instead.
        "prototype$__create__chapters": {
          url: urlBase + "/Chroniques/:id/chapters",
          method: "POST"
        },

        // INTERNAL. Use Chronique.chapters.destroyAll() instead.
        "prototype$__delete__chapters": {
          url: urlBase + "/Chroniques/:id/chapters",
          method: "DELETE"
        },

        // INTERNAL. Use Chronique.chapters.count() instead.
        "prototype$__count__chapters": {
          url: urlBase + "/Chroniques/:id/chapters/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#create
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Chroniques",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#createMany
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Chroniques",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#upsert
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Chroniques",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#exists
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Chroniques/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#findById
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Chroniques/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#find
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Chroniques",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#findOne
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Chroniques/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#updateAll
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Chroniques/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#deleteById
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Chroniques/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#count
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Chroniques/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#prototype$updateAttributes
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Chroniques/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chronique#createChangeStream
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Chroniques/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Player.chroniques.findById() instead.
        "::findById::player::chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chroniques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.chroniques.destroyById() instead.
        "::destroyById::player::chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chroniques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chroniques.updateById() instead.
        "::updateById::player::chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chroniques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.chroniques() instead.
        "::get::player::chroniques": {
          isArray: true,
          url: urlBase + "/players/:id/chroniques",
          method: "GET"
        },

        // INTERNAL. Use Player.chroniques.create() instead.
        "::create::player::chroniques": {
          url: urlBase + "/players/:id/chroniques",
          method: "POST"
        },

        // INTERNAL. Use Player.chroniques.createMany() instead.
        "::createMany::player::chroniques": {
          isArray: true,
          url: urlBase + "/players/:id/chroniques",
          method: "POST"
        },

        // INTERNAL. Use Player.chroniques.destroyAll() instead.
        "::delete::player::chroniques": {
          url: urlBase + "/players/:id/chroniques",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chroniques.count() instead.
        "::count::player::chroniques": {
          url: urlBase + "/players/:id/chroniques/count",
          method: "GET"
        },

        // INTERNAL. Use Chapter.chronique() instead.
        "::get::Chapter::chronique": {
          url: urlBase + "/Chapters/:id/chronique",
          method: "GET"
        },

        // INTERNAL. Use Character.chroniques.findById() instead.
        "::findById::Character::chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Characters/:id/chroniques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Character.chroniques.destroyById() instead.
        "::destroyById::Character::chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Characters/:id/chroniques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Character.chroniques.updateById() instead.
        "::updateById::Character::chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Characters/:id/chroniques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Character.chroniques() instead.
        "::get::Character::chroniques": {
          isArray: true,
          url: urlBase + "/Characters/:id/chroniques",
          method: "GET"
        },

        // INTERNAL. Use Character.chroniques.create() instead.
        "::create::Character::chroniques": {
          url: urlBase + "/Characters/:id/chroniques",
          method: "POST"
        },

        // INTERNAL. Use Character.chroniques.createMany() instead.
        "::createMany::Character::chroniques": {
          isArray: true,
          url: urlBase + "/Characters/:id/chroniques",
          method: "POST"
        },

        // INTERNAL. Use Character.chroniques.destroyAll() instead.
        "::delete::Character::chroniques": {
          url: urlBase + "/Characters/:id/chroniques",
          method: "DELETE"
        },

        // INTERNAL. Use Character.chroniques.count() instead.
        "::count::Character::chroniques": {
          url: urlBase + "/Characters/:id/chroniques/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Chronique#updateOrCreate
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Chronique#update
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Chronique#destroyById
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Chronique#removeById
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Chronique#modelName
    * @propertyOf lbServices.Chronique
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Chronique`.
    */
    R.modelName = "Chronique";


        /**
         * @ngdoc method
         * @name lbServices.Chronique#player
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Fetches belongsTo relation player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.player = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::Chronique::player"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Chronique.chapters
     * @header lbServices.Chronique.chapters
     * @object
     * @description
     *
     * The object `Chronique.chapters` groups methods
     * manipulating `Chapter` instances related to `Chronique`.
     *
     * Call {@link lbServices.Chronique#chapters Chronique.chapters()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Chronique#chapters
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Queries chapters of Chronique.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::get::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique.chapters#count
         * @methodOf lbServices.Chronique.chapters
         *
         * @description
         *
         * Counts chapters of Chronique.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.chapters.count = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::count::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique.chapters#create
         * @methodOf lbServices.Chronique.chapters
         *
         * @description
         *
         * Creates a new instance in chapters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.create = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::create::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique.chapters#createMany
         * @methodOf lbServices.Chronique.chapters
         *
         * @description
         *
         * Creates a new instance in chapters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.createMany = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::createMany::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique.chapters#destroyAll
         * @methodOf lbServices.Chronique.chapters
         *
         * @description
         *
         * Deletes all chapters of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chapters.destroyAll = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::delete::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique.chapters#destroyById
         * @methodOf lbServices.Chronique.chapters
         *
         * @description
         *
         * Delete a related item by id for chapters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chapters
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chapters.destroyById = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::destroyById::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique.chapters#findById
         * @methodOf lbServices.Chronique.chapters
         *
         * @description
         *
         * Find a related item by id for chapters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chapters
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.findById = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::findById::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique.chapters#updateById
         * @methodOf lbServices.Chronique.chapters
         *
         * @description
         *
         * Update a related item by id for chapters.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chapters
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R.chapters.updateById = function() {
          var TargetResource = $injector.get("Chapter");
          var action = TargetResource["::updateById::Chronique::chapters"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chronique#character
         * @methodOf lbServices.Chronique
         *
         * @description
         *
         * Fetches belongsTo relation character.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        R.character = function() {
          var TargetResource = $injector.get("Character");
          var action = TargetResource["::get::Chronique::character"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Chapter
 * @header lbServices.Chapter
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Chapter` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Chapter",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Chapters/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Chapter.chronique() instead.
        "prototype$__get__chronique": {
          url: urlBase + "/Chapters/:id/chronique",
          method: "GET"
        },

        // INTERNAL. Use Chapter.player() instead.
        "prototype$__get__player": {
          url: urlBase + "/Chapters/:id/player",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#create
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Chapters",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#createMany
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Chapters",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#upsert
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Chapters",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#exists
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Chapters/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#findById
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Chapters/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#find
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Chapters",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#findOne
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Chapters/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#updateAll
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Chapters/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#deleteById
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Chapters/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#count
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Chapters/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#prototype$updateAttributes
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Chapters/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Chapter#createChangeStream
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Chapters/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Player.chapters.findById() instead.
        "::findById::player::chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chapters/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.chapters.destroyById() instead.
        "::destroyById::player::chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chapters/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chapters.updateById() instead.
        "::updateById::player::chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/chapters/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.chapters() instead.
        "::get::player::chapters": {
          isArray: true,
          url: urlBase + "/players/:id/chapters",
          method: "GET"
        },

        // INTERNAL. Use Player.chapters.create() instead.
        "::create::player::chapters": {
          url: urlBase + "/players/:id/chapters",
          method: "POST"
        },

        // INTERNAL. Use Player.chapters.createMany() instead.
        "::createMany::player::chapters": {
          isArray: true,
          url: urlBase + "/players/:id/chapters",
          method: "POST"
        },

        // INTERNAL. Use Player.chapters.destroyAll() instead.
        "::delete::player::chapters": {
          url: urlBase + "/players/:id/chapters",
          method: "DELETE"
        },

        // INTERNAL. Use Player.chapters.count() instead.
        "::count::player::chapters": {
          url: urlBase + "/players/:id/chapters/count",
          method: "GET"
        },

        // INTERNAL. Use Chronique.chapters.findById() instead.
        "::findById::Chronique::chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chroniques/:id/chapters/:fk",
          method: "GET"
        },

        // INTERNAL. Use Chronique.chapters.destroyById() instead.
        "::destroyById::Chronique::chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chroniques/:id/chapters/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Chronique.chapters.updateById() instead.
        "::updateById::Chronique::chapters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Chroniques/:id/chapters/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Chronique.chapters() instead.
        "::get::Chronique::chapters": {
          isArray: true,
          url: urlBase + "/Chroniques/:id/chapters",
          method: "GET"
        },

        // INTERNAL. Use Chronique.chapters.create() instead.
        "::create::Chronique::chapters": {
          url: urlBase + "/Chroniques/:id/chapters",
          method: "POST"
        },

        // INTERNAL. Use Chronique.chapters.createMany() instead.
        "::createMany::Chronique::chapters": {
          isArray: true,
          url: urlBase + "/Chroniques/:id/chapters",
          method: "POST"
        },

        // INTERNAL. Use Chronique.chapters.destroyAll() instead.
        "::delete::Chronique::chapters": {
          url: urlBase + "/Chroniques/:id/chapters",
          method: "DELETE"
        },

        // INTERNAL. Use Chronique.chapters.count() instead.
        "::count::Chronique::chapters": {
          url: urlBase + "/Chroniques/:id/chapters/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Chapter#updateOrCreate
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chapter` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Chapter#update
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Chapter#destroyById
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Chapter#removeById
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Chapter#modelName
    * @propertyOf lbServices.Chapter
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Chapter`.
    */
    R.modelName = "Chapter";


        /**
         * @ngdoc method
         * @name lbServices.Chapter#chronique
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Fetches belongsTo relation chronique.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chronique = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::get::Chapter::chronique"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Chapter#player
         * @methodOf lbServices.Chapter
         *
         * @description
         *
         * Fetches belongsTo relation player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.player = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::Chapter::player"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Character
 * @header lbServices.Character
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Character` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Character",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Characters/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Character.player() instead.
        "prototype$__get__player": {
          url: urlBase + "/Characters/:id/player",
          method: "GET"
        },

        // INTERNAL. Use Character.chroniques.findById() instead.
        "prototype$__findById__chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Characters/:id/chroniques/:fk",
          method: "GET"
        },

        // INTERNAL. Use Character.chroniques.destroyById() instead.
        "prototype$__destroyById__chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Characters/:id/chroniques/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Character.chroniques.updateById() instead.
        "prototype$__updateById__chroniques": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Characters/:id/chroniques/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Character.chroniques() instead.
        "prototype$__get__chroniques": {
          isArray: true,
          url: urlBase + "/Characters/:id/chroniques",
          method: "GET"
        },

        // INTERNAL. Use Character.chroniques.create() instead.
        "prototype$__create__chroniques": {
          url: urlBase + "/Characters/:id/chroniques",
          method: "POST"
        },

        // INTERNAL. Use Character.chroniques.destroyAll() instead.
        "prototype$__delete__chroniques": {
          url: urlBase + "/Characters/:id/chroniques",
          method: "DELETE"
        },

        // INTERNAL. Use Character.chroniques.count() instead.
        "prototype$__count__chroniques": {
          url: urlBase + "/Characters/:id/chroniques/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#create
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Characters",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#createMany
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Characters",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#upsert
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Characters",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#exists
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Characters/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#findById
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Characters/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#find
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Characters",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#findOne
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Characters/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#updateAll
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Characters/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#deleteById
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Characters/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#count
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Characters/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#prototype$updateAttributes
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Characters/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Character#createChangeStream
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Characters/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Player.characters.findById() instead.
        "::findById::player::characters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/characters/:fk",
          method: "GET"
        },

        // INTERNAL. Use Player.characters.destroyById() instead.
        "::destroyById::player::characters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/characters/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Player.characters.updateById() instead.
        "::updateById::player::characters": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/players/:id/characters/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Player.characters() instead.
        "::get::player::characters": {
          isArray: true,
          url: urlBase + "/players/:id/characters",
          method: "GET"
        },

        // INTERNAL. Use Player.characters.create() instead.
        "::create::player::characters": {
          url: urlBase + "/players/:id/characters",
          method: "POST"
        },

        // INTERNAL. Use Player.characters.createMany() instead.
        "::createMany::player::characters": {
          isArray: true,
          url: urlBase + "/players/:id/characters",
          method: "POST"
        },

        // INTERNAL. Use Player.characters.destroyAll() instead.
        "::delete::player::characters": {
          url: urlBase + "/players/:id/characters",
          method: "DELETE"
        },

        // INTERNAL. Use Player.characters.count() instead.
        "::count::player::characters": {
          url: urlBase + "/players/:id/characters/count",
          method: "GET"
        },

        // INTERNAL. Use Chronique.character() instead.
        "::get::Chronique::character": {
          url: urlBase + "/Chroniques/:id/character",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Character#updateOrCreate
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Character` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Character#update
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Character#destroyById
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Character#removeById
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Character#modelName
    * @propertyOf lbServices.Character
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Character`.
    */
    R.modelName = "Character";


        /**
         * @ngdoc method
         * @name lbServices.Character#player
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Fetches belongsTo relation player.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Player` object.)
         * </em>
         */
        R.player = function() {
          var TargetResource = $injector.get("Player");
          var action = TargetResource["::get::Character::player"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Character.chroniques
     * @header lbServices.Character.chroniques
     * @object
     * @description
     *
     * The object `Character.chroniques` groups methods
     * manipulating `Chronique` instances related to `Character`.
     *
     * Call {@link lbServices.Character#chroniques Character.chroniques()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Character#chroniques
         * @methodOf lbServices.Character
         *
         * @description
         *
         * Queries chroniques of Character.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::get::Character::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Character.chroniques#count
         * @methodOf lbServices.Character.chroniques
         *
         * @description
         *
         * Counts chroniques of Character.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.chroniques.count = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::count::Character::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Character.chroniques#create
         * @methodOf lbServices.Character.chroniques
         *
         * @description
         *
         * Creates a new instance in chroniques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.create = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::create::Character::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Character.chroniques#createMany
         * @methodOf lbServices.Character.chroniques
         *
         * @description
         *
         * Creates a new instance in chroniques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.createMany = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::createMany::Character::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Character.chroniques#destroyAll
         * @methodOf lbServices.Character.chroniques
         *
         * @description
         *
         * Deletes all chroniques of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chroniques.destroyAll = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::delete::Character::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Character.chroniques#destroyById
         * @methodOf lbServices.Character.chroniques
         *
         * @description
         *
         * Delete a related item by id for chroniques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chroniques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.chroniques.destroyById = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::destroyById::Character::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Character.chroniques#findById
         * @methodOf lbServices.Character.chroniques
         *
         * @description
         *
         * Find a related item by id for chroniques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chroniques
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.findById = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::findById::Character::chroniques"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Character.chroniques#updateById
         * @methodOf lbServices.Character.chroniques
         *
         * @description
         *
         * Update a related item by id for chroniques.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for chroniques
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Chronique` object.)
         * </em>
         */
        R.chroniques.updateById = function() {
          var TargetResource = $injector.get("Chronique");
          var action = TargetResource["::updateById::Character::chroniques"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
