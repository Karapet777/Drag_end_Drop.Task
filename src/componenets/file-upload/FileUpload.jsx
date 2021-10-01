import React, {useState} from 'react'
import PhotoSvg from '../../assets/svgs/PhotoSvg';
import classNames from './fileUpload.module.scss';

const FileUpload = () => {
    const [images, setImeges] = useState('')
   



    const handleFileInput = (e) => {
       let NewImeg = URL.createObjectURL(e.target.files[0])
       setImeges(NewImeg)
    }
  
   
    return (
        <div className={`${classNames.uploadContainer} ${ false ? classNames.uploaded  : ''}`}>
            <label>
               {!images ? (
                    <PhotoSvg />
               ) : (
                   <img src={images} alt="img" />
               )}
                <input type="file" onChange={handleFileInput} />
            </label>
        </div>
    )
}

export default FileUpload
