$(document).ready(function(){

  let menuIsOpen = false;

  const crossAnimOpen = () => {
    $('.middle-span').css({
      opacity : 0,
      transition : '.75s',
    });
    $('nav ul').css('display', 'flex');

    setTimeout(()=> {
      $('.middle-span').css('display', 'none');
    }, 1000);

    setTimeout(()=> {
      $('button').css('position', 'relative');
      $('.common-span').css('position', 'absolute');
    }, 1200);

    setTimeout(()=> {
      $('.top-span').css({
        transform: 'rotate(45deg)',
        transition : '1s',
      });

      $('.bottom-span').css({
        transform: 'rotate(-45deg)',
        transition : '1s',
      });
    }, 1500);
    setTimeout(()=>{
      $('nav ul').css({
        height: '100vh',
        opacity: '1',
      });
      $('body').css('overflow', 'hidden');
    }, 1900);

    menuIsOpen = true;
  };

  const crossAnimClose = () => {
    $('nav ul').css({
      opacity : '0',
      height : '0',
    });

    $('.common-span').css({
      transform : 'rotate(0deg)',
      position : 'relative',
    });

    $('.middle-span').css({
      display : 'block',
      opacity : '1',
      transition : '.75s',
    });

    $('body').css('overflow', 'scroll');
    menuIsOpen = false;
    }

  $('nav .opener button').click(()=> {
    if(!menuIsOpen) {
      crossAnimOpen();
    } else {
      crossAnimClose();
    }
  });

});
