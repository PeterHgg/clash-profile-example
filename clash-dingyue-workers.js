addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const config = `mixed-port: 7890
allow-lan: true
mode: rule
log-level: info
external-controller: :9090
proxies:
  - {name: 优选-cloudflare.182682.xyz, server: "cloudflare.182682.xyz", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-ip.sb, server: "ip.sb", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-japan.com, server: "japan.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-malaysia.com, server: "malaysia.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-russia.com, server: "russia.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-singapore.com, server: "singapore.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.visa.com, server: "www.visa.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-visa.cn, server: "visa.cn", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.visa.com.sg, server: "www.visa.com.sg", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.visa.com.hk, server: "www.visa.com.hk", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.visa.com.tw, server: "www.visa.com.tw", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.visa.co.jp, server: "www.visa.co.jp", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.visakorea.com, server: "www.visakorea.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.gco.gov.qa, server: "www.gco.gov.qa", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.gov.se, server: "www.gov.se", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.gov.ua, server: "www.gov.ua", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.digitalocean.com, server: "www.digitalocean.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.whoer.net, server: "www.whoer.net", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-www.whatismyip.com, server: "www.whatismyip.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-gur.gov.ua, server: "gur.gov.ua", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-fbi.gov, server: "fbi.gov", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
  - {name: 优选-ns.cloudflare.com, server: "ns.cloudflare.com", port: 80, type: vmess, uuid: be9cf152-7cf1-46f9-88ed-a55b343c927b, alterId: 0, cipher: auto, tls: false, skip-cert-verify: true, network: ws, ws-opts: {path: /linxudo, headers: {Host: "luodi.5468936.xyz"}}}
proxy-groups:
  - name: 自动测速
    type: load-balance
    proxies:
      - 优选-cloudflare.182682.xyz
      - 优选-ip.sb
      - 优选-japan.com
      - 优选-malaysia.com
      - 优选-russia.com
      - 优选-singapore.com
      - 优选-visa.cn
      - 优选-www.visa.com
      - 优选-www.visa.com.sg
      - 优选-www.visa.com.hk
      - 优选-www.visa.com.tw
      - 优选-www.visa.co.jp
      - 优选-www.visakorea.com
      - 优选-www.gco.gov.qa
      - 优选-www.gov.se
      - 优选-www.gov.ua
      - 优选-www.digitalocean.com
      - 优选-www.whoer.net
      - 优选-www.whatismyip.com
      - 优选-gur.gov.ua
      - 优选-fbi.gov
      - 优选-ns.cloudflare.com
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
rules:
- DOMAIN-SUFFIX,5468936.xyz,DIRECT
- DOMAIN-SUFFIX,ip6-localhost,DIRECT
- DOMAIN-SUFFIX,ip6-loopback,DIRECT
- DOMAIN-SUFFIX,lan,DIRECT
- DOMAIN-SUFFIX,local,DIRECT
- DOMAIN-SUFFIX,localhost,DIRECT
- IP-CIDR,0.0.0.0/8,DIRECT,no-resolve
- IP-CIDR,10.0.0.0/8,DIRECT,no-resolve
- IP-CIDR,100.64.0.0/10,DIRECT,no-resolve
- IP-CIDR,127.0.0.0/8,DIRECT,no-resolve
- IP-CIDR,172.16.0.0/12,DIRECT,no-resolve
- IP-CIDR,192.168.0.0/16,DIRECT,no-resolve
- IP-CIDR,198.18.0.0/16,DIRECT,no-resolve
- IP-CIDR,224.0.0.0/4,DIRECT,no-resolve
- IP-CIDR6,::1/128,DIRECT,no-resolve
- IP-CIDR6,fc00::/7,DIRECT,no-resolve
- IP-CIDR6,fe80::/10,DIRECT,no-resolve
- IP-CIDR6,fd00::/8,DIRECT,no-resolve
- RULE-SET,proxy,自动测速
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
