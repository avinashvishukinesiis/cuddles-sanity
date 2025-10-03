# Sanity CMS Image Migration Plan

## Overview
This document outlines the comprehensive plan to migrate all hardcoded image references from the `/public` folder to Sanity CMS, making all content fully manageable through Sanity Studio.

**Total Hardcoded Images Found:** 65+
**Date Created:** 2025-10-03
**Status:** In Progress

---

## Migration Status by Section

### ✅ COMPLETED
- **Assistance Components**
  - ContinuedCare - 3 icon SVGs migrated
  - ParentResource - 4 resource images migrated

### 🔄 IN PROGRESS
- Schema Audit Complete
- Migration Plan Documentation

### ⏳ PENDING
- All sections below

---

## Detailed Migration Breakdown

### 1. HomePage Components (Priority: HIGH)

#### 1.1 HeroSection Component
**File:** `components/HomePage/HeroSection/HeroSection.tsx`
**Hardcoded Images:** 3
**Schema Status:** ✅ Already has fields

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Background | `/Hero_image.png` | `heroSection.backgroundImage` | homePage.ts:40-46 |
| Star decoration | `./star.svg` | Need to add `decorations` array | **TODO** |
| Plane decoration | `./plane_vector.svg` | Need to add `decorations` array | **TODO** |

**Actions Required:**
- [ ] Add `decorations` array to heroSection in `homePage.ts`
- [ ] Update HeroSection component to use `urlFor()` for background
- [ ] Update HeroSection component to map decorations dynamically

---

#### 1.2 CuddlesProgram Component
**File:** `components/HomePage/CuddlesProgram/CuddlesProgram.tsx`
**Hardcoded Images:** 5
**Schema Status:** ✅ Has programItems array with image fields

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Program 1 | `./cp1.png` | `cuddlesProgramSection.programItems[].image` | homePage.ts:174-180 |
| Program 2 | `./cp2.png` | `cuddlesProgramSection.programItems[].image` | homePage.ts:174-180 |
| Program 3 | `./cp3.png` | `cuddlesProgramSection.programItems[].image` | homePage.ts:174-180 |
| Program 4 | `./cp4.png` | `cuddlesProgramSection.programItems[].image` | homePage.ts:174-180 |
| Sun decoration | `./sun.svg` | `cuddlesProgramSection.sunDecoration` | homePage.ts:146-152 |

**Actions Required:**
- [ ] Update CuddlesProgram to fetch from homePage data instead of hardcoded array
- [ ] Use `urlFor()` for all program images
- [ ] Use `urlFor()` for sun decoration

---

#### 1.3 ActivityZone Component
**File:** `components/HomePage/ActivityZone/ActivityZone.tsx`
**Hardcoded Images:** 12
**Schema Status:** ✅ Has activityItems array with image fields

| Activity | Current Path | Sanity Field |
|----------|--------------|--------------|
| Makerspace | `/photo/1.jpg` | `activityZoneSection.activityItems[].image` |
| Art Studio | `/photo/7.jpg` | `activityZoneSection.activityItems[].image` |
| Outdoor Play | `/photo/18.jpg` | `activityZoneSection.activityItems[].image` |
| Home rooms | `/photo/27.jpg` | `activityZoneSection.activityItems[].image` |
| Movement Studio | `/photo/22.jpg` | `activityZoneSection.activityItems[].image` |
| Library | `/photo/14.jpg` | `activityZoneSection.activityItems[].image` |
| Construction | `/photo/34.jpg` | `activityZoneSection.activityItems[].image` |
| Changing Room | `/photo/2.jpg` | `activityZoneSection.activityItems[].image` |
| Dining Area | `/photo/11.jpg` | `activityZoneSection.activityItems[].image` |
| Montessori | `/photo/42.jpg` | `activityZoneSection.activityItems[].image` |
| Nap Room | `/photo/27.jpg` | `activityZoneSection.activityItems[].image` |
| Music Room | `/photo/32.jpg` | `activityZoneSection.activityItems[].image` |

**Schema Location:** homePage.ts:205-232

**Actions Required:**
- [ ] Update ActivityZone to fetch from homePage data instead of hardcoded array
- [ ] Use `urlFor()` for all activity images

---

#### 1.4 Include Component
**File:** `components/HomePage/Include/Include.tsx`
**Hardcoded Images:** 5
**Schema Status:** ✅ Has includeItems array with icon fields

