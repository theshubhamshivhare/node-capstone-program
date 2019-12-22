module.exports = {
    '/api/getordersbycity': {
        'get': {
            'tags':['order-service'],
            'description': 'Fetch Orders By City',
            'summary': 'Fetch Orders By City',
             'parameters': [{
                'name': 'city',
                'in': 'query',
                'description': 'Search Type City',
                'schema': {
                    'type': 'string'
                }
            }],
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