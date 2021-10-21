import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsByPagination } from "../../redux/actions/posts.action";
//Components
import BaseTable from "../../components/global/table";
import { Container } from "@mui/material";

const headCells = [
  {
    id: "title",
    numeric: false,
    disablePadding: true,
    label: "Titulo",
  },
  {
    id: "subtitle",
    numeric: false,
    disablePadding: true,
    label: "Subtitulo",
  },
  {
    id: "views",
    numeric: true,
    disablePadding: true,
    label: "Popularity",
  },
  {
    id: "created_at",
    numeric: false,
    disablePadding: true,
    label: "Fecha de creación",
  },
  {
    id: "_id",
    numeric: false,
    disablePadding: true,
    label: "Borrar",
  },
];

const AdminDash = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  
  useEffect(() => {
    dispatch(fetchPostsByPagination(0, 10));
  }, []);

  return (
    <Container style={{ paddingTop: "2rem" }}>
      {posts?.docs?.length ? (
        <BaseTable header={headCells} rows={posts?.docs} />
      ) : (
        ""
      )}
    </Container>
  );
};

export default AdminDash;
