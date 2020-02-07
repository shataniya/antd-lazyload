import React from 'react'
import './lazyload.css'
import { Spin } from 'antd'
class AntdLoad extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading: true
        }
        this.handleInitImg = this.handleInitImg.bind(this)
        this.handleInitImg()
    }
    handleInitImg(){
        var { src } = this.props.state
        var image = new Image()
        image.src = src
        image.onload = ()=>{
            this.setState({
                loading: false
            })
        }
    }
    render(){
        var { src, alt, BoxClassName, ImgClassName, BoxStyle, ImgStyle, width, height }  = this.props.state
        BoxClassName = BoxClassName ? BoxClassName : 'lazyload-img-box'
        ImgClassName = ImgClassName ? ImgClassName : 'lazyload-img'
        alt = alt ? alt : 'antd-lazyload'
        var { loading } = this.state
        if(!nodeName){
            return (
                <div className={BoxClassName} style={{ width, height, ...BoxStyle }}>
                    <Spin spinning={loading}>
                        <img src={src} alt={alt} className={ImgClassName} style={{ ...ImgStyle }} />
                    </Spin>
                </div>
            )
        }
    }
}
export default AntdLoad