export default [
    {
        version: 0,
        up: (schema: any) => {
            const newSchema = {
                ...schema,
                version: 0,
            };
            return newSchema;
        },
    },
    {
        version: 1,
        up: (schema: any) => {
            const newSchema = {
                ...schema,
                version: 1,
                outputProperties: [
                    {
                        property: 'payload',
                        propertyType: 'msg',
                        value: '',
                        valueType: 'eventData',
                    },
                    {
                        property: 'topic',
                        propertyType: 'msg',
                        value: '',
                        valueType: 'triggerId',
                    },
                ],
            };
            return newSchema;
        },
    },
];
