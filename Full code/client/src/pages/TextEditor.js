import  { useState , useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/Texteditor.css";

const TextEditor = ({ data }) => {
  const [value, setValue] = useState('');
  console.log("Inside the text editor")

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align',
  ];

  useEffect(() => {
    if (data && data.data) {
      // Extract content from the 'data' object and set it as initial value
      setValue(data.data);
    }
  }, [data]);

  return (
    <div className="text-editor-container">
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
        formats={formats}
        placeholder="Write something..."
        style={{ height: "87vh" }}
      />
    </div>
  );
};

export default TextEditor;
