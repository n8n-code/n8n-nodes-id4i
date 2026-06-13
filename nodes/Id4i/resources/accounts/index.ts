import type { INodeProperties } from 'n8n-workflow';

export const accountsDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					]
				}
			},
			"options": [
				{
					"name": "Request Password Reset",
					"value": "Request Password Reset",
					"action": "Request password reset",
					"description": "Requesting a reset for a new password. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/password"
						}
					}
				},
				{
					"name": "Verify Password Reset",
					"value": "Verify Password Reset",
					"action": "Verify password reset",
					"description": "Setting a new password and verifying the request to set the password.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/password"
						}
					}
				},
				{
					"name": "Register User",
					"value": "Register User",
					"action": "Register user",
					"description": "Registering a new user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/registration"
						}
					}
				},
				{
					"name": "Complete Registration",
					"value": "Complete Registration",
					"action": "Complete registration",
					"description": "Completing a registration e.g. for invited users. Finish registration with a username and a password.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/account/registration"
						}
					}
				},
				{
					"name": "Verify User Registration",
					"value": "Verify User Registration",
					"action": "Verify registration",
					"description": "Verifies a new user registration.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/account/verification"
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
					"name": "List All Roles",
					"value": "List All Roles",
					"action": "List roles",
					"description": "Listing of roles.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/roles"
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
				},
				{
					"name": "Find Users",
					"value": "Find Users",
					"action": "Find users",
					"description": "Find users",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/users"
						}
					}
				},
				{
					"name": "Find User By Username",
					"value": "Find User By Username",
					"action": "Find by username",
					"description": "Find by username",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/users/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "Login",
					"value": "Login",
					"action": "Login",
					"description": "ID4i API Login",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/login"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /account/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Request Password Reset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Request Password Reset"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/password",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Verify Password Reset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Verify Password Reset"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Verify Password Reset"
					]
				}
			}
		},
		{
			"displayName": "POST /account/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Register User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Email",
			"name": "email",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Register User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Register User"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Register User"
					]
				}
			}
		},
		{
			"displayName": "PUT /account/registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Complete Registration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Complete Registration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Username",
			"name": "username",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "username",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Complete Registration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Verification Token",
			"name": "verificationToken",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "verificationToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Complete Registration"
					]
				}
			}
		},
		{
			"displayName": "POST /account/verification",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Verify User Registration"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Verify User Registration"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
					],
					"operation": [
						"Add User Roles"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"List All Roles"
					]
				}
			}
		},
		{
			"displayName": "Privilege",
			"name": "privilege",
			"description": "If specified the roles will be filtered containing that privilege.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "privilege",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"List All Roles"
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
						"Accounts"
					],
					"operation": [
						"List All Roles"
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
						"Accounts"
					],
					"operation": [
						"List All Roles"
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
						"Accounts"
					],
					"operation": [
						"List All Roles"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
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
						"Accounts"
					],
					"operation": [
						"Get Organizations Of User"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Find Users"
					]
				}
			}
		},
		{
			"displayName": "Username Prefix",
			"name": "usernamePrefix",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "usernamePrefix",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Find Users"
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
						"Accounts"
					],
					"operation": [
						"Find Users"
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
						"Accounts"
					],
					"operation": [
						"Find Users"
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
						"Accounts"
					],
					"operation": [
						"Find Users"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/users/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Find User By Username"
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
						"Accounts"
					],
					"operation": [
						"Find User By Username"
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
						"Accounts"
					],
					"operation": [
						"Find User By Username"
					]
				}
			}
		},
		{
			"displayName": "POST /login",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Login"
					]
				}
			}
		},
		{
			"displayName": "Login",
			"name": "login",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "login",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Login"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "password",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Accounts"
					],
					"operation": [
						"Login"
					]
				}
			}
		},
];
