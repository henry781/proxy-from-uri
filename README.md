# Proxy from uri

**From: https://github.com/request/request/blob/master/lib/getProxyFromURI.js**

This is a simple library without any dependency to get the proxy for an uri using HTTP_PROXY environment variables.

This supports NO_PROXY, no_proxy, HTTP_PROXY, http_proxy, HTTPS_PROXY, https_proxy environment variables.

## Usage

### Install

```
npm install --save @henry781/proxy-from-uri
```

```ts
import getProxyFromURI from '@henry781/proxy-from-uri';
        
// env vars
// http_proxy=http://myproxy.local:3128
// https_proxy=http://myproxy.local:3128
// no_proxy=
        
const uri = new URL('http://uri.local/api');

const result = getProxyFromURI(uri);
// http://myproxy.local:3128
```
