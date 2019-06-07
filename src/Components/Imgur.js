import React from 'react';
import ImageUploader from 'react-images-upload';
import axios from 'axios'
 
class App extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        const { setFieldValue } = this.props;
        this.setState({
            pictures: this.state.pictures.concat(picture),
        }, () => {
            console.log('hello',this.state.pictures)

            var form = new FormData();
            form.append("image", this.state.pictures[0]);
            
            var settings = {
              "url": "https://api.imgur.com/3/image",
              "method": "POST",
              "timeout": 0,
              "headers": {
                "Authorization": "Client-ID 546c25a59c58ad7"
              },
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form
            };
            
            axios(settings).then((response) => {
              console.log('res', response);
              setFieldValue('image_upload', response.data.data.link);
            })
            .catch((err) => {
                console.log('err', err)
            })
        });
    }
 
    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            />
        );
    }
}

export default App;