import $ from 'jquery';

export default class Navigation{

    static goTo(wrapper){
        let $item = $(wrapper);
        let headerSize = 96;

        if($item.length > 0)    
            $("html, body").animate({scrollTop: $item.offset().top - headerSize});
    }

}