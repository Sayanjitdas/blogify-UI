import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillToolbar, {modules,formats} from './QuillToolbar';
 
export default function RichTextEditor ({value,setValue}) {
  
  return (
    <>
    <QuillToolbar />
    <ReactQuill modules={modules} formats={formats} theme="snow" value={value} onChange={setValue} />
    </>
  );
}
