import getProxyFromURI from './api';
import {expect} from 'chai';

describe('getProxyFromURI', () => {

    it('should return http_proxy env', () => {

        process.env.http_proxy = 'http://myproxy.local:3128';
        process.env.no_proxy = '';
        process.env.NO_PROXY = '';

        const uri = new URL('http://uri.local/api');

        const result = getProxyFromURI(uri);

        expect(result).equal('http://myproxy.local:3128');
    });
});
