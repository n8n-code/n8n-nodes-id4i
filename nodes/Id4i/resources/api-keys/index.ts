import type { INodeProperties } from 'n8n-workflow';

export const apiKeysDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					]
				}
			},
			"options": [
				{
					"name": "List All API Keys Of Organization",
					"value": "List All API Keys Of Organization",
					"action": "Find API key by organization",
					"description": "Finding all API key assigned to the specified organization in a paginated manner.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/apikeys"
						}
					}
				},
				{
					"name": "Create New API Key",
					"value": "Create New API Key",
					"action": "Create API key",
					"description": "Creation of a new API key.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/apikeys"
						}
					}
				},
				{
					"name": "List All API Key Privileges",
					"value": "List All API Key Privileges",
					"action": "List all privileges",
					"description": "Listing all possible API key privileges.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/apikeys/privileges"
						}
					}
				},
				{
					"name": "Delete API Key",
					"value": "Delete API Key",
					"action": "Delete API key",
					"description": "Deletion of an API key.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}"
						}
					}
				},
				{
					"name": "Get API Key",
					"value": "Get API Key",
					"action": "Show API key",
					"description": "Showing the details of an API key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}"
						}
					}
				},
				{
					"name": "Update API Key",
					"value": "Update API Key",
					"action": "Update API keys",
					"description": "API keys can be updated with new labels, and be activated and deactivated. The secret or UUID cannot be changed.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}"
						}
					}
				},
				{
					"name": "Remove API Key Privilege",
					"value": "Remove API Key Privilege",
					"action": "Remove privilege",
					"description": "Remove privilege",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}/privileges"
						}
					}
				},
				{
					"name": "List API Key Privileges",
					"value": "List API Key Privileges",
					"action": "List privileges",
					"description": "List privileges",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}/privileges"
						}
					}
				},
				{
					"name": "Add API Key Privilege",
					"value": "Add API Key Privilege",
					"action": "Add privilege",
					"description": "Add privilege",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}/privileges"
						}
					}
				},
				{
					"name": "Remove API Key Privilege For ID 4 Ns",
					"value": "Remove API Key Privilege For ID 4 Ns",
					"action": "Remove id4ns of a privilege",
					"description": "Remove id4ns of a privilege",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}/privileges/{{$parameter[\"privilege\"]}}/id4ns"
						}
					}
				},
				{
					"name": "List ID 4 Ns",
					"value": "List ID 4 Ns",
					"action": "ID4ns of a privilege",
					"description": "Listing ID4ns of a id4n concerning privilege",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}/privileges/{{$parameter[\"privilege\"]}}/id4ns"
						}
					}
				},
				{
					"name": "Add API Key Privilege For ID 4 Ns",
					"value": "Add API Key Privilege For ID 4 Ns",
					"action": "Add ID4ns of a privilege",
					"description": "Add ID4ns of a privilege",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/apikeys/{{$parameter[\"key\"]}}/privileges/{{$parameter[\"privilege\"]}}/id4ns"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/apikeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List All API Keys Of Organization"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "The namespace of the organization to search in.",
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
						"API Keys"
					],
					"operation": [
						"List All API Keys Of Organization"
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
						"API Keys"
					],
					"operation": [
						"List All API Keys Of Organization"
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
						"API Keys"
					],
					"operation": [
						"List All API Keys Of Organization"
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
						"API Keys"
					],
					"operation": [
						"List All API Keys Of Organization"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/apikeys",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Create New API Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Create New API Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Organization ID",
			"name": "organizationId",
			"type": "string",
			"default": "de.acme",
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
						"API Keys"
					],
					"operation": [
						"Create New API Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Secret",
			"name": "secret",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Create New API Key"
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
						"API Keys"
					],
					"operation": [
						"Create New API Key"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/apikeys/privileges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List All API Key Privileges"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N Concerning",
			"name": "id4nConcerning",
			"description": "id4nConcerning",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "id4nConcerning",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List All API Key Privileges"
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
						"API Keys"
					],
					"operation": [
						"List All API Key Privileges"
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
						"API Keys"
					],
					"operation": [
						"List All API Key Privileges"
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
						"API Keys"
					],
					"operation": [
						"List All API Key Privileges"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/apikeys/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Delete API Key"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "The API key to delete.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Delete API Key"
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
						"API Keys"
					],
					"operation": [
						"Delete API Key"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/apikeys/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Get API Key"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "The API key to show.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Get API Key"
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
						"API Keys"
					],
					"operation": [
						"Get API Key"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/apikeys/{key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Update API Key"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "The API key to be updated.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Update API Key"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Update API Key"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "New Label",
			"name": "newLabel",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "newLabel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Update API Key"
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
						"API Keys"
					],
					"operation": [
						"Update API Key"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/apikeys/{key}/privileges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "key",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Privilege",
			"name": "privilege",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "privilege",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege"
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
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/apikeys/{key}/privileges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List API Key Privileges"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "key",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List API Key Privileges"
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
						"API Keys"
					],
					"operation": [
						"List API Key Privileges"
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
						"API Keys"
					],
					"operation": [
						"List API Key Privileges"
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
						"API Keys"
					],
					"operation": [
						"List API Key Privileges"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/apikeys/{key}/privileges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "key",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Privilege",
			"name": "privilege",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "privilege",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege"
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
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/apikeys/{key}/privileges/{privilege}/id4ns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "key",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "Privilege",
			"name": "privilege",
			"required": true,
			"description": "privilege",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "ID 4 Ns",
			"name": "id4ns",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of id4ns.",
			"routing": {
				"send": {
					"property": "id4ns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege For ID 4 Ns"
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
						"API Keys"
					],
					"operation": [
						"Remove API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/apikeys/{key}/privileges/{privilege}/id4ns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "key",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "Privilege",
			"name": "privilege",
			"required": true,
			"description": "privilege",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"List ID 4 Ns"
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
						"API Keys"
					],
					"operation": [
						"List ID 4 Ns"
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
						"API Keys"
					],
					"operation": [
						"List ID 4 Ns"
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
						"API Keys"
					],
					"operation": [
						"List ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/apikeys/{key}/privileges/{privilege}/id4ns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "Key",
			"name": "key",
			"required": true,
			"description": "key",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "Privilege",
			"name": "privilege",
			"required": true,
			"description": "privilege",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
		{
			"displayName": "ID 4 Ns",
			"name": "id4ns",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of id4ns.",
			"routing": {
				"send": {
					"property": "id4ns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege For ID 4 Ns"
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
						"API Keys"
					],
					"operation": [
						"Add API Key Privilege For ID 4 Ns"
					]
				}
			}
		},
];
