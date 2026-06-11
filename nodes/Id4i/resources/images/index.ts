import type { INodeProperties } from 'n8n-workflow';

export const imagesDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Images"
					]
				}
			},
			"options": [
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
				}
			],
			"default": ""
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
						"Images"
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
						"Images"
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
						"Images"
					],
					"operation": [
						"Resolve Image Using GET"
					]
				}
			}
		},
];
