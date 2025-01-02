function gsapAni() {


  gsap.registerPlugin(TextPlugin);
  const typingText = document.querySelector('.main-bg-text > *');
  var text1 = '詐騙嫌疑犯近4萬6千人';
  var text2 = '猜猜我是誰';
  var text3 = '解除分期付款詐欺';
  var text4 = '假網路拍賣';
  var text5 = '猜猜我是誰';
  var tltext = gsap.timeline({
    delay: 0.8,
  });

  // 詐騙嫌疑犯
  tltext
    .addLabel('kvtextStart')
    .to('.gasp-text-1', {
      opacity: 1,
      duration: 0.3,
      onStart: function () {
        document.querySelector('.gasp-text-1').textContent = '';
      },
      text: {
        value: text1,
        delimiter: '',
        type: "chars",
      },
    })
    .to('.gasp-text-2', {
      opacity: 1,
      duration: 0.3,
      onStart: function () {
        document.querySelector('.gasp-text-2').textContent = '';
      },
      text: {
        value: text2,
        delimiter: '',
        type: "chars",
      },
    }, "-=0.2")
    .to('.gasp-text-3', {
      opacity: 1,
      duration: 0.3,
      onStart: function () {
        document.querySelector('.gasp-text-3').textContent = '';
      },
      text: {
        value: text3,
        delimiter: '',
        type: "chars",
      },
    }, "-=0.2")
    .to('.gasp-text-4', {
      opacity: 1,
      duration: 0.3,
      onStart: function () {
        document.querySelector('.gasp-text-4').textContent = '';
      },
      text: {
        value: text4,
        delimiter: '',
        type: "chars",
      },
    }, "-=0.2")
    .to('.gasp-text-5', {
      opacity: 1,
      duration: 0.3,
      onStart: function () {
        document.querySelector('.gasp-text-5').textContent = '';
      },
      text: {
        value: text5,
        delimiter: '',
        type: "chars",
      },
    }, "-=.2")
    .call(() => {
      // 在這裡延遲移除垂直線邊框
      gsap.delayedCall(1, () => {
        typingText.classList.add('no-border-right');
      });
    })
    .addLabel('kvtextEnd');

  var tlKv = gsap.timeline({
    delay: 0,
    repeatDelay: 0,
    onComplete: function () {
      aniLoop();
    },
  });

  tlKv
    .addLabel('kvStart')

    .from(
      // bg文字
      '.main-bg img:nth-child(odd)',
      {
        x: '-=100',
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power4.out',
        transformOrigin: 'center center',
        clearProps: 'all',
      },
      'kvStart+=0.5'
    )
    .from(
      // bg文字
      '.main-bg img:nth-child(even)',
      {
        y: '-=50',
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power4.out',
        clearProps: 'all',
      },
      'kvStart+=0.8'
    )
    .from(
      // 手
      '.main-group img:nth-child(2)',
      {
        x: '+=90%',
        y: '+=90%',
        duration: 0.5,
        ease: 'back.out(1.5)',
        clearProps: 'all',
      },
      'kvStart+=1.6'
    )
    .from(
      // 對話框
      '.main-text',
      {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.4)',
        // ease: 'power4.in',
      },
      'kvStart+=2'
    )
    .from(
      // 對話框文字
      '.main-text img',
      {
        y: '+=50',
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.11,
        ease: 'power4.out',
        clearProps: 'all',
      },
      'kvStart+=2.3'
    )
    .from(
      // 快豐鎖
      '.main-group img:nth-child(1)',
      {
        scale: 0,
        opacity: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.4)',
        // ease: 'back.out(5)',
        clearProps: 'all',
      },
      'kvStart+=4'
    )
    .addLabel('kvEnd');

  function aniLoop() {
    gsap
      .timeline({
        delay: 0,
        repeat: -1,
        repeatDelay: 1.2,
      })
      .to(
        '.main-text',
        {
          scale: 1.05,
          duration: 1,
          ease: 'elastic.out(1, 0.45)',
          stagger: 1.1,
        },
        '<'
      )
      .to(
        '.main-text',
        {
          scale: 1,
          duration: 1.35,
          ease: 'elastic.out(1, 0.45)',
          stagger: 1.1,
        },
        '<+0.2'
      )
      .to(
        '.main-group img:nth-child(1)',
        {
          scale: 1.05,
          duration: 1,
          ease: 'elastic.out(1, 0.45)',
          stagger: 1.1,
        },
        '<+0.6'
      )
      .to(
        '.main-group img:nth-child(1)',
        {
          scale: 1,
          duration: 1.35,
          ease: 'elastic.out(1, 0.45)',
          stagger: 1.1,
        },
        '<+0.2'
      )

  }
}