| Icon | Current Path | Sanity Field |
|------|--------------|--------------|
| Report icon | `./report.png` | `includeSection.includeItems[].icon` |
| Blub icon | `./blub.png` | `includeSection.includeItems[].icon` |
| Medal icon | `./medal.png` | `includeSection.includeItems[].icon` |
| Thumbs up | `./thumbsup.png` | `includeSection.includeItems[].icon` |

**Schema Location:** homePage.ts:273-280

**Actions Required:**
- [ ] Update Include to fetch from homePage data instead of hardcoded array
- [ ] Use `urlFor()` for all icons

---

#### 1.5 Early-education Component
**File:** `components/HomePage/Early-education/EarlyEducation.tsx`
**Hardcoded Images:** 1
**Schema Status:** ✅ Has image field

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Education image | `/early-education.jpg` (fallback) | `earlyEducationSection.image` | homePage.ts:106-112 |

**Actions Required:**
- [ ] Already using `urlFor()` - just verify fallback is correct

---

### 2. Safety Components (Priority: HIGH)

#### 2.1 Safety HeroSection
**File:** `components/Safety/HeroSection/HeroSection.tsx`
**Hardcoded Images:** 6
**Schema Status:** ✅ Has safetyFeatures array with image fields

| Feature | Current Path | Sanity Field |
|---------|--------------|--------------|
| Daily Sanitization | `/daily-sanitization.jpg` | `heroSection.safetyFeatures[].image` |
| Temperature Checks | `/temperature-check.jpg` | `heroSection.safetyFeatures[].image` |
| CCTV Monitoring | `/cctv-monitoring.jpg` | `heroSection.safetyFeatures[].image` |
| Child Proofing | `/child-proofing.jpg` | `heroSection.safetyFeatures[].image` |
| Organized Spaces | `/organized-spaces.jpg` | `heroSection.safetyFeatures[].image` |
| Pickup Verification | `/pickup-verification.jpg` | `heroSection.safetyFeatures[].image` |

**Schema Location:** safety.ts:37-83

**Actions Required:**
- [ ] Update Safety HeroSection to fetch from safetyData instead of hardcoded array
- [ ] Use `urlFor()` for all feature images

---

#### 2.2 HealthyHabits Component
**File:** `components/Safety/HealthyHabits/HealthyHabits.tsx`
**Hardcoded Images:** 3
**Schema Status:** ✅ Has healthyFeatures array with image fields

| Habit | Current Path | Sanity Field |
|-------|--------------|--------------|
| Healthy Eating | `/healthy-eating.jpg` | `healthyHabitsSection.healthyFeatures[].image` |
| Allergy Care | `/allergy-care.jpg` | `healthyHabitsSection.healthyFeatures[].image` |
| Supervision | `/supervision.jpg` | `healthyHabitsSection.healthyFeatures[].image` |

**Schema Location:** safety.ts:149-175

**Actions Required:**
- [ ] Update HealthyHabits to fetch from safetyData instead of hardcoded array
- [ ] Use `urlFor()` for all images

---

#### 2.3 Emergency Component
**File:** `components/Safety/Emergency/Emergency.tsx`
**Hardcoded Images:** 3
**Schema Status:** ✅ Has emergencyFeatures array with icon fields

| Feature | Current Path | Sanity Field |
|---------|--------------|--------------|
| Trained staff | `./trained.svg` | `emergencySection.emergencyFeatures[].icon` |
| Healthcare Partnership | `./healthcare.svg` | `emergencySection.emergencyFeatures[].icon` |
| Emergency ready | `./emergency.svg` | `emergencySection.emergencyFeatures[].icon` |

**Schema Location:** safety.ts:104-130

**Actions Required:**
- [ ] Update Emergency to fetch from safetyData instead of hardcoded array
- [ ] Use `urlFor()` for all icons

---

### 3. AboutUs Components (Priority: MEDIUM)

#### 3.1 AboutUs HeroSection
**File:** `components/AboutUs/HeroSection/HeroSection.tsx`
**Hardcoded Images:** 1
**Schema Status:** ✅ Has backgroundImage field

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Background | `/About_hero_image.jpg` | `heroSection.backgroundImage` | aboutUs.ts:40-46 |

**Actions Required:**
- [ ] Update component to use `urlFor()` for background image

---

#### 3.2 VisionAndMission Component
**File:** `components/AboutUs/VisionAndMission/VissionAndMission.tsx`
**Hardcoded Images:** 2
**Schema Status:** ✅ Has icon fields

