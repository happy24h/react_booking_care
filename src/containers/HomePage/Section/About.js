import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {
    render() {  
        
        return (
            <div className="section-share section-about">
                <div className="section-about-header">
                    Truyền thông nói về Hỏi Dân IT
                </div>
                <div className="section-about-content">
                    <div className="content-left">
                    <iframe width="100%" height="400px" 
                    src="https://www.youtube.com/embed/147SkAVXEqM?list=PLncHg6Kn2JT6E38Z3kit9Hnif1xC_9VqI" 
                    title="YouTube video player" 
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    </div>
                    <div className="content-right">
                        <p>✔ Các bạn hiểu được 1 FullStack Web Developer thì cần chuẩn bị những gì. Ở đây, mình không dám chắc 100% các bạn sẽ trở thành Fullstack Developer, nhưng nếu bạn chọn Frontend hay Backend thì khóa học này cũng cung cấp cho bạn nhiều điều bổ ích</p> </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        // inject
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
