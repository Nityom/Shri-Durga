# Language Support Implementation Guide

This project now supports multiple languages (English and Hindi) using a custom internationalization (i18n) system.

## How It Works

### 1. Language Context
- Located in `src/contexts/LanguageContext.tsx`
- Provides language state and translation function across the app
- Automatically saves language preference to localStorage

### 2. Translation Files
- English: `src/translations/en.json`
- Hindi: `src/translations/hi.json`

### 3. Using Translations in Components

#### Step 1: Import the hook
```tsx
"use client"
import { useLanguage } from "@/contexts/LanguageContext"
```

#### Step 2: Use the translation function
```tsx
export const MyComponent = () => {
    const { t, language } = useLanguage()
    
    return (
        <div>
            <h1>{t("nav.home")}</h1>
            <p>{t("hero.description")}</p>
        </div>
    )
}
```

### 4. Adding New Translations

To add a new translation key:

1. Add the key to both `en.json` and `hi.json`:

**en.json:**
```json
{
    "mypage.title": "My Page Title",
    "mypage.description": "Page description here"
}
```

**hi.json:**
```json
{
    "mypage.title": "मेरा पेज शीर्षक",
    "mypage.description": "यहां पेज विवरण"
}
```

2. Use it in your component:
```tsx
<h1>{t("mypage.title")}</h1>
```

## Language Selector

The language selector is integrated into the Navbar:
- Desktop: Shows a globe icon with language dropdown
- Mobile: Shows language selection buttons in mobile menu
- Automatically saves preference to localStorage

## Already Translated Components

The following components have been updated with translation support:
- ✅ Navbar
- ✅ Hero
- ✅ Features
- ✅ Doctors
- ✅ Testimonials
- ✅ About
- ✅ CTA
- ✅ Footer

## Components/Pages That Need Translation

You'll need to add translation support to these pages:
- [ ] `/about` page
- [ ] `/services` page and service detail pages
- [ ] `/doctors` page
- [ ] `/blog` page
- [ ] `/contact` page
- [ ] `/appointment` page
- [ ] `/faq` page
- [ ] `/privacy` page
- [ ] `/terms` page

## Translation Key Naming Convention

Use dot notation to organize keys:
- `nav.*` - Navigation items
- `hero.*` - Hero section
- `features.*` - Features section
- `services.*` - Services section
- `footer.*` - Footer content
- `[pagename].*` - Page-specific content

## Tips

1. Always mark components as `"use client"` when using `useLanguage()`
2. Keep translation keys descriptive
3. Test both languages thoroughly
4. For long text, consider breaking into smaller chunks
5. Keep translations consistent across pages
