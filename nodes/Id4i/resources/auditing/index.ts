import type { INodeProperties } from 'n8n-workflow';

export const auditingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Auditing"
					]
				}
			},
			"options": [
				{
					"name": "List Organization Change Log",
					"value": "List Organization Change Log",
					"action": "List change log entries of an organization",
					"description": "Listing change log entries of the specified organization id.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/changelog/organization/{{$parameter[\"organizationId\"]}}/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/changelog/organization/{organizationId}/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace identifying the organization whose change log entries are to be listed",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
					]
				}
			}
		},
		{
			"displayName": "Message Mime Type",
			"name": "messageMimeType",
			"description": "The Mime-type for the message format that should be returned. e.g. 'text/plain' or 'text/mustache' ",
			"default": "text/mustache",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "messageMimeType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "From date time as UTC Date-Time format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "fromDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "To date time as UTC Date-Time format",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "toDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
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
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
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
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
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
						"Auditing"
					],
					"operation": [
						"List Organization Change Log"
					]
				}
			}
		},
];
