# markjpitcher.com rebuild

Rebuild of Dr. Mark Pitcher's mobile sports chiropractic site, moving from Wix to Astro on GitHub Pages. The goal is to rank in Google for Vail Valley chiropractic searches and convert visitors (mostly hotel guests with ski or sports injuries) into patients who call or text.

## The practice

- Dr. Mark Pitcher, board-certified sports chiropractor (CCSP) and exercise physiologist, almost 30 years in practice
- Credentials: Mark J. Pitcher, DC, MSc, CCSP (confirmed). Do not list EMT (expired) or MBA.
- Mobile concierge care, by appointment only, at the patient's hotel, home or condo
- Service area: Vail, Beaver Creek, Avon, Edwards, Minturn
- Treatments: chiropractic adjustment, soft tissue techniques (Active Release Technique, Graston/IASTM), dry needling, sports taping (Kinesiotape, Rocktape), corrective exercise
- Former official sports chiropractor (with Vail Integrative Medical Group) for the Vail International Dance Festival and Ski and Snowboard Club Vail
- Phone and text: 970-331-1199
- Email: markjpitcher@gmail.com for now; mark@markjpitcher.com once Cloudflare email routing is live
- Google review link: https://g.page/r/CW4AWPoY43fCEAE/review
- Google Maps listing: https://www.google.com/maps?cid=14012918462012194926

## Hard rules

- No price list anywhere. Pricing is quoted by phone.
- No street address. The Google Business Profile is a service-area business with the address hidden; schema must use areaServed, not a street address.
- Do not describe the practice as physical therapy.
- Do not mention insurance or cash pay on the site until Mark confirms (he removed it from the Business Profile). Draft the FAQ answer but leave it commented out.
- No patient information ever goes in this repository. It is public.
- Writing style for all site copy: never use em dashes or en dashes; use commas, periods, colons or restructured sentences. No bold for emphasis. Lead with the point, use direct verbs, no literary adjectives, no hype.

## Pages

1. Home: "I come to your hotel or home" message above the fold on mobile, tap-to-call and tap-to-text buttons, credentials, team affiliations, testimonials, review link
2. Hotel and in-home visits: how a visit works, areas covered, what he brings
3. Treatments: one section per treatment
4. About: credentials, history, affiliations
5. FAQ: how fast he can come, family members, what to expect, what to wear (insurance answer drafted but hidden)
6. Contact: call, text, email, review link

Testimonials to carry over from the current site: Wendy Whelan (New York City Ballet), Celeste Callahan (USA Triathlon board; fix the "Trialthlon" typo), Dana Cohan (New York, NY).

## SEO requirements

- Unique title and meta description per page, e.g. "Mobile Sports Chiropractor in Vail and Beaver Creek, Hotel Visits"
- JSON-LD: Chiropractor (LocalBusiness) with areaServed, telephone, sameAs (Google Maps, Yelp), founder Person with credentials
- sitemap.xml and robots.txt
- Alt text on every image
- Mobile first, fast, no heavy JavaScript

## Tech

- Astro static site, deployed to GitHub Pages with GitHub Actions
- GitHub account: funky-monk-tech; repository must be public for free Pages
- No contact form and no online booking. Visitors call, text or email. Call and text are the primary buttons; email is secondary.
- Protect the email address from scrapers: do not put it as plain text in the HTML. Assemble the mailto link with a small script at click time, and keep Cloudflare Email Address Obfuscation on after launch.
- Launch: domain stays registered at GoDaddy, nameservers move to Cloudflare free plan; Cloudflare handles 301 redirects from old Wix URLs and email routing for mark@markjpitcher.com
- Before launch, pull the old Wix URLs from https://markjpitcher.com/sitemap.xml and map each to its new page
- Wix stays paid through April 9, 2027 as a fallback; auto-renew off

## Images

Do not wait on Mark for photos or logos. Reuse the images already on the current markjpitcher.com (headshot, treatment photos, the "Official Sports Chiropractors for" team logos), downloaded into the repo and optimized. Where a page needs an image that does not exist yet (treating a patient in a hotel or condo, kit set up on site, Vail or Beaver Creek backdrop), build a clearly marked placeholder slot with alt text written, so Mark can drop in a photo later without layout changes. Never use stock photos of people presented as Mark or his patients.

## Content already exported (Google Drive: My Drive > markjpitcher-site)

- images/: 94 images from the current site, full size, named by page (home-01 to home-20, treatment-info-01 to 07, teaching-01 to 15, whereisdrmark-01, blog-NN-N, and gallery-01 to gallery-28 from the home page photo collage of Mark with athletes, teams and events). Mark will copy this folder into the repo's images folder.
- markjpitcher-blog-posts.txt: all 15 blog posts (2013 to 2018) with dates, original URLs and which images belong to each.
- Do not use home-09.png (taped athlete in sports top). Mark removed it from the live site.
- treatment-info-01.jpg carries a Robert Campbell Photography / Vail Mountain Lodge & Spa credit. Do not use it until Mark confirms rights.

## Redirects needed at launch

Old Wix paths: /treatment-info, /teaching, /whereisdrmark (page removed; send to home), /blog-1, and the 15 /post/YYYY/MM/DD/slug URLs listed in the blog text file. Map each to its closest new page; if blog posts are republished, map each post to its new address.

## Waiting on Mark

- Whether to republish the old blog posts (the clinical ones on SI joint pain, foam rolling, IT band, breathing and connective tissue are still useful content for search)

- Business hours to match the Google Business Profile
