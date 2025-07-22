# Cedars Estate - Coming Soon Landing Page

A modern, elegant landing page for Cedars Estate built with Nuxt 3, Vue.js, and TypeScript. Features a full-screen hero image with sophisticated typography and bot-protected contact information.

---

## 🚀 Features

### Core Technologies
- **Nuxt 3** – The modern Vue.js framework  
- **TypeScript** – Full type safety throughout the application  
- **Vue 3 Composition API** – Using `<script setup>` syntax  

### Design & Styling
- **Full-screen hero image** – Responsive background with custom banner  
- **Elegant typography** – *Playfair Display* font for a distinguished, luxury aesthetic  
- **Glassmorphism effects** – Modern frosted glass effect on contact information box  
- **Responsive design** – Mobile-first approach with `clamp()` for fluid typography  
- **Smooth animations** – Fade-in effects when image loads  
- **Dark overlay** – Ensures text readability over any background image  

### Contact Protection
- **Anti-bot email protection** – ROT13 cipher encryption  
- **Phone number obfuscation** – Custom number-shifting algorithm  
- **Click-to-reveal mechanism** – Requires user interaction to display contact info  
- **Visual feedback** – Hover effects and underline animations on clickable elements  

---

## 📁 Project Structure

```
cedar-estate/
├── app/
│   ├── app.vue              # Main application component
│   ├── assets/
│   │   ├── css/
│   │   │   └── main.css     # Global styles
│   │   └── images/
│   │       └── Banner.jpg   # Hero background image
│   └── composables/
│       └── useContact.ts    # Contact encryption/decryption logic
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── nuxt.config.ts           # Nuxt configuration with fonts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Installation & Setup

### Clone the repository

```bash
git clone [your-repo-url]
cd cedar-estate
```

### Install dependencies

```bash
npm install
# or
yarn install
```

### Run development server

```bash
npm run dev
# or
yarn dev
```

### Build for production

```bash
npm run build
npm run preview
```

---

## 🎨 Customization

### Updating Contact Information

Edit `app/composables/useContact.ts`:

- **Email**: Update `encodedEmail` with your ROT13 encoded email  
- **Phone**: Update `encodedPhone` with your number-shifted phone  

### Changing the Background Image

Replace `app/assets/images/Banner.jpg` with your own image and update the import in `app.vue`.

### Modifying Fonts

Edit `nuxt.config.ts` to change Google Fonts imports:

```ts
link: [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap'
  }
]
```

### Adjusting Colors & Styling

- **Global styles**: `app/assets/css/main.css`  
- **Component styles**: `<style>` section in `app/app.vue`  

---

## 🔒 Security Features

### Email Protection

Uses ROT13 cipher to scramble email addresses  
**Example**:  
`Alexandra.Jara@unuhr.com` → `Nyrknaqen.Wnen@hahuе.pbz`

### Phone Protection

Custom digit-shifting algorithm (shift by 5 with wrapping)  
**Example**:  
`416-894-0221` → `961-349-5776`

### Bot Prevention

- No readable contact information in source code  
- Requires JavaScript and user interaction  
- Search engines can't index the actual contact details  

---

## 📱 Responsive Design

- **Desktop**: Full typography scale with hover effects  
- **Tablet**: Adjusted spacing and font sizes  
- **Mobile**: Stacked layout for contact information  
