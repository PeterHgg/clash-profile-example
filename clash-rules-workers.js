addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const urlGroups = {
  '/proxy': [
    'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/gfw.txt',
    'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/proxy.txt'
  ],
  '/direct': [
    'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/lancidr.txt',
    'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/direct.txt',
    'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/private.txt',
    'https://raw.githubusercontent.com/Loyalsoldier/clash-rules/release/cncidr.txt'
    // 在这里添加更多直连链接
  ],
};

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path in urlGroups) {
    const contents = await getContent(urlGroups[path]);
    const mergedText = contents.join('\n');
    return new Response(mergedText, {
      headers: { 'content-type': 'text/plain' },
    });
  }

  return new Response('Hello, World!', {
    headers: { 'content-type': 'text/plain' },
  });
}

async function getContent(urls) {
  const contents = [];

  for (let i = 0; i < urls.length; i++) {
    const response = await fetch(urls[i]);
    const text = await response.text();

    let lines = text.split('\n');
    // 保留第一个链接的首行
    if (i !== 0) {
      lines = lines.slice(1);
    }

    lines = lines.filter(line => line.trim() !== '');
    const modifiedText = lines.join('\n');
    contents.push(modifiedText);
  }

  return contents;
}
