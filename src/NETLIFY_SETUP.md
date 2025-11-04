# 🌐 NETLIFY SETUP GUIDE
## Step-by-Step Deployment Instructions

---

## 📦 PART 1: INITIAL DEPLOYMENT

### Step 1: Create Netlify Account (2 minutes)

1. **Go to:** [https://app.netlify.com/signup](https://app.netlify.com/signup)

2. **Choose signup method:**
   ```
   ┌─────────────────────────────┐
   │                             │
   │  Sign up with GitHub   ← Recommended
   │  Sign up with GitLab        │
   │  Sign up with Bitbucket     │
   │  Sign up with Email         │
   │                             │
   └─────────────────────────────┘
   ```

3. **Complete signup** and verify email if needed

4. **You'll see the Netlify Dashboard**

---

### Step 2: Deploy Your Site (3 minutes)

#### OPTION A: Drag & Drop (Easiest)

1. **Click:** "Add new site" → "Deploy manually"

2. **You'll see upload area:**
   ```
   ┌─────────────────────────────────────┐
   │                                     │
   │   📁 Drag and drop your site        │
   │      folder here                    │
   │                                     │
   │   Or click to browse                │
   │                                     │
   └─────────────────────────────────────┘
   ```

3. **Drag your entire project folder** (the one with App.tsx, components/, pages/, etc.)

4. **Upload progress:**
   ```
   Uploading files... ████████████ 100%
   Building site...   ████████████ 100%
   Deploying...       ████████████ 100%
   
   ✅ Site is live!
   ```

5. **Your site is now at:** `https://random-name-12345.netlify.app`

---

#### OPTION B: GitHub (For Auto-Updates)

**A. Push to GitHub First:**

Open terminal/command prompt in your project folder:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial deployment of Kaizari website"

# Create main branch
git branch -M main

# Add GitHub remote (create repo at github.com first)
git remote add origin https://github.com/YOUR-USERNAME/kaizari-website.git

# Push
git push -u origin main
```

**B. Connect to Netlify:**

1. **Click:** "Add new site" → "Import an existing project"

2. **Choose:** "Deploy with GitHub"

3. **Authorize Netlify** (if first time)

4. **Select repository:** `kaizari-website`

5. **Build settings:**
   ```
   ┌─────────────────────────────────────┐
   │ Site settings                       │
   ├─────────────────────────────────────┤
   │ Base directory:                     │
   │ ├─ (leave blank)                   │
   │                                     │
   │ Build command:                      │
   │ ├─ npm run build                   │
   │                                     │
   │ Publish directory:                  │
   │ ├─ dist                            │
   │                                     │
   │ Functions directory:                │
   │ ├─ (leave blank)                   │
   └─────────────────────────────────────┘
   ```

6. **Click:** "Deploy site"

7. **Wait 2-3 minutes** for build to complete

---

### Step 3: Customize Site Name (Optional)

1. **In Netlify Dashboard,** go to:
   ```
   Site settings → General → Site details
   ```

2. **Under "Site information,"** click **"Change site name"**

3. **Enter your preferred name:**
   ```
   kaizari-lnd
   kaizari-training
   kaizari-international
   (or anything available)
   ```

4. **Save**

5. **Your new URL:**
   ```
   https://kaizari-lnd.netlify.app
   ```

---

## 🔗 PART 2: CUSTOM DOMAIN SETUP

### Step 4: Add Your Domain (5 minutes)

1. **In Netlify Dashboard,** go to:
   ```
   Site overview → Domain management
   ```

2. **Click:** "Add custom domain"

3. **Enter your domain:**
   ```
   ┌─────────────────────────────────┐
   │ Domain name:                    │
   │ ┌─────────────────────────────┐ │
   │ │ kaizarildinternational.com  │ │
   │ └─────────────────────────────┘ │
   │                                 │
   │ [Verify] [Cancel]               │
   └─────────────────────────────────┘
   ```

4. **Click:** "Verify"

5. **Netlify will show:**
   ```
   ⚠️ Check DNS configuration
   
   Add these DNS records in your domain provider:
   
   A Record:
   ├─ Name: @ or leave blank
   └─ Value: 75.2.60.5
   ```

6. **Keep this page open!** You'll need it.

---

### Step 5: Add WWW Alias (1 minute)

1. **Still in Domain management,** scroll down to "Domain aliases"

2. **Click:** "Add domain alias"

3. **Enter:**
   ```
   www.kaizarildinternational.com
   ```

4. **Click:** "Add domain"

5. **Netlify will say:**
   ```
   ⚠️ Check DNS configuration for www.kaizarildinternational.com
   
   Add CNAME record:
   ├─ Name: www
   └─ Value: kaizari-lnd.netlify.app
   ```

---

## 📋 PART 3: DNS CONFIGURATION

### Step 6: Configure Squarespace DNS (5 minutes)

See **DNS_SETTINGS.md** for detailed copy-paste values.

**Quick version:**

1. **Login:** [domains.squarespace.com](https://domains.squarespace.com)

2. **Click your domain**

3. **Go to:** Advanced Settings → DNS Settings

4. **Delete existing:**
   - A records pointing to Squarespace
   - CNAME for www

5. **Add new A record:**
   ```
   Type:  A
   Host:  @
   Value: 75.2.60.5
   TTL:   3600
   ```

6. **Add new CNAME:**
   ```
   Type:  CNAME
   Host:  www
   Value: kaizari-lnd.netlify.app
   TTL:   3600
   ```

7. **Save changes**

---

## 🔒 PART 4: SSL CERTIFICATE

### Step 7: Activate SSL (Automatic)

1. **After DNS propagates** (30 min - 2 hours), go to:
   ```
   Domain management → HTTPS
   ```

2. **You'll see:**
   ```
   ┌─────────────────────────────────────┐
   │ SSL/TLS certificate                 │
   ├─────────────────────────────────────┤
   │                                     │
   │ ⚙️ Provisioning certificate...      │
   │                                     │
   │ OR                                  │
   │                                     │
   │ ⚠️ Waiting for DNS propagation      │
   │    [Verify DNS configuration]       │
   │                                     │
   └─────────────────────────────────────┘
   ```

3. **If waiting, click:** "Verify DNS configuration"

4. **Once ready:**
   ```
   ┌─────────────────────────────────────┐
   │ SSL/TLS certificate                 │
   ├─────────────────────────────────────┤
   │                                     │
   │ ✅ Your site has HTTPS enabled      │
   │                                     │
   │ Certificate:  Let's Encrypt         │
   │ Expires:      in 89 days            │
   │ Auto-renewal: Enabled               │
   │                                     │
   └─────────────────────────────────────┘
   ```

5. **Enable HTTPS redirect:**
   ```
   Force HTTPS: [ON] ← Make sure this is enabled
   ```

---

## 📧 PART 5: FORM SUBMISSIONS

### Step 8: Enable Form Notifications (3 minutes)

1. **Go to:** Forms tab in Netlify

2. **After first form submission, you'll see:**
   ```
   ┌─────────────────────────────────────┐
   │ Active forms                        │
   ├─────────────────────────────────────┤
   │ contact                             │
   │ └─ 3 submissions                    │
   └─────────────────────────────────────┘
   ```

3. **Click on** "contact" form

4. **Go to:** Settings and usage → Form notifications

5. **Click:** "Add notification"

6. **Choose:** "Email notification"

7. **Configure:**
   ```
   ┌─────────────────────────────────────┐
   │ Email to notify:                    │
   │ ┌─────────────────────────────────┐ │
   │ │ admin@kaizarildinternational.com│ │
   │ └─────────────────────────────────┘ │
   │                                     │
   │ Event to listen for:                │
   │ ☑ New form submission               │
   │                                     │
   │ [Save]                              │
   └─────────────────────────────────────┘
   ```

8. **Save**

9. **You'll now receive email for every form submission!**

---

## ✅ VERIFICATION CHECKLIST

### Deployment Complete When:

- [ ] Site accessible at: `https://your-site.netlify.app`
- [ ] Site accessible at: `https://yourdomain.com`
- [ ] Site accessible at: `https://www.yourdomain.com`
- [ ] Green padlock (SSL) on all URLs
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works
- [ ] Forms submit successfully
- [ ] Email notifications arrive
- [ ] Mobile responsive
- [ ] No console errors

---

## 📊 MONITORING DASHBOARD

### In Netlify, you can monitor:

**1. Deploys:**
```
View all deployments
Build logs
Deploy previews
```

**2. Functions:**
```
Function logs (if using)
```

**3. Forms:**
```
All submissions
Spam filtering
Notification settings
```

**4. Analytics (Optional - Paid):**
```
Pageviews
Top pages
Unique visitors
```

**5. Domain Management:**
```
DNS settings
SSL certificate status
Domain aliases
Redirects
```

---

## 🔄 MAKING UPDATES

### If You Used Drag & Drop:

1. **Make changes** to your files locally
2. **Go to:** Deploys tab
3. **Drag updated folder** to deploy area
4. **New version goes live** in 1-2 minutes

### If You Used GitHub:

1. **Make changes** to your files
2. **Commit and push:**
   ```bash
   git add .
   git commit -m "Updated course prices"
   git push
   ```
3. **Netlify auto-deploys** in 2-3 minutes
4. **No manual upload needed!**

---

## 🆘 COMMON ISSUES

### Build Failed
```
✅ Solution:
1. Check Deploys tab
2. Read build log
3. Usually missing dependencies
4. Update package.json
```

### DNS Not Configured
```
✅ Solution:
1. Wait 30-60 minutes
2. Check whatsmydns.net
3. Verify DNS records correct
```

### SSL Not Activating
```
✅ Solution:
1. Wait 24 hours for DNS
2. Click "Verify DNS configuration"
3. Check for CAA records blocking
```

### Forms Not Working
```
✅ Solution:
1. Check Forms tab - should show "contact"
2. Redeploy site
3. Clear browser cache
4. Test in incognito
```

---

## 📞 SUPPORT

### Netlify Resources:

**Documentation:** [docs.netlify.com](https://docs.netlify.com)
**Support:** [support.netlify.com](https://support.netlify.com)
**Community:** [answers.netlify.com](https://answers.netlify.com)
**Status:** [netlifystatus.com](https://netlifystatus.com)
**Twitter:** [@Netlify](https://twitter.com/netlify)

### Helpful Docs:

- [Custom Domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Forms Setup](https://docs.netlify.com/forms/setup/)
- [Redirects](https://docs.netlify.com/routing/redirects/)
- [Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)

---

## 🎯 NEXT STEPS

After successful deployment:

1. **Test everything** thoroughly
2. **Set up Google Analytics** (optional)
3. **Add to Google Search Console**
4. **Monitor form submissions**
5. **Share with team**
6. **Update business cards/emails** with new site
7. **Plan content updates**

---

## 🎉 SUCCESS!

Your Kaizari L&D International website is now:

- ✅ **Deployed on Netlify**
- ✅ **Connected to custom domain**
- ✅ **Secured with SSL**
- ✅ **Collecting form submissions**
- ✅ **Email notifications active**
- ✅ **100% FREE hosting**

**Congratulations! Your site is live! 🚀**

---

*Netlify Setup Guide - Version 1.0*
*For: Kaizari L&D International*
*Date: November 4, 2025*
