var ImagePicker = require('react-native-image-picker');
var options={
    title: 'Select Avatar',
    customButtons:[
        {name:'fb', title:'Chose Photo from FB'},
    ],
    storageOptions:{
        skipBackup: true,
        path: 'images'
    }
};
let picture = (cb) =>{
    ImagePicker.showImagePicker(options,(response)=>{
        
            if(response.didCancel){
                console.log('User cancelled image picker');
            }
            else if(response.error){
                console.log('ImagePiker Error:', response.customButton);
            }
            else if(response.customButton){
                console.log('User tapped custom button', response.customButton);
            }
            else{
                let source ={uri: response.uri};
                cb(source);
            }
        });
    
}
module.exports = picture;