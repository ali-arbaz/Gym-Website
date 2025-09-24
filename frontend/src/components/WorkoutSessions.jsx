import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          “Push harder, lift stronger, and give your best — every top workout session takes you one step closer to greatness.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
         “Join our featured bootcamps to challenge yourself, break limits, and transform your body with expert guidance and high-energy sessions.”
        </p>
        <div className="bootcamps">
          <div>
            <h4>Unleash Your Power</h4>
            <p>
             “Strength is built step by step. Push beyond limits, embrace the challenge, and discover the unstoppable power within you.”
            </p>
          </div>
          <div>
            <h4>No Excuses, Just Results.</h4>
            <p>
             “Excuses don’t burn calories. Consistency, effort, and discipline transform dreams into achievements — your journey starts today.”
            </p>
          </div>
          <div>
            <h4>Stronger Every Day</h4>
            <p>
             “Every rep, every set, every drop of sweat takes you closer to a stronger, fitter, and healthier version of yourself.”
            </p>
          </div>
          <div>
            <h4>Heading: Mind Over Matter.</h4>
            <p>
             “Your body will go as far as your mind pushes it. Stay focused, stay hungry, and keep chasing progress.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
