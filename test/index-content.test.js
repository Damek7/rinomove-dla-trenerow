const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8')

test('public copy does not label the offer as premium', () => {
  assert.doesNotMatch(html, /premium/i)
})

test('hero names the concrete product', () => {
  assert.match(html, /Budujemy jedno miejsce na profil, terminy, rezerwacje i płatności\./)
})

test('future capabilities are presented as planned work', () => {
  assert.match(html, /Budujemy profil, na którym klient pozna ofertę, cenę, lokalizację i dostępne terminy/)
  assert.match(html, /Opinię będzie mógł wystawić wyłącznie klient/)
  assert.match(html, /mają działać razem/)
  assert.match(html, /Docelowo zobaczysz, które treningi są opłacone, potwierdzone i zakończone/)
})

test('free period begins with profile launch', () => {
  assert.match(html, /Bezpłatny okres zaczyna się w dniu uruchomienia profilu\./)
})

test('public copy does not reveal launch location, disciplines, or stage', () => {
  assert.doesNotMatch(html, /warszaw/i)
  assert.doesNotMatch(html, /pilotaż/i)
  assert.doesNotMatch(html, /Zaczynamy od trenerów tenisa i boksu/i)
  assert.doesNotMatch(html, /na jakim etapie jesteśmy/i)
})

test('manual Instagram handoff is named accurately', () => {
  assert.match(html, />Skopiuj zgłoszenie<\/button>/)
})
