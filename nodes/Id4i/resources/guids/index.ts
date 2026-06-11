import type { INodeProperties } from 'n8n-workflow';

export const guidsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					]
				}
			},
			"options": [
				{
					"name": "Create Guid",
					"value": "Create Guid",
					"action": "Create GUID(s)",
					"description": "Creating one or more GUIDs with a specified length.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/guids"
						}
					}
				},
				{
					"name": "Get Guids Without Collection",
					"value": "Get Guids Without Collection",
					"action": "Retrieve GUIDs not in any collection",
					"description": "Retrieve GUIDs not in any collection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/guids/withoutCollection"
						}
					}
				},
				{
					"name": "Get Guid",
					"value": "Get Guid",
					"action": "Retrieve GUID information",
					"description": "Retrieve GUID information",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/guids/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Update Guid",
					"value": "Update Guid",
					"action": "Change GUID information.",
					"description": "Allows ownership transfer.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/guids/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Get ID 4 N",
					"value": "Get ID 4 N",
					"action": "Retrieve ID4n information",
					"description": "Retrieving basic information about an ID like the type and the creation time.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Get Guid Aliases",
					"value": "Get Guid Aliases",
					"action": "Get all aliases for the given GUID or Collection.",
					"description": "Looks up the alias for each alias type (group and single) and returns a map of all aliases found.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}/alias"
						}
					}
				},
				{
					"name": "Remove Guid Alias",
					"value": "Remove Guid Alias",
					"action": "Remove aliases from GUID or Collection",
					"description": "Remove the alias of the given type",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}/alias/{{$parameter[\"aliasType\"]}}"
						}
					}
				},
				{
					"name": "Add Guid Alias",
					"value": "Add Guid Alias",
					"action": "Add alias for GUID or Collection",
					"description": "Adds or replaces aliases for single ID4ns (alias type item and mapp) or groups of ID4ns (alias types gtin, ean and article)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}/alias/{{$parameter[\"aliasType\"]}}"
						}
					}
				},
				{
					"name": "Get Collections",
					"value": "Get Collections",
					"action": "Retrieve collections of an ID",
					"description": "Retrieving all owned or holding collections the specified id4n is assigned to.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/id4ns/{{$parameter[\"id4n\"]}}/collections"
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
					"name": "Import GS 1 Codes",
					"value": "Import GS 1 Codes",
					"action": "Import GS1/MAPP codes",
					"description": "Importing GS1/MAPP codes that contain unique components.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/import/gs1"
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
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /api/v1/guids",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Create Guid"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Count",
			"name": "count",
			"type": "number",
			"default": 1,
			"description": "The total number of GUIDs to create",
			"routing": {
				"send": {
					"property": "count",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Create Guid"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Length",
			"name": "length",
			"type": "number",
			"default": 40,
			"description": "The charactersequence length of the GUID",
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
						"Guids"
					],
					"operation": [
						"Create Guid"
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
			"description": "The namespace of the organization where the generated GUIDs should be assigned.",
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
						"Guids"
					],
					"operation": [
						"Create Guid"
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
						"Guids"
					],
					"operation": [
						"Create Guid"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/guids/withoutCollection",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get Guids Without Collection"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization to search GUIDs for",
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
						"Guids"
					],
					"operation": [
						"Get Guids Without Collection"
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
						"Guids"
					],
					"operation": [
						"Get Guids Without Collection"
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
						"Guids"
					],
					"operation": [
						"Get Guids Without Collection"
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
						"Guids"
					],
					"operation": [
						"Get Guids Without Collection"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/guids/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get Guid"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The GUID number",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get Guid"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "The organization namespace to resolve.",
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
						"Guids"
					],
					"operation": [
						"Get Guid"
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
						"Guids"
					],
					"operation": [
						"Get Guid"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/guids/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The GUID number",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "Created Timestamp",
			"name": "createdTimestamp",
			"type": "number",
			"default": 1517232722,
			"description": "The UTC unix timestamp of when this GUID has been created",
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
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "Holder Organization ID",
			"name": "holderOrganizationId",
			"type": "string",
			"default": "",
			"description": "Organization namespace of the GUID holder",
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
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"type": "string",
			"default": "3THvgrWxqgTFC4",
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
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "Owner Organization ID",
			"name": "ownerOrganizationId",
			"type": "string",
			"default": "",
			"description": "Organization namespace of the GUID owner",
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
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "Physical State",
			"name": "physicalState",
			"type": "options",
			"default": "UNATTACHED",
			"description": "Physical attachment state of the GUID",
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
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "Properties",
			"name": "properties",
			"type": "json",
			"default": "\"de.example\"",
			"description": "The properties of the organization",
			"routing": {
				"send": {
					"property": "properties",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Update Guid"
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
						"Guids"
					],
					"operation": [
						"Update Guid"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/id4ns/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get ID 4 N"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The ID to resolve to",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get ID 4 N"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "The organization namespace to resolve.",
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
						"Guids"
					],
					"operation": [
						"Get ID 4 N"
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
						"Guids"
					],
					"operation": [
						"Get ID 4 N"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/id4ns/{id4n}/alias",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get Guid Aliases"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The GUID or Collection to operate on",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get Guid Aliases"
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
						"Guids"
					],
					"operation": [
						"Get Guid Aliases"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/id4ns/{id4n}/alias/{aliasType}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Remove Guid Alias"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The GUID or Collection to operate on",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Remove Guid Alias"
					]
				}
			}
		},
		{
			"displayName": "Alias Type",
			"name": "aliasType",
			"required": true,
			"description": "Alias type, see the corresponding API model",
			"default": "gtin",
			"type": "options",
			"options": [
				{
					"name": "Gtin",
					"value": "gtin"
				},
				{
					"name": "Article",
					"value": "article"
				},
				{
					"name": "Mapp",
					"value": "mapp"
				},
				{
					"name": "Item",
					"value": "item"
				},
				{
					"name": "Rfid",
					"value": "rfid"
				},
				{
					"name": "Tracking",
					"value": "tracking"
				},
				{
					"name": "Eclass",
					"value": "eclass"
				},
				{
					"name": "Unspsc",
					"value": "unspsc"
				},
				{
					"name": "Product",
					"value": "product"
				},
				{
					"name": "Material",
					"value": "material"
				},
				{
					"name": "Reference",
					"value": "reference"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Remove Guid Alias"
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
						"Guids"
					],
					"operation": [
						"Remove Guid Alias"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/id4ns/{id4n}/alias/{aliasType}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Add Guid Alias"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The GUID or Collection to operate on",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Add Guid Alias"
					]
				}
			}
		},
		{
			"displayName": "Alias Type",
			"name": "aliasType",
			"required": true,
			"description": "Alias type, see the corresponding API model",
			"default": "gtin",
			"type": "options",
			"options": [
				{
					"name": "Gtin",
					"value": "gtin"
				},
				{
					"name": "Article",
					"value": "article"
				},
				{
					"name": "Mapp",
					"value": "mapp"
				},
				{
					"name": "Item",
					"value": "item"
				},
				{
					"name": "Rfid",
					"value": "rfid"
				},
				{
					"name": "Tracking",
					"value": "tracking"
				},
				{
					"name": "Eclass",
					"value": "eclass"
				},
				{
					"name": "Unspsc",
					"value": "unspsc"
				},
				{
					"name": "Product",
					"value": "product"
				},
				{
					"name": "Material",
					"value": "material"
				},
				{
					"name": "Reference",
					"value": "reference"
				}
			],
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Add Guid Alias"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Alias",
			"name": "alias",
			"type": "string",
			"default": "alias",
			"description": "An alias",
			"routing": {
				"send": {
					"property": "alias",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Add Guid Alias"
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
						"Guids"
					],
					"operation": [
						"Add Guid Alias"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/id4ns/{id4n}/collections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get Collections"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The ID which the collections should contain",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Get Collections"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "The organization holding the collections.",
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
						"Guids"
					],
					"operation": [
						"Get Collections"
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
						"Guids"
					],
					"operation": [
						"Get Collections"
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
						"Guids"
					],
					"operation": [
						"Get Collections"
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
						"Guids"
					],
					"operation": [
						"Get Collections"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
					],
					"operation": [
						"Patch Properties"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/import/gs1",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Import GS 1 Codes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "List Of GS 1 S",
			"name": "listOfGS1s",
			"type": "json",
			"default": "{\n  \"codes\": [\n    null\n  ]\n}",
			"description": "A list of GS1/MAPP codes",
			"routing": {
				"send": {
					"property": "listOfGS1s",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Guids"
					],
					"operation": [
						"Import GS 1 Codes"
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
			"description": "The organization where the GS1/Mapp code is imported.",
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
						"Guids"
					],
					"operation": [
						"Import GS 1 Codes"
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
						"Guids"
					],
					"operation": [
						"Import GS 1 Codes"
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
						"Guids"
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
						"Guids"
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
						"Guids"
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
						"Guids"
					],
					"operation": [
						"Get Multiple Properties"
					]
				}
			}
		},
];
