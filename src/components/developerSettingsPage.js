function getDeveloperSettingsPageRender({ customUrl }) {
    const developerSettingsPage = {
        id: 'developerSettingsPage',
        title: 'Developer settings',
        type: 'page',
        schema: {
            type: 'object',
            properties: {
                customManifestUrl: {
                    type: "string",
                    title: "Custom manifest URL"
                },
                clearPlatformInfoWarning:{
                    type: "string",
                    description: "This will clear current CRM platform information so to be re-initialized with a new CRM platform."
                },
                clearPlatformInfoButton: {
                    type: "string",
                    title: "Clear platform info"
                }
            }
        },
        uiSchema: {
            submitButtonOptions: {
                submitText: 'Submit'
            },
            customManifestUrl: {
                "ui:placeholder": 'Enter url...',
            },
            clearPlatformInfoWarning:{
                "ui:field": "admonition",
                "ui:severity": "warning",  // "warning", "info", "error", "success"
            },
            clearPlatformInfoButton: {
                "ui:field": "button",
                "ui:variant": "contained", // "text", "outlined", "contained", "plain"
                "ui:fullWidth": false
            },
        },
        formData: {
            customManifestUrl: customUrl
        }
    }
    return developerSettingsPage;
}

exports.getDeveloperSettingsPageRender = getDeveloperSettingsPageRender;