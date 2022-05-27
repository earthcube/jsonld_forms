export default interchange;
declare namespace interchange {
    const type: string;
    const label: string;
    namespace rule {
        const effect: string;
        namespace condition {
            const scope: string;
            namespace schema {
                const _const: {
                    name: string;
                    "@type": string;
                    url: string;
                }[];
                export { _const as const };
            }
        }
    }
    const elements: ({
        type: string;
        text: string;
        description: string;
        label?: undefined;
        scope?: undefined;
        options?: undefined;
    } | {
        label: string;
        type: string;
        scope: string;
        options: {
            showUnfocusedDescription: boolean;
            detail?: undefined;
        };
        text?: undefined;
        description?: undefined;
    } | {
        type: string;
        text: string;
        description?: undefined;
        label?: undefined;
        scope?: undefined;
        options?: undefined;
    } | {
        label: string;
        type: string;
        scope: string;
        options: {
            showUnfocusedDescription: boolean;
            detail: {
                type: string;
                elements: {
                    label: string;
                    type: string;
                    scope: string;
                }[];
            };
        };
        text?: undefined;
        description?: undefined;
    })[];
}
