module.exports = {
    '/campaign/{id}': {
        'get': {
            'tags':['Campaign'],
            'description': 'Get Campaign by Id',
            'summary': 'Get Campaign by Id',
            'parameters': [{
                'name': 'id',
                'in': 'path',
                'description': 'Campaign id',
                'schema': {
                    'type': 'string'
                },
                'required': true
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
        },
        'put': {
            'tags':['Campaign'],
            'description': 'Update Campaign',
            'summary': 'Update Campaign',
            'parameters': [{
                'name': 'id',
                'in': 'path',
                'description': 'Campaign id',
                'schema': {
                    'type': 'string'
                },
                'required': true
            },{
                "in": "body",
                "name": "body",
                'description': '{\r\n    \"campaign_type_id\": 1,\r\n    \"publication_id\": 1,\r\n    \"campaign_desc\": \"New description\",\r\n    \"campaign_year\": \"2018\",\r\n    \"campaign_month\": \"01\",\r\n    \"forecast\": {\r\n      \"mail_qty\": \"2\",\r\n      \"gross_response_pct\": 1,\r\n      \"payup_pct\": 1\r\n    },\r\n    \"mail_dates\": [{\r\n      \"campaign_effort_id\": 3,\r\n      \"effort_mail_date\": \"2018-09-09\",\r\n      \"effort_number\": 10,\r\n      \"trigger_effort_flag\": \"Y\"\r\n    },{\r\n      \"campaign_effort_id\": 22,\r\n      \"effort_mail_date\": \"2018-09-09\",\r\n      \"effort_number\": 11,\r\n      \"trigger_effort_flag\": \"Y\"\r\n    },\r\n    {\r\n      \"effort_mail_date\": \"2018-02-09\",\r\n      \"effort_number\": 22,\r\n      \"trigger_effort_flag\": \"Y\"\r\n    }\r\n    ]\r\n} ',
                "required": false,
            }],
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
            }
        },
        'delete': {
            'tags':['Campaign'],
            'description': 'Delete Campaign',
            'summary': 'Delete Campaign by Campaign Id',
            'parameters': [{
                'name': 'id',
                'in': 'path',
                'description': 'Campaign id',
                'schema': {
                    'type': 'string'
                },
                'required': true
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
    '/campaigns/{campaign_type_id}/{publication_id}/{time_filter}': {
        'get': {
            'tags':['Campaign'],
            'description': 'Search By Campaign',
            'summary': 'Search By Campaign',
            'parameters': [{
                'name': 'campaign_type_id',
                'in': 'path',
                'description': 'Campaign Type id',
                'schema': {
                    'type': 'string'
                },
                'required': true
            },{
                'name': 'publication_id',
                'in': 'path',
                'description': 'Publication id',
                'schema': {
                    'type': 'string'
                },
                'required': true
            },{
                'name': 'time_filter',
                'in': 'path',
                'description': 'Time Filter',
                'schema': {
                    'type': 'string'
                },
                'required': true
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
    '/campaign': {
        'post': {
            'tags':['Campaign'],
            'description': 'Create Campaign',
            'summary': 'Create Campaign',
            'parameters': [
                {
                "in": "body",
                "name": "body",
                'description': '{\r\n    \"campaign_type_id\": 1,\r\n    \"publication_id\": 1,\r\n    \"campaign_desc\": \"New description\",\r\n    \"campaign_year\": \"2018\",\r\n    \"campaign_month\": \"01\",\r\n    \"forecast\": {\r\n      \"mail_qty\": \"2\",\r\n      \"gross_response_pct\": 1,\r\n      \"payup_pct\": 1\r\n    },\r\n    \"mail_dates\": [{\r\n      \"campaign_effort_id\": 3,\r\n      \"effort_mail_date\": \"2018-09-09\",\r\n      \"effort_number\": 10,\r\n      \"trigger_effort_flag\": \"Y\"\r\n    },{\r\n      \"campaign_effort_id\": 22,\r\n      \"effort_mail_date\": \"2018-09-09\",\r\n      \"effort_number\": 11,\r\n      \"trigger_effort_flag\": \"Y\"\r\n    },\r\n    {\r\n      \"effort_mail_date\": \"2018-02-09\",\r\n      \"effort_number\": 22,\r\n      \"trigger_effort_flag\": \"Y\"\r\n    }\r\n    ]\r\n} ',
                "required": false,
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
            }
        }
    }
}