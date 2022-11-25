import { Formik } from 'formik';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './addpodcast.css';

const AddPodcast = () => {

  const [selFile, setSelFile] = useState("");
  const [image, setImage] = useState("");
  const url = 'http://localhost:5000';

  const userSubmit = async (formdata) => {
    formdata.file = selFile;
    formdata.image = image;
    console.log(formdata);
    // 1. Url
    // 2. Request Method
    // 3. Data
    // 4. Data Format

    // to send request on backend - to connect frontend and backend.
    const response = await fetch('http://localhost:5000/podcast/add', {
      method: 'POST',
      body: JSON.stringify(formdata),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.status === 200) {
      console.log('user added');
      Swal.fire({
        icon: 'success',
        title: 'Well Done',
        text: 'Registered Successfuly'
      })
    }
  }

  const uploadFile = (e) => {
    const file = e.target.files[0];
    setSelFile(file.name);
    console.log(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
      }
    });
  };
  
  const uploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file.name);
    console.log(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log('file uploaded');
      }
    });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "black" }}>
      <div className="container h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Add a Podcast
                    </p>
                    <Formik
                      initialValues={{ title: '', description: '', file: '', image: '', createdBy: '', genre: '', createdAt: new Date() }}
                      onSubmit={userSubmit}>
                      {({ values, handleSubmit, handleChange }) => (
                        <form className = "form mb-5" onSubmit={handleSubmit}>
                          <label>Title</label>
                          <input className='form-control mb-2 ' id="title" onChange={handleChange} value={values.title} />
                          <label>Description</label>
                          <input className='form-control mb-2 ' id="description" onChange={handleChange} value={values.description} />
                          <label>Created By</label>
                          <input className='form-control mb-2 ' id="createdBy" onChange={handleChange} value={values.createdBy} />
                          <label>File</label>
                          <input type="file" className='form-control mb-2 ' onChange={uploadFile} />
                          <label>Image</label>
                          <input type="file" className='form-control mb-2 ' onChange={uploadImage} />

                          <label>Genre</label>
                          <input className='form-control mb-2 ' id="genre" onChange={handleChange} value={values.genre} />

                          <button type="submit" className='btn btn-primary mt-4'>Submit</button>
                        </form>
                      )}
                    </Formik>
                  </div>
                  <div className="box-image col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://images.pexels.com/photos/6136094/pexels-photo-6136094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AddPodcast;