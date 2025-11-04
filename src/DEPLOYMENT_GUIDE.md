# 🚀 COMPLETE DEPLOYMENT GUIDE
## Kaizari L&D International Website - Squarespace Domain Connection

---

## 📋 TABLE OF CONTENTS
1. [Export Your Project](#step-1-export-your-project)
2. [Deploy to Netlify](#step-2-deploy-to-netlify)
3. [Connect Squarespace Domain](#step-3-connect-your-squarespace-domain)
4. [SSL Certificate Setup](#step-4-ssl-certificate-automatic)
5. [Form Submissions](#step-5-form-submissions)
6. [Troubleshooting](#troubleshooting)
7. [Post-Deployment Checklist](#post-deployment-checklist)

---

## 📦 STEP 1: EXPORT YOUR PROJECT

### From Figma Make:
1. Click the **Export/Download** button (top-right corner)
2. Download as **ZIP file**
3. **Extract the ZIP** to a folder on your computer
4. Verify you have all files (App.tsx, components/, pages/, styles/, etc.)

✅ **You're ready for deployment!**

---

## 🌐 STEP 2: DEPLOY TO NETLIFY

### A. Create Account
1. Go to **[https://app.netlify.com/signup](https://app.netlify.com/signup)**
2. Sign up with:
   - **GitHub** (recommended - enables automatic updates)
   - **GitLab**
   - **Email**

### B. Deploy Your Site

#### **METHOD 1: Drag & Drop (Fastest - 2 minutes)**

1. After login, click **"Add new site"** → **"Deploy manually"**
2. **Drag your entire project folder** into the upload area
3. Wait 30-60 seconds
4. 🎉 Your site is live at: `https://random-name-123.netlify.app`

#### **METHOD 2: GitHub (Best for Updates)**

**First, push to GitHub:**
```bash
# In your project folder terminal:
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kaizari-website.git
git push -u origin main
```

**Then connect to Netlify:**
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify
4. Select repository: `kaizari-website`
5. Build settings (auto-detected):
   ```
   Base directory: (leave blank)
   Build command: npm run build
   Publish directory: dist
   ```
6. Click **"Deploy site"**
7. Wait 2-3 minutes for first build

### C. Customize Site Name (Optional)
1. Go to **Site settings** → **Site details**
2. Click **"Change site name"**
3. Enter: `kaizari-lnd` (or your preference)
4. Save - Now accessible at: `https://kaizari-lnd.netlify.app`

---

## 🔗 STEP 3: CONNECT YOUR SQUARESPACE DOMAIN

### A. Add Custom Domain in Netlify

1. In Netlify Dashboard → **Domain management**
2. Click **"Add custom domain"**
3. Enter your domain: `kaizarildinternational.com`
4. Click **"Verify"**
5. You'll see: **"Check DNS configuration"** - Keep this page open!

### B. Get DNS Records from Netlify

Netlify shows you the records needed:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NETLIFY DNS RECORDS (Copy These)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type    Name/Host    Value
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
A       @            75.2.60.5
CNAME   www          kaizari-lnd.netlify.app
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Note:** Replace `kaizari-lnd.netlify.app` with YOUR Netlify site URL

### C. Configure DNS in Squarespace

#### Login to Squarespace Domains:
- **Option 1:** [https://domains.squarespace.com](https://domains.squarespace.com)
- **Option 2:** Squarespace.com → Account → Domains

#### Update DNS Settings:

1. **Click your domain** (e.g., kaizarildinternational.com)

2. **Navigate to DNS:**
   - Click **"Advanced Settings"** or **"Manage"**
   - Then **"DNS Settings"** or **"DNS"**

3. **⚠️ REMOVE CONFLICTS (Important!):**
   - Find existing **A records** → DELETE or DISABLE
   - Find existing **CNAME for www** → DELETE or DISABLE
   - These point to Squarespace - we're replacing them

4. **ADD NETLIFY RECORDS:**

   **A Record:**
   ```
   Type: A
   Host: @ (or leave blank, or "root")
   Value: 75.2.60.5
   TTL: 3600 (or Auto/Default)
   ```
   
   **CNAME Record:**
   ```
   Type: CNAME  
   Host: www
   Value: kaizari-lnd.netlify.app
   TTL: 3600 (or Auto/Default)
   ```

5. **Click SAVE** or **APPLY CHANGES**

### D. Add WWW Alias in Netlify

1. Back in Netlify → **Domain management**
2. Under **"Domain aliases"**, click **"Add domain alias"**
3. Enter: `www.kaizarildinternational.com`
4. Click **"Add domain"**

Netlify will auto-redirect `www` ↔ non-www versions.

---

## 🔒 STEP 4: SSL CERTIFICATE (AUTOMATIC)

### Once DNS Propagates:

1. In Netlify → **Domain management** → **HTTPS**
2. Netlify auto-detects when DNS is ready
3. Click **"Verify DNS configuration"** (if not auto-detected)
4. Netlify provisions **FREE Let's Encrypt SSL**
5. Certificate activates in **1-10 minutes**

### ✅ Success Indicators:
- Green padlock 🔒 in browser
- `https://kaizarildinternational.com` works
- Certificate details show "Let's Encrypt"

---

## ⏱️ TIMELINE & EXPECTATIONS

| Phase | Duration | How to Check |
|-------|----------|--------------|
| **Netlify Deploy** | 1-3 min | Site live at `.netlify.app` |
| **DNS Propagation** | 5 min - 48 hrs<br>(usually 30 min - 2 hrs) | [whatsmydns.net](https://whatsmydns.net) |
| **SSL Certificate** | Auto after DNS | Green padlock appears |

### Check DNS Propagation:
1. Visit **[https://whatsmydns.net](https://whatsmydns.net)**
2. Enter: `kaizarildinternational.com`
3. Type: **A**
4. Should show: `75.2.60.5` globally (green checkmarks)

---

## 📧 STEP 5: FORM SUBMISSIONS

### Your Forms Are Already Configured! ✅

I've enabled **Netlify Forms** (FREE) for your contact form:
- **100 submissions/month** FREE
- Email notifications
- Spam filtering included

### View Form Submissions:

1. Netlify Dashboard → **Forms** tab
2. You'll see all contact form submissions
3. Click any submission to view details

### Enable Email Notifications:

1. **Forms** → **Settings and usage**
2. **Form notifications** → **Add notification**
3. Choose **Email notification**
4. Enter email: `admin@kaizarildinternational.com`
5. Save

Now you'll receive an email for every form submission!

### Other Forms:
- Course registration forms (in CourseCard.tsx)
- Event booking forms (in EventCard.tsx, EventsPage.tsx)
- Partner/Trainer portal forms

These can also be converted to Netlify Forms. Let me know if you want them enabled!

---

## 🔧 TROUBLESHOOTING

### ❌ "DNS Not Configured" in Netlify
**Causes:**
- DNS records not added yet
- Records added to wrong domain
- DNS not propagated yet

**Solutions:**
1. Double-check records in Squarespace
2. Wait 30-60 minutes for propagation
3. Use [whatsmydns.net](https://whatsmydns.net) to verify

---

### ❌ Website Shows "404 Not Found"
**Causes:**
- Build failed
- Wrong publish directory

**Solutions:**
1. Check **Deploys** tab in Netlify
2. Look for build errors
3. Verify build settings:
   ```
   Build command: npm run build
   Publish directory: dist
   ```

---

### ❌ SSL Certificate Won't Activate
**Causes:**
- DNS not fully propagated
- CAA records blocking Let's Encrypt

**Solutions:**
1. Wait 24 hours for full DNS propagation
2. In Netlify → **Domain management** → **HTTPS**
3. Click **"Renew certificate"**
4. Check Squarespace for CAA records - remove if present

---

### ❌ Forms Not Submitting
**Causes:**
- Form not detected by Netlify
- Missing `name` attributes

**Solutions:**
1. Redeploy site after form changes
2. Check **Forms** tab in Netlify - form should appear
3. Test form submission
4. Check spam folder for notifications

---

## ✅ POST-DEPLOYMENT CHECKLIST

### Immediately After Deployment:

- [ ] Site loads at `https://your-site.netlify.app`
- [ ] All pages accessible (Home, Courses, Events, etc.)
- [ ] Images loading correctly
- [ ] Navigation menu works
- [ ] Mobile responsive (test on phone)

### After DNS Connection:

- [ ] `https://kaizarildinternational.com` loads
- [ ] SSL certificate active (green padlock)
- [ ] `www` redirects correctly
- [ ] Forms submit successfully
- [ ] Email notifications working

### Business Setup:

- [ ] Add site to Google Search Console
- [ ] Set up Google Analytics (if needed)
- [ ] Test all contact methods (email, phone)
- [ ] Share site with team
- [ ] Update social media links
- [ ] Add to email signatures

---

## 📊 MONITORING & MAINTENANCE

### Free Monitoring Tools:

**Netlify Analytics (Built-in):**
- Pageviews
- Top pages
- Bandwidth usage
- Form submissions

**Google Search Console (Free):**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property: `kaizarildinternational.com`
3. Verify with DNS record or HTML tag
4. Monitor search performance

**Uptime Monitoring:**
- [UptimeRobot.com](https://uptimerobot.com) - FREE
- Checks site every 5 minutes
- Email alerts if site goes down

---

## 💰 COST BREAKDOWN

| Service | Cost | What You Get |
|---------|------|--------------|
| **Squarespace Domain** | $20-30/yr | Already paid ✅ |
| **Netlify Hosting** | **FREE** | 100GB bandwidth/mo |
| **SSL Certificate** | **FREE** | Auto-renewing |
| **Form Submissions** | **FREE** | 100/month |
| **Email Notifications** | **FREE** | Unlimited |
| **Build Minutes** | **FREE** | 300 min/month |
| | | |
| **TOTAL** | **$0/month** 🎉 | Everything included! |

### Upgrade Options (Optional):

**Netlify Pro ($19/mo):**
- 400GB bandwidth
- 1,000 form submissions
- Priority support
- Advanced analytics

**Only upgrade if you exceed FREE limits!**

---

## 🎯 NEXT STEPS

### Week 1:
1. ✅ Deploy to Netlify
2. ✅ Connect domain
3. ✅ Test all forms
4. Set up Google Analytics (optional)
5. Add to Google Search Console

### Week 2:
1. Monitor form submissions
2. Respond to inquiries
3. Check site analytics
4. Share with stakeholders

### Ongoing:
- Update course catalog as needed
- Add new blog posts
- Monitor uptime
- Respond to form submissions within 24 hours

---

## 📞 SUPPORT RESOURCES

### Netlify Documentation:
- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Forms](https://docs.netlify.com/forms/setup/)
- [SSL Certificates](https://docs.netlify.com/domains-https/https-ssl/)

### Squarespace DNS Help:
- [DNS Settings](https://support.squarespace.com/hc/en-us/articles/360002101888)
- [A Records](https://support.squarespace.com/hc/en-us/articles/360035819311)

### Need Help?
- Netlify Support: [support.netlify.com](https://support.netlify.com)
- Squarespace Support: [support.squarespace.com](https://support.squarespace.com)

---

## 🎉 CONGRATULATIONS!

Your Kaizari L&D International website is now:
- ✅ **Live and accessible worldwide**
- ✅ **Secured with HTTPS**
- ✅ **Connected to your custom domain**
- ✅ **Collecting form submissions**
- ✅ **Mobile responsive**
- ✅ **FREE to host forever**

**Your live website:** `https://kaizarildinternational.com`

Share it with the world! 🚀

---

*Last Updated: November 4, 2025*
*For: Kaizari L&D International Corporate Website*
