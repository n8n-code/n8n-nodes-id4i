import type { INodeProperties } from 'n8n-workflow';

export const transferDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					]
				}
			},
			"options": [
				{
					"name": "Receive",
					"value": "Receive",
					"action": "Transfer a GUID or collection, obtaining it (i.e. becoming the holder) and if allowed also taking ownership",
					"description": "Taking ownership can be forbidden by a previous owner. See methods prepare and getInfo",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/transfers/{{$parameter[\"id4n\"]}}/receiveInfo"
						}
					}
				},
				{
					"name": "Get Send Info",
					"value": "Get Send Info",
					"action": "Show transfer preparation information",
					"description": "Show transfer preparation information",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/api/v1/transfers/{{$parameter[\"id4n\"]}}/sendInfo"
						}
					}
				},
				{
					"name": "Prepare",
					"value": "Prepare",
					"action": "Prepare an object for transfer",
					"description": "Prepare an object for transfer",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/api/v1/transfers/{{$parameter[\"id4n\"]}}/sendInfo"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /api/v1/transfers/{id4n}/receiveInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Receive"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "This ID4N identifies the object to take hold of",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Receive"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Organization ID",
			"name": "organizationId",
			"type": "string",
			"default": "de.id4i",
			"description": "Organization to take the ownership of the ID. If the sender chose to keep the ownership, this organization becomes the holder. Otherwise, it becomes the new owner.",
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
						"Transfer"
					],
					"operation": [
						"Receive"
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
						"Transfer"
					],
					"operation": [
						"Receive"
					]
				}
			}
		},
		{
			"displayName": "GET /api/v1/transfers/{id4n}/sendInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Get Send Info"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The ID4N to retrieve information about",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Get Send Info"
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
						"Transfer"
					],
					"operation": [
						"Get Send Info"
					]
				}
			}
		},
		{
			"displayName": "PUT /api/v1/transfers/{id4n}/sendInfo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "ID 4 N",
			"name": "id4n",
			"required": true,
			"description": "The ID4N to prepare for transfer",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Holder Organization ID",
			"name": "holderOrganizationId",
			"type": "string",
			"default": "de.id4i",
			"description": "The current holder of the object",
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
						"Transfer"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Keep Ownership",
			"name": "keepOwnership",
			"type": "boolean",
			"default": true,
			"description": "Keep the public ownership while transferring the object",
			"routing": {
				"send": {
					"property": "keepOwnership",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Open For Claims",
			"name": "openForClaims",
			"type": "boolean",
			"default": false,
			"description": "Allow anyone who knows (or can scan) the ID4N to claim ownership of this object",
			"routing": {
				"send": {
					"property": "openForClaims",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"displayName": "Owner Organization ID",
			"name": "ownerOrganizationId",
			"type": "string",
			"default": "de.bluerain",
			"description": "The current publicly visible owner of the object",
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
						"Transfer"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Recipient Organization Ids",
			"name": "recipientOrganizationIds",
			"type": "json",
			"default": "[\n  \"de.acme\",\n  \"com.porsche\",\n  \"de.bluerain\"\n]",
			"description": "Allow only these organizations to obtain this object",
			"routing": {
				"send": {
					"property": "recipientOrganizationIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Transfer"
					],
					"operation": [
						"Prepare"
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
						"Transfer"
					],
					"operation": [
						"Prepare"
					]
				}
			}
		},
];
