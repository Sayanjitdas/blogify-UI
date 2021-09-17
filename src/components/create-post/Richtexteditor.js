import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import QuillToolbar, {modules,formats} from './QuillToolbar';
// import WyswigEditor from './WyswigEditor';
// import SlateEditor from "./SlateEditor";
// import CustomEditor from "./CustomEditor";

export default function RichTextEditor ({value,setValue}) {
  
  return (
    <>
    {/* <SlateEditor /> */}
    {/* <WyswigEditor setValue={setValue}/> */}
    {/* <QuillToolbar /> */}
    <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
}
