import type { INodeProperties } from 'n8n-workflow';

export const organizationsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					]
				}
			},
			"options": [
				{
					"name": "List Countries",
					"value": "List Countries",
					"action": "List countries",
					"description": "List countries",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/countries"
						}
					}
				},
				{
					"name": "Create Organization",
					"value": "Create Organization",
					"action": "Create organization",
					"description": "Creating a new organization.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/organizations"
						}
					}
				},
				{
					"name": "Delete Organization",
					"value": "Delete Organization",
					"action": "Delete organization",
					"description": "Delete organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Find Organization",
					"value": "Find Organization",
					"action": "Find organization by id/namespace",
					"description": "Returns a single organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Update Organization",
					"value": "Update Organization",
					"action": "Update organization",
					"description": "Update organization",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}"
						}
					}
				},
				{
					"name": "Delete Organization Billing Address",
					"value": "Delete Organization Billing Address",
					"action": "Remove billing address",
					"description": "Remove billing address",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/addresses/billing"
						}
					}
				},
				{
					"name": "Find Organization Billing Address",
					"value": "Find Organization Billing Address",
					"action": "Retrieve billing address",
					"description": "Retrieve billing address",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/addresses/billing"
						}
					}
				},
				{
					"name": "Update Organization Billing Address",
					"value": "Update Organization Billing Address",
					"action": "Store billing address",
					"description": "Store billing address",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/addresses/billing"
						}
					}
				},
				{
					"name": "Find Organization Address",
					"value": "Find Organization Address",
					"action": "Retrieve address",
					"description": "Retrieve address",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/addresses/default"
						}
					}
				},
				{
					"name": "Update Organization Address",
					"value": "Update Organization Address",
					"action": "Store address",
					"description": "Store address",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/addresses/default"
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
				},
				{
					"name": "Delete Organization Logo",
					"value": "Delete Organization Logo",
					"action": "Delete organization logo",
					"description": "Delete organization logo",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/logo"
						}
					}
				},
				{
					"name": "Set Organization Logo",
					"value": "Set Organization Logo",
					"action": "Update organization logo",
					"description": "Updating an organization logo using a multipart file upload.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/logo"
						}
					}
				},
				{
					"name": "Remove Partner Organization",
					"value": "Remove Partner Organization",
					"action": "Remove partner",
					"description": "Removing a partner organization",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/partner"
						}
					}
				},
				{
					"name": "Get Partner Organizations",
					"value": "Get Partner Organizations",
					"action": "Get partners of an organization",
					"description": "Listing partners in a paginated manner.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/partner"
						}
					}
				},
				{
					"name": "Add Partner Organization",
					"value": "Add Partner Organization",
					"action": "Add partner",
					"description": "Adding a partner organization. If the given organization is already a partner the result will be state 200 too.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/partner"
						}
					}
				},
				{
					"name": "Get Organization Privileges",
					"value": "Get Organization Privileges",
					"action": "List my privileges",
					"description": "Listing all privileges of the current user/APIKey of the specified organization.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/privileges"
						}
					}
				},
				{
					"name": "Get All Organization Roles",
					"value": "Get All Organization Roles",
					"action": "List users and their roles",
					"description": "Listing users and their roles in a paginated manner.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/roles"
						}
					}
				},
				{
					"name": "Get Users Of Organization",
					"value": "Get Users Of Organization",
					"action": "Find users in organization",
					"description": "Finding users in the specified organization in a paginated manner.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/users"
						}
					}
				},
				{
					"name": "Invite Users",
					"value": "Invite Users",
					"action": "Invite Users",
					"description": "Invite Users",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/users/invite"
						}
					}
				},
				{
					"name": "Remove User Roles",
					"value": "Remove User Roles",
					"action": "Remove role(s) from user",
					"description": "Remove role(s) from user",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/users/{{$parameter[\"username\"]}}/roles"
						}
					}
				},
				{
					"name": "Get User Roles",
					"value": "Get User Roles",
					"action": "Get user roles by username",
					"description": "Get user roles by username",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/users/{{$parameter[\"username\"]}}/roles"
						}
					}
				},
				{
					"name": "Add User Roles",
					"value": "Add User Roles",
					"action": "Add role(s) to user",
					"description": "Add role(s) to user",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/api/v1/organizations/{{$parameter[\"organizationId\"]}}/users/{{$parameter[\"username\"]}}/roles"
						}
					}
				},
				{
					"name": "Get Organizations Of User",
					"value": "Get Organizations Of User",
					"action": "Retrieve organizations of user",
					"description": "Retrieve organizations of user",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/user/organizations"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /api/v1/countries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"List Countries"
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
						"Organizations"
					],
					"operation": [
						"List Countries"
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
						"Organizations"
					],
					"operation": [
						"List Countries"
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
						"Organizations"
					],
					"operation": [
						"List Countries"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/organizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Create Organization"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 100,
			"description": "The id of the organization ( Deprecated: Use namespace instead. )",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Create Organization"
					]
				}
			}
		},
		{
			"displayName": "Logo URL",
			"name": "logoURL",
			"type": "string",
			"default": "/api/v1/public/images/abcdef",
			"description": "URL to a logo of the organization",
			"routing": {
				"send": {
					"property": "logoURL",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Create Organization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "ACME Inc.",
			"description": "The name of the organization",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Create Organization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Namespace",
			"name": "namespace",
			"type": "string",
			"default": "de.acme",
			"description": "The namespace of the organization",
			"routing": {
				"send": {
					"property": "namespace",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Create Organization"
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
						"Organizations"
					],
					"operation": [
						"Create Organization"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/organizations/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Delete Organization"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization to be deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Delete Organization"
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
						"Organizations"
					],
					"operation": [
						"Delete Organization"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Find Organization"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization to be retrieved.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Find Organization"
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
						"Organizations"
					],
					"operation": [
						"Find Organization"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/organizations/{organizationId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization to be updated.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "ACME Inc.",
			"description": "The name of the organization",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization"
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
						"Organizations"
					],
					"operation": [
						"Update Organization"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/organizations/{organizationId}/addresses/billing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Delete Organization Billing Address"
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
						"Organizations"
					],
					"operation": [
						"Delete Organization Billing Address"
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
						"Organizations"
					],
					"operation": [
						"Delete Organization Billing Address"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/addresses/billing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Find Organization Billing Address"
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
						"Organizations"
					],
					"operation": [
						"Find Organization Billing Address"
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
						"Organizations"
					],
					"operation": [
						"Find Organization Billing Address"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/organizations/{organizationId}/addresses/billing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
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
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "MyCity",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "companyName",
			"type": "string",
			"default": "ACME Inc.",
			"routing": {
				"send": {
					"property": "companyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country Code",
			"name": "countryCode",
			"type": "string",
			"default": "DE",
			"description": "The ISO 3166 two-letter country code",
			"routing": {
				"send": {
					"property": "countryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"displayName": "Country Name",
			"name": "countryName",
			"type": "string",
			"default": "Germany",
			"description": "The country name",
			"routing": {
				"send": {
					"property": "countryName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Firstname",
			"name": "firstname",
			"type": "string",
			"default": "Max",
			"routing": {
				"send": {
					"property": "firstname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Lastname",
			"name": "lastname",
			"type": "string",
			"default": "Muster",
			"routing": {
				"send": {
					"property": "lastname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Post Code",
			"name": "postCode",
			"type": "string",
			"default": 12345,
			"routing": {
				"send": {
					"property": "postCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "Examplestreet 1",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"displayName": "Telephone",
			"name": "telephone",
			"type": "string",
			"default": "+49 8088 12345",
			"description": "The telephone number e.g.",
			"routing": {
				"send": {
					"property": "telephone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
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
						"Organizations"
					],
					"operation": [
						"Update Organization Billing Address"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/addresses/default",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Find Organization Address"
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
						"Organizations"
					],
					"operation": [
						"Find Organization Address"
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
						"Organizations"
					],
					"operation": [
						"Find Organization Address"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/organizations/{organizationId}/addresses/default",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
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
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "City",
			"name": "city",
			"type": "string",
			"default": "MyCity",
			"routing": {
				"send": {
					"property": "city",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"displayName": "Company Name",
			"name": "companyName",
			"type": "string",
			"default": "ACME Inc.",
			"routing": {
				"send": {
					"property": "companyName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Country Code",
			"name": "countryCode",
			"type": "string",
			"default": "DE",
			"description": "The ISO 3166 two-letter country code",
			"routing": {
				"send": {
					"property": "countryCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"displayName": "Country Name",
			"name": "countryName",
			"type": "string",
			"default": "Germany",
			"description": "The country name",
			"routing": {
				"send": {
					"property": "countryName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Firstname",
			"name": "firstname",
			"type": "string",
			"default": "Max",
			"routing": {
				"send": {
					"property": "firstname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Lastname",
			"name": "lastname",
			"type": "string",
			"default": "Muster",
			"routing": {
				"send": {
					"property": "lastname",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Post Code",
			"name": "postCode",
			"type": "string",
			"default": 12345,
			"routing": {
				"send": {
					"property": "postCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Street",
			"name": "street",
			"type": "string",
			"default": "Examplestreet 1",
			"routing": {
				"send": {
					"property": "street",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
					]
				}
			}
		},
		{
			"displayName": "Telephone",
			"name": "telephone",
			"type": "string",
			"default": "+49 8088 12345",
			"description": "The telephone number e.g.",
			"routing": {
				"send": {
					"property": "telephone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
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
						"Organizations"
					],
					"operation": [
						"Update Organization Address"
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
						"Organizations"
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
						"Organizations"
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
						"Organizations"
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
						"Organizations"
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
						"Organizations"
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
						"Organizations"
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
						"Organizations"
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
						"Organizations"
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
						"Organizations"
					],
					"operation": [
						"Get All Collections Of Organization"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/organizations/{organizationId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Delete Organization Logo"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization where the logo should be deleted.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Delete Organization Logo"
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
						"Organizations"
					],
					"operation": [
						"Delete Organization Logo"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/organizations/{organizationId}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Set Organization Logo"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization where the logo should be updated.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Set Organization Logo"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/organizations/{organizationId}/logo<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Set Organization Logo"
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
						"Organizations"
					],
					"operation": [
						"Set Organization Logo"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/organizations/{organizationId}/partner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Remove Partner Organization"
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
						"Organizations"
					],
					"operation": [
						"Remove Partner Organization"
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
			"description": "The namespace of the partner organization to remove",
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
						"Organizations"
					],
					"operation": [
						"Remove Partner Organization"
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
						"Organizations"
					],
					"operation": [
						"Remove Partner Organization"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/partner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Partner Organizations"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization to query partner organizations",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Partner Organizations"
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
						"Organizations"
					],
					"operation": [
						"Get Partner Organizations"
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
						"Organizations"
					],
					"operation": [
						"Get Partner Organizations"
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
						"Organizations"
					],
					"operation": [
						"Get Partner Organizations"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/organizations/{organizationId}/partner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Add Partner Organization"
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
						"Organizations"
					],
					"operation": [
						"Add Partner Organization"
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
			"description": "The namespace of the partner organization to add",
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
						"Organizations"
					],
					"operation": [
						"Add Partner Organization"
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
						"Organizations"
					],
					"operation": [
						"Add Partner Organization"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/privileges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organization Privileges"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Privileges"
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
						"Organizations"
					],
					"operation": [
						"Get Organization Privileges"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get All Organization Roles"
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
						"Organizations"
					],
					"operation": [
						"Get All Organization Roles"
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
						"Organizations"
					],
					"operation": [
						"Get All Organization Roles"
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
						"Organizations"
					],
					"operation": [
						"Get All Organization Roles"
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
						"Organizations"
					],
					"operation": [
						"Get All Organization Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Users Of Organization"
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
						"Organizations"
					],
					"operation": [
						"Get Users Of Organization"
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
						"Organizations"
					],
					"operation": [
						"Get Users Of Organization"
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
						"Organizations"
					],
					"operation": [
						"Get Users Of Organization"
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
						"Organizations"
					],
					"operation": [
						"Get Users Of Organization"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/organizations/{organizationId}/users/invite",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"displayName": "Organization ID",
			"name": "organizationId",
			"required": true,
			"description": "The namespace of the organization where users should be invited",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Invitations",
			"name": "invitations",
			"type": "json",
			"default": "[\n  {\n    \"roles\": [\n      null\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "invitations",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Invite Users"
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
						"Organizations"
					],
					"operation": [
						"Invite Users"
					]
				}
			}
		},
		{
			"displayName": "DELETE /api/v1/organizations/{organizationId}/users/{username}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Remove User Roles"
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
						"Organizations"
					],
					"operation": [
						"Remove User Roles"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "username",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Remove User Roles"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Remove User Roles"
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
						"Organizations"
					],
					"operation": [
						"Remove User Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/organizations/{organizationId}/users/{username}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get User Roles"
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
						"Organizations"
					],
					"operation": [
						"Get User Roles"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "username",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get User Roles"
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
						"Organizations"
					],
					"operation": [
						"Get User Roles"
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
						"Organizations"
					],
					"operation": [
						"Get User Roles"
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
						"Organizations"
					],
					"operation": [
						"Get User Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /api/v1/organizations/{organizationId}/users/{username}/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Add User Roles"
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
						"Organizations"
					],
					"operation": [
						"Add User Roles"
					]
				}
			}
		},
		{
			"displayName": "Username",
			"name": "username",
			"required": true,
			"description": "username",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Add User Roles"
					]
				}
			}
		},
		{
			"displayName": "Roles",
			"name": "roles",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "roles",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Add User Roles"
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
						"Organizations"
					],
					"operation": [
						"Add User Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/user/organizations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organizations Of User"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "role",
			"description": "role",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "role",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Organizations"
					],
					"operation": [
						"Get Organizations Of User"
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
						"Organizations"
					],
					"operation": [
						"Get Organizations Of User"
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
						"Organizations"
					],
					"operation": [
						"Get Organizations Of User"
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
						"Organizations"
					],
					"operation": [
						"Get Organizations Of User"
					]
				}
			}
		},
];
