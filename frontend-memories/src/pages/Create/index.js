import React from 'react'
import { Button, Input, TextArea, Upload, Gap } from '../../components'
import './create.scss'
import {useHistory} from 'react-router-dom'

function Create() {
    const history = useHistory();
    return (
        <div>
           <h1 className="heading">Create New Post</h1>
           <p className="heading-desc">Massukan data-data dibawah ini untuk membuat post baru</p>
           <div  className="form-wrapper">
                <Input label="Judul Post" placeholder="Massukan judul post..."/>
                <TextArea label="Massukan Konten"/>
                <Upload label="Tambahkan Gambar" previewTitle="Preview Gambar"/>
                <Gap height={30} />
                <Button title="Simpan"  onClick={() => history.push('./')}/>
                <Gap height={30} />
           </div>
        </div>
    )
}

export default Create

