module.exports = {
	'/key/{id}': {
		'get': {
			'tags':['Key'],
			'description': 'Get Key by Id',
			'summary': 'Get Key by Id',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Key id',
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
			'tags':['Key'],
			'description': 'Update Key',
			'summary': 'Update Key',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Key id',
				'schema': {
					'type': 'string'
				},
				'required': true
			},{
				"in": "body",
				"name": "body",
				'description': '{\"key_id\":1} ',
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
			'tags':['Key'],
			'description': 'Delete Key',
			'summary': 'Delete Key by Key Id',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Key id',
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
	'/key': {
		'post': {
			'tags':['Key'],
			'description': 'Create Key',
			'summary': 'Create Key',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Key id',
				'schema': {
					'type': 'string'
				},
				'required': true
			},{
				"in": "body",
				"name": "body",
				'description': '{\"key_id\":1}',
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
		}
	}
}