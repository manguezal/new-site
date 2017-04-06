import $ from 'jquery';

export default class Navigation{

    goTo(wrapper, event){
        console.log('$', $("#" + wrapper), wrapper, event, arguments);
        let $item = $("#" + wrapper);
        if($item.length > 0)    
            $("html, body").animate({scrollTop: $item.scrollTop()});
    }

}