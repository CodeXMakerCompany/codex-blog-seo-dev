import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Box, TextField, Zoom } from "@material-ui/core";
import { Fab, Grid } from "@mui/material";
import Cookies from "universal-cookie";
//Editor
import CodexmakerApi from "../../../server/endpoints";

import { SaveRounded } from "@material-ui/icons";
import { useForm } from "../../../custom-hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { openSnackBar } from "../../../redux/actions/snackbar.actions";

// Components
import Editor from "../../../components/global/editor";
import BaseInputField from "../../../components/global/inputs/BaseInputField";
import BaseSelectionInputField from "../../../components/global/inputs/BaseOptionSelectionInput";
import BaseDatePicker from "../../../components/global/inputs/BaseDatePicker";


const adsTypes = [{ name: "iframe" }, { name: "popup" }, { name: "floating" }];

const cookies = new Cookies();

const CreatePost = () => {
  const [content, setContent] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [image, setImage] = useState(false);
  const [time, setTime] = useState(false);

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleFileChange = (evt) => {
    setImage(evt);
  };

  const handleTimeChange = (evt) => {
    setTime(evt);
  };

  const [formValues, handleInputChange] = useForm({});

  const createPost = async () => {
    const targetCategory = categories.filter(
      (c) => c.name === formValues.category
    )[0];
    if (
      !formValues.title ||
      !formValues.subtitle ||
      !formValues.description ||
      !formValues.category ||
      !content ||
      !image?.target?.files[0] ||
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
      console.log(cloudinaryResponse);
    } catch (error) {
      return console.warn("Error on file upload boss", error);
    }

    const body = {
      title: formValues.title,
      subtitle: formValues.subtitle,
      description: formValues.description,
      content: content,
      categoryId: targetCategory._id,
      cover: cloudinaryResponse.data.secure_url,
      ad: {
        unit: {
          type: formValues.ads,
          title: formValues.iframe_title,
          data: formValues.iframe_dataaa,
          src: formValues.iframe_src,
        },
      },
      created_at: time._d,
    };

    dispatch(
      openSnackBar({
        status: true,
        type: "success",
        message: "Creando post, espera por favor ⏲",
      })
    );

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
          message: "Nuevo post creado 🌟",
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

      <Box pt={3} pb={3} align="center">
        <BaseInputField
          type="text"
          width="60%"
          placeholder="Como me llamo ?"
          label="title"
          name="title"
          onChange={handleInputChange}
        />

        <BaseInputField
          type="text"
          width="60%"
          placeholder="Ponme algo interesante"
          label="subtitle"
          name="subtitle"
          onChange={handleInputChange}
        />

        <BaseInputField
          type="text-area"
          multiline={true}
          width="60%"
          placeholder="Se esta poniendo bueno !"
          label="description"
          name="description"
          onChange={handleInputChange}
        />
        <Grid container maxWidth="md">
          <Grid item xs={6}>
            <TextField
              accept="image/jpeg"
              id="faceImage"
              type="file"
              variant="outlined"
              name="image"
              onChange={handleFileChange}
            />
          </Grid>
          <Grid item xs={6}>
            <BaseSelectionInputField
              id="01-option-selection"
              value={formValues?.category || ""}
              values={categories}
              variant="outlined"
              name="category"
              width="60%"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
        <Grid container maxWidth="md">
          <Grid item xs={6}>
            <BaseDatePicker
              name="date_picker"
              onChange={handleTimeChange}
              width="80%"
            />
          </Grid>
          <Grid item xs={6}>
            <BaseSelectionInputField
              id="02-option-selection"
              value={formValues?.ads || ""}
              values={adsTypes}
              variant="outlined"
              name="ads"
              width="60%"
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>

        {formValues.ads === "iframe" ? (
          <div>
            <BaseInputField
              type="text-area"
              width="60%"
              placeholder="Titulo del iframe !"
              label="Iframe title"
              name="iframe_title"
              onChange={handleInputChange}
            />

            <BaseInputField
              type="text-area"
              width="60%"
              placeholder="Iframe data !"
              label="Iframe data"
              name="iframe_dataaa"
              onChange={handleInputChange}
            />

            <BaseInputField
              type="text-area"
              width="60%"
              placeholder="SRC del iframe !"
              label="Iframe src"
              name="iframe_src"
              onChange={handleInputChange}
            />
          </div>
        ) : (
          ""
        )}
      </Box>

      <Editor
        name="description"
        onChange={(data) => {
          setContent(data);
        }}
        editorLoaded={editorLoaded}
      />
    </div>
  );
};

export default CreatePost;
