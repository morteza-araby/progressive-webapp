import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import Loader from 'Loader'

class SlideShow extends Component {

    aSlide(slide, i) {
        var imgSrc = "images/pets/" + slide.filename + ".jpg"
        var petName = slide.pet + " photo"
        if (i === 0) {
            return (
                <div className="item active" key={i}><img src={imgSrc} alt={petName} /></div>
            )
        } else {
            return (
                <div className="item"  key={i}><img src={imgSrc} alt={petName} /></div>
            )
        }
    }

    /**
     * componetDidUpdate calls after the render with data has happend, so in this
     * stage the html dom elements exist.
     */
    componentDidUpdate(prevProps, prevState){
        $('#slideshow .item img').each(function () {
            var imgSrc = $(this).attr('src');
            $(this).parent().css({ 'background-image': 'url(' + imgSrc + ')' });
            $(this).remove();
        })
        //Activate carousel
        $('.carousel').carousel({
            pause: false
        })
    }
    render() {
        var slideData = this.props.data.slideshow || []
        if (slideData.length < 1) {
            return (<Loader />)
        }
        var slides = slideData.map((s, i) => {
            return this.aSlide(s, i)
        })
        return (
            <div className="carousel fade" data-ride="carousel" id="slideshow">
                <div className="carousel-inner">
                    {slides}
                </div>
                <a className="left carousel-control" href="#slideshow" role="button" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#slideshow" role="button" data-slide="next"></a>
            </div>
        );
    }
}

SlideShow.propTypes = {

};

export default connect(
    (state) => {
        return {
            data: state.data
        }
    }
)(SlideShow)

//  return (
//             <div class="carousel fade" data-ride="carousel" id="slideshow">
//                 <div class="carousel-inner">
//                     {{#each slideshow}}
//           {{#if @first}}
//             <div class="item active"><img src="images/pets/{{filename}}.jpg" alt="{{pet}} photo"></div>
//                         {{ else}}
//                         <div class="item"><img src="images/pets/{{filename}}.jpg" alt="{{pet}} photo"></div>
//                             {{/if}}
//         {{/each}}
//       </div>{/*<!--carousel inner -->*/}
//                         <a class="left carousel-control" href="#slideshow" role="button" data-slide="prev"></a>
//                         <a class="right carousel-control" href="#slideshow" role="button" data-slide="next"></a>
//                         {/*<!--carousel fade -->*/}
//                     </div>
//                     );