module.exports = {
    '/api/calculateamount': {
        'get': {
            'tags':['order-service'],
            'description': 'Calculate Orders Amount',
            'summary': 'Calculate Orders Amount
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