# file-cryptor 🔐
A lightweight API tool for encrypting and password-protecting `.xlsx` (Excel) files. Built with Express and `xlsx-populate`, it provides a simple endpoint to securely handle Excel files — perfect for automation, internal tools, or secure sharing.

---

## ✨ Features

- 🔐 Encrypt `.xlsx` files with a password
- 💡 Accepts base64-encoded Excel files (via JSON)
- 📦 JSON in, binary out — easy to integrate with frontend/backend
- ⚙️ Built with Express and `xlsx-populate`
- 🌱 Ready for future expansion (CSV, PDF, etc.)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- [xlsx-populate](https://www.npmjs.com/package/xlsx-populate)
- `dotenv` for environment configuration
- `cors` for cross-origin support

---

## 📦 Installation

```bash
git clone https://github.com/vinaekalaylani/file-cryptor.git
cd file-cryptor
npm install
````

Create a `.env` file:

```
PORT=
CORS_ORIGIN=
```

---

## 🚀 Usage

### Start the server

```bash
npm start
```

### Endpoint: `POST /protect-excel`

**Content-Type:** `application/json`

#### Fields:

* `fileBase64`: your `.xlsx` file encoded in base64
* `encrypted`: the encryption password

#### Response:

* Binary content of the encrypted Excel file (downloaded by browser or client)

---

## 🧭 Roadmap

* [x] XLSX password protection
* [ ] Add support for PDF & CSV encryption

---


## 🙏 Acknowledgments

Built with ❤️ using [xlsx-populate](https://github.com/dtjohnson/xlsx-populate).

---