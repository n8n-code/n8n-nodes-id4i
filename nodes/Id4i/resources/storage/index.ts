import type { INodeProperties } from 'n8n-workflow';

export const storageDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					]
				}
			},
			"options": [
				{
					"name": "List All Documents",
					"value": "List All Documents",
					"action": "List documents",
					"description": "Listing all documents of an id4n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "List Documents",
					"value": "List Documents",
					"action": "List organization specific documents",
					"description": "Listing documents of an id4n seen by a specified organization",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Create Document",
					"value": "Create Document",
					"action": "Create an document for an id4n",
					"description": "The documents' mime type is suggested on octet-stream data. Otherwise the specified content mime type is used.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Put Document",
					"value": "Put Document",
					"action": "Put an document for an id4n",
					"description": "Creating or overwriting an existing document ",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Delete Document",
					"value": "Delete Document",
					"action": "Delete a document",
					"description": "Delete a document",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}"
						}
					}
				},
				{
					"name": "Read Document",
					"value": "Read Document",
					"action": "Read document contents",
					"description": "Read document contents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}"
						}
					}
				},
				{
					"name": "Get Document",
					"value": "Get Document",
					"action": "Retrieve a document (meta-data only, no content)",
					"description": "Retrieve a document (meta-data only, no content)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}/metadata"
						}
					}
				},
				{
					"name": "Update Document Metadata",
					"value": "Update Document Metadata",
					"action": "Update a document",
					"description": "Update a document",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/api/v1/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}/metadata"
						}
					}
				},
				{
					"name": "Read From Microstorage",
					"value": "Read From Microstorage",
					"action": "Read data from microstorage",
					"description": "Read data from microstorage",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/microstorage/{{$parameter[\"id4n\"]}}/{{$parameter[\"organization\"]}}"
						}
					}
				},
				{
					"name": "Write To Microstorage",
					"value": "Write To Microstorage",
					"action": "Write data to microstorage",
					"description": "Write data to microstorage",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/microstorage/{{$parameter[\"id4n\"]}}/{{$parameter[\"organization\"]}}"
						}
					}
				},
				{
					"name": "List All Public Documents",
					"value": "List All Public Documents",
					"action": "List public documents",
					"description": "Listing all public documents of an id4n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/documents/{{$parameter[\"id4n\"]}}"
						}
					}
				},
				{
					"name": "Read Public Document",
					"value": "Read Public Document",
					"action": "Read public document contents",
					"description": "Read public document contents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}"
						}
					}
				},
				{
					"name": "Get Public Document",
					"value": "Get Public Document",
					"action": "Retrieve a public document (meta-data only, no content)",
					"description": "Retrieve a public document (meta-data only, no content)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/public/documents/{{$parameter[\"id4n\"]}}/{{$parameter[\"organizationId\"]}}/{{$parameter[\"fileName\"]}}/metadata"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/documents/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"List All Documents"
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
						"Storage"
					],
					"operation": [
						"List All Documents"
					]
				}
			}
		},
		{
			"displayName": "Owner",
			"name": "owner",
			"description": "Filter by owner organization",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"List All Documents"
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
						"Storage"
					],
					"operation": [
						"List All Documents"
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
						"Storage"
					],
					"operation": [
						"List All Documents"
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
						"Storage"
					],
					"operation": [
						"List All Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/documents/{id4n}/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"List Documents"
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
						"Storage"
					],
					"operation": [
						"List Documents"
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
						"Storage"
					],
					"operation": [
						"List Documents"
					]
				}
			}
		},
		{
			"displayName": "Owner",
			"name": "owner",
			"description": "Filter by owner organization",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"List Documents"
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
						"Storage"
					],
					"operation": [
						"List Documents"
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
						"Storage"
					],
					"operation": [
						"List Documents"
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
						"Storage"
					],
					"operation": [
						"List Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/documents/{id4n}/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Create Document"
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
						"Storage"
					],
					"operation": [
						"Create Document"
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
						"Storage"
					],
					"operation": [
						"Create Document"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/documents/{id4n}/{organizationId}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Create Document"
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
						"Storage"
					],
					"operation": [
						"Create Document"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/documents/{id4n}/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Put Document"
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
						"Storage"
					],
					"operation": [
						"Put Document"
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
						"Storage"
					],
					"operation": [
						"Put Document"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/documents/{id4n}/{organizationId}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Put Document"
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
						"Storage"
					],
					"operation": [
						"Put Document"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/documents/{id4n}/{organizationId}/{fileName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Delete Document"
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
						"Storage"
					],
					"operation": [
						"Delete Document"
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
						"Storage"
					],
					"operation": [
						"Delete Document"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Delete Document"
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
						"Storage"
					],
					"operation": [
						"Delete Document"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/documents/{id4n}/{organizationId}/{fileName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Read Document"
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
						"Storage"
					],
					"operation": [
						"Read Document"
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
						"Storage"
					],
					"operation": [
						"Read Document"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Read Document"
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
						"Storage"
					],
					"operation": [
						"Read Document"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Get Document"
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
						"Storage"
					],
					"operation": [
						"Get Document"
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
						"Storage"
					],
					"operation": [
						"Get Document"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Get Document"
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
						"Storage"
					],
					"operation": [
						"Get Document"
					]
				}
			}
		},
		{
			"displayName": "PATCH /api/v1/documents/{id4n}/{organizationId}/{fileName}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
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
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
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
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
					]
				}
			}
		},
		{
			"displayName": "Filename",
			"name": "filename",
			"type": "string",
			"default": "publicInfo.pdf",
			"description": "File Name",
			"routing": {
				"send": {
					"property": "filename",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
					]
				}
			}
		},
		{
			"displayName": "Mime Type",
			"name": "mimeType",
			"type": "string",
			"default": "text/plain",
			"description": "Mime Type",
			"routing": {
				"send": {
					"property": "mimeType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
					]
				}
			}
		},
		{
			"displayName": "Visibility",
			"name": "visibility",
			"type": "json",
			"default": "{\n  \"public\": true,\n  \"sharedWithOrganizationIds\": [\n    \"de.acme\",\n    \"com.porsche\",\n    \"de.bluerain\"\n  ]\n}",
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
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
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
						"Storage"
					],
					"operation": [
						"Update Document Metadata"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/microstorage/{id4n}/{organization}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Read From Microstorage"
					]
				}
			}
		},
		{
			"displayName": "Organization",
			"name": "organization",
			"required": true,
			"description": "organization",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Read From Microstorage"
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
						"Storage"
					],
					"operation": [
						"Read From Microstorage"
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
						"Storage"
					],
					"operation": [
						"Read From Microstorage"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/microstorage/{id4n}/{organization}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Write To Microstorage"
					]
				}
			}
		},
		{
			"displayName": "Organization",
			"name": "organization",
			"required": true,
			"description": "organization",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Write To Microstorage"
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
						"Storage"
					],
					"operation": [
						"Write To Microstorage"
					]
				}
			}
		},
		{
			"displayName": "Content Type",
			"name": "Content-Type",
			"description": "Content-Type",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Content-Type": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Write To Microstorage"
					]
				}
			}
		},
		{
			"displayName": "Content Length",
			"name": "Content-Length",
			"description": "Content-Length",
			"default": 0,
			"type": "number",
			"routing": {
				"request": {
					"headers": {
						"Content-Length": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Write To Microstorage"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/microstorage/{id4n}/{organization}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Write To Microstorage"
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
						"Storage"
					],
					"operation": [
						"Write To Microstorage"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/documents/{id4n}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"List All Public Documents"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"description": "organizationId",
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
						"Storage"
					],
					"operation": [
						"List All Public Documents"
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
						"Storage"
					],
					"operation": [
						"List All Public Documents"
					]
				}
			}
		},
		{
			"displayName": "Owner",
			"name": "owner",
			"description": "Filter by owner organization",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "owner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"List All Public Documents"
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
						"Storage"
					],
					"operation": [
						"List All Public Documents"
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
						"Storage"
					],
					"operation": [
						"List All Public Documents"
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
						"Storage"
					],
					"operation": [
						"List All Public Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/documents/{id4n}/{organizationId}/{fileName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Read Public Document"
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
						"Storage"
					],
					"operation": [
						"Read Public Document"
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
						"Storage"
					],
					"operation": [
						"Read Public Document"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Read Public Document"
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
						"Storage"
					],
					"operation": [
						"Read Public Document"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/public/documents/{id4n}/{organizationId}/{fileName}/metadata",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Get Public Document"
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
						"Storage"
					],
					"operation": [
						"Get Public Document"
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
						"Storage"
					],
					"operation": [
						"Get Public Document"
					]
				}
			}
		},
		{
			"displayName": "File Name",
			"name": "fileName",
			"required": true,
			"description": "fileName",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Storage"
					],
					"operation": [
						"Get Public Document"
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
						"Storage"
					],
					"operation": [
						"Get Public Document"
					]
				}
			}
		},
];
