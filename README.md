# Portfolio 🍿

## Table of Contents 📖

- [Overview](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#f99c1c68a0be411ea21aebfba620afdd)
- [Technologies](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#c4e06631a3be4fceb9e534a52290e05d)
- [Planning](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#fe3af2ac0fd944c98a0bad3a79ddff88)
- [Getting Started](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#99b60c701ae0446998be70811a2726d1)
- [Wins](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#81e74b7a4ae74f2399c85b5ed0c61304)
- [Challenges](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#7fedc5eb0935405e992e4910a4d6d3a7)
- [Future Work](https://www.notion.so/Project-3-Readme-Fri-21st-Aug-95a55df0773f45c1af1f5ec3084c4b5b#fca88914eeb14fc0909ad0588d7ea20c)

## Overview 👓

To demonstrate and showcase the skills and projects that I have worked on during **GA's, 12 week, Software Engineering Immersive Bootcamp**, I built a **portfolio website** using **ReactJS**, **SCSS** **(with Bulma framework), HTML5** and **various other libraries**.

My portfolio site has been created and designed to be both **desktop** and **mobile friendly**.

![Working Gif of Portfolio Site Desktop View](/frontend/ReadmeResources/Portfolio.gif)

![Working Gif of Portfolio Site Mobile View](/frontend/ReadmeResources/Portfolio-Mobile.gif)

## Technologies 💻

- General:
    - **ReactJS**
    - **HTML5**
    - **SCSS (with Bulma framework)**
- Others:
    - **GitHub**
    - **Figma (Wireframe)**
- 3rd party libraries/frameworks:
    - **React-tilt**
    - **AOS** **(Animate on Scroll)**
    - **Animate.css**
    - **React Vertical Timeline**
    - **React Scroll Background**

## Process 📝

- I started by drawing up a **wireframe** of the site on **Figma**, which made it easier for me during the coding process as I had already a good idea of what the product should look like

![Figma Wireframing](/frontend/ReadmeResources/Portfolio-Figma.png)

- Next, as part of my **research**, I looked at some **example portfolio sites** to see what **libraries** and **frameworks** could be implemented on my site
- I **planned** and **wrote** out the **main features** that I wanted to include on my portfolio (i.e. a **typing and erasing effect**, a **timeline element**, a **3D effect**, **animations with scroll**)
- For **productivity**, I decided to **simultaneously code** for **both desktop** and **mobile views**, rather than one after the other, so as to keep my mind fresh on the section that I was working on

### MVP

- **"About Me"** section:
    - Include the **story behind how I got to where I am now**
    - Include some **hobbies/interests**
    - Include **tech stack**
- **"Projects"** section:
    - Include the **4 completed projects** done **during** the **bootcamp**
    - **Description** of **project** and include **link** to **GitHub Repository** and **deployed site**
- **Navbar** that links to each of the main sections of the site
- **Footer** that contains **links** to my **GitHub**, **LinkedIn** and **Email** for contact purposes

## Getting Started 🏃‍♂️🏃‍♀️

To enjoy the **full experience** of the **portfolio site**, it is recommended to use the **deployed version** at [http://www.siukeitam.com/](http://www.siukeitam.com/). If you wish to **run it locally**, you will need to **follow the steps below**:

- **Fork** or **Clone** the **GitHub repository** ([https://github.com/tams2429/portfolio_v2_main](https://github.com/tams2429/portfolio_v2_main))
- In the **'frontend' folder**, run `npm install` to **install** all the **dependencies**
- `npm start` to **start** the **development server** for the whole site

## Wins 🏆

One of the **major wins** in this project was being able to **practice** and **successfully use hooks** for **React**. Especially, for my **project thumbnail gallery component**, where I was able to to incorporate the use of **React hooks** to help add a functionality which allowed for the User to see the **moving GIF** of the selected project in action, only **on hover**, and **then reset** **to a still image** when **cursor** is **not on the image**.

```jsx
function ThumbnailGallery() {
	const [thumbnails, setthumbnails] = React.useState([PokeThumbnail, DirectorDictatorThumbnail, TripSavvyThumbnail, Momen2umThumbnail])
	const [activeIndex, setactiveIndex] = React.useState("0")
	const [projectGifTriggered, setprojectGifTriggered] = React.useState(false)

	const handleMouseEnter = () => {
		return setprojectGifTriggered(!projectGifTriggered)
  }
  const handleMouseLeave = () => {
    return setprojectGifTriggered(!projectGifTriggered)
  }
	const handleClick = (e) => {
    const activeIndex = e.target.getAttribute('data-index')
    setactiveIndex(activeIndex)
  }

	return(
		<div>
			<Tilt className="active-thumbnail Tilt"  options={{ max : 10, scale: 1.05, speed: 2000}}>
				<img src={!projectGifTriggered ? thumbnails[activeIndex] : thumbnailGifs[activeIndex]} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
	    </Tilt>
			<img src={thumbnail} data-index={index} onClick={handleClick}/>
		</div>
	)
}
```

## Challenges 🏋️

The **main challenge** for this portfolio was trying to **keep it simple** with a **clear purpose** of **displaying my work and skills**. During the process, I found myself too often **distracted** by the **many libraries** and cool features that were open sourced but **didn't necessarily fit with my portfolio**. As a result, leading to **some time wasted** and **abortive work** where I had to remove them.

## Future Work ☕

### Planned features/extensions

- Add **entry animation** to **title**
- Add **loading spinner** while **site first loads up**
