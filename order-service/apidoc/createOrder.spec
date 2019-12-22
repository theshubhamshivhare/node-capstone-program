module.exports = {
    '/api/placeorder': {
        'post': {
            'tags':['order-service'],
            'description': 'Create Order',
            'summary': 'Create Order',
            'parameters': [
                {
                "in": "body",
                "name": "body",
                'description': '{\r\n    \"restaurantID\": \"5df8a9e9e406e55888f01402"\,\r\n    \"restautrantName\": \"Royal Orchid Central"\,\r\n    \"orderTotalAmount\": 350,\r\n    \"city\": \"Bangalore\",\r\n    \"food\": [\r\n{\r\n      \"dishName\": \"Punjabi Paneer"\,\r\n      \"quantity\": 2,\r\n      \"price\": 200\r\n},{\r\n      \"dishName\": \"Paneer Tikka"\,\r\n      \"quantity\": 1,\r\n      \"price\": 150\r\n}]\r\n} ',
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