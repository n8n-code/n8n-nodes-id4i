import type { INodeProperties } from 'n8n-workflow';

export const billingDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					]
				}
			},
			"options": [
				{
					"name": "Get Sum For Organization",
					"value": "Get Sum For Organization",
					"action": "Get billing amount of services for a given organization",
					"description": "Get billing amount of services for a given organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/billing/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Get Positions For Organization",
					"value": "Get Positions For Organization",
					"action": "Get billing positions for a given organization",
					"description": "Get billing positions for a given organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/billing/{{$parameter[\"organizationId\"]}}/positions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/billing/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"Get Sum For Organization"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The organization to compute the billing information for",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"Get Sum For Organization"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "Billing start date",
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
						"Billing"
					],
					"operation": [
						"Get Sum For Organization"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "Billing end date",
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
						"Billing"
					],
					"operation": [
						"Get Sum For Organization"
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
						"Billing"
					],
					"operation": [
						"Get Sum For Organization"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/billing/{organizationId}/positions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"Get Positions For Organization"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The organization to compute the billing information for",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Billing"
					],
					"operation": [
						"Get Positions For Organization"
					]
				}
			}
		},
		{
			"displayName": "From Date",
			"name": "fromDate",
			"description": "Billing start date",
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
						"Billing"
					],
					"operation": [
						"Get Positions For Organization"
					]
				}
			}
		},
		{
			"displayName": "To Date",
			"name": "toDate",
			"description": "Billing end date",
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
						"Billing"
					],
					"operation": [
						"Get Positions For Organization"
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
						"Billing"
					],
					"operation": [
						"Get Positions For Organization"
					]
				}
			}
		},
];
