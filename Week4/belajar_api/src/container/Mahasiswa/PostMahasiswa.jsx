import React from 'react'

const Post = (props) => {
    return (
        <div className="artikel">
            <div className="gambar-artikel">
                <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/06/06/3633533169.jpg" alt="Gambar Thumbnail Artikel" />
            </div>
            <div className="konten-artikel">
                <div className="row">
                    <div className="col-sm">                
                        <div className="judul-artikel">Nama : {props.namaMhs}</div>
                        <p className="isi-artikel">NIM : {props.nimMhs}</p>
                        <p className="isi-artikel">Alamat : {props.alamatMhs}</p>
                        <p className="isi-artikel">No Hp : {props.noHp}</p>
                        <p className="isi-artikel">Angkatan : {props.angkatanMhs}</p>
                        <p className="isi-artikel">Status : {props.statusMhs}</p>
                        <button className="btn btn-sm btn-danger" onClick={() => props.hapusMahasiswa(props.idMahasiswa)}>Hapus</button>
                    </div>
                    <div className="col-sm">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post