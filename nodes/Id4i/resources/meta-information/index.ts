import type { INodeProperties } from 'n8n-workflow';

export const metaInformationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Meta Information"
					]
				}
			},
			"options": [
				{
					"name": "Application Info",
					"value": "Application Info",
					"action": "Retrieve version information about ID4i",
					"description": "Retrieving version information about ID4i.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/info"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Meta Information"
					],
					"operation": [
						"Application Info"
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
						"Meta Information"
					],
					"operation": [
						"Application Info"
					]
				}
			}
		},
];
