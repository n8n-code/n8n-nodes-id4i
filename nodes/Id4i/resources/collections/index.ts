import type { INodeProperties } from 'n8n-workflow';

export const collectionsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					]
				}
			},
			"options": [
				{
					"name": "Create Collection",
					"value": "Create Collection",
					"action": "Create collection",
					"description": "Create collection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/collections"
						}
					}
				},
				{
					"name": "Delete Collection",
					"value": "Delete Collection",
					"action": "Delete collection",
					"description": "Delete collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/collections/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Find Collection",
					"value": "Find Collection",
					"action": "Find collection",
					"description": "Find collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/collections/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Update Collection",
					"value": "Update Collection",
					"action": "Update collection",
					"description": "Update collection changing only the given values",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/collections/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Remove Elements From Collection",
					"value": "Remove Elements From Collection",
					"action": "Remove elements from collection",
					"description": "Remove elements from collection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/collections/{{$parameter[\"id4n\"]}}/elements"
						}
					}
				},
				{
					"name": "List Elements Of Collection",
					"value": "List Elements Of Collection",
					"action": "List contents of the collection",
					"description": "List contents of the collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/collections/{{$parameter[\"id4n\"]}}/elements"
						}
					}
				},
				{
					"name": "Add Elements To Collection",
					"value": "Add Elements To Collection",
					"action": "Add elements to collection",
					"description": "Add elements to collection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/collections/{{$parameter[\"id4n\"]}}/elements"
						}
					}
				},
				{
					"name": "Delete Properties",
					"value": "Delete Properties",
					"action": "Delete ID4n properties",
					"description": "Partial deletion of id4n properties. If the property does not exist, it will be ignored.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}/properties"
						}
					}
				},
				{
					"name": "Get Properties",
					"value": "Get Properties",
					"action": "Retrieve ID4n properties",
					"description": "List all properties of an id4n.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}/properties"
						}
					}
				},
				{
					"name": "Patch Properties",
					"value": "Patch Properties",
					"action": "Patch ID4n properties",
					"description": "Partial updating of id4n properties. If a property contains a null value the property will be deleted other values will be saved and overwritten if they already exist.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}/properties"
						}
					}
				},
				{
					"name": "Get Multiple Properties",
					"value": "Get Multiple Properties",
					"action": "Get multiple ID4n properties",
					"description": "Get a list of ID4n properties for the specified ID4ns.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/multiple/id4ns/properties"
						}
					}
				},
				{
					"name": "Get All Collections Of Organization",
					"value": "Get All Collections Of Organization",
					"action": "Get collections of organization",
					"description": "Retrieving all collections of an organization in a paginated manner. You may filter the results by specifying id4n properties with filter operations (eq, in, ne) in the query parameters. e.g. `com.yourcompany.orderId.eq=1234`  ",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/collections"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Create Collection"
					]
				}
			}
		},
		{
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
						"Collections"
					],
					"operation": [
						"Create Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Length",
			"name": "length",
			"type": "number",
			"default": 0,
			"routing": {
				"send": {
					"property": "length",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Create Collection"
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
						"Collections"
					],
					"operation": [
						"Create Collection"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "ROUTING_COLLECTION",
			"options": [
				{
					"name": "ROUTING COLLECTION",
					"value": "ROUTING_COLLECTION"
				},
				{
					"name": "LOGISTIC COLLECTION",
					"value": "LOGISTIC_COLLECTION"
				},
				{
					"name": "LABELLED COLLECTION",
					"value": "LABELLED_COLLECTION"
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
						"Collections"
					],
					"operation": [
						"Create Collection"
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
						"Collections"
					],
					"operation": [
						"Create Collection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/collections/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Delete Collection"
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
						"Collections"
					],
					"operation": [
						"Delete Collection"
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
						"Collections"
					],
					"operation": [
						"Delete Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/collections/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Find Collection"
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
						"Collections"
					],
					"operation": [
						"Find Collection"
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
						"Collections"
					],
					"operation": [
						"Find Collection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/collections/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Update Collection"
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
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Created Timestamp",
			"name": "createdTimestamp",
			"type": "number",
			"default": 0,
			"description": "The UTC unix timestamp of when this collection has been created",
			"routing": {
				"send": {
					"property": "createdTimestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Holder Organization ID",
			"name": "holderOrganizationId",
			"type": "string",
			"default": "",
			"description": "Organization namespace of the holder of the collection",
			"routing": {
				"send": {
					"property": "holderOrganizationId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"type": "string",
			"default": "",
			"description": "The ID",
			"routing": {
				"send": {
					"property": "id4n",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
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
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Owner Organization ID",
			"name": "ownerOrganizationId",
			"type": "string",
			"default": "",
			"description": "Organization namespace of the collection owner",
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
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Physical State",
			"name": "physicalState",
			"type": "options",
			"default": "UNATTACHED",
			"description": "Physical attachment state of the collection",
			"options": [
				{
					"name": "UNATTACHED",
					"value": "UNATTACHED"
				},
				{
					"name": "ATTACHED",
					"value": "ATTACHED"
				},
				{
					"name": "DETACHED",
					"value": "DETACHED"
				}
			],
			"routing": {
				"send": {
					"property": "physicalState",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "ROUTING_COLLECTION",
			"options": [
				{
					"name": "ROUTING COLLECTION",
					"value": "ROUTING_COLLECTION"
				},
				{
					"name": "LOGISTIC COLLECTION",
					"value": "LOGISTIC_COLLECTION"
				},
				{
					"name": "LABELLED COLLECTION",
					"value": "LABELLED_COLLECTION"
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
						"Collections"
					],
					"operation": [
						"Update Collection"
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
						"Collections"
					],
					"operation": [
						"Update Collection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/collections/{id4n}/elements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Remove Elements From Collection"
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
						"Collections"
					],
					"operation": [
						"Remove Elements From Collection"
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
						"Collections"
					],
					"operation": [
						"Remove Elements From Collection"
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
						"Collections"
					],
					"operation": [
						"Remove Elements From Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/collections/{id4n}/elements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"List Elements Of Collection"
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
						"Collections"
					],
					"operation": [
						"List Elements Of Collection"
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
						"Collections"
					],
					"operation": [
						"List Elements Of Collection"
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
						"Collections"
					],
					"operation": [
						"List Elements Of Collection"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "The organization namespace.",
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
						"Collections"
					],
					"operation": [
						"List Elements Of Collection"
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
						"Collections"
					],
					"operation": [
						"List Elements Of Collection"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/collections/{id4n}/elements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Add Elements To Collection"
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
						"Collections"
					],
					"operation": [
						"Add Elements To Collection"
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
						"Collections"
					],
					"operation": [
						"Add Elements To Collection"
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
						"Collections"
					],
					"operation": [
						"Add Elements To Collection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/id4ns/{id4n}/properties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Delete Properties"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The id4n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Delete Properties"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The organization namespace to work on while deleting the properties.",
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
						"Collections"
					],
					"operation": [
						"Delete Properties"
					]
				}
			}
		},
		{
			"displayName": "Body",
			"name": "body",
			"type": "string",
			"default": "",
			"routing": {
				"request": {
					"body": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Delete Properties"
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
						"Collections"
					],
					"operation": [
						"Delete Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/id4ns/{id4n}/properties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get Properties"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The id4n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get Properties"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "The organization namespace.",
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
						"Collections"
					],
					"operation": [
						"Get Properties"
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
						"Collections"
					],
					"operation": [
						"Get Properties"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/id4ns/{id4n}/properties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Patch Properties"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The id4n",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Patch Properties"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The organization namespace to work on while patching the properties.",
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
						"Collections"
					],
					"operation": [
						"Patch Properties"
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
						"Collections"
					],
					"operation": [
						"Patch Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/multiple/id4ns/properties",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get Multiple Properties"
					]
				}
			}
		},
		{
			"displayName": "ID 4 Ns",
			"name": "id4ns",
			"required": true,
			"description": "The list of ID4ns to resolve.",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "id4ns",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get Multiple Properties"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "The organization namespace.",
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
						"Collections"
					],
					"operation": [
						"Get Multiple Properties"
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
						"Collections"
					],
					"operation": [
						"Get Multiple Properties"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
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
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
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
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"description": "Filter by this type",
			"default": "ROUTING_COLLECTION",
			"type": "options",
			"options": [
				{
					"name": "ROUTING COLLECTION",
					"value": "ROUTING_COLLECTION"
				},
				{
					"name": "LOGISTIC COLLECTION",
					"value": "LOGISTIC_COLLECTION"
				},
				{
					"name": "LABELLED COLLECTION",
					"value": "LABELLED_COLLECTION"
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
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"description": "Filter by this label",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "label",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
					]
				}
			}
		},
		{
			"displayName": "Label Prefix",
			"name": "labelPrefix",
			"description": "Filter by this label prefix",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "labelPrefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
					]
				}
			}
		},
		{
			"displayName": "Property",
			"name": "property",
			"description": "List of i4dn property filter. e.g. \"com.myorga.state:IN:waiting|processing\" or \"com.myorga.orderId:EQ:SAP001\"",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "property",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
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
						"Collections"
					],
					"operation": [
						"Get All Collections Of Organization"
					]
				}
			}
		},
];
