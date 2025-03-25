import { api } from "@/pages/api";

interface EndpointBase {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete';
    authenticated: boolean;
}

type Endpoint<ArgsProps = unknown, DataProps = unknown> = EndpointBase & {
    ARGS_PROPS?: ArgsProps;
    DATA_PROPS?: DataProps;
};

export type Endpoints = {
    [key: string]: Endpoint;
};

export const endpoints: Endpoints = api;