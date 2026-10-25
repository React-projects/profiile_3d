import './styles/Career.css';

const Career = () => {
   return (
      <div className='career-section section-container'>
         <div className='career-container'>
            <h2>
               My career <span>&</span>
               <br /> experience
            </h2>
            <div className='career-info'>
               <div className='career-timeline'>
                  <div className='career-dot'></div>
               </div>

               {/* EXPERIENCE 1 */}
               <div className='career-info-box'>
                  <div className='career-info-in'>
                     <div className='career-role'>
                        <h4>Frontend Developer</h4>
                        <h5>Corpita</h5>
                     </div>
                     <h3>Mar 2020 - Apr 2022</h3>
                  </div>
                  <p>
                     Developed dynamic, user-centric web interfaces, focusing on seamless navigation and accessibility. Collaborated with design and backend teams to translate complex UI/UX concepts
                     into functional code. Optimized website performance and ensured cross-browser compatibility, significantly improving the overall user experience.
                  </p>
               </div>

               {/* EXPERIENCE 2 */}
               <div className='career-info-box'>
                  <div className='career-info-in'>
                     <div className='career-role'>
                        <h4>Frontend Developer</h4>
                        <h5>Systemira</h5>
                     </div>
                     <h3>Jun 2022 - Aug 2023</h3>
                  </div>
                  <p>
                     Engineered visually appealing and highly responsive user interfaces using modern JavaScript frameworks. Played a key role in transforming static designs into interactive web
                     applications, ensuring pixel-perfect implementation. Partnered with interdisciplinary teams to deliver engaging frontend solutions that enhanced user retention.
                  </p>
               </div>

               {/* EXPERIENCE 3 */}
               <div className='career-info-box'>
                  <div className='career-info-in'>
                     <div className='career-role'>
                        <h4>Frontend Developer</h4>
                        <h5>Freelance / Remote</h5>
                     </div>
                     <h3>Apr 2022 - Present</h3>
                  </div>
                  <p>
                     Delivered impactful, high-quality web solutions to global clients as a results-oriented Remote Frontend Developer. Managed the entire development lifecycle from concept to
                     deployment, specializing in building responsive, high-performance applications that align with client business goals.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Career;
