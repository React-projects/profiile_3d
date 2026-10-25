import { useEffect, useRef } from 'react';
import './styles/WhatIDo.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const WhatIDo = () => {
   const containerRef = useRef<(HTMLDivElement | null)[]>([]);
   const setRef = (el: HTMLDivElement | null, index: number) => {
      containerRef.current[index] = el;
   };
   useEffect(() => {
      const handlers: { element: HTMLDivElement; handler: () => void }[] = [];
      if (ScrollTrigger.isTouch) {
         containerRef.current.forEach((container) => {
            if (container) {
               container.classList.remove('what-noTouch');
               const handler = () => handleClick(container);
               container.addEventListener('click', handler);
               handlers.push({ element: container, handler });
            }
         });
      }
      return () => {
         handlers.forEach(({ element, handler }) => {
            element.removeEventListener('click', handler);
         });
      };
   }, []);
   return (
      <div className='whatIDO'>
         <div className='what-box'>
            <h2 className='title'>
               W<span className='hat-h2'>HAT</span>
               <div>
                  I<span className='do-h2'> DO</span>
               </div>
            </h2>
         </div>

         <div className='what-box'>
            <div className='what-box-in'>
               <div className='what-border2'>
                  <svg width='100%'>
                     <line x1='0' y1='0' x2='0' y2='100%' stroke='white' strokeWidth='2' strokeDasharray='7,7' />
                     <line x1='100%' y1='0' x2='100%' y2='100%' stroke='white' strokeWidth='2' strokeDasharray='7,7' />
                  </svg>
               </div>

               {/* --- DEVELOP BOX --- */}
               <div className='what-content what-noTouch' ref={(el) => setRef(el, 0)}>
                  <div className='what-border1'>
                     <svg height='100%'>
                        <line x1='0' y1='0' x2='100%' y2='0' stroke='white' strokeWidth='2' strokeDasharray='6,6' />
                        <line x1='0' y1='100%' x2='100%' y2='100%' stroke='white' strokeWidth='2' strokeDasharray='6,6' />
                     </svg>
                  </div>
                  <div className='what-corner'></div>

                  <div className='what-content-in'>
                     <h3>DEVELOP</h3>
                     <h4>Description</h4>
                     <p>
                        I build fast, scalable, and responsive web applications. My focus is on writing clean, maintainable code and turning complex designs into simple, user-friendly interfaces that
                        solve real problems.
                     </p>
                     <h5>Skillset & tools</h5>
                     <div className='what-content-flex'>
                        <div className='what-tags'>Vue.js / React.js</div>
                        <div className='what-tags'>Nuxt.js / Next.js</div>
                        <div className='what-tags'>TypeScript</div>
                        <div className='what-tags'>JavaScript</div>
                        <div className='what-tags'>Tailwind CSS</div>
                        <div className='what-tags'>Bootstrap</div>
                        <div className='what-tags'>HTML5 & CSS3</div>
                        <div className='what-tags'>REST APIs</div>
                        <div className='what-tags'>Git & GitHub</div>
                     </div>
                     <div className='what-arrow'>{/* Your arrow icon */}</div>
                  </div>
               </div>

               {/* --- UI/UX BOX --- */}
               <div className='what-content what-noTouch' ref={(el) => setRef(el, 1)}>
                  <div className='what-border1'>
                     <svg height='100%'>
                        <line x1='0' y1='100%' x2='100%' y2='100%' stroke='white' strokeWidth='2' strokeDasharray='6,6' />
                     </svg>
                  </div>
                  <div className='what-corner'></div>
                  <div className='what-content-in'>
                     <h3>UI/UX & OPTIMIZE</h3>
                     <h4>Description</h4>
                     <p>
                        I design and optimize digital experiences that drive engagement and conversions. My focus is on creating intuitive, accessible interfaces, improving performance, and solving
                        user problems to help businesses reach their goals.
                     </p>
                     <h5>Skillset & tools</h5>
                     <div className='what-content-flex'>
                        {/* Core UX Skills */}
                        <div className='what-tags'>UI/UX Optimization</div>
                        <div className='what-tags'>Responsive Design</div>
                        <div className='what-tags'>Accessibility (a11y)</div>
                        <div className='what-tags'>Problem Solving</div>

                        {/* Technical/Development Skills */}
                        {/* <div className='what-tags'>WordPress</div>
                        <div className='what-tags'>Sass / SCSS</div>
                        <div className='what-tags'>Nuxt-i18n</div>
                        <div className='what-tags'>FullCalendar</div> */}

                        {/* Performance Skills */}
                        <div className='what-tags'>SEO & Speed</div>
                        <div className='what-tags'>Performance Tuning</div>
                     </div>
                     <div className='what-arrow'>{/* Your arrow icon */}</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
   container.classList.toggle('what-content-active');
   container.classList.remove('what-sibling');
   if (container.parentElement) {
      const siblings = Array.from(container.parentElement.children);

      siblings.forEach((sibling) => {
         if (sibling !== container) {
            sibling.classList.remove('what-content-active');
            sibling.classList.toggle('what-sibling');
         }
      });
   }
}
