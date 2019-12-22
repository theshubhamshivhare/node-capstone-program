module.exports = {
    '/api/order/{orderID}': {
        'put': {
            'tags':['order-service'],
            'description': 'Update Order',
            'summary': 'Update Order',
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
                'description': '{\r\n    \"orderTotalAmount\": 440,\r\n    \"foodID\": \"5df9d61e0aacf663649df197"\,\r\n    \"dishName\": \"Kadai Paneer"\,\r\n    \"quantity\": 2}',
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