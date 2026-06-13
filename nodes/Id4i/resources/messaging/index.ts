import type { INodeProperties } from 'n8n-workflow';

export const messagingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					]
				}
			},
			"options": [
				{
					"name": "Get Default Queue",
					"value": "Get Default Queue",
					"action": "Get Default Queue",
					"description": "",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/messaging"
						}
					}
				},
				{
					"name": "Patch Default Queue",
					"value": "Patch Default Queue",
					"action": "Patch Default Queue",
					"description": "",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/messaging"
						}
					}
				},
				{
					"name": "Enqueue Custom Message",
					"value": "Enqueue Custom Message",
					"action": "Enqueue a custom message",
					"description": "Enqueue a custom organisation message with custom data.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/messaging/enqueueCustomMessage"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/messaging",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Get Default Queue"
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
						"Messaging"
					],
					"operation": [
						"Get Default Queue"
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
						"Messaging"
					],
					"operation": [
						"Get Default Queue"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/organizations/{organizationId}/messaging",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Patch Default Queue"
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
						"Messaging"
					],
					"operation": [
						"Patch Default Queue"
					]
				}
			}
		},
		{
			"displayName": "Active",
			"name": "active",
			"type": "boolean",
			"default": true,
			"description": "If this value is set to false the queue will be deleted.",
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
						"Messaging"
					],
					"operation": [
						"Patch Default Queue"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "<default>",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Patch Default Queue"
					]
				}
			}
		},
		{
			"displayName": "Purge Queue",
			"name": "purgeQueue",
			"type": "boolean",
			"default": false,
			"description": "Set this value to true if you want to purge the queue.",
			"routing": {
				"send": {
					"property": "purgeQueue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Patch Default Queue"
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
						"Messaging"
					],
					"operation": [
						"Patch Default Queue"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/organizations/{organizationId}/messaging/enqueueCustomMessage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Enqueue Custom Message"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The organisation namespace",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Enqueue Custom Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "data",
			"type": "json",
			"default": "\"x = y\"",
			"description": "Custom data in a map. You may use JSON content",
			"routing": {
				"send": {
					"property": "data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Enqueue Custom Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "<event name>",
			"description": "The name of the message (organisation specific)",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Messaging"
					],
					"operation": [
						"Enqueue Custom Message"
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
						"Messaging"
					],
					"operation": [
						"Enqueue Custom Message"
					]
				}
			}
		},
];
