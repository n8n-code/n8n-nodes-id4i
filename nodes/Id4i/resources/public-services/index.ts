import type { INodeProperties } from 'n8n-workflow';

export const publicServicesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					]
				}
			},
			"options": [
				{
					"name": "List All Public Documents",
					"value": "List All Public Documents",
					"action": "List public documents",
					"description": "Listing all public documents of an id4n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/documents/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Read Public Document",
					"value": "Read Public Document",
					"action": "Read public document contents",
					"description": "Read public document contents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}"
						}
					}
				},
				{
					"name": "Get Public Document",
					"value": "Get Public Document",
					"action": "Retrieve a public document (meta-data only, no content)",
					"description": "Retrieve a public document (meta-data only, no content)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}/metadata"
						}
					}
				},
				{
					"name": "List Public History",
					"value": "List Public History",
					"action": "Shows the public history of the given GUID",
					"description": "Only contains public history items",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/history/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Resolve Image Using GET",
					"value": "Resolve Image Using GET",
					"action": "Resolve image",
					"description": "Resolve image",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/image/{{$parameter[\"imageID\"]}}"
						}
					}
				},
				{
					"name": "Read Organization Info",
					"value": "Read Organization Info",
					"action": "Read public organization information",
					"description": "Read public organization information",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/organizations/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Get Routes",
					"value": "Get Routes",
					"action": "Retrieve all public routes for a GUID",
					"description": "Retrieve all public routes for a GUID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/routes/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Go",
					"value": "Go",
					"action": "Forward",
					"description": "Forwarding to the designated route defined in the routing,",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/go/{{$parameter[\"guid\"]}}"
						}
					}
				},
				{
					"name": "Resolve Who Is Entry",
					"value": "Resolve Who Is Entry",
					"action": "Resolve owner of id4n",
					"description": "Resolve owner of id4n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/whois/{{$parameter[\"id4n\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/public/documents/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List All Public Documents"
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
						"Public Services"
					],
					"operation": [
						"List All Public Documents"
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
						"Public Services"
					],
					"operation": [
						"List All Public Documents"
					]
				}
			}
		},
		{
			"displayName": "Owner",
			"name": "owner",
			"description": "Filter by owner organization",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List All Public Documents"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Start with the n-th element",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List All Public Documents"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum count of returned elements",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List All Public Documents"
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
						"Public Services"
					],
					"operation": [
						"List All Public Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/documents/{id4n}/{organizationId}/{fileName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Read Public Document"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "organizationId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Read Public Document"
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
						"Public Services"
					],
					"operation": [
						"Read Public Document"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Read Public Document"
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
						"Public Services"
					],
					"operation": [
						"Read Public Document"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Get Public Document"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "organizationId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Get Public Document"
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
						"Public Services"
					],
					"operation": [
						"Get Public Document"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Get Public Document"
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
						"Public Services"
					],
					"operation": [
						"Get Public Document"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/history/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List Public History"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "GUID to retrieve the history for",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List Public History"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "Start with the n-th element",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List Public History"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The maximum count of returned elements",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"List Public History"
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
						"Public Services"
					],
					"operation": [
						"List Public History"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/image/{imageID}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Resolve Image Using GET"
					]
				}
			}
		},
		{
			"displayName": "Image ID",
			"name": "imageID",
			"required": true,
			"description": "The id of the image to be resolved.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Resolve Image Using GET"
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
						"Public Services"
					],
					"operation": [
						"Resolve Image Using GET"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/organizations/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Read Organization Info"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "Organization ID",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Read Organization Info"
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
						"Public Services"
					],
					"operation": [
						"Read Organization Info"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/routes/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Get Routes"
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
						"Public Services"
					],
					"operation": [
						"Get Routes"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"required": true,
			"description": "type",
			"default": "web",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Get Routes"
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
						"Public Services"
					],
					"operation": [
						"Get Routes"
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
						"Public Services"
					],
					"operation": [
						"Get Routes"
					]
				}
			}
		},
		{
			"displayName": "GET /go/{guid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Go"
					]
				}
			}
		},
		{
			"displayName": "Guid",
			"name": "guid",
			"required": true,
			"description": "guid",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Go"
					]
				}
			}
		},
		{
			"displayName": "GET /whois/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Public Services"
					],
					"operation": [
						"Resolve Who Is Entry"
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
						"Public Services"
					],
					"operation": [
						"Resolve Who Is Entry"
					]
				}
			}
		},
];
