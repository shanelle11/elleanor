# shanelle's portfolio website

## what this project is

this is my personal portfolio website featuring my art and poetry. it has a y2k aesthetic with pastel colors, gradients, and cute animations.

## main features

### 1. login system
- **files**: `login.html`, `login.css`, `credentials.js`
- users have to log in to see my portfolio
- uses sessionStorage to remember if you're logged in
- has floating pokemon decorations in the background
- shake animation when you enter wrong password
- **how it works**: when you type username and password, javascript checks it against the credentials.js database. if it matches, you get redirected to index.html

### 2. hero section
- big name and photo at the top
- sparkles and hearts for decoration
- scroll indicator tells you to scroll down
- twinkling star animations

### 3. navigation sidebar
- left sidebar has navigation buttons
- buttons link to different sections using anchor tags (#about, #poems, #gallery)
- cute pixel badges showing my interests
- mascot face decoration

### 4. about me section
- personal bio about being an artist and poet
- instagram button link
- decorative dividers and sparkles

### 5. poem collection (15 poems)
- **grid layout**: uses css grid with `repeat(auto-fit, minmax(300px, 1fr))` so it adapts to screen size
- **poem cards**: each card has icon, title, category badge, and preview text
- **hover effect**: when you hover, a gradient overlay appears with "✨ read ✨" text
- **category badges**: different colored gradients for love, nostalgia, joy, dreams, etc
- **lightbox popups**: clicking a card opens full poem in a popup using css :target selector (no javascript!)

### 6. art gallery
- grid of artwork thumbnails
- hover to see "view" overlay
- clicks open lightbox with full image

### 7. right sidebar
- floating decorative elements
- music player section (for atmosphere)

## technical stuff

### css techniques used
1. **css variables**: colors and fonts stored in :root so i can change them easily
2. **css grid**: for main layout (3 columns) and poem cards
3. **flexbox**: for centering and aligning items
4. **gradients**: background gradients, text gradients, category badges
5. **animations**: bounce, float, pulse, twinkle, shake
6. **transitions**: smooth hover effects
7. **pseudo-elements**: ::before and ::after for decorations
8. **:target selector**: shows lightbox popups without javascript

### javascript features
1. **session storage**: remembers login state
2. **form validation**: checks username/password
3. **event listeners**: handles form submission
4. **dom manipulation**: shows/hides error messages
5. **timeouts**: removes animations and messages after set time

### html structure
- semantic html: `<section>`, `<article>`, `<aside>`, `<main>`
- accessibility: skip link for keyboard users, alt text for images
- meta tags: seo and social media sharing
- responsive: viewport meta tag

## files overview

- **index.html** - main portfolio page (1650+ lines)
- **style.css** - all the styling (2500+ lines)  
- **login.html** - login page
- **login.css** - login page styling
- **credentials.js** - user database
- **art images** - art-1.jpg through art-6.jpg
- **pokemon decorations** - image-01.png through image-06.png
- **profile photo** - 1.jpg

## color scheme

- pastel pink: #FFB6D9
- soft pink: #FFC9E5
- warm peach: #FFD4E5
- gentle purple: #E5CCFF
- hot pink: #FF1493

## fonts used

- **luckiest guy**: for main headings (big bubbly text)
- **baloo 2**: for subheadings  
- **varela round**: for body text

## cool features to mention

1. **no javascript for popups**: the lightbox system uses pure css with :target selector
2. **responsive grid**: poem cards automatically adjust to screen size
3. **layered shadows**: cards have multiple box-shadows for depth
4. **smooth animations**: everything has transitions for smooth feel
5. **session-based auth**: login persists across pages until you close browser
6. **gradient overlays**: hover effects use rgba for transparency
7. **staggered animations**: hearts and decorations animate at different times
8. **y2k aesthetic**: grid background, bright colors, fun decorations

## how to use

1. open login.html in browser
2. username: `shanelle` password: `1234` OR username: `guest` password: `guest123`
3. click around, hover over poem cards, click to read full poems
4. navigate using sidebar buttons

## what i learned

- css grid and flexbox for layouts
- animations and keyframes
- gradients and color theory
- responsive design techniques
- form handling with javascript
- session storage api
- semantic html for accessibility
- organizing big css files with comments

## future improvements

- add dark mode toggle
- make more poems interactive
- add smooth page transitions
- create blog section
- add contact form
