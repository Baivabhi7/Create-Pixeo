'use strict'

//import all components and functions

import { sidebar } from "./sidebar.js";
import { api_key, imageBaseURL, fetchDataFromServer } from "./api.js";

const pageContent = document.querySelector("[page-content]");

siderbar();


fetchDataFromServer(``, heroBanner);

const heroBanner = function({ result: movieList }) {
     
    const banner = document.createElement("section");
    banner.classList.add("banner");
    banner.ariaLabel = "Popular Movies";

    banner.innerHTML = html`
    <div class="banner-slider">
    <div class="slider-item" slider-item>
        <img src="./assets/images/slider-banner.jpg" alt="Puss in Boots: The Last Wish" class="img-cover" loading="eager">
        <div class="banner-content">
            <h2 class="heading">
                Puss in Boots: The Last Wish
            </h2>
            <div class="meta-list">
                <div class="meta-item">2022</div>
                <div class="meta-item card-badge">7.5</div>
            </div>
            <p class="genre">Animation,Action,Adventure</p>
            <p class="banner-text">Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
            </p>
            <a href="./detail.html" class="btn">
                <img src="./assets/images/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle">
            <span class="span">Watch Now</span>
            </a>
        </div>
          </div>
          <div class="slider-item" slider-item>
            <img src="./assets/images/slider-banner.jpg" alt="Puss in Boots: The Last Wish" class="img-cover" loading="eager">
           <div class="banner-content">
                   <h2 class="heading">
                       Puss in Boots: The Last Wish
                   </h2>
                   <div class="meta-list">
                       <div class="meta-item">2022</div>
                       <div class="meta-item card-badge">7.5</div>
                   </div>
                   <p class="genre">Animation,Action,Adventure</p>
                   <p class="banner-text">Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
                   </p>
                   <a href="./detail.html" class="btn">
                       <img src="./assets/images/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle">
                   <span class="span">Watch Now</span>
                   </a>
               </div>
              </div>
              <div class="slider-item" slider-item>
                <img src="./assets/images/slider-banner.jpg" alt="Puss in Boots: The Last Wish" class="img-cover" loading="eager">
               <div class="banner-content">
                       <h2 class="heading">
                           Puss in Boots: The Last Wish
                       </h2>
                       <div class="meta-list">
                           <div class="meta-item">2022</div>
                           <div class="meta-item card-badge">7.5</div>
                       </div>
                       <p class="genre">Animation,Action,Adventure</p>
                       <p class="banner-text">Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
                       </p>
                       <a href="./detail.html" class="btn">
                           <img src="./assets/images/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle">
                       <span class="span">Watch Now</span>
                       </a>
                   </div>
                  </div>
                  <div class="slider-item " slider-item>
                    <img src="./assets/images/slider-banner.jpg" alt="Puss in Boots: The Last Wish" class="img-cover" loading="eager">
                   <div class="banner-content">
                           <h2 class="heading">
                               Puss in Boots: The Last Wish
                           </h2>
                           <div class="meta-list">
                               <div class="meta-item">2022</div>
                               <div class="meta-item card-badge">7.5</div>
                           </div>
                           <p class="genre">Animation,Action,Adventure</p>
                           <p class="banner-text">Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
                           </p>
                           <a href="./detail.html" class="btn">
                               <img src="./assets/images/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle">
                           <span class="span">Watch Now</span>
                           </a>
                       </div>
                      </div>
                      <div class="slider-item" slider-item>
                        <img src="./assets/images/slider-banner.jpg" alt="Puss in Boots: The Last Wish" class="img-cover" loading="eager">
                       <div class="banner-content">
                               <h2 class="heading">
                                   Puss in Boots: The Last Wish
                               </h2>
                               <div class="meta-list">
                                   <div class="meta-item">2022</div>
                                   <div class="meta-item card-badge">7.5</div>
                               </div>
                               <p class="genre">Animation,Action,Adventure</p>
                               <p class="banner-text">Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
                               </p>
                               <a href="./detail.html" class="btn">
                                   <img src="./assets/images/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle">
                               <span class="span">Watch Now</span>
                               </a>
                           </div>
                          </div>

    <div class="slider-item" slider-item>
     <img src="./assets/images/slider-banner.jpg" alt="Puss in Boots: The Last Wish" class="img-cover" loading="eager">
    <div class="banner-content">
            <h2 class="heading">
                Puss in Boots: The Last Wish
            </h2>
            <div class="meta-list">
                <div class="meta-item">2022</div>
                <div class="meta-item card-badge">7.5</div>
            </div>
            <p class="genre">Animation,Action,Adventure</p>
            <p class="banner-text">Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.
            </p>
            <a href="./detail.html" class="btn">
                <img src="./assets/images/play_circle.png" width="24" height="24" aria-hidden="true" alt="play circle">
            <span class="span">Watch Now</span>
            </a>
        </div>
       </div>
</div>
<div class="slider-control">
<div class="control-inner">
<button class="poster-box slider-item">
<img src="./assets/images/slider-control.jpg"  alt="Slide to Puss in Boots: The Last Wish " loading="lazy" draggable="false">
</button>

</div>
</div>
    ';

    let controlItemIndex = 0;

    for(const [index, movie] of movieList.entries()) {

        const {
            bacdrop_path,
            title,
            release_date,
            genre_ids,
            overview,
            poster_path,
            vote_average,
            id,
        } = movie;

         const sliderItem = document.createElement("div");
         sliderItem.classList.add("slider-item");
         sliderItem.setAttribute("slider-item", "");

         sliderItem.innerHTML = html`
         
         `;
    }
}