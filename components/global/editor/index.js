import React, { useEffect, useRef } from "react";
import Axios from "axios";

const Editor = ({ onChange, editorLoaded, name, value }) => {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  }, []);

  const uploadAdapter = (loader) => {
    return {
      upload: async () => {
        const file = await loader.file;
        const data = new FormData();

        data.append("file", file);
        data.append("upload_preset", "codexmaker_blog");
        data.append("cloud_name", "codexmaker");
        const response = await Axios.post(
          "https://api.cloudinary.com/v1_1/codexmaker/image/upload",
          data
        );
        if (response.data) {
          return {
            default: response.data.secure_url,
          };
        } else {
          console.log(response);
        }
      },
    };
  };

  const uploadPlugin = (editor) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  };

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          name="editor"
          style={{ position: "sticky" }}
          editor={ClassicEditor}
          onReady={async (editor) => {
            await uploadPlugin(editor);
          }}
          onFocus={(event, editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            onChange(data);
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
};

export default Editor;
