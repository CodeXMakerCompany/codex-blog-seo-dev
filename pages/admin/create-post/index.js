import React, { useEffect, useState } from "react";
import DateTimePicker from "@mui/lab/DateTimePicker";
import {
  Box,
  Container,
  MenuItem,
  TextField,
  Typography,
  Zoom,
} from "@material-ui/core";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Fab, Grid } from "@mui/material";
//Editor
import CodexmakerApi from "../../../server/endpoints";

import { SaveRounded } from "@material-ui/icons";
import { useForm } from "../../../custom-hooks/useForm";
import { useDispatch } from "react-redux";
import { openSnackBar } from "../../../redux/actions/snackbar.actions";

// Components
import Editor from "../../../components/global/editor";
import BaseInputField from "../../../components/global/inputs/BaseInputField";

const CreatePost = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const createPost = async () => {
    console.log(formValues);
    //validate
    if (
      !formValues.title ||
      !formValues.subtitle ||
      !formValues.description ||
      !formValues.category ||
      !content ||
      !image.target.files[0] ||
      !time._d
    ) {
      dispatch(
        openSnackBar({
          status: true,
          type: "success",
          message: "Completa los campos",
        })
      );
      return;
    }
    const data = new FormData();

    data.append("file", image.target.files[0]);
    data.append("upload_preset", "codexmaker_blog");
    data.append("cloud_name", "codexmaker");

    let cloudinaryResponse = "";
    try {
      cloudinaryResponse = await Axios.post(
        "https://api.cloudinary.com/v1_1/codexmaker/image/upload",
        data
      );
    } catch (error) {
      return console.warn("Error on file upload boss", error);
    }

    const body = {
      title: formValues.title,
      subtitle: formValues.subtitle,
      description: formValues.description,
      content: content,
      categoryId: formValues.category,
      cover: cloudinaryResponse.data.secure_url,
      ad: {
        unit: {
          type: formValues.ad,
          title: formValues.iframe_title,
          data: formValues.iframe_dataaa,
          src: formValues.iframe_src,
        },
      },
      created_at: time._d,
    };

    const res = await CodexmakerApi(
      "POST",
      "create-post",
      body,
      cookies.get("token")
    );

    if (res.status === "error") {
      dispatch(
        openSnackBar({
          status: true,
          type: "error",
          message: res.message,
        })
      );
    }

    if (res.status === "success") {
      dispatch(
        openSnackBar({
          status: true,
          type: "success",
          message: "Nuevo post creado",
        })
      );
      //   history.push("/adm/new-post");
    }
  };

  return (
    <div>
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab
          onClick={createPost}
          variant="extended"
          style={{
            margin: "0px",
            top: "auto",
            right: "20px",
            bottom: "20px",
            left: "auto",
            position: "fixed",
            zIndex: "9999",
          }}
        >
          <SaveRounded />
          Guardar
        </Fab>
      </Zoom>

      <Box pt={3} pb={3}>
        <BaseInputField
          type="text"
          placeholder="Product Name"
          label="Name"
          name="name"
        />
      </Box>

      <Editor
        name="description"
        onChange={(data) => {
          setData(data);
        }}
        editorLoaded={editorLoaded}
      />
    </div>
  );
};

export default CreatePost;
