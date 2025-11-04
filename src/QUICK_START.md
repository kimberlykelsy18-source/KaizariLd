# ⚡ QUICK START GUIDE
## Deploy in 15 Minutes

---

## 🚀 FASTEST PATH TO LIVE WEBSITE

### 1️⃣ NETLIFY (5 minutes)
```
1. Go to: app.netlify.com/signup
2. Sign up with GitHub or Email
3. Click "Add new site" → "Deploy manually"
4. Drag your project folder
5. Done! Live at: your-site.netlify.app
```

### 2️⃣ SQUARESPACE DNS (5 minutes)
```
1. Login: domains.squarespace.com
2. Click your domain
3. Go to DNS Settings
4. DELETE old A and CNAME records
5. ADD these:

   A Record:
   ├─ Host: @
   └─ Value: 75.2.60.5
   
   CNAME Record:
   ├─ Host: www
   └─ Value: your-site.netlify.app

6. Save
```

### 3️⃣ NETLIFY DOMAIN (2 minutes)
```
1. Netlify → Domain management
2. Add custom domain: yoursite.com
3. Add domain alias: www.yoursite.com
4. Wait for SSL (auto)
```

### 4️⃣ WAIT (5 min - 24 hours)
```
DNS Propagation: Usually 30 minutes
SSL Certificate: Auto-activates after DNS
```

---

## 📋 COPY-PASTE CHECKLIST

- [ ] Export project from Figma Make
- [ ] Create Netlify account
- [ ] Deploy to Netlify
- [ ] Note Netlify URL: `_____________.netlify.app`
- [ ] Login to Squarespace Domains
- [ ] Delete old DNS records
- [ ] Add A record: `75.2.60.5`
- [ ] Add CNAME: `your-site.netlify.app`
- [ ] Add custom domain in Netlify
- [ ] Add www alias in Netlify
- [ ] Wait for DNS (check: whatsmydns.net)
- [ ] Verify SSL (green padlock)
- [ ] Test all pages
- [ ] Test contact form
- [ ] Celebrate! 🎉

---

## 🆘 COMMON ISSUES

**"DNS Not Found"**
→ Wait 30-60 more minutes

**"Not Secure" Warning**
→ SSL activating, wait 10 minutes

**Site Not Loading**
→ Check DNS at whatsmydns.net

**Forms Not Working**
→ Check Netlify Forms tab

---

## 📞 NEED HELP?

**DNS Check:** [whatsmydns.net](https://whatsmydns.net)
**Netlify Status:** [netlifystatus.com](https://netlifystatus.com)
**Support:** [support.netlify.com](https://support.netlify.com)

---

**See DEPLOYMENT_GUIDE.md for detailed instructions**
