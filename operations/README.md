# Operations — your selling device app

A complete, **offline** point-of-sale app for selling physical products in person.
It turns your Lenovo Tab Plus into your operations device: products, stock, sales,
invoices and daily takings — all stored **on the tablet**, no internet needed once installed.

## What it does

| Tab | What you do there |
|-----|-------------------|
| 🛒 **Sell** | Tap products into a cart, take an order, mark it Paid or Unpaid |
| 🏷️ **Products** | Add your items with price + stock; low-stock and out-of-stock warnings |
| 🧾 **Orders** | Every sale, today's takings, unpaid total; open any sale to print an invoice |
| ⚙️ **Settings** | Your business name, currency, tax %, and **backup / restore** |

- Generates a clean **printable invoice / receipt** for every sale (print or save as PDF).
- Works with **any currency** and an optional **tax rate** — set in Settings.
- **Backup** to a file and **restore** it — your data lives only on the device, so back up often.

---

## Put it on the tablet (5 minutes)

The app needs to be opened from a web address (`https://…`) so it can install and run
offline. The easiest free way is **GitHub Pages**:

1. On a computer, go to the repo on GitHub → **Settings → Pages**.
2. Under *Build and deployment*, set **Source = Deploy from a branch**, pick the branch
   these files are on, folder **/ (root)**, and **Save**.
3. After a minute GitHub gives you a link. Your app will be at:
   `https://<your-username>.github.io/bothomework/operations/`
4. On the **tablet**, open that link in Chrome.
5. Tap the **⋮ menu → "Add to Home screen"** (or "Install app").
6. Done — open it from the home screen like any app. It now works with no internet.

> No GitHub Pages? You can also drop the `operations/` folder on any web host
> (Netlify drop, Vercel, etc.). Anything serving it over `https` will work.

---

## First-time setup on the tablet

1. Open **Settings** → enter your **business name**, **currency symbol**, and **tax %** → **Save**.
2. Open **Products** → **＋ Add product** for each item (name, price, stock).
   - Tip: leave *Stock* blank for things you never run out of (it won't track a count).
   - Or tap **Settings → Load sample products** to try it instantly.
3. Go to **Sell** and make your first sale 🎉

## Don't lose your data

Everything is stored on the tablet only. **Settings → Export backup** saves a file you can
keep safe (email it to yourself, save to Drive). **Restore backup** brings it all back on a
new device. Also **Export sales (CSV)** to open your sales in a spreadsheet anytime.

---

*Runs entirely on-device. No accounts, no API keys, no monthly fees.*