| Icon | Current Path | Sanity Field | Schema Location |
|------|--------------|--------------|-----------------|
| Vision icon | `./eyes.svg` | `visionAndMissionSection.visionIcon` | aboutUs.ts:69-75 |
| Mission icon | `./hand-heart.svg` | `visionAndMissionSection.missionIcon` | aboutUs.ts:84-90 |

**Actions Required:**
- [ ] Already using `urlFor()` - verify implementation

---

#### 3.3 AboutCEO Component
**File:** `components/AboutUs/AboutCEO/AboutCEO.tsx`
**Hardcoded Images:** 1
**Schema Status:** ✅ Has image field

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| CEO photo | `./CEO.jpg` | `aboutCeoSection.image` | aboutUs.ts:127-133 |

**Actions Required:**
- [ ] Already using `urlFor()` - verify implementation

---

### 4. Curriculum Components (Priority: MEDIUM)

#### 4.1 Curriculum HeroSection
**File:** `components/Curriculum/HeroSection/HeroSection.tsx`
**Hardcoded Images:** 7
**Schema Status:** ✅ Has backgroundImage + icons array

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Background | `/classroom.jpg` | `heroSection.backgroundImage` | curriculum.ts:14-20 |
| Cur Star | `./curStar.svg` | `heroSection.programs[].icon` | curriculum.ts:69-75 |
| Falling star | `./fallingstar.svg` | `heroSection.programs[].icon` | curriculum.ts:69-75 |
| Blue sun | `./bluesunvector.svg` | `heroSection.programs[].icon` | curriculum.ts:69-75 |
| Star spark | `./starspark.svg` | `heroSection.programs[].icon` | curriculum.ts:69-75 |
| Heart vector | `./heartvector.png` | `heroSection.programs[].icon` | curriculum.ts:69-75 |
| Thunder | `./ThunderVector.svg` | `heroSection.programs[].icon` | curriculum.ts:69-75 |

**Actions Required:**
- [ ] Update Curriculum HeroSection to fetch background from curriculumData
- [ ] Update program icons to use data from Sanity

---

### 5. Partnerships Components (Priority: LOW)

#### 5.1 LetsBuild Component
**File:** `components/Parternerships/LetsBuild/LetsBuild.tsx`
**Hardcoded Images:** 2
**Schema Status:** ⚠️ Need to check schema

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Background | `/LetsBuild.png` | Need to add field | **TODO** |
| Reference mock | `/images/reference-mock.png` | Remove (demo only) | N/A |

**Actions Required:**
- [ ] Check partnerships schema for letsBuildSection
- [ ] Add backgroundImage field if missing
- [ ] Update LetsBuild component to use Sanity data

---

### 6. Shared Components (Priority: HIGH)

#### 6.1 Footer Component
**File:** `components/Footer/Footer.tsx`
**Hardcoded Images:** 2
**Schema Status:** ✅ Has dedicated footer schema (siteSettings.ts)

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Footer logo | `./footer_logo.svg` | `footer.logo` | siteSettings.ts:9-15 |
| Footer vector | `./footer_vector.svg` | `footer.footerVector` | siteSettings.ts:109-115 |

**Actions Required:**
- [ ] Update Footer to fetch from footer/siteSettings data
- [ ] Use `urlFor()` for both images

---

#### 6.2 Navbar Component
**File:** `components/NavBar/Navbar.tsx`
**Hardcoded Images:** 1
**Schema Status:** ⚠️ Need to add to siteSettings

| Image | Current Path | Sanity Field | Schema Location |
|-------|--------------|--------------|-----------------|
| Logo | `/cuddles_logo.svg` | Need to add `navbar.logo` | **TODO** |

**Actions Required:**
- [ ] Add navbar.logo field to siteSettings schema
- [ ] Update Navbar to fetch logo from siteSettings

---

#### 6.3 FAQ Component
**File:** `components/FAQ/Faq.tsx`
**Hardcoded Images:** 1
**Schema Status:** ⚠️ Need to add decoration field

| Image | Current Path | Sanity Field |
|-------|--------------|--------------|
| Cloud vector | `./cloud.svg` | Need to add `faqSection.cloudDecoration` |

**Actions Required:**
- [ ] Add cloudDecoration field to faqSection in relevant schemas
- [ ] Update FAQ component to use Sanity data

---

#### 6.4 Testimonial Component
**File:** `components/Testimonial/Testimonial.tsx`
**Hardcoded Images:** 4
**Schema Status:** ✅ Has testimonials array with image fields

