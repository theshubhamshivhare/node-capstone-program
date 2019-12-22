module.exports = {
    '/api/search': {
        'get': {
            'tags':['search-service'],
            'description': 'Search Restaurants',
            'summary': 'Search Restaurants',
            'parameters': [{
                'name': 'city',
                'in': 'query',
                'description': 'Search Type City',
                'schema': {
                    'type': 'string'
                }
            },
            {
                'name': 'restaurantName',
                'in': 'query',
                'description': 'Search Type Restaurant Name',
                'schema': {
                    'type': 'string'
                }
            },
            {
                'name': 'userRating',
                'in': 'query',
                'description': 'Search Type User Rating',
                'schema': {
                    'type': 'number'
                }
            },
            {
                'name': 'budget',
                'in': 'query',
                'description': 'Search Type Budget',
                'schema': {
                    'type': 'number'
                }
            },
            {
                'name': 'cuisine',
                'in': 'query',
                'description': 'Search Type Cuisine',
                'schema': {
                    'type': 'string'
                }
            },
            {
                'name': 'menu',
                'in': 'query',
                'description': 'Search Type Menu',
                'schema': {
                    'type': 'string'
                }
            },
                {
                'name': 'location',
                'in': 'query',
                'description': 'Search Type Location',
                'schema': {
                    'type': 'string'
                }
                }
            ],
            'responses': {
                '200': {
                    'description': 'OK',
                    'schema': {
                        'type': 'object',
                        'properties': {
                            'success': {
                                'type': 'string'
                            }
                        }
                    }
                },
                '400': {
                    'description': 'Bad request',
                    'schema': {
                        'type': 'object',
                        'properties': {
                            'err': {
                                'type': 'string'
                            }
                        }
                    }
                }
            }
        }
    },
}