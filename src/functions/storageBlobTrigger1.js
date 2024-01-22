const { app } = require('@azure/functions');

app.storageBlob('storageBlobTrigger1', {
    path: 'new-assis/{name}',
    connection: 'himanshustorag_STORAGE',
    handler: (blob, context) => {
        context.log(`Storage blob function processed blob "${context.triggerMetadata.name}" with size ${blob.length} bytes`);
        context.log(`Blob Name: ${context.bindingData.name}`);
    }
});
