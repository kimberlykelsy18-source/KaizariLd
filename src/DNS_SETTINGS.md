# 📡 DNS CONFIGURATION SHEET
## Squarespace → Netlify Connection

---

## 🎯 WHAT TO DO

### In Squarespace Domains:
1. Login to: **[domains.squarespace.com](https://domains.squarespace.com)**
2. Click your domain name
3. Go to: **Advanced Settings** → **DNS Settings**
4. **DELETE** existing A and CNAME (www) records
5. **ADD** the records below

---

## 📝 COPY THESE EXACT VALUES

### A RECORD (Root Domain)

```
┌─────────────────────────────────┐
│ Type:     A                     │
│ Host:     @                     │
│           (or blank/root)       │
│ Value:    75.2.60.5            │
│ TTL:      3600                  │
│           (or Auto/Default)     │
└─────────────────────────────────┘
```

**⚠️ IMPORTANT:**
- The value `75.2.60.5` is Netlify's IP
- Host is `@` symbol (means root domain)
- If `@` doesn't work, try leaving it blank or use `root`

---

### CNAME RECORD (WWW Subdomain)

```
┌─────────────────────────────────┐
│ Type:     CNAME                 │
│ Host:     www                   │
│ Value:    [YOUR-SITE].netlify.app
│ TTL:      3600                  │
│           (or Auto/Default)     │
└─────────────────────────────────┘
```

**⚠️ REPLACE `[YOUR-SITE]` WITH YOUR NETLIFY URL!**

Example: If your Netlify site is `kaizari-lnd.netlify.app`, enter:
```
Value: kaizari-lnd.netlify.app
```

**Do NOT include `https://` or `/`**

---

## ✅ VERIFICATION CHECKLIST

After adding records in Squarespace:

### Immediate (0-5 minutes):
- [ ] Both records saved successfully
- [ ] No error messages in Squarespace
- [ ] Records visible in DNS Settings

### After 30 Minutes:
- [ ] Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- [ ] Enter your domain: `yourdomain.com`
- [ ] Type: A
- [ ] Should show: `75.2.60.5` globally (green checks)

### After 1-2 Hours:
- [ ] Website loads at: `http://yourdomain.com`
- [ ] Website loads at: `http://www.yourdomain.com`
- [ ] Both redirect to HTTPS (green padlock)

---

## 🔍 HOW TO CHECK DNS RECORDS

### Method 1: Online Tool
1. Go to: [whatsmydns.net](https://whatsmydns.net)
2. Enter: `yourdomain.com`
3. Select: **A**
4. Click: **Search**
5. Should show: `75.2.60.5` globally

### Method 2: Command Line

**Mac/Linux:**
```bash
dig yourdomain.com
# Should show: 75.2.60.5

dig www.yourdomain.com
# Should show: CNAME to netlify.app
```

**Windows (PowerShell):**
```powershell
nslookup yourdomain.com
# Should show: 75.2.60.5

nslookup www.yourdomain.com
# Should show: CNAME to netlify.app
```

---

## 🚨 COMMON MISTAKES TO AVOID

### ❌ WRONG:
```
A Record Value: https://75.2.60.5  ← NO!
A Record Value: 75.2.60.5/         ← NO!
CNAME Value: https://site.netlify.app  ← NO!
CNAME Value: site.netlify.app/     ← NO!
```

### ✅ CORRECT:
```
A Record Value: 75.2.60.5          ← YES!
CNAME Value: site.netlify.app      ← YES!
```

---

## 📋 SQUARESPACE DNS LOCATIONS

Depending on your Squarespace plan, DNS settings are at:

### Domain Only (What You Have):
```
domains.squarespace.com
→ Click domain
→ Advanced Settings
→ DNS Settings
```

### With Website:
```
squarespace.com/config/domains
→ Click domain
→ DNS Settings (Advanced)
```

---

## 🔄 BEFORE & AFTER

### BEFORE (Squarespace Website):
```
A Record: Points to Squarespace IP
CNAME www: Points to Squarespace
Website: Hosted on Squarespace
```

### AFTER (Netlify Website):
```
A Record: Points to 75.2.60.5 (Netlify)
CNAME www: Points to your-site.netlify.app
Website: Hosted on Netlify
```

---

## ⏰ DNS PROPAGATION TIME

| Location | Typical Time |
|----------|-------------|
| **Your Computer** | 5-15 minutes |
| **Your ISP** | 30 minutes - 2 hours |
| **Worldwide** | 2-24 hours |
| **Full Propagation** | 24-48 hours (rare) |

**95% of users see changes within 2 hours**

### Speed Up DNS Changes:
1. Clear browser cache
2. Clear DNS cache:
   - **Mac:** `sudo dscacheutil -flushcache`
   - **Windows:** `ipconfig /flushdns`
3. Use incognito/private browsing
4. Try from mobile network (different DNS)

---

## 📞 TROUBLESHOOTING CONTACTS

### Squarespace DNS Issues:
- **Help:** [support.squarespace.com](https://support.squarespace.com)
- **Phone:** 1-646-580-3456 (US)
- **Chat:** Available in account dashboard

### Netlify Issues:
- **Support:** [support.netlify.com](https://support.netlify.com)
- **Forum:** [answers.netlify.com](https://answers.netlify.com)
- **Status:** [netlifystatus.com](https://netlifystatus.com)

---

## 📸 SCREENSHOT REFERENCE

When in Squarespace DNS Settings, you should see:

```
┌──────────────────────────────────────────────────┐
│ DNS Settings                                     │
├──────────────────────────────────────────────────┤
│                                                  │
│ Type    Host    Value              TTL          │
│ ────────────────────────────────────────────     │
│ A       @       75.2.60.5          3600         │
│ CNAME   www     site.netlify.app   3600         │
│                                                  │
│ [Add Record] [Delete]                            │
└──────────────────────────────────────────────────┘
```

---

## ✅ FINAL VERIFICATION

### Test Your Domain:

```bash
# Should return Netlify IP
curl -I http://yourdomain.com

# Should have SSL
curl -I https://yourdomain.com

# Should redirect to HTTPS
# Status: 301 or 302
```

### In Browser:
1. Visit: `http://yourdomain.com`
   - Should redirect to: `https://yourdomain.com`
   - Green padlock visible
   
2. Visit: `http://www.yourdomain.com`
   - Should redirect to: `https://yourdomain.com`
   - No www warnings

---

## 🎉 SUCCESS INDICATORS

You've done it correctly when:

- ✅ Green padlock on `https://yourdomain.com`
- ✅ Green padlock on `https://www.yourdomain.com`
- ✅ Both URLs show your website
- ✅ Netlify shows "Domain is configured correctly"
- ✅ SSL certificate is active
- ✅ No browser security warnings
- ✅ Forms submit successfully

---

**Need help? See DEPLOYMENT_GUIDE.md for detailed walkthrough**

*DNS Settings Sheet - Version 1.0*
*Updated: November 4, 2025*
