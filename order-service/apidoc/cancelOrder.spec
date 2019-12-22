module.exports = {
    '/api/cancelorder/{orderID}': {
        'put': {
            'tags':['order-service'],
            'description': 'Cancel Order',
            'summary': 'Cancel Order',
            'parameters': [
                {
                'name': 'orderID',
                'in': 'path',
                'description': 'Order id',
                'schema': {
                    'type': 'string'
                },
                'required': true
            },
                {
                "in": "body",
                "name": "body",
                'description': '{\r\n    \"cancelOrder\": \"Cancelled"\\r\n }',
                "required": false
                }
            ],
            'responses': {
                '200': {
                    'description': 'OK',
                    'schema': {
                        'type': 'object',
                        'properties': {
                            'success': {
                                'type': 'object',
                                'properties': {
                                    'message': {
                                        'type': 'string'
                                    }
                                }
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
            }}
    }}