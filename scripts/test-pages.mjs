const BASE = process.env.BASE || 'http://localhost:3010';

const paths = [
  '/',
  '/All-products',
  '/new-products',
  '/new-products?product=268',
  '/Top-products',
  '/Cart',
  '/Checkout',
  '/Conditions',
  '/contact',
  '/favorites',
  '/new-year-offers',
  '/payment-success',
  '/special-offers',
  '/success',
];

function isVisible404(html) {
  return (
    html.includes('"isNotFoundPath":true') || html.includes('"pagePath":"/404"')
  );
}

const pathChecks = {
  '/new-products': (html) =>
    /All New Arrivals|Новинки|new-products/i.test(html) && html.includes('application/ld+json'),
  '/All-products': (html) => /All-products|Каталог|catalog/i.test(html) || html.length > 50000,
  '/Checkout': (html) => /Checkout|Оформлення|checkout/i.test(html),
};

async function testPath(path) {
  const url = `${BASE}${path}`;
  try {
    const res = await fetch(url, { redirect: 'follow' });
    const html = await res.text();
    const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || '(no title)';
    const check = pathChecks[path.split('?')[0]];
    const contentOk = check ? check(html) : html.length > 5000;
    const ok = res.ok && !isVisible404(html) && contentOk;
    return { path, status: res.status, ok, title: title.slice(0, 60), contentOk };
  } catch (e) {
    return { path, status: 0, ok: false, title: e.message, contentOk: false };
  }
}

async function main() {
  console.log(`Testing ${BASE}\n`);
  const results = [];
  for (const path of paths) {
    results.push(await testPath(path));
  }
  let failed = 0;
  for (const r of results) {
    const mark = r.ok ? 'PASS' : 'FAIL';
    if (!r.ok) failed++;
    console.log(`${mark} ${r.status} ${r.path}`);
    if (!r.ok) console.log(`     ${r.title}`);
  }
  console.log(`\n${results.length - failed}/${results.length} passed`);
  process.exit(failed > 0 ? 1 : 0);
}

main();
