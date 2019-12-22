module.exports = {
    '/api/fetchorders': {
        'get': {
            'tags':['order-service'],
            'description': 'Fetch Orders',
            'summary': 'Fetch Orders',
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