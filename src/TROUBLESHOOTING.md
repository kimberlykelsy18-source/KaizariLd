# 🔧 TROUBLESHOOTING GUIDE
## Common Issues & Solutions

---

## 📋 TABLE OF CONTENTS

1. [DNS Issues](#dns-issues)
2. [SSL Certificate Problems](#ssl-certificate-problems)
3. [Build Failures](#build-failures)
4. [Form Submission Issues](#form-submission-issues)
5. [Domain Not Working](#domain-not-working)
6. [Site Not Loading](#site-not-loading)
7. [Mobile Display Issues](#mobile-display-issues)

---

## 🌐 DNS ISSUES

### ❌ "Awaiting External DNS" in Netlify

**Symptoms:**
```
⚠️ Awaiting External DNS
   Check DNS configuration
```

**Causes:**
- DNS records not added yet
- DNS not propagated
- Wrong values in DNS records

**Solutions:**

**Step 1: Verify DNS Records**
```bash
# Check A record
dig yourdomain.com
# Should show: 75.2.60.5

# Check CNAME
dig www.yourdomain.com
# Should show: CNAME to netlify.app
```

**Step 2: Check Propagation**
- Go to: [whatsmydns.net](https://whatsmydns.net)
- Enter your domain
- Type: A
- Should show `75.2.60.5` globally

**Step 3: Wait**
- DNS can take up to 48 hours
- Usually resolves in 30 minutes - 2 hours
- Check every 30 minutes

**Step 4: Verify in Netlify**
- Domain management → Click "Verify DNS configuration"
- If still not working, click "Set up Netlify DNS" for easier setup

---

### ❌ DNS Records Not Saving in Squarespace

**Symptoms:**
- Records disappear after saving
- Error messages when adding records
- Can't delete old records

**Solutions:**

**Option 1: Clear Conflicts**
```
1. Delete ALL A records
2. Delete ALL CNAME records for www
3. Save changes
4. Wait 5 minutes
5. Add new records
6. Save again
```

**Option 2: Contact Squarespace**
```
If records still won't save:
1. Screenshot your DNS settings
2. Contact Squarespace support
3. Mention: "Want to point to external hosting"
4. They can help add records manually
```

**Option 3: Transfer DNS to Netlify**
```
1. In Netlify: Domain management
2. Click "Set up Netlify DNS"
3. Follow instructions
4. Update nameservers in Squarespace
5. Netlify manages DNS automatically
```

---

## 🔒 SSL CERTIFICATE PROBLEMS

### ❌ "Certificate provisioning in progress"

**Symptoms:**
```
⚙️ Provisioning certificate...
   This can take a few minutes
```

**Causes:**
- DNS not fully propagated
- Domain not pointing to Netlify yet

**Solutions:**

**Step 1: Confirm DNS First**
```bash
# Must see Netlify IP
dig yourdomain.com
# If not showing 75.2.60.5, DNS not ready
```

**Step 2: Wait for DNS**
- SSL won't provision until DNS is correct
- Check [whatsmydns.net](https://whatsmydns.net) for global propagation
- Need at least 50% green checkmarks

**Step 3: Force Retry**
```
1. Domain management → HTTPS
2. Click "Verify DNS configuration"
3. If DNS is correct, certificate provisions in 1-10 minutes
```

**Step 4: Check for Blocks**
```
1. Go to Squarespace DNS
2. Look for CAA records
3. If present, delete or add:
   ├─ Type: CAA
   ├─ Name: @
   └─ Value: 0 issue "letsencrypt.org"
```

---

### ❌ "Not Secure" Warning in Browser

**Symptoms:**
- Red "Not Secure" or warning icon
- Certificate error messages
- Mixed content warnings

**Solutions:**

**Scenario 1: Just Set Up Domain**
```
✅ Normal! SSL takes 5-60 minutes after DNS
   Just wait, it will activate automatically
```

**Scenario 2: SSL Active But Still Warning**
```
1. Clear browser cache
2. Hard refresh: Ctrl+Shift+R (Win) or Cmd+Shift+R (Mac)
3. Try incognito/private window
4. Wait 10 more minutes
```

**Scenario 3: Mixed Content**
```
Issue: Page loads over HTTPS but has HTTP resources

Fix in Netlify:
1. Domain management → HTTPS
2. Enable "Force HTTPS" (should be ON)
3. Redeploy site
```

---

## 🔨 BUILD FAILURES

### ❌ "Build Failed" in Netlify

**Symptoms:**
```
❌ Deploy failed
   Build failed with exit code 1
```

**Diagnosis Steps:**

**Step 1: Read Build Log**
```
1. Deploys tab
2. Click failed deploy
3. Scroll to error (usually near bottom)
4. Look for keywords:
   - "Module not found"
   - "Command failed"
   - "npm ERR!"
```

**Step 2: Common Errors & Fixes**

**Error: "Command not found: npm"**
```
Fix:
1. Site settings → Build & deploy
2. Build settings
3. Build command: npm run build
4. Publish directory: dist
5. Save
6. Trigger new deploy
```

**Error: "Module not found"**
```
Fix:
1. Check package.json exists
2. Ensure all dependencies listed
3. In build settings, add:
   ├─ Base directory: (leave blank)
   └─ Build command: npm install && npm run build
```

**Error: "Out of memory"**
```
Fix:
1. Site settings → Build & deploy
2. Environment variables
3. Add: NODE_OPTIONS = --max-old-space-size=4096
```

---

### ❌ Site Builds But Shows Blank Page

**Symptoms:**
- Build succeeds
- Site URL shows blank/white page
- No errors in console

**Solutions:**

**Check 1: Publish Directory**
```
Correct settings:
├─ For Vite: dist
├─ For CRA: build
├─ For Next: out (if static)

Fix:
1. Site settings → Build & deploy
2. Publish directory: dist
3. Save
4. Trigger deploy
```

**Check 2: Base Path**
```
If deployed to subfolder:
1. Update vite.config.ts:
   base: '/'  ← should be root
2. Redeploy
```

**Check 3: Console Errors**
```
1. Open browser DevTools (F12)
2. Console tab
3. Look for errors
4. Usually path issues with images/assets
```

---

## 📧 FORM SUBMISSION ISSUES

### ❌ Forms Don't Submit

**Symptoms:**
- Click submit, nothing happens
- No success message
- Forms not in Netlify dashboard

**Solutions:**

**Step 1: Verify Form Detected**
```
1. Netlify Dashboard → Forms tab
2. Should see "contact" form listed
3. If not listed, form not detected
```

**Step 2: Check Form Attributes**
```html
Form MUST have:
<form
  name="contact"              ← Required
  method="POST"               ← Required
  data-netlify="true"         ← Required
>
  <input type="hidden" name="form-name" value="contact" />
  ← Required
```

**Step 3: Redeploy Site**
```
Forms are detected at BUILD time
1. Make any small change
2. Redeploy
3. Check Forms tab again
```

**Step 4: Test Submission**
```
1. Open site in incognito
2. Fill form completely
3. Submit
4. Should redirect to /thank-you or show success
5. Check Netlify Forms tab for submission
```

---

### ❌ Forms Submit But No Email

**Symptoms:**
- Form appears in Netlify dashboard
- But no email notification received

**Solutions:**

**Step 1: Configure Notifications**
```
1. Forms tab → Click form name
2. Settings and usage
3. Form notifications
4. Add notification
5. Email notification
6. Enter: admin@kaizarildinternational.com
7. Save
```

**Step 2: Check Spam Folder**
```
Notifications might be in spam
1. Check spam/junk folder
2. Mark as "Not Spam"
3. Add no-reply@netlify.com to contacts
```

**Step 3: Verify Email Address**
```
1. Must be real email
2. Must accept external emails
3. Test by sending regular email first
```

---

## 🌍 DOMAIN NOT WORKING

### ❌ "This site can't be reached"

**Symptoms:**
```
DNS_PROBE_FINISHED_NXDOMAIN
ERR_NAME_NOT_RESOLVED
```

**Root Causes & Fixes:**

**Cause 1: DNS Not Propagated**
```
✅ Solution: WAIT
- Check: whatsmydns.net
- Need: 50%+ green checkmarks
- Time: Can take up to 48 hours
```

**Cause 2: Wrong DNS Records**
```
✅ Solution: VERIFY
Should be:
├─ A: 75.2.60.5 (exactly)
└─ CNAME: your-site.netlify.app (exactly)

Not:
├─ https://75.2.60.5
├─ 75.2.60.5/
└─ http://site.netlify.app
```

**Cause 3: Domain Not Added to Netlify**
```
✅ Solution: ADD DOMAIN
1. Netlify → Domain management
2. Add custom domain
3. Enter yourdomain.com
4. Verify
```

---

### ❌ WWW Not Working (but root works)

**Symptoms:**
- `yourdomain.com` works ✅
- `www.yourdomain.com` doesn't ❌

**Solutions:**

**Step 1: Add WWW Alias**
```
1. Netlify → Domain management
2. Domain aliases
3. Add domain alias
4. Enter: www.yourdomain.com
5. Save
```

**Step 2: Verify CNAME**
```
DNS must have:
├─ Type: CNAME
├─ Host: www
└─ Value: your-site.netlify.app
```

**Step 3: Wait for DNS**
```
CNAME also needs to propagate
Check: dig www.yourdomain.com
Should show: CNAME to netlify.app
```

---

## 💻 SITE NOT LOADING

### ❌ Site Loads on Netlify but Not Custom Domain

**Symptoms:**
- `your-site.netlify.app` works ✅
- `yourdomain.com` doesn't ❌

**Checklist:**

- [ ] DNS records added correctly?
- [ ] DNS propagated? (check whatsmydns.net)
- [ ] Domain added in Netlify?
- [ ] Waited at least 1 hour?
- [ ] Cleared browser cache?
- [ ] Tried incognito window?
- [ ] Tried different device/network?

**Quick Fix:**
```
1. Flush DNS: ipconfig /flushdns (Win) or
   sudo dscacheutil -flushcache (Mac)
2. Clear browser cache
3. Try mobile network (different DNS)
4. Wait 2-4 hours for propagation
```

---

### ❌ 404 Error on All Pages

**Symptoms:**
```
404 - Page Not Found
```

**Solutions:**

**For React Router:**
```
Create: public/_redirects file
Content: /* /index.html 200

Then redeploy
```

**For Netlify:**
```
Or create: netlify.toml
Add:
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 📱 MOBILE DISPLAY ISSUES

### ❌ Site Looks Broken on Mobile

**Solutions:**

**Already Fixed! ✅**
Your site is fully responsive. But if issues occur:

**Check 1: Viewport Meta Tag**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
← Should be in index.html
```

**Check 2: Clear Mobile Cache**
```
1. Mobile browser → Settings
2. Clear cache and data
3. Reload site
```

**Check 3: Test Responsive**
```
Desktop browser:
1. F12 (DevTools)
2. Toggle device toolbar
3. Test different screen sizes
```

---

## 🚨 EMERGENCY CONTACTS

### Netlify Down?
Check: [netlifystatus.com](https://netlifystatus.com)

### Squarespace Issues?
Support: [support.squarespace.com](https://support.squarespace.com)

### Still Stuck?
1. Screenshot error
2. Copy error message
3. Check deploy logs
4. Contact Netlify support: [support.netlify.com](https://support.netlify.com)

---

## ✅ VERIFICATION COMMANDS

### Test DNS:
```bash
# Should return: 75.2.60.5
dig yourdomain.com +short

# Should return: CNAME to netlify.app
dig www.yourdomain.com
```

### Test HTTPS:
```bash
# Should return: 301 or 200
curl -I https://yourdomain.com

# Should have Location: https://
curl -I http://yourdomain.com
```

### Test Site Loading:
```bash
# Should return HTML
curl https://yourdomain.com
```

---

## 📊 DIAGNOSTIC CHECKLIST

When things aren't working, check:

- [ ] DNS records correct in Squarespace?
- [ ] DNS propagated globally? (whatsmydns.net)
- [ ] Domain added in Netlify?
- [ ] WWW alias added in Netlify?
- [ ] SSL certificate active?
- [ ] Build succeeded?
- [ ] Publish directory correct?
- [ ] Forms have data-netlify="true"?
- [ ] Cleared browser cache?
- [ ] Waited at least 2 hours?

---

## 🎯 STILL NOT WORKING?

**Create Support Ticket:**

Include:
1. Your domain name
2. What's not working
3. What you've tried
4. Screenshots of:
   - Error messages
   - DNS settings
   - Netlify domain management
5. Build log (if build failed)

**Netlify Support:**
- [support.netlify.com](https://support.netlify.com)
- Usually responds in 24 hours
- Free plan included!

---

*Troubleshooting Guide - Version 1.0*
*Last Updated: November 4, 2025*
