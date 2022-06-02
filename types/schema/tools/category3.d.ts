export default cat3;
declare namespace cat3 {
    const type: string;
    const label: string;
    const elements: ({
        type: string;
        text: string;
        scope?: undefined;
        options?: undefined;
        label?: undefined;
        elements?: undefined;
    } | {
        type: string;
        scope: string;
        options: {
            detail: {
                type: string;
                elements: {
                    type: string;
                    scope: string;
                    options: {};
                }[];
            };
        };
        text?: undefined;
        label?: undefined;
        elements?: undefined;
    } | {
        type: string;
        label: string;
        elements: ({
            type: string;
            text: string;
            scope?: undefined;
            options?: undefined;
        } | {
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
                    }[];
                };
            };
            text?: undefined;
        })[];
        text?: undefined;
        scope?: undefined;
        options?: undefined;
    } | {
        type: string;
        label: string;
        elements: {
            type: string;
            label: string;
            scope: string;
            options: {
                showUnfocusedDescription: boolean;
                childLabelProp: string;
                detail: {
                    type: string;
                    elements: {
                        label: string;
                        type: string;
                        scope: string;
                    }[];
                };
            };
        }[];
        text?: undefined;
        scope?: undefined;
        options?: undefined;
    } | {
        type: string;
        label: string;
        elements: ({
            type: string;
            label: string;
            scope: string;
            options: {
                childLabelProp: string;
                showUnfocusedDescription?: undefined;
                detail?: undefined;
            };
            text?: undefined;
        } | {
            type: string;
            text: string;
            label?: undefined;
            scope?: undefined;
            options?: undefined;
        } | {
            type: string;
            label: string;
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
                childLabelProp?: undefined;
            };
            text?: undefined;
        })[];
        text?: undefined;
        scope?: undefined;
        options?: undefined;
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
            type: string;
            label: string;
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
                showUnfocusedDescription?: undefined;
            };
            text?: undefined;
        } | {
            type: string;
            label: string;
            scope: string;
            options: {
                showUnfocusedDescription: boolean;
                detail?: undefined;
            };
            text?: undefined;
        })[];
        text?: undefined;
        scope?: undefined;
        options?: undefined;
    })[];
}
