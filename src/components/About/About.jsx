import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/work_logo/profile_hilal.png';
import MagneticButton from '../ui/MagneticButton';

const About = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-[100svh] items-center pb-20 pt-32 md:pt-36"
    >
      <div className="wrap">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Left Side — one orchestrated entrance, staggered */}
          <div className="order-2 min-w-0 text-center lg:order-1 lg:col-span-7 lg:text-left">
            {/* Greeting */}
            <h1
              className="animate-rise text-xl font-light tracking-[-0.01em] text-mist sm:text-2xl"
              style={{ animationDelay: '0.15s' }}
            >
              Hi, I am
            </h1>
            {/* Name */}
            <h2
              className="animate-rise text-platinum-gradient mt-3 text-[clamp(3rem,7.4vw,6.6rem)] font-light leading-[0.92] tracking-[-0.055em]"
              style={{ animationDelay: '0.3s' }}
            >
              Muhammad Hilal
            </h2>
            {/* Skills Heading with Typing Effect */}
            <h3
              className="animate-rise mt-7 text-xl font-normal leading-tight tracking-[-0.015em] text-gold-400 sm:text-2xl md:text-[1.7rem]"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="text-platinum/90">I am a </span>
              <ReactTypingEffect
                text={[
                  'Frontend Developer',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-gold-400">{cursor}</span>
                )}
              />
            </h3>
            {/* About Me Paragraph */}
            <p
              className="animate-rise mx-auto mt-8 max-w-[34rem] text-base leading-[1.85] text-mist sm:text-[1.08rem] lg:mx-0"
              style={{ animationDelay: '0.68s' }}
            >
              I developed my web development skills at Nextech Academy, where I gained practical experience by working on real-world websites and business projects. The hands-on learning approach helped me strengthen my development skills and build the confidence to create professional digital products.

              </p>
            {/* Resume Button */}
            <div className="animate-rise mt-11" style={{ animationDelay: '0.86s' }}>
              <MagneticButton
                href="https://drive.google.com/file/d/1hmRQ15kmgrorHNMrM4CiaVK0zUWSBmhy/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD CV
              </MagneticButton>
            </div>
          </div>

          {/* Right Side — the portrait */}
          <div
            className="animate-rise order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
            style={{ animationDelay: '0.4s' }}
          >
            <Tilt
              className="relative aspect-square w-[min(72vw,19rem)] sm:w-[22rem] lg:w-[min(32vw,28rem)]"
              tiltMaxAngleX={7}
              tiltMaxAngleY={7}
              perspective={1200}
              scale={1.02}
              transitionSpeed={1800}
              gyroscope={false}
            >
              <div className="relative h-full w-full animate-float">
                {/* Ambient halo */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-[18%] rounded-full opacity-90"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(217,189,132,0.26), rgba(217,189,132,0.07) 58%, transparent 100%)',
                  }}
                />
                {/* Rotating rim light */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 animate-spin-slow rounded-full"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgba(243,230,196,0) 0%, rgba(243,230,196,1) 16%, rgba(217,189,132,0.4) 34%, rgba(232,230,225,0) 52%, rgba(232,230,225,0.7) 70%, rgba(217,189,132,0.1) 86%, rgba(243,230,196,0) 100%)',
                    WebkitMask:
                      'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2.5px))',
                    mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2.5px))',
                  }}
                />
                {/* Hairline platinum frame */}
                <div
                  aria-hidden="true"
                  className="absolute inset-[9px] rounded-full border border-white/[0.08]"
                />
                {/* Photo */}
                <div className="absolute inset-[16px] overflow-hidden rounded-full bg-ink-800 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95),0_0_80px_-20px_rgba(217,189,132,0.28)]">
                  <img
                    src={profileImage}
                    alt="Muhammad Hilal"
                    className="h-full w-full scale-[1.02] object-cover"
                  />
                  {/* Warm light from above, shadow from below */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(243,230,196,0.10) 0%, transparent 38%, rgba(5,5,5,0.38) 100%)',
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 60px rgba(0,0,0,0.35)' }}
                  />
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
