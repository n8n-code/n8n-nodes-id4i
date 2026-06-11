import type { INodeProperties } from 'n8n-workflow';

export const whoIsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Who Is"
					]
				}
			},
			"options": [
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
						"Who Is"
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
						"Who Is"
					],
					"operation": [
						"Resolve Who Is Entry"
					]
				}
			}
		},
];
