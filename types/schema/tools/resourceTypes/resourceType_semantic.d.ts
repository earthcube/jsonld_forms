export default resourceType;
declare namespace resourceType {
    const type: string;
    const label: string;
    namespace rule {
        const effect: string;
        namespace condition {
            const scope: string;
            namespace schema {
                const _enum: {
                    name: string;
                    "@type": string;
                    url: string;
                }[][];
                export { _enum as enum };
            }
        }
    }
    const elements: ({
        type: string;
        text: string;
        label?: undefined;
        scope?: undefined;
        options?: undefined;
        elements?: undefined;
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
        elements?: undefined;
    } | {
        type: string;
        label: string;
        elements: ({
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
            };
            text?: undefined;
        })[];
        text?: undefined;
        scope?: undefined;
        options?: undefined;
    })[];
}
