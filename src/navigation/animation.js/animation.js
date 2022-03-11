import gsap from 'gsap';

export const showAnimation = (sideMenu) => {
  const tl = gsap.timeline();
  tl.addLabel('start')
    .to(sideMenu, {
      duration: 0.4,
      opacity: 1,
      x: 0,
    })
    .from(
      sideMenu.children,
      {
        duration: 0.4,
        opacity: 0.8,
        scale: 1,
        stagger: 0.5,
        ease: 'back.out(2)',
      },
      'start+=1'
    )
    .addLabel('end');
};
export const hideAnimation = (sideMenu) => {
  const tl = gsap.timeline();
  tl.addLabel('start')
    .to(sideMenu, {
      duration: 0.4,
      opacity: 0,
      x: '-100%',
    })
    .to(
      sideMenu.children,
      {
        duration: 0.4,
        opacity: 1,
        scale: 1,
        stagger: 0.5,
        ease: 'back.out(2)',
      },
      'start+=1'
    )
    .addLabel('end');
};
