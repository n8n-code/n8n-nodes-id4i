import type { INodeProperties } from 'n8n-workflow';

export const routingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					]
				}
			},
			"options": [
				{
					"name": "Get Routing File",
					"value": "Get Routing File",
					"action": "Retrieve routing file",
					"description": "Retrieve routing file",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/routingfiles/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Update Routing File",
					"value": "Update Routing File",
					"action": "Store routing file",
					"description": "Store routing file",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/routingfiles/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Get Route",
					"value": "Get Route",
					"action": "Retrieve current route of a GUID (or ID4N)",
					"description": "Retrieve current route of a GUID (or ID4N)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/routingfiles/{{$parameter[\"id4n\"]}}/route/{{$parameter[\"type\"]}}"
						}
					}
				},
				{
					"name": "Get All Routes",
					"value": "Get All Routes",
					"action": "Retrieve all routes of a GUID (or ID4N)",
					"description": "Retrieve all routes of a GUID (or ID4N)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/routingfiles/{{$parameter[\"id4n\"]}}/routes/{{$parameter[\"type\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/routingfiles/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Routing File"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "id4n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Routing File"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "organizationId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "organizationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Routing File"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Routing File"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/routingfiles/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Update Routing File"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "id4n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Update Routing File"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "organizationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Update Routing File"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Routing",
			"name": "routing",
			"type": "json",
			"default": "{\n  \"options\": {},\n  \"routes\": [\n    {}\n  ]\n}",
			"routing": {
				"send": {
					"property": "routing",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Update Routing File"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Update Routing File"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/routingfiles/{id4n}/route/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Route"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "id4n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Route"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of route you want to have",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Route"
					]
				}
			}
		},
		{
			"displayName": "Private Routes",
			"name": "privateRoutes",
			"description": "privateRoutes",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "privateRoutes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Route"
					]
				}
			}
		},
		{
			"displayName": "Public Routes",
			"name": "publicRoutes",
			"description": "publicRoutes",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "publicRoutes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Route"
					]
				}
			}
		},
		{
			"displayName": "Interpolate",
			"name": "interpolate",
			"description": "interpolate",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "interpolate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Route"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get Route"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/routingfiles/{id4n}/routes/{type}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get All Routes"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "id4n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get All Routes"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "The type of route you want to have",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get All Routes"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "organizationId",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "organizationId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get All Routes"
					]
				}
			}
		},
		{
			"displayName": "Interpolate",
			"name": "interpolate",
			"description": "interpolate",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "interpolate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get All Routes"
					]
				}
			}
		},
		{
			"displayName": "Authorization API Key",
			"name": "security_authorization",
			"type": "string",
			"default": "",
			"description": "API key for Authorization (header: Authorization)",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Routing"
					],
					"operation": [
						"Get All Routes"
					]
				}
			}
		},
];
