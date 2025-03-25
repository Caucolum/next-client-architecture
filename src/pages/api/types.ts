export interface BreedsImageRandomArgProps {

}

export interface BreedsImageRandomDataProps {
    message: string,
    status: string,
}

export interface EndpointBase {
    url: string;
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    authenticated: boolean;
}