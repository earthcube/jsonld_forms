export default resourceType;
declare function resourceType(): {
    type: string;
    label: string;
    rule: {
        effect: string;
        condition: {
            scope: string;
            schema: {
                const: {
                    name: string;
                    "@type": string;
                    url: string;
                }[];
            };
        };
    };
    elements: ({
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
            suggestion?: undefined;
            autocomplete?: undefined;
        };
        text?: undefined;
        elements?: undefined;
    } | {
        label: string;
        type: string;
        scope: string;
        options: {
            suggestion: any[];
            autocomplete: boolean;
            showUnfocusedDescription?: undefined;
            detail?: undefined;
        };
        text?: undefined;
        elements?: undefined;
    } | {
        label: string;
        type: string;
        scope: string;
        options: {
            suggestion: any[];
            showUnfocusedDescription: boolean;
            detail?: undefined;
            autocomplete?: undefined;
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
                    elements: ({
                        label: string;
                        type: string;
                        scope: string;
                        options?: undefined;
                    } | {
                        label: string;
                        type: string;
                        scope: string;
                        options: {
                            detail: {
                                type: string;
                                elements: {
                                    label: string;
                                    type: string;
                                    scope: string;
                                }[];
                            };
                        };
                    })[];
                };
            };
            text?: undefined;
        })[];
        text?: undefined;
        scope?: undefined;
        options?: undefined;
    })[];
};
