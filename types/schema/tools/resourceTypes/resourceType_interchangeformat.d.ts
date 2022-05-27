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
                    "@type": string;
                    url: string;
                    name: string;
                }[];
                export { _const as const };
            }
        }
    }
    const elements: ({
        type: string;
        text: string;
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
    })[];
}
