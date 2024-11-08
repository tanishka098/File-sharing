import { useRef, useState, useEffect } from 'react'; 
// eslint-disable-next-line no-unused-vars
import logo from './logo.svg';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();


  // const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg'
  const logo = 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/c605e9b8-3811-4e00-8d4e-7e90986a109c/3501ac7a-5675-4bdd-a064-87db299c129d.png'

  useEffect(() => {
    const getImage = async  () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        let response = await uploadFile(data);
        setResult(response.path);
      }

    }
    getImage();

  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  console.log(file);

  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Tanya file sharing!</h1>
        <p>Upload and share  the download link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>
        <input type="file"
        ref = {fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result} target="_blank" rel="noreferrer">{result}</a>
      </div>
    </div>
  
  )
}

export default App;
