import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class Id4iApi implements ICredentialType {
        name = 'N8nDevId4iApi';

        displayName = 'Id4i API';

        icon: Icon = { light: 'file:../nodes/Id4i/id4i.svg', dark: 'file:../nodes/Id4i/id4i.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '//backend.id4i.de',
                        required: true,
                        placeholder: '//backend.id4i.de',
                        description: 'The base URL of your Id4i API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
