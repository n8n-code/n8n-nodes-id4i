import type { INodeProperties } from 'n8n-workflow';

export const aliasDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Alias"
					]
				}
			},
			"options": [
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
					"name": "Search By Alias",
					"value": "Search By Alias",
					"action": "Search for GUIDs by alias",
					"description": "Search for GUIDs by alias",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/search/guids"
						}
					}
				},
				{
					"name": "Get Guid Alias Types",
					"value": "Get Guid Alias Types",
					"action": "List all supported alias types",
					"description": "Retrieve this list to find out all alias types to use with alias search and change operations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/search/guids/aliases/types"
						}
					}
				}
			],
			"default": ""
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
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
						"Alias"
					],
					"operation": [
						"Add Guid Alias"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/search/guids",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Alias"
					],
					"operation": [
						"Search By Alias"
					]
				}
			}
		},
		{
			"displayName": "Alias",
			"name": "alias",
			"required": true,
			"description": "The alias to search for",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "alias",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Alias"
					],
					"operation": [
						"Search By Alias"
					]
				}
			}
		},
		{
			"displayName": "Alias Type",
			"name": "aliasType",
			"required": true,
			"description": "Alias type type to search for",
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
			"routing": {
				"send": {
					"type": "query",
					"property": "aliasType",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Alias"
					],
					"operation": [
						"Search By Alias"
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
						"Alias"
					],
					"operation": [
						"Search By Alias"
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
						"Alias"
					],
					"operation": [
						"Search By Alias"
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
						"Alias"
					],
					"operation": [
						"Search By Alias"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/search/guids/aliases/types",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Alias"
					],
					"operation": [
						"Get Guid Alias Types"
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
						"Alias"
					],
					"operation": [
						"Get Guid Alias Types"
					]
				}
			}
		},
];
