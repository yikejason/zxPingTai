import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import Api from '../../api';
class GetQrcode extends Component{
    constructor(props){
        super(props)
        this.state={
            url:""
        }
    }

	componentWillMount(){
		let contentID=this.props.contentID;
		let contentType=this.props.contentType
	    this.getQr(contentType,contentID)
	}
	
	getQr = (contentType,contentID) => {
    	Api.Info.GetH5PagePreviewUrl({contentType: contentType, contentID: contentID}).then(res=>{
    		if(res.Ret==0){
    			this.setState({url:res.Data})
    			console.log(res.Data)
    		}
    	})
  	};
    render(){
        return(
            <div style={{position:"relative",top:"0",left:"50%",marginLeft:"-75px"}}>
                  <QRCode size={150} value={this.state.url}/>
            </div>
        )
    }
}

export default GetQrcode