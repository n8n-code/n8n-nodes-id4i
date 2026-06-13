import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { accountsDescription } from './resources/accounts';
import { aliasDescription } from './resources/alias';
import { apiKeysDescription } from './resources/api-keys';
import { auditingDescription } from './resources/auditing';
import { billingDescription } from './resources/billing';
import { collectionsDescription } from './resources/collections';
import { guidsDescription } from './resources/guids';
import { historyDescription } from './resources/history';
import { imagesDescription } from './resources/images';
import { messagingDescription } from './resources/messaging';
import { metaInformationDescription } from './resources/meta-information';
import { organizationsDescription } from './resources/organizations';
import { publicServicesDescription } from './resources/public-services';
import { routingDescription } from './resources/routing';
import { storageDescription } from './resources/storage';
import { transferDescription } from './resources/transfer';
import { whoIsDescription } from './resources/who-is';

export class Id4i implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Id4i',
                name: 'N8nDevId4i',
                icon: { light: 'file:./id4i.svg', dark: 'file:./id4i.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'ID4i HTTP API',
                defaults: { name: 'Id4i' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevId4iApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Accounts",
					"value": "Accounts",
					"description": "User accounts allows people to register for ID4i and login. All permissions and roles for interactive ID4i usage (as opposed to machine-to-machine interactions) are attached to Organizations and User Accounts. The API allows users to register, verify their registration, login and reset their passwords."
				},
				{
					"name": "Alias",
					"value": "Alias",
					"description": "Guid Alias Controller"
				},
				{
					"name": "API Keys",
					"value": "API Keys",
					"description": "Api Key Controller"
				},
				{
					"name": "Auditing",
					"value": "Auditing",
					"description": "Auditing services allow to review changes made by users or api keys. Changelog messages can be resolved as plain text or formatted message with parameters."
				},
				{
					"name": "Billing",
					"value": "Billing",
					"description": "Billing Controller"
				},
				{
					"name": "Collections",
					"value": "Collections",
					"description": "Collection Controller"
				},
				{
					"name": "Guids",
					"value": "Guids",
					"description": "Guid Alias Controller"
				},
				{
					"name": "History",
					"value": "History",
					"description": "Allows to retrieve a GUID's history and to publish new history items."
				},
				{
					"name": "Images",
					"value": "Images",
					"description": "Services can use images stored with public visibility. This API allows you to retrieve the stored image by ID."
				},
				{
					"name": "Messaging",
					"value": "Messaging",
					"description": "Organization Messaging Controller"
				},
				{
					"name": "Meta Information",
					"value": "Meta Information",
					"description": "App Info Controller"
				},
				{
					"name": "Organizations",
					"value": "Organizations",
					"description": "Country Controller"
				},
				{
					"name": "Public Services",
					"value": "Public Services",
					"description": "Go Controller"
				},
				{
					"name": "Routing",
					"value": "Routing",
					"description": "Routing Controller"
				},
				{
					"name": "Storage",
					"value": "Storage",
					"description": "Document Storage Controller"
				},
				{
					"name": "Transfer",
					"value": "Transfer",
					"description": "Id 4n Transfer Controller"
				},
				{
					"name": "Who Is",
					"value": "Who Is",
					"description": "Who Is Controller"
				}
			],
			"default": ""
		},
		...accountsDescription,
		...aliasDescription,
		...apiKeysDescription,
		...auditingDescription,
		...billingDescription,
		...collectionsDescription,
		...guidsDescription,
		...historyDescription,
		...imagesDescription,
		...messagingDescription,
		...metaInformationDescription,
		...organizationsDescription,
		...publicServicesDescription,
		...routingDescription,
		...storageDescription,
		...transferDescription,
		...whoIsDescription
                ],
        };
}
