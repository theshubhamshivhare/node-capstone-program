module.exports = {
	'/panel/{id}': {
		'get': {
			'tags':['Panel'],
			'description': 'Get Panel by Id',
			'summary': 'Get Panel by Id',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Panel id',
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
			'tags':['Panel'],
			'description': 'Update Panel',
			'summary': 'Update Panel',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Panel id',
				'schema': {
					'type': 'string'
				},
				'required': true
			},{
				"in": "body",
				"name": "body",
				'description': '{\"panel_type_id\":1} ',
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
			'tags':['Panel'],
			'description': 'Delete Panel',
			'summary': 'Delete Panel by Panel Id',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Panel id',
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
	'/panel': {
		'post': {
			'tags':['Panel'],
			'description': 'Create Panel',
			'summary': 'Create Panel',
			'parameters': [{
				'name': 'id',
				'in': 'path',
				'description': 'Panel id',
				'schema': {
					'type': 'string'
				},
				'required': true
			},{
				"in": "body",
				"name": "body",
				'description': '{\"panel_type_id\":1}',
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