| Image | Current Path | Sanity Field |
|-------|--------------|--------------|
| Test 1 | `/test1.png` | `testimonials[].image` |
| Test 2 | `/test2.png` | `testimonials[].image` |
| Test 3 | `/photo/3.jpg` | `testimonials[].image` |
| Heart doodle | `./heartDoodle.svg` | Need to add decoration field |

**Actions Required:**
- [ ] Already fetching testimonials from Sanity - verify
- [ ] Add heartDoodle decoration field
- [ ] Use `urlFor()` for heart doodle

---

#### 6.5 LetsConnect Component
**File:** `components/LetsConnect/letsConnect.tsx`
**Hardcoded Images:** 3
**Schema Status:** ✅ Fields exist in multiple page schemas

| Image | Current Path | Sanity Field |
|-------|--------------|--------------|
| Hand heart | `./handHeart.svg` | `letsConnectSection.heartDecoration` |
| Connect image | `/LetsConnect.png` | `letsConnectSection.formImage` |
| Reference mock | `/images/reference-mock.png` | Remove (demo only) |

**Schema Locations:** homePage.ts:313-320, aboutUs.ts:223-238

**Actions Required:**
- [ ] Update LetsConnect to accept page-specific data as props
- [ ] Use `urlFor()` for heart decoration and form image
- [ ] Remove reference mock

---

## Schema Updates Required

### High Priority Schema Changes

1. **homePage.ts** - Add decorations array to heroSection
```typescript
{
  name: 'decorations',
  title: 'Hero Decorations',
  type: 'array',
  of: [{
    type: 'object',
    fields: [
      { name: 'name', type: 'string' },
      { name: 'image', type: 'image' },
      { name: 'position', type: 'string' } // CSS position class
    ]
  }]
}
```

2. **siteSettings.ts** - Add navbar logo field
```typescript
{
  name: 'navbar',
  title: 'Navigation Bar',
  type: 'object',
  fields: [
    { name: 'logo', type: 'image' }
  ]
}
```

3. **partnerships.ts** - Add letsBuild section with background image
```typescript
{
  name: 'letsBuildSection',
  title: 'Lets Build Section',
  type: 'object',
  fields: [
    { name: 'backgroundImage', type: 'image' }
  ]
}
```

4. **Add decoration fields to FAQ sections** across all page schemas

---

## Migration Phases

### Phase 1: Critical Shared Components (Week 1)
- [ ] Footer
- [ ] Navbar
- [ ] LetsConnect
- [ ] Testimonial
- [ ] FAQ

**Impact:** Used across all pages
**Priority:** HIGHEST

---

### Phase 2: HomePage (Week 2)
- [ ] HeroSection
- [ ] CuddlesProgram
- [ ] ActivityZone
- [ ] Include
- [ ] Early-education

**Impact:** Main landing page
**Priority:** HIGH

---

### Phase 3: Safety Page (Week 3)
- [ ] Safety HeroSection
- [ ] HealthyHabits
- [ ] Emergency

**Impact:** Important for parent trust
**Priority:** HIGH

---

### Phase 4: AboutUs & Curriculum (Week 4)
- [ ] AboutUs HeroSection
- [ ] VisionAndMission (verify)
- [ ] AboutCEO (verify)
- [ ] Curriculum HeroSection

**Impact:** Secondary pages
**Priority:** MEDIUM

---

### Phase 5: Partnerships (Week 5)
- [ ] LetsBuild

**Impact:** B2B page
**Priority:** LOW

---

## Testing Checklist

After each component migration:
- [ ] Component renders correctly with Sanity data
- [ ] Images load properly via Sanity CDN
- [ ] Fallback content works when data is missing
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Build completes successfully
- [ ] All TypeScript types are correct

---

## Benefits of Migration

1. **Content Management:** All content manageable through Sanity Studio
2. **Performance:** Images served via Sanity CDN with optimization
3. **Flexibility:** Easy to update images without code changes
4. **Consistency:** Single source of truth for all content
5. **Scalability:** Easy to add new content items
6. **Version Control:** Sanity tracks all content changes

---

## Notes

- Keep fallback content for backward compatibility
- Use `urlFor()` helper from `lib/sanity.ts` for all Sanity images
- Maintain TypeScript types in `lib/types.ts` as schemas change
- Test thoroughly after each component migration
- Remove hardcoded public folder images only after confirming Sanity data is populated

---

**Last Updated:** 2025-10-03
**Progress:** 2/65 images migrated (3%)
