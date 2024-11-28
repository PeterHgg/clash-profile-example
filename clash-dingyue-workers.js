addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const config = `mixed-port: 7890
allow-lan: true
mode: rule
log-level: info
external-controller: :9090
proxies:
  - {name: CDN优选-1, server: "1.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
  - {name: CDN优选-2, server: "2.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
  - {name: CDN优选-3, server: "3.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
  - {name: CDN优选-4, server: "4.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
  - {name: CDN优选-5, server: "5.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
  - {name: CDN优选-6, server: "6.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
  - {name: CDN优选-7, server: "7.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
  - {name: CDN优选-8, server: "8.cdn.5468936.xyz", port: 443, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: true, skip-cert-verify: true, network: ws, ws-opts: {path: /linuxdo}}
proxy-groups:
  - name: 自动测速
    type: load-balance
    proxies:
      - CDN优选-1
      - CDN优选-2
      - CDN优选-3
      - CDN优选-4
      - CDN优选-5
      - CDN优选-6
      - CDN优选-7
      - CDN优选-8
    lazy: false
    url: http://www.gstatic.com/generate_204
    interval: 10
    strategy: round-robin
    timeout: 1500
rule-providers:
  proxy:
    type: http
    behavior: domain
    url: "http://rules.5468936.xyz/proxy"
    path: ./ruleset/proxy.yaml
    interval: 86400
  direct:
    type: http
    behavior: domain
    url: "http://rules.5468936.xyz/direct"
    path: ./ruleset/direct.yaml
    interval: 86400
  proxyip:
    type: http
    behavior: ipcidr
    url: "http://rules.5468936.xyz/proxyip"
    path: ./ruleset/proxy.yaml
    interval: 86400
  directip:
    type: http
    behavior: ipcidr
    url: "http://rules.5468936.xyz/directip"
    path: ./ruleset/direct.yaml
    interval: 86400
rules:
- DOMAIN-SUFFIX,5468936.xyz,DIRECT
- RULE-SET,proxyip,自动测速
- RULE-SET,proxy,自动测速
- RULE-SET,directip,DIRECT
- RULE-SET,direct,DIRECT
- GEOIP,CN,DIRECT
- MATCH,自动测速
`

async function handleRequest(request) {
  return new Response(config, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  })
}
