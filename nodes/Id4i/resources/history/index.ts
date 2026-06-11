import type { INodeProperties } from 'n8n-workflow';

export const historyDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					]
				}
			},
			"options": [
				{
					"name": "Filtered List",
					"value": "Filtered List",
					"action": "List history",
					"description": "Lists the history of a GUID",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/history/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Add Item",
					"value": "Add Item",
					"action": "Add history item",
					"description": "Add a new history item",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/history/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Retrieve Item",
					"value": "Retrieve Item",
					"action": "Get history item",
					"description": "Get history item",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/history/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"sequenceId\"]}}"
						}
					}
				},
				{
					"name": "Update Item",
					"value": "Update Item",
					"action": "Update history item",
					"description": "Update history item",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/history/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"sequenceId\"]}}"
						}
					}
				},
				{
					"name": "Update Item Visibility",
					"value": "Update Item Visibility",
					"action": "Set history item visibility",
					"description": "Set history item visibility",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/history/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"sequenceId\"]}}/visibility"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/history/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Filtered List"
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
						"History"
					],
					"operation": [
						"Filtered List"
					]
				}
			}
		},
		{
			"displayName": "Include Private",
			"name": "includePrivate",
			"description": "Also return private history entries",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "includePrivate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Filtered List"
					]
				}
			}
		},
		{
			"displayName": "Organization",
			"name": "organization",
			"description": "Show only entries created by one of the given organizations. This parameter can be used multiple times.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "organization",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Filtered List"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Show only entries matching one of the given history item types. This parameter can be used multiple times.",
			"default": "[\n  null\n]",
			"type": "options",
			"options": [
				{
					"name": "CREATED",
					"value": "CREATED"
				},
				{
					"name": "DESTROYED",
					"value": "DESTROYED"
				},
				{
					"name": "RECYCLED",
					"value": "RECYCLED"
				},
				{
					"name": "SHIPMENT PREPARED",
					"value": "SHIPMENT_PREPARED"
				},
				{
					"name": "STORED",
					"value": "STORED"
				},
				{
					"name": "RETRIEVED FROM STORAGE",
					"value": "RETRIEVED_FROM_STORAGE"
				},
				{
					"name": "PACKAGED",
					"value": "PACKAGED"
				},
				{
					"name": "DISPATCHED",
					"value": "DISPATCHED"
				},
				{
					"name": "RECEIVED",
					"value": "RECEIVED"
				},
				{
					"name": "DELIVERY REFUSED",
					"value": "DELIVERY_REFUSED"
				},
				{
					"name": "REPROCESSING STARTED",
					"value": "REPROCESSING_STARTED"
				},
				{
					"name": "REPROCESSING STEP STARTED",
					"value": "REPROCESSING_STEP_STARTED"
				},
				{
					"name": "REPROCESSING STEP CANCELLED",
					"value": "REPROCESSING_STEP_CANCELLED"
				},
				{
					"name": "REPROCESSING STEP FINISHED",
					"value": "REPROCESSING_STEP_FINISHED"
				},
				{
					"name": "REPROCESSING CANCELLED",
					"value": "REPROCESSING_CANCELLED"
				},
				{
					"name": "REPROCESSING FINISHED",
					"value": "REPROCESSING_FINISHED"
				},
				{
					"name": "DISASSEMBLED",
					"value": "DISASSEMBLED"
				},
				{
					"name": "MAINTENANCE STARTED",
					"value": "MAINTENANCE_STARTED"
				},
				{
					"name": "MAINTENANCE STEP STARTED",
					"value": "MAINTENANCE_STEP_STARTED"
				},
				{
					"name": "MAINTENANCE STEP CANCELLED",
					"value": "MAINTENANCE_STEP_CANCELLED"
				},
				{
					"name": "MAINTENANCE STEP FINISHED",
					"value": "MAINTENANCE_STEP_FINISHED"
				},
				{
					"name": "MAINTENANCE CANCELLED",
					"value": "MAINTENANCE_CANCELLED"
				},
				{
					"name": "MAINTENANCE FINISHED",
					"value": "MAINTENANCE_FINISHED"
				},
				{
					"name": "PRODUCTION STARTED",
					"value": "PRODUCTION_STARTED"
				},
				{
					"name": "PRODUCTION CANCELLED",
					"value": "PRODUCTION_CANCELLED"
				},
				{
					"name": "PRODUCTION FINISHED",
					"value": "PRODUCTION_FINISHED"
				},
				{
					"name": "PRODUCTION STEP STARTED",
					"value": "PRODUCTION_STEP_STARTED"
				},
				{
					"name": "PRODUCTION STEP CANCELLED",
					"value": "PRODUCTION_STEP_CANCELLED"
				},
				{
					"name": "PRODUCTION STEP FINISHED",
					"value": "PRODUCTION_STEP_FINISHED"
				},
				{
					"name": "QUALITY CHECK PERFORMED",
					"value": "QUALITY_CHECK_PERFORMED"
				}
			],
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
						"History"
					],
					"operation": [
						"Filtered List"
					]
				}
			}
		},
		{
			"displayName": "Qualifier",
			"name": "qualifier",
			"description": "Show only entries matching one of the given history item qualifiers (additional property de.id4i.history.item.qualifier). This parameter can be used multiple times.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "qualifier",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Filtered List"
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
						"History"
					],
					"operation": [
						"Filtered List"
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
						"History"
					],
					"operation": [
						"Filtered List"
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
						"History"
					],
					"operation": [
						"Filtered List"
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
						"History"
					],
					"operation": [
						"Filtered List"
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
						"History"
					],
					"operation": [
						"Filtered List"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/history/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Add Item"
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
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "Additional Properties",
			"name": "additionalProperties",
			"type": "json",
			"default": "{}",
			"description": "History items custom additional properties",
			"routing": {
				"send": {
					"property": "additionalProperties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Organization ID",
			"name": "organizationId",
			"type": "string",
			"default": "org.acme",
			"description": "Originator of the history item",
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
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "Owner Organization ID",
			"name": "ownerOrganizationId",
			"type": "string",
			"default": "de.bluerain",
			"description": "Owner of the history item",
			"routing": {
				"send": {
					"property": "ownerOrganizationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "Sequence ID",
			"name": "sequenceId",
			"type": "number",
			"default": 9784,
			"description": "Forms the primary key of the history item together with the GUID and the organizationId",
			"routing": {
				"send": {
					"property": "sequenceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "number",
			"default": 1517232722,
			"description": "History item timestamp",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "DISPATCHED",
			"description": "Type of the history item",
			"options": [
				{
					"name": "CREATED",
					"value": "CREATED"
				},
				{
					"name": "DESTROYED",
					"value": "DESTROYED"
				},
				{
					"name": "RECYCLED",
					"value": "RECYCLED"
				},
				{
					"name": "SHIPMENT PREPARED",
					"value": "SHIPMENT_PREPARED"
				},
				{
					"name": "STORED",
					"value": "STORED"
				},
				{
					"name": "RETRIEVED FROM STORAGE",
					"value": "RETRIEVED_FROM_STORAGE"
				},
				{
					"name": "PACKAGED",
					"value": "PACKAGED"
				},
				{
					"name": "DISPATCHED",
					"value": "DISPATCHED"
				},
				{
					"name": "RECEIVED",
					"value": "RECEIVED"
				},
				{
					"name": "DELIVERY REFUSED",
					"value": "DELIVERY_REFUSED"
				},
				{
					"name": "REPROCESSING STARTED",
					"value": "REPROCESSING_STARTED"
				},
				{
					"name": "REPROCESSING STEP STARTED",
					"value": "REPROCESSING_STEP_STARTED"
				},
				{
					"name": "REPROCESSING STEP CANCELLED",
					"value": "REPROCESSING_STEP_CANCELLED"
				},
				{
					"name": "REPROCESSING STEP FINISHED",
					"value": "REPROCESSING_STEP_FINISHED"
				},
				{
					"name": "REPROCESSING CANCELLED",
					"value": "REPROCESSING_CANCELLED"
				},
				{
					"name": "REPROCESSING FINISHED",
					"value": "REPROCESSING_FINISHED"
				},
				{
					"name": "DISASSEMBLED",
					"value": "DISASSEMBLED"
				},
				{
					"name": "MAINTENANCE STARTED",
					"value": "MAINTENANCE_STARTED"
				},
				{
					"name": "MAINTENANCE STEP STARTED",
					"value": "MAINTENANCE_STEP_STARTED"
				},
				{
					"name": "MAINTENANCE STEP CANCELLED",
					"value": "MAINTENANCE_STEP_CANCELLED"
				},
				{
					"name": "MAINTENANCE STEP FINISHED",
					"value": "MAINTENANCE_STEP_FINISHED"
				},
				{
					"name": "MAINTENANCE CANCELLED",
					"value": "MAINTENANCE_CANCELLED"
				},
				{
					"name": "MAINTENANCE FINISHED",
					"value": "MAINTENANCE_FINISHED"
				},
				{
					"name": "PRODUCTION STARTED",
					"value": "PRODUCTION_STARTED"
				},
				{
					"name": "PRODUCTION CANCELLED",
					"value": "PRODUCTION_CANCELLED"
				},
				{
					"name": "PRODUCTION FINISHED",
					"value": "PRODUCTION_FINISHED"
				},
				{
					"name": "PRODUCTION STEP STARTED",
					"value": "PRODUCTION_STEP_STARTED"
				},
				{
					"name": "PRODUCTION STEP CANCELLED",
					"value": "PRODUCTION_STEP_CANCELLED"
				},
				{
					"name": "PRODUCTION STEP FINISHED",
					"value": "PRODUCTION_STEP_FINISHED"
				},
				{
					"name": "QUALITY CHECK PERFORMED",
					"value": "QUALITY_CHECK_PERFORMED"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "Visibility",
			"name": "visibility",
			"type": "json",
			"default": "{\n  \"public\": true,\n  \"sharedOrganizationIds\": [\n    \"de.acme\",\n    \"com.porsche\",\n    \"de.bluerain\"\n  ]\n}",
			"routing": {
				"send": {
					"property": "visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Add Item"
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
						"History"
					],
					"operation": [
						"Add Item"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/history/{id4n}/{organizationId}/{sequenceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Retrieve Item"
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
						"History"
					],
					"operation": [
						"Retrieve Item"
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
						"History"
					],
					"operation": [
						"Retrieve Item"
					]
				}
			}
		},
		{
			"displayName": "Sequence ID",
			"name": "sequenceId",
			"required": true,
			"description": "sequenceId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Retrieve Item"
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
						"History"
					],
					"operation": [
						"Retrieve Item"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/history/{id4n}/{organizationId}/{sequenceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Update Item"
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
						"History"
					],
					"operation": [
						"Update Item"
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
						"History"
					],
					"operation": [
						"Update Item"
					]
				}
			}
		},
		{
			"displayName": "Sequence ID",
			"name": "sequenceId",
			"required": true,
			"description": "sequenceId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Update Item"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"type": "string",
			"default": "de.acme",
			"description": "New organization id displayed for this item. If given, must match the holder of GUID and the organization the history item is found under.",
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
						"History"
					],
					"operation": [
						"Update Item"
					]
				}
			}
		},
		{
			"displayName": "Visibility",
			"name": "visibility",
			"type": "json",
			"default": "{\n  \"public\": true,\n  \"sharedOrganizationIds\": [\n    \"de.acme\",\n    \"com.porsche\",\n    \"de.bluerain\"\n  ]\n}",
			"routing": {
				"send": {
					"property": "visibility",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Update Item"
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
						"History"
					],
					"operation": [
						"Update Item"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/history/{id4n}/{organizationId}/{sequenceId}/visibility",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Update Item Visibility"
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
						"History"
					],
					"operation": [
						"Update Item Visibility"
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
						"History"
					],
					"operation": [
						"Update Item Visibility"
					]
				}
			}
		},
		{
			"displayName": "Sequence ID",
			"name": "sequenceId",
			"required": true,
			"description": "sequenceId",
			"default": 0,
			"type": "number",
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Update Item Visibility"
					]
				}
			}
		},
		{
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "Document is publicly readable (if ID4N is owned by the same organization)",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Update Item Visibility"
					]
				}
			}
		},
		{
			"displayName": "Shared Organization Ids",
			"name": "sharedOrganizationIds",
			"type": "json",
			"default": "[\n  \"de.acme\",\n  \"com.porsche\",\n  \"de.bluerain\"\n]",
			"description": "Document is readable by these organizations (independend of ID4N ownership)",
			"routing": {
				"send": {
					"property": "sharedOrganizationIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"History"
					],
					"operation": [
						"Update Item Visibility"
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
						"History"
					],
					"operation": [
						"Update Item Visibility"
					]
				}
			}
		},
];